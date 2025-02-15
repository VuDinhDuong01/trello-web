"use client"

import { Routes } from '@/constant/Routes';
import { user } from '@/lib/redux/features/user/userSlice';
import { useAppDispatch } from '@/lib/redux/hook';
import { RootState } from '@/lib/redux/store';
import { IUser } from '@/types/auth.types';
import { getMe, logout } from '@/Utils/api/callApi/user';
import { localStorageData } from '@/Utils/local-storage';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Avatar, Button, notification, Popover, Space, message } from 'antd'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export const AvatarUser = () => {
  const dispatch = useAppDispatch();
  const router = useRouter()
  const refresh_token = localStorageData.getTokenToLS("refresh_token") as string
  const { data } = useQuery({
    queryKey: ["getMe"],
    queryFn: () => getMe(),
  });

  const logoutMutation = useMutation({
    mutationFn: (body: { refresh_token: string }) => logout(body),
    onSuccess: () => {
      router.push(Routes.LOGIN)
      message.success("logout successfully!")
      dispatch(user(null))
    },
    onError: (error: any) => {
      notification.error({
        message: error.message,
        duration: 2,
      });
    }
  })

  useEffect(() => {
    dispatch(user(data?.data))
  }, [data])
  const userInfo: IUser = useSelector((state: RootState) => state.user)

  const handleLogout = async () => {
    await logoutMutation.mutateAsync({ refresh_token })
  }
  const content = (
    <div
      style={{
        width: "300px",
        margin: 0,
        padding: 0, // Xóa padding/margin tổng thể
      }}
    >
      <Space
        style={{
          fontSize: "15px",
          fontWeight: 600,
          margin: 0, // Xóa margin của Space
          padding: 0, // Xóa padding của Space
        }}
      >
        Tài khoản
      </Space>
      <div
        style={{
          padding: "10px 0", // Giảm padding nếu cần
          display: "flex",
          alignItems: "center",
        }}
      >
        {
          userInfo?.avatar ? <Image alt='' src={userInfo?.avatar} width={40} height={40} />
            : <Avatar style={{ backgroundColor: '#87d068' }} icon="user" size={30} />
        }
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            paddingLeft: "10px",
            lineHeight: "15px",
          }}
        >
          <Space
            style={{
              fontSize: "14px",
              fontWeight: 600,
              margin: 0,
              padding: 0,
            }}
          >
            {userInfo?.username}
          </Space>
          <Space style={{ margin: 0, padding: 0 }}>{userInfo?.email}</Space>
        </div>
      </div>
      <Space
        style={{
          width: "100%",
          background: "red",
          padding: "10px 0",
          margin: 0,
          fontSize: "14px"
        }}
      >
        Chuyển đổi tài khoản

      </Space>
      <Space
        style={{
          width: "100%",
          background: "red",
          padding: "10px 0",
          margin: 0,
          fontSize: "14px"
        }}
      >
        Quản lý tài khoản

      </Space>
      <div style={{
        margin: "10px 0",
        width: "100%",
        height: "2px",
        background: "black"
      }}></div>
      <Space
        style={{
          fontSize: "15px",
          fontWeight: 600,
          margin: 0, // Xóa margin của Space
          padding: 0, // Xóa padding của Space
        }}
      >
        Trello
      </Space>
      <div style={{
        margin: "10px 0",
        width: "100%",
        height: "2px",
        background: "black"
      }}></div>

      <Button style={{
        width: "100%"
      }} onClick={handleLogout}> Đăng xuất</Button>


    </div>
  );
  return (
    <Popover placement="bottomRight" content={content} trigger={['click']}>
      <Avatar style={{ backgroundColor: "red", verticalAlign: 'middle', cursor: "pointer", marginLeft: "20px" }} size="large" >
        user
      </Avatar>
    </Popover>

  )
}
