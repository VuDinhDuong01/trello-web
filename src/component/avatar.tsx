import { Avatar, Dropdown } from 'antd'
import { MenuProps } from 'antd/lib';
import React from 'react'

export const AvatarUser = () => {
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
              <Avatar style={{ backgroundColor: "red", verticalAlign: 'middle', cursor: "pointer", marginLeft: "20px" }} size="large" >
                user
              </Avatar>
            </Dropdown>
  )
}
