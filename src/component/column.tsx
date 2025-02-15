"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input, Space } from 'antd'
import React, { useRef, useState } from 'react'

import { CloseOutlined, PlusOutlined } from '@ant-design/icons'

import "./column.scss"
import AddCardOrAddColumn from './add-card-or-column'

const { TextArea } = Input;
export const Column = () => {
    const inputRef = useRef(null)
    const [valueAddCard, setValueAddCard] = useState("")
    const [isAddCard, setIsAddCard] = useState<boolean>(false)

    const handleAddCard = () => {
        setIsAddCard(true)
        setTimeout(() => {
            if (inputRef?.current) {
                (inputRef?.current as any)?.focus();
            }
        }, 0);
    }

    const handleCancelCard = () => setIsAddCard(false)

    const handleAddCartToColumn = () => {
        if (valueAddCard !== "") {
            setIsAddCard(false)
        }

    }
    return (
        <div style={{
            width: "270px",
            borderRadius: "10px",
            background: "white",
            display: "flex",
            marginRight: "15px",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
        }}>
            <Space style={{
                fontSize: "17px",
                fontWeight: 600,
                padding: "10px",

                width: "100%",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",

            }}>Dev - Doing</Space>
            <div style={{
                width: "270px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                overflowY: "auto",
                maxHeight: "72vh"
            }} className='customScrollbar'>
                {
                    isAddCard && <TextArea
                        rows={10}
                        ref={inputRef}
                        placeholder="Nhập tiêu đề hoặc dán liên kết."
                        onChange={(e) => setValueAddCard(e.target.value)}
                        style={{
                            width: "100%",
                            height: "40px",
                            resize: "none"
                        }}
                    />

                }

            </div>

            {
                !isAddCard && <Button type='text' style={{
                    display: "flex", marginTop: "-10px",
                    alignItems: "center", justifyContent: "flex-start",
                    width: "100%", borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px", height: "50px"
                }} onClick={handleAddCard}>
                    <PlusOutlined style={{
                        fontSize: "15px",
                        padding: "10px 0"
                    }} /><Space style={{ fontSize: "15px", fontWeight: 600 }}>Thêm mới</Space>
                </Button>
            }
            <AddCardOrAddColumn text="Thêm thẻ" isAdd={isAddCard} handleAdd={handleAddCartToColumn} handleCancel={handleCancelCard} />
        </div>
    )
}
