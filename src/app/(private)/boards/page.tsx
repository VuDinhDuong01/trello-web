/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import React, { useState } from 'react'
import MenuTrello from './_component/menu';
import Image from 'next/image';
import { images } from '../../../../public';
import { Avatar, Button, Form, Input, Layout, Menu, Modal, Select, Space, Tooltip } from 'antd'
import { AlignCenterOutlined, AntDesignOutlined, ApiOutlined, DownOutlined, EllipsisOutlined, SearchOutlined, StarOutlined, SunOutlined, TeamOutlined, UploadOutlined, UsergroupAddOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"

import { Notification } from '@/component/notification';
import { AvatarUser } from '@/component/avatar';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { Option } from 'antd/es/mentions';
import "./boards.scss"
import { Column } from '@/component/column';

const { Header, Content, Sider } = Layout;

const Boards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
      key: String(index + 1),
      icon: React.createElement(icon),
      label: `nav ${index + 1}`,
    }),
  );
  const [widthSearch, setWidthSearch] = useState<number>(250)
  const handleFocusInput = () => {
    setWidthSearch(500)
  }

  const user = useSelector((state: RootState) => state.user)


  const showModalShare = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ height: "100vh !important", width: "100%" }}>
      <div style={{
        padding: "0 30px",
        display: "flex",

        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image alt="" src={images.logoTrello} width={80} height={50} />
          <MenuTrello />
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"

        }}>
          <Input size="large" placeholder="Tìm kiếm" prefix={<SearchOutlined />} style={{ width: `${widthSearch}px`, marginRight: "20px" }} onFocus={handleFocusInput} />
          <Notification />
          <AvatarUser />

        </div>
      </div>
      <Layout style={{
        height: " calc( 100vh - 70px)"
      }}>
        <Sider
          // breakpoint="lg"
          // collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout >
          <Header style={{ padding: "0 20px", background: "red", display: "flex", alignItems: "center", justifyContent: "space-between" }} >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Space style={{
                color: "white",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer"
              }}>NGUYEN KIM</Space>
              <StarOutlined style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "white",
                margin: "0 20px",
                cursor: "pointer"
              }} />
              <Button>
                <TeamOutlined />
                <Space>Hiển thị trong không gian làm việc</Space>
              </Button>
              <Button style={{
                margin: "0 20px"
              }}>
                <SunOutlined />
                <Space>Bảng</Space>
              </Button>
              <Button>
                <DownOutlined />
              </Button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button style={{ display: "flex", alignItems: "center" }}>
                <AlignCenterOutlined />
                <Space  >Bộ lọc</Space>

              </Button>
              <Avatar.Group
                style={{
                  margin: "0 25px"
                }}
                size="large"
                max={{
                  count: 4,
                  style: { color: '#f56a00', backgroundColor: '#fde3cf', width: "20px", height: "20px" },
                }}
              >
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" style={{ backgroundColor: '#f56a00', width: "30px", height: "30px" }} />
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" style={{ backgroundColor: '#f56a00', width: "30px", height: "30px" }} />
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" style={{ backgroundColor: '#f56a00', width: "30px", height: "30px" }} />
                <Avatar style={{ backgroundColor: '#f56a00', width: "30px", height: "30px" }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar style={{ backgroundColor: '#f56a00', width: "30px", height: "30px" }} icon={<UserOutlined />} />
                </Tooltip>
                <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
              </Avatar.Group>
              <Button type="primary" style={{
                marginRight: "25px",
                fontSize: "14px",
                fontWeight: 600
              }}
                onClick={showModalShare}
              >
                <UsergroupAddOutlined />
                <Space>Chia sẻ</Space>
              </Button>
              <EllipsisOutlined style={{
                fontSize: "30px",
                color: "white"
              }} />
            </div>

          </Header>
          <Content >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: "blue",
                borderRadius: "black",
                display:"flex", alignItems:"center",
                overflow:"hidden",
                overflowX:"scroll"
              }}
            >
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
    
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
      <Modal title="Chia sẻ bảng" open={isModalOpen} onClose={handleCancel} onCancel={handleCancel} footer={null} style={{ maxWidth: "700px" }}>
        <Form style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          height: "50px",
          margin: "20px 0"
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
          overflow:"hidden",
          overflowY:"auto"
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
