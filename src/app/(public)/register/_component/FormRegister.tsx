'use client'
import Image from 'next/image'
import React from 'react'
import { images } from '../../../../../public'
import { Button, Form, Input, Space } from 'antd'
import Link from 'next/link'
import { Routes } from '@/constant/Routes'

export const FormRegister = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (e: any) => {
        console.log(e)
    }
    return (<div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",

    }}>
        <div style={{
            width: "400px",
            background: "white",
            boxShadow: "0px 4px 10px #d1dae3",
            maxHeight: "720px",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "center"
        }}>

            <Image width={150} height={70} src={images.logoTrello} alt='' style={{ padding: "15px 0px" }} />
            <Space style={{
                fontSize: "22px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                fontWeight: 600
            }}>Đăng ký để tiếp tục</Space>
            <Form
                name="basic"
                style={{ marginTop: "30px" }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input style={{
                        width: "90%",
                        height: "40px"
                    }} />
                </Form.Item>
                <Form.Item label={null}>
                    <Button htmlType="submit" style={{
                        width: "90%",
                        fontSize: "17px",
                        fontWeight: 600,
                        height: "40px"
                    }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Space style={{fontSize:"13px", width:"80%"}}>Bằng việc đăng ký, tôi chấp nhận Điều khoản dịch vụ của Atlassian Cloud và công nhận Chính sách quyền riêng tư.</Space>
            <Space style={{fontSize:"20px", color:"rgb(94,108,132)", margin:"30px 0"}}>Hoặc tiếp tục với:</Space>
            <Button style={{
                width:"90%",
                height:"50px",
                marginBottom:"20px"
            }}>
                <Space><Image src={images.google} height={30} width={40} alt='' /></Space>
                <Space style={{fontSize:"20px"}}>Google</Space>
            </Button>
            <Button style={{
                width:"90%",
                height:"50px",
                marginBottom:"20px"
            }}>
                <Space><Image src={images.facebook} height={30} width={40} alt='' /></Space>
                <Space style={{fontSize:"20px"}}>Facebook</Space>
            </Button>
            <Button style={{
                width:"90%",
                height:"50px",
                marginBottom:"20px"
            }}>
                <Space><Image src={images.github} height={30} width={40} alt='' /></Space>
                <Space style={{fontSize:"20px"}}>Github</Space>
            </Button>
            <Space style={{margin:"20px 40px"}}><Link href={Routes.LOGIN} style={{fontSize:"15px"}}>Bạn đã có tài khoản Atlassian? Đăng nhập</Link></Space>
        </div>
    </div>

    )
}
