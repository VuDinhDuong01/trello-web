"use client"
import { BellOutlined, CheckOutlined, CloseOutlined, MoreOutlined } from '@ant-design/icons'
import { Avatar, Badge, Popover, Select, Space, Switch } from 'antd'
import { Option } from 'antd/es/mentions'
import React from 'react'

export const Notification = () => {

  const contentSettingNotification = (
    <div style={{

      width: "300px"
    }}>

      <Space style={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        fontSize:"14px",
        alignItems: "center",
        justifyContent:"center"
      }}><div>Cài đặt thông báo</div></Space>
      <Space style={{
        fontSize: "16px",
        fontWeight: 600,
        margin: "10px 0"
      }}>Tần số thông báo qua email</Space>
      <Select defaultValue="Định kỳ" style={{  flexDirection: "column", width: "100%" }} >
        <Option value="Không bao giờ">Không bao giờ</Option>
        <Option value="Ngay lập tức">Ngay lập tức</Option>
        <Option value="Định kỳ">Định kỳ</Option>
      </Select>
      <Space style={{

        margin: "10px 0"
      }}>Cho phép thông báo trên Desktop</Space>
      <Space style={{

        margin: "10px 0"
      }}>Tất cả cài đặt thông báo</Space>
    </div>
  )
  const content = (
    <div
      style={{
        width: "450px",

      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0" }}>
        <Space
          style={{
            fontSize: "15px",
            fontWeight: 600,
            margin: 0, // Xóa margin của Space
            padding: 0, // Xóa padding của Space
          }}
        >
          Thông báo
        </Space>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />
          <Popover placement="bottomRight" content={contentSettingNotification} trigger={['click']}><MoreOutlined style={{ fontSize: "20px", marginLeft: "10px" }} /></Popover>

        </div>
      </div>
      <div style={{
        margin: "10px 0",
        width: "100%",
        height: "2px",
        background: "black"
      }}></div>
      <div
        style={{
          padding: "10px 0", // Giảm padding nếu cần
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            padding: 0,
            lineHeight: "15px",
          }}
        >
          <Space
            style={{
              fontSize: "14px",
              fontWeight: 600,
              margin: 0,
              padding: 0,
            }}
          >
            Ngọc Dương
          </Space>
          <Space style={{ margin: 0, padding: 0 }}>@ngocduong</Space>
        </div>
      </div>
      <Space
        style={{
          width: "100%",
          background: "red",
          padding: "10px 0",
          margin: 0,
          fontSize: "14px"
        }}
      >
        Chuyển đổi tài khoản

      </Space>
      <Space
        style={{
          width: "100%",
          background: "red",
          padding: "10px 0",
          margin: 0,
          fontSize: "14px"
        }}
      >
        Quản lý tài khoản

      </Space>
      <div style={{
        margin: "10px 0",
        width: "100%",
        height: "2px",
        background: "black"
      }}></div>
      <Space
        style={{
          fontSize: "15px",
          fontWeight: 600,
          margin: 0, // Xóa margin của Space
          padding: 0, // Xóa padding của Space
        }}
      >
        Trello
      </Space>
    </div>
  );
  return (
    <Popover placement="bottomRight" content={content} trigger={['click']}>
      <Badge count={5} >
        <BellOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      </Badge>
    </Popover>

  )

}
