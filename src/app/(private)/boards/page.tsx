/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import React, { useState } from 'react'
import MenuTrello from './_component/menu';
import Image from 'next/image';
import { images } from '../../../../public';
import { Avatar, Button, Form, Input, Layout, Menu, Modal, Select, Space, Tooltip } from 'antd'
import { AlignCenterOutlined, AntDesignOutlined, ApiOutlined, DownOutlined, EllipsisOutlined, PlusOutlined, SearchOutlined, StarOutlined, SunOutlined, TeamOutlined, UploadOutlined, UsergroupAddOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"

import { Notification } from '@/component/notification';
import { AvatarUser } from '@/component/avatar';
import { Option } from 'antd/es/mentions';
import "./boards.scss"
import { Column } from '@/component/column';
import { AddColumnToBoard } from './_component/add-column-to-boards';
import { HeaderBoard } from './_component/header';


const { Content, Sider } = Layout;

const Boards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
      key: String(index + 1),
      icon: React.createElement(icon),
      label: `nav ${index + 1}`,
    }),
  );


  const showModalShare = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <div style={{ height: "100vh !important", width: "100%" }}>
      <MenuTrello />
      <Layout style={{
        height: " calc( 100vh - 70px)"
      }}>
        <Sider
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

          <HeaderBoard showModalShare={showModalShare} />
          <Content >
            <div
              style={{
                padding: 24,
                background: "blue",
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
