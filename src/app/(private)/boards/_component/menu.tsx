"use client"
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Các không gian làm việc",
    key: "mail1",
    icon: <MailOutlined />,
  },
  {
    label: "Các không gian làm việc",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Gần đây",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Đã đánh dấu sao",
    key: "SubMenu1",
    icon: <SettingOutlined />,
  },
  {
    label: "Mẫu",
    key: "SubMenu11",
    icon: <SettingOutlined />,
  },
  {
    label: "Tạo mới",
    key: "SubMenu",
    icon: <SettingOutlined />,
  },
];

const MenuTrello: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{
          height:"70px", 
          alignItems:"center"
        }}
      />
    </div>
  );
};

export default MenuTrello;