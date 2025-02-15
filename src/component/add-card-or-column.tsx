

import { CloseOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

interface IProps {
    text: string
    isAdd: boolean,
    handleAdd: () => void
    handleCancel: () => void
}
 const AddCardOrAddColumn = (props: IProps) => {
    const { text, isAdd, handleAdd, handleCancel } = props
    return (
        <>
            {
                isAdd && <div style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "10px 0"
                }}>
                    <Button type='primary' style={{
                        margin: "0 10px 0  10px"
                    }} onClick={handleAdd}>{text}</Button>
                    <CloseOutlined style={{
                        fontSize: "15px",
                        cursor: "pointer"
                    }} onClick={handleCancel} />
                </div>
            }
        </>
    )
}

export default AddCardOrAddColumn
