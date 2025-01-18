
import Image from 'next/image'
import React, { useState } from 'react'
import { images } from '../../public'
import { Avatar, Space } from 'antd'
import { AlignLeftOutlined, ApiOutlined, CommentOutlined, EyeOutlined } from '@ant-design/icons'
import { DetailCard } from './detail-card'

export const Card = () => {
  const [open, setOpen] = useState(false);

  const handleShowDetailCard=()=>{
    setOpen(true);
  }
  const handleCancel=()=> setOpen(false)
  return (
    <div onClick={handleShowDetailCard} style={{
      width: "100%",
      cursor: "pointer",
      marginBottom: "10px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column",
      borderRadius: "8px",
      background: "#F56A00",
    }}>
      <Image alt='' src={images.trelloUI} style={{
        width: "100%",
        maxHeight: "150px"
      }} />
      <div style={{ padding: "0px 10px" }}>
        <Space style={{
          fontSize: "15px",
          fontWeight: 600
        }}>BUG-NGOCDUONG-293894839</Space>
        <Space style={{
          fontSize: "14px",
          margin: "10px 0",
        }}>Lỗi thông báo thỏa mãn S37 mặc dù hệ thống báo lỗi Vi phạm thời gian giữa 2 lần sử dụng dịch vụ</Space>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"

        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            fontSize: "15px"

          }}>
            <EyeOutlined />
            <AlignLeftOutlined style={{ margin: "0 10px 0 10px" }} />
            <div style={{
              display: "flex",
              alignItems: "center",
              fontSize: "15px"

            }}>
              <CommentOutlined style={{ marginRight: "5px" }} />
              <Space>2</Space>
            </div>
            <div>
              <ApiOutlined style={{ margin: "0 5px 0 10px" }} />
              <Space>2</Space>
            </div>

          </div>
          {/* <div style={{
            display: "flex",
            alignItems: "center",
            fontSize: "15px"
          }}>
            <Avatar />
            <Avatar style={{ margin: "0 10px" }} />
            <Avatar />

          </div> */}
        </div>
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent:"flex-end",
            margin:"5px 0"
          }}>
            <Avatar />
            <Avatar style={{ margin: "0 10px" }} />
            <Avatar />

          </div>
      </div>
      <DetailCard open={open} handleCancel={handleCancel} />
    </div>
  )
}
