"use client"
import React, { useState } from "react";
import {
  DownOutlined,

  TeamOutlined,

} from "@ant-design/icons";

import { Avatar, Button, Input, Menu, Space, Tooltip } from "antd";
import { Header } from "antd/es/layout/layout";
import { AvatarUser } from "@/component/avatar";
import Image from "next/image";
import { images } from "../../../../../public";
import { Notification } from "@/component/notification";
import { Search } from "./search";
import './boards.scss'


const MenuTrello: React.FC = () => {

  return (
    <div style={{
      padding: "0 30px",
      display: "flex",
      background: "blue",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image alt="" src={images.logoTrello} width={80} height={50} />
        <Header style={{ padding: "0 20px", background: "blue", display: "flex", alignItems: "center", justifyContent: "space-between" }} >
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
              color:"white"
            }} type="text" className="custom-btn">

              <Space>Gần đây</Space>
              <DownOutlined />
            </Button>
            <Button type="text" style={{
              margin: "0 20px 0 0",
              color:"white"
            }} className="custom-btn">
              <Space>Đã đánh dấu sao</Space>
              <DownOutlined />
            </Button>
            <Button style={{
              margin: "0 20px 0 0",
              color:"white"
            }} type="text" className="custom-btn">
              <Space>Mẫu</Space>
              <DownOutlined />
            </Button>
            <Button style={{
              margin: "0 20px 0 0"
            }}>

              <Space>Tạo mới</Space>

            </Button>
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