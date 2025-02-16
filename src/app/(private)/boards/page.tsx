/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import React, { useState } from 'react'
import MenuTrello from './_component/menu';
import { Avatar, Button, Form, Input, Layout, Menu, Modal, Select, Space, Tooltip } from 'antd'
import { ApiOutlined } from "@ant-design/icons"

import { Option } from 'antd/es/mentions';
import "./boards.scss"
import { Column } from '@/component/column';
import { AddColumnToBoard } from './_component/add-column-to-boards';
import { HeaderBoard } from './_component/header';
import { SliderComponent } from '@/component/slider';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { IBoard } from '@/types/boardTypes';
const { Content } = Layout;

const Boards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModalShare = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const boardOver = useSelector((state: RootState) => state.board)

  return (
    <div style={{
      height: "100vh !important", width: "100%",
      backgroundImage: `url(${(boardOver as IBoard)?.background})`,
      backgroundSize: "cover",
      backgroundPosition: "center"

    }}>
      <MenuTrello />
      <Layout style={{
        height: " calc( 100vh - 70px)"
      }}>
        <SliderComponent />
        <Layout >
          <HeaderBoard showModalShare={showModalShare} />
          <Content >
            <div
              style={{
                padding: 24,
              
                borderRadius: "black",
                display: "flex",
                overflow: "hidden",
                overflowX: "scroll"
              }}
            >
              <Column />
              <Column />
              <AddColumnToBoard />
            </div>
          </Content>
        </Layout>
      </Layout>
      <Modal title="Chia sẻ bảng" open={isModalOpen} onCancel={handleCancel} footer={null} style={{
        maxWidth: "700px", marginTop: "-50px"
      }}>
        <Form style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          height: "50px",
          padding: "20px 10px"
        }}>
          <Input
            placeholder="Nhập địa chi email hoặc tên"
          />
          <Select defaultValue="Thành viên" style={{ margin: "0 10px" }} >
            <Option value="Quản trị viên">Quản trị viên</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <Button type='primary' style={{ color: "white", fontWeight: 600 }}>Chia sẻ</Button>
        </Form>
        <div
          style={{
            overflow: "hidden",
            overflowY: "auto"
          }}
          className="customScrollbar">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button><ApiOutlined /></Button>
            <div style={{ display: "flex", flexDirection: "column", fontSize: "13px", marginLeft: "15px" }}>
              <Space>Chia sẻ bảng này bằng liên kết</Space>
              <Space style={{ fontSize: "11px" }}>Tạo liên kết</Space>
            </div>
          </div>
          <div style={{
            width: "100%",
            margin: "10px 0",
            background: "blue",
            borderRadius: "5px",
            height: "2px"
          }}></div>
          <div style={{
            padding: "20px 0",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              // flexDirection: "column"
            }}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
              <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", lineHeight: "15px" }}>
                <Space style={{ fontSize: "14px", fontWeight: 600 }}>Ngọc Dương</Space>
                <Space>@ngocduong . Khách không gian làm việc</Space>
              </div>
            </div>
            <Button>Thành viên</Button>
          </div>
          <div style={{
            padding: "20px 0",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              // flexDirection: "column"
            }}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
              <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", lineHeight: "15px" }}>
                <Space style={{ fontSize: "14px", fontWeight: 600 }}>Ngọc Dương</Space>
                <Space>@ngocduong . Khách không gian làm việc</Space>
              </div>
            </div>
            <Button>Thành viên</Button>
          </div>
          <div style={{
            padding: "20px 0",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              // flexDirection: "column"
            }}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
              <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", lineHeight: "15px" }}>
                <Space style={{ fontSize: "14px", fontWeight: 600 }}>Ngọc Dương</Space>
                <Space>@ngocduong . Khách không gian làm việc</Space>
              </div>
            </div>
            <Button>Thành viên</Button>
          </div>
          <div style={{
            padding: "20px 0",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              // flexDirection: "column"
            }}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
              <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", lineHeight: "15px" }}>
                <Space style={{ fontSize: "14px", fontWeight: 600 }}>Ngọc Dương</Space>
                <Space>@ngocduong . Khách không gian làm việc</Space>
              </div>
            </div>
            <Button>Thành viên</Button>
          </div>
          <div style={{
            padding: "20px 0",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              // flexDirection: "column"
            }}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
              <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", lineHeight: "15px" }}>
                <Space style={{ fontSize: "14px", fontWeight: 600 }}>Ngọc Dương</Space>
                <Space>@ngocduong . Khách không gian làm việc</Space>
              </div>
            </div>
            <Button>Thành viên</Button>
          </div>
          <div style={{
            padding: "20px 0",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              // flexDirection: "column"
            }}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
              <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", lineHeight: "15px" }}>
                <Space style={{ fontSize: "14px", fontWeight: 600 }}>Ngọc Dương</Space>
                <Space>@ngocduong . Khách không gian làm việc</Space>
              </div>
            </div>
            <Button>Thành viên</Button>
          </div>
        </div>
      </Modal>
    </div>


  )
}

export default Boards;
