import { Space } from 'antd'
import React from 'react'
import { Card } from './card'
import { PlusOutlined } from '@ant-design/icons'
import "./column.scss"
export const Column = () => {
    return (
        <div style={{
            width: "270px",
            borderRadius: "10px",
            background: "white",
            display: "flex",
            marginRight:"15px",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
        }}>
            <Space style={{
                fontSize: "17px",
                fontWeight: 600,
                padding: "10px 6px",
                background: "red",
                width: "100%",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                marginBottom: "10px"
            }}>Dev - Doing</Space>
            <div style={{
                width: "270px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                overflowY: "auto",
                maxHeight:"70vh"
            }}  className='customScrollbar'>
                <Card />
                <Card />
                <Card />
                <Card />  <Card />
                <Card />
                <Card />
                <Card /> 
            </div>

            <div style={{ display: "flex", alignItems: "center", background: "red", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}> 
                <PlusOutlined style={{
                fontSize: "15px",
                padding: "15px 10px"
            }} /><Space style={{ fontSize: "15px", fontWeight: 600 }}>Thêm mới</Space></div>

        </div>
    )
}
