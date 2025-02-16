import { Button, Layout, Space } from 'antd';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { images } from '../../public';
import { LeftOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { getAllBoard } from '@/Utils/api/callApi/board';
import { GenerateResposne } from '@/types/generateType';
import { IFilter } from '@/types/boardTypes';
import { useAppDispatch } from '@/lib/redux/hook';
import { board } from '@/lib/redux/features/user/boardSlice';
const { Sider } = Layout;
export const SliderComponent = () => {
  const [optionFilter, setOptionFilter] = useState({
    start: 0,
    limit: 10
  })

  const { data: getFilterBoard, isLoading } = useQuery({
    queryKey: ["getAllBoard", JSON.stringify(optionFilter)],
    queryFn: () => getAllBoard({
      ...optionFilter,
      conditions: []
    })
  })
  return (
    <Sider
      width={250}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{
        position: "relative",
        background:"#f0f2f5"
      }}
    >
      <div style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "15px 10px",
        color: "white",
        fontSize: "13px",
        fontWeight: 600,
        justifyContent: "space-between",
        borderBottom: "1px solid white",
        
      }}>
        <div style={{
          display: "flex",
          alignItems: "center"
        }}>
          <Image src={images.github} alt='' width={30} height={30} style={{
            marginRight: "5px",
            borderRadius: "4px"
          }} />
          <Space>PTF Development</Space>
        </div>
        <LeftOutlined />
      </div>
      <div style={{
        width: "100%",
        padding: "10px",
      }}>
        <Space style={{
          fontSize: "15px",
          fontWeight: 600,
          color: "white",
          marginBottom: "20px"
        }}>Các bảng của bạn</Space>
        <div>
          {
            (getFilterBoard as GenerateResposne<IFilter>)?.data?.record?.map((item, index) => {
              return <div key={index} style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                color: "white",
                paddingBottom: "15px",
                cursor: "pointer",
                background: "red"
              }}>
                <Image src={item?.background as string} alt='board' width={20} height={20} style={{
                  marginRight: "7px"
                }} />
                <Space>{item?.title}</Space>
              </div>
            })
          }
        </div>
      </div>
      <div style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}>
        <div style={{
          width: "95%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          padding: "10px 10px",
          flexDirection: "column",
          position: "absolute",
          bottom: 0,
          background: "#E9F2FF",
          borderRadius: "5px"

        }}>
          <Image alt='image' src={images.github} width={50} height={50} />
          <Space style={{
            fontSize: "15px",
            fontWeight: 600,
            textAlign: "center",
            margin: "10px 0"
          }}>Bạn là khách trong không gian làm việc này</Space>
          <Space style={{
            fontSize: "14px",
            textAlign: "center"
          }}>Để xem các bảng và thành viên khác trong Không gian làm việc này, quản trị viên phải thêm bạn làm thành viên Không gian làm việc.</Space>
          <Button type='primary' style={{
            fontSize: "14px",
            fontWeight: 600,
            margin: "5px 0"
          }}>Yêu cầu tham gia</Button>
        </div>
      </div>
    </Sider>
  )
}
