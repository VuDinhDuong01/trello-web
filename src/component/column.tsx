import { Space } from 'antd'
import React from 'react'
import { Card } from './card'
import { PlusOutlined } from '@ant-design/icons'

export const Column = () => {
    return (
        <div style={{
            width: "270px",
            borderRadius: "10px",
            background: "white",
            position: "relative",
        }}>
            <Space style={{
                fontSize: "17px",
                fontWeight: 600,
                padding: "10px 6px",
                background: "red",
                width: "100%",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                position:"fixed",
                top:0
            }}>Dev - Doing</Space>
            <Card />
            <div style={{ display: "flex", alignItems: "center", background: "red", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", position:"fixed", bottom:0 }}> <PlusOutlined style={{
                fontSize: "15px",
                padding: "10px 10px"
            }} /><Space style={{ fontSize: "15px", fontWeight: 600 }}>Thêm mới</Space></div>

        </div>
    )
}
