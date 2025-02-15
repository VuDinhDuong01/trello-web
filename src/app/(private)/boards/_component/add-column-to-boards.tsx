
import { CloseOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useRef, useState } from 'react'

export const AddColumnToBoard = () => {
    const inputRef = useRef<any>(null)
    const [isAddColumn, setIsAddColumn] = useState<boolean>(false)
    const [valueTitleColumn, setValueTitleColumn] = useState<String>("")
    const handleAddColumn = () => {
        setIsAddColumn(true)
        setTimeout(() => {
            if (inputRef?.current) {
                (inputRef?.current as any)?.focus();
            }
        }, 0);
    }
    const handleCancelColumn = () => {
        setIsAddColumn(false)
    }
    return (
        <>    {
            isAddColumn && <div style={{
                width: "270px",
                borderRadius: "10px",
                background: "white",
                display: "flex",
                marginRight: "15px",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center"
            }}>

                <div style={{
                    width: "270px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    overflowY: "auto",
                    maxHeight: "72vh"
                }} className='customScrollbar'>
                    <TextArea
                        rows={10}
                        ref={inputRef}
                        placeholder="Nhập tiêu đề hoặc dán liên kết."
                        onChange={(e) => setValueTitleColumn(e.target.value)}
                        style={{
                            width: "100%",
                            height: "40px",
                            resize: "none"
                        }}
                    />
                </div>
                {
                    <div style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",

                    }}>
                        <Button type='primary' style={{
                            margin: "0 10px 0  10px"
                        }} >Thêm danh sách</Button>
                        <CloseOutlined style={{
                            fontSize: "15px",
                            cursor: "pointer"
                        }} onClick={handleCancelColumn} />
                    </div>
                }

            </div>
        }
            {
                !isAddColumn && <Button onClick={handleAddColumn} style={{ width: "270px", marginLeft: "5px" }}> <PlusOutlined /><Space>Thêm danh sách khác</Space></Button>
            }</>
    )
}
