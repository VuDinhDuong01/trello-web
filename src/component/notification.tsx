"use client"
import { BellOutlined } from '@ant-design/icons'
import { Badge, Dropdown, MenuProps } from 'antd'
import React from 'react'

export const Notification = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];
    return (
        <Dropdown menu={{ items }} placement="bottomLeft" trigger={['click']} >
                  <Badge count={5} >
            <BellOutlined style={{ fontSize: "20px", cursor:"pointer" }} />
        </Badge>
        </Dropdown>

    )
}
