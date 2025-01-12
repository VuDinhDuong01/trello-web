/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import React, { useState } from 'react'
import MenuTrello from './_component/menu';
import Image from 'next/image';
import { images } from '../../../../public';
import { Input, Layout, Menu } from 'antd'
import { SearchOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"

import { Notification } from '@/component/notification';
import { AvatarUser } from '@/component/avatar';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';

const { Header, Content, Footer, Sider } = Layout;

const Boards = () => {
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

  const user = useSelector((state:RootState)=>state.user)
  console.log("user", user)

  return (
    <div style={{height :"100vh !important",width:"100%"}}>
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
          height:" calc( 100vh - 70px)"
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
          <Header style={{ padding: 0, background: "red" }} >
            adfadf
          </Header>
          <Content >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: "blue",
                borderRadius: "black",
              }}
            >
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>


  )
}

export default Boards;
