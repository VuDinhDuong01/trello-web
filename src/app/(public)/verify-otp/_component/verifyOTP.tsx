/* eslint-disable react-hooks/rules-of-hooks */

'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { images } from '../../../../../public';
import { Button, Space } from 'antd';
import OTPInput from 'react-otp-input';
import { Routes } from '@/constant/Routes';
import Link from 'next/link';

const FormVerifyToken = () => {
 const [otp, setOtp] = useState<string>("");
 
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
         maxHeight: "720px",
         borderRadius: "5px",
         alignItems: "center",
         justifyContent: "center",
         display: "flex",
         flexDirection: "column",
       }}
     >
       {" "}
       <Image
         width={150}
         height={70}
         src={images.logoTrello}
         alt=""
         style={{ padding: "15px 0px" }}
       />{" "}
       <Space
         style={{
           fontSize: "20px",
           textAlign: "center",
           display: "flex",
           justifyContent: "center",
           width: "80%",
           alignItems: "center",
           fontWeight: 600,
           marginBottom: "20px",
         }}
       >
         Chúng tôi đã gửi cho bạn một mã qua email
       </Space>
       <Space
         style={{
           fontSize: "13px",
           width: "80%",
           textAlign: "left",
         }}
       >
         Để hoàn tất quá trình thiết lập tài khoản, hãy nhập mã chúng tôi đã gửi
         đến:
       </Space>
       <Space
         style={{
           fontSize: "15px",
           textAlign: "left",
           width: "80%",
           marginTop: "20px",
           color: "rgb(60,60,146)",
         }}
       >
         duong6lophot@gmail.com
       </Space>
       <OTPInput
         value={otp as string}
         onChange={setOtp}
         numInputs={6}
         inputStyle={{
           width: "40px",
           height: "40px",
           fontSize: "18px",
           display: "flex",
           alignItems: "center",
           textAlign: "center",
           justifyContent: "center",
           margin: "20px 0",
           fontWeight: 500,
         }}
         renderSeparator={<span>-</span>}
         renderInput={(props) => <input {...props} />}
       />
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
         Xác minh
       </Button>
       <Space style={{ margin: "20px 40px" }}>
         <Link href={Routes.LOGIN} style={{ fontSize: "15px" }}>
           Bạn đã có tài khoản Atlassian? Đăng nhập
         </Link>
       </Space>
     </div>
   </div>
 );
}

export default FormVerifyToken;
