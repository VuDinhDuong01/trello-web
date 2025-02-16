"use client"
import React, { useState } from "react";
import {
  CheckOutlined,
  DownOutlined,
  EllipsisOutlined,
  TeamOutlined,

} from "@ant-design/icons";
import {
  ProForm,
  ProFormSelect,
  ProFormText,

} from '@ant-design/pro-components';
import { Button, Col, Form, message, Popover, Row, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { AvatarUser } from "@/component/avatar";
import Image from "next/image";
import { images } from "../../../../../public";
import { Notification } from "@/component/notification";
import { Search } from "./search";
import './boards.scss'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBoard } from "@/Utils/api/callApi/board";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { IBoard } from "@/types/boardTypes";
import { useAppDispatch } from "@/lib/redux/hook";
import { board } from "@/lib/redux/features/user/boardSlice";
import { IUser } from "@/types/auth.types";

const backgroundImages = [images.vietnam, images.vietnam, images.vietnam, images.vietnam];
const backgroundColors = ["https://trello.com/assets/a7c521b94eb153008f2d.svg"
  , "https://trello.com/assets/8ab3b35f3a786bb6cdac.svg",
  "https://trello.com/assets/d106776cb297f000b1f4.svg",
  "https://trello.com/assets/707f35bc691220846678.svg"
  , "https://trello.com/assets/13425f9db06517de0f7f.svg"] as string[]
const MenuTrello: React.FC = () => {
  const queryClient = useQueryClient()
  const userInfo: IUser = useSelector((state: RootState) => state.user)
  const [background, setBackground] = useState<any>(backgroundImages[0])
  const [form] = Form.useForm()

  const dispatch = useAppDispatch()
  const createBoardMutation = useMutation({
    mutationFn: (body: IBoard) => createBoard(body),
    onSuccess: (data) => {
      message.success("create board successfully.")
      queryClient.invalidateQueries({ queryKey: ['getAllBoard'] })
      form.resetFields()
      setBackground(backgroundImages[0])
      dispatch(board(data.data))
    },
    onError: () => {

    }
  })
  const handleBoard = async (value: any) => {
    const newPayload = { ...value, background, ownerIds: [(userInfo as IUser)?.id], memberIds: [], columnOrders: [], status: "Active" }
    await createBoardMutation.mutateAsync(newPayload)
  }
  const contentCreateBoard = (
    <ProForm
      form={form}
      style={{
        width: "250px"
      }}
      submitter={{
        render: (_, dom) => <Button style={{
          width: "100%",
        }} onClick={() => form.submit()} type="primary">Tạo mới</Button>,
      }}
      onFinish={handleBoard}
    >
      <Space style={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        fontSize: "16px",
        fontWeight: 600,
        alignItems: "center",
        justifyContent: "center"
      }}><div>Tạo bảng</div></Space>
      <div style={{
        position: "relative",
        width: "100%",
        marginTop: "10px"

      }}>
        <Image alt="image" src={background} width={250} height={120} />
        <div style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center"
        }}>
          <img src="https://trello.com/assets/14cda5dc635d1f13bc48.svg" alt="" />
        </div>
      </div>
      <Space style={{
        fontSize: "14px",
        fontWeight: 600,
        margin: "5px 0"
      }}>Phông nền</Space>
      <Row >
        {
          backgroundImages.map((item: any, index: number) => {
            return <Col key={index} span={6}>
              <Image onClick={() => setBackground(item)} src={item} alt="" height={40} style={{
                cursor: "pointer",
                borderRadius: "2px"
              }} />
              {
                background === item && <div style={{
                  width: "100%",
                  position: "absolute",
                  inset: 0,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}><CheckOutlined style={{
                  color: "white"
                }} /></div>
              }
            </Col>
          })
        }
        {
          backgroundColors?.map((item: any, index: number) => {
            return <>
              <Col key={index} span={4} style={{
                width: "100%",
                position: "relative"
              }}>
                <img src={item} onClick={() => setBackground(item)} alt="" width="38px" height={40} style={{
                  cursor: "pointer",
                  borderRadius: "4px",
                  objectFit: "cover",

                }} />
                {
                  background === item && <div style={{
                    width: "100%",
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}><CheckOutlined style={{
                    color: "white"
                  }} /></div>
                }
              </Col>

            </>
          })
        }
        <Col span={4}><Button style={{
          width: "40px",
          height: "40px"
        }}><EllipsisOutlined /></Button></Col>
      </Row>

      <ProFormText
        width="lg"
        name="title"
        placeholder="Nhập tiêu đề"
        label="Tiêu đề bảng"

        rules={[
          {
            required: true,
            message: "Không được bỏ trống"
          }
        ]}
      />
      <ProFormSelect
        placeholder="Không gian làm việc"
        // initialValue="Riêng tư"
        options={[
          {
            value: 'Riêng tư',
            label: <div style={{ whiteSpace: 'normal' }}>
              <Space style={{
                fontSize: "15px",
                fontWeight: 600
              }}>Riêng tư</Space>
              <Space>Chỉ thành viên bảng tin mới có quyền xem thông tin này.Quản trị viên của không gian làm việc có thể đóng bảng tin hoặc xóa thành viên.</Space>
            </div>
          },
          {
            value: 'Không gian làm việc',
            label: <div style={{ whiteSpace: 'normal' }}>
              <Space style={{
                fontSize: "15px",
                fontWeight: 600
              }}>Không gian làm việc</Space>
              <Space>Tất cả thành viên của không gian làm việc.Không gian làm việc của Ngọc Dương có thể xem sửa thông tin này</Space>
            </div>
          },
          {
            value: 'Công khai',
            label: <div style={{ whiteSpace: 'normal' }}>
              <Space style={{
                fontSize: "15px",
                fontWeight: 600
              }}>Công khai</Space>
              <Space>Bất kỳ ai trên mạng internet đều có thể xem bảng. Chỉ thành viên bảng thông tin mới có quyền sửa</Space>
            </div>
          },
        ]}
        width="lg"
        name="permissionViewer"
        label="Quyền xem"
      />

    </ProForm>
  )


  return (
    <div style={{
      padding: "0 30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image alt="" src={images.logoTrello} width={80} height={50} />
        <Header style={{ padding: "0 20px", display: "flex", background:"transparent", alignItems: "center", justifyContent: "space-between" }} >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button type="text" style={{
              margin: "0 20px 0 0",
              color: "white",

            }}
              className="custom-btn"
            >
              <TeamOutlined />
              <Space>Các không gian làm việc</Space>
              <DownOutlined />
            </Button>
            <Button style={{
              margin: "0 20px 0 0",
              color: "white"
            }} type="text" className="custom-btn">

              <Space>Gần đây</Space>
              <DownOutlined />
            </Button>
            <Button type="text" style={{
              margin: "0 20px 0 0",
              color: "white"
            }} className="custom-btn">
              <Space>Đã đánh dấu sao</Space>
              <DownOutlined />
            </Button>
            <Button style={{
              margin: "0 20px 0 0",
              color: "white"
            }} type="text" className="custom-btn">
              <Space>Mẫu</Space>
              <DownOutlined />
            </Button>
            <Popover placement="bottomRight" content={contentCreateBoard} trigger={['click']}> <Button style={{
              margin: "0 20px 0 0"
            }}>
              <Space>Tạo mới</Space>
            </Button></Popover>

          </div>


        </Header>
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

      }}>
        <Search />
        <Notification />
        <AvatarUser />

      </div>
    </div>
  );
};

export default MenuTrello;