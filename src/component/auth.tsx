import { Button, Form, FormProps, Input, Space } from "antd";
import React from "react";
import { images } from "../../public";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/constant/Routes";
import { usePathname } from "next/navigation";

const Auth = () => {
  const pathname = usePathname();
  const onFinish: FormProps["onFinish"] = (values) => {
    console.log("Success:", values);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "white",
          boxShadow: "0px 4px 10px #d1dae3",
          maxHeight: "750px",
          borderRadius: "5px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          width={150}
          height={70}
          src={images.logoTrello}
          alt=""
          style={{ padding: "15px 0px" }}
        />
        <Space
          style={{
            fontSize: "22px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            fontWeight: 600,
          }}
        >
          {pathname === Routes.VERIFY_EMAIL
            ? "Đăng ký để tiếp tục"
            : "Đăng nhập để tiếp tục"}
        </Space>
        <Form
          name="basic"
          style={{ marginTop: "30px" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {pathname !== Routes.REGISTER && (
            <Form.Item
              name="email"
             
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                style={{
                  width: "90%",
                  height: "40px",
                  textAlign: "left",
                }}
                placeholder="Nhập email của bạn"
              />
            </Form.Item>
          )}
          {pathname === Routes.REGISTER && (
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                style={{
                  width: "90%",
                  height: "40px",
                  textAlign: "left",
                }}
                placeholder="Nhập username của bạn"
              />
            </Form.Item>
          )}
          {(pathname === Routes.LOGIN || pathname === Routes.REGISTER) && (
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                placeholder="Nhập password của bạn"
                style={{
                  width: "90%",
                  height: "40px",
                  textAlign: "left",
                }}
              />
            </Form.Item>
          )}
          <Form.Item label={null}>
            <Button
              htmlType="submit"
              style={{
                width: "90%",
                fontSize: "17px",
                fontWeight: 600,
                height: "40px",
                background: "#0C66E4",
                color: "#fff",
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Space style={{ fontSize: "13px", width: "90%", lineHeight: "17px" }}>
          Bằng việc đăng ký, tôi chấp nhận Điều khoản dịch vụ của Atlassian
          Cloud và công nhận Chính sách quyền riêng tư.
        </Space>
        <Space
          style={{
            fontSize: "20px",
            color: "rgb(94,108,132)",
            margin: "30px 0",
          }}
        >
          Hoặc tiếp tục với:
        </Space>
        <Button
          style={{
            width: "90%",
            height: "50px",
            marginBottom: "20px",
          }}
        >
          <Space>
            <Image src={images.google} height={30} width={40} alt="" />
          </Space>
          <Space style={{ fontSize: "20px" }}>Google</Space>
        </Button>
        <Button
          style={{
            width: "90%",
            height: "50px",
            marginBottom: "20px",
          }}
        >
          <Space>
            <Image src={images.facebook} height={30} width={40} alt="" />
          </Space>
          <Space style={{ fontSize: "20px" }}>Facebook</Space>
        </Button>
        <Button
          style={{
            width: "90%",
            height: "50px",
            marginBottom: "20px",
          }}
        >
          <Space>
            <Image src={images.github} height={30} width={40} alt="" />
          </Space>
          <Space style={{ fontSize: "20px" }}>Github</Space>
        </Button>
        <Space style={{ margin: "20px 40px" }}>
          <Link
            href={
              pathname === Routes.LOGIN ? Routes.VERIFY_EMAIL : Routes.LOGIN
            }
            style={{ fontSize: "15px" }}
          >
            {pathname === Routes.VERIFY_EMAIL
              ? "Bạn đã có tài khoản Atlassian? Đăng nhập"
              : "Bạn không đăng nhập được? • Tạo tài khoản"}
          </Link>
        </Space>
      </div>
    </div>
  );
};

export default Auth;
