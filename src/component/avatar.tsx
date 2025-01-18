import { Avatar, Popover, Space } from 'antd'
import React from 'react'

export const AvatarUser = () => {

  const content = (
    <div
      style={{
        width: "300px",
        margin: 0,
        padding: 0, // Xóa padding/margin tổng thể
      }}
    >
      <Space
        style={{
          fontSize: "15px",
          fontWeight: 600,
          margin: 0, // Xóa margin của Space
          padding: 0, // Xóa padding của Space
        }}
      >
        Tài khoản
      </Space>
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
      <Avatar style={{ backgroundColor: "red", verticalAlign: 'middle', cursor: "pointer", marginLeft: "20px" }} size="large" >
        user
      </Avatar>
    </Popover>

  )
}
