import { AlignCenterOutlined, AntDesignOutlined, DownOutlined, EllipsisOutlined, StarOutlined, SunOutlined, TeamOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Space, Tooltip, Layout } from 'antd'
import React from 'react'
const { Header } = Layout;

interface IHeaderBoardProps {
    showModalShare: () => void
}
export const HeaderBoard = (props: IHeaderBoardProps) => {
    const { showModalShare } = props
    return (
        <Header style={{ padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", background:"transparent" }} >
            <div style={{ display: "flex", alignItems: "center" }}>
                <Space style={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer"
                }}>NGUYEN KIM</Space>
                <StarOutlined style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "white",
                    margin: "0 20px",
                    cursor: "pointer"
                }} />
                <Button>
                    <TeamOutlined />
                    <Space>Hiển thị trong không gian làm việc</Space>
                </Button>
                <Button style={{
                    margin: "0 20px"
                }}>
                    <SunOutlined />
                    <Space>Bảng</Space>
                </Button>
                <Button>
                    <DownOutlined />
                </Button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Button style={{ display: "flex", alignItems: "center" }}>
                    <AlignCenterOutlined />
                    <Space  >Bộ lọc</Space>

                </Button>
                <Avatar.Group
                    style={{
                        margin: "0 25px"
                    }}
                    size="large"
                    max={{
                        count: 4,
                        style: { color: '#f56a00', backgroundColor: '#fde3cf', width: "20px", height: "20px" },
                    }}
                >
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" style={{ backgroundColor: '#f56a00', width: "30px", height: "30px" }} />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" style={{ backgroundColor: '#f56a00', width: "30px", height: "30px" }} />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" style={{ backgroundColor: '#f56a00', width: "30px", height: "30px" }} />
                    <Avatar style={{ backgroundColor: '#f56a00', width: "30px", height: "30px" }}>K</Avatar>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar style={{ backgroundColor: '#f56a00', width: "30px", height: "30px" }} icon={<UserOutlined />} />
                    </Tooltip>
                    <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                </Avatar.Group>
                <Button type="primary" style={{
                    marginRight: "25px",
                    fontSize: "14px",
                    fontWeight: 600
                }}
                    onClick={showModalShare}
                >
                    <UsergroupAddOutlined />
                    <Space>Chia sẻ</Space>
                </Button>
                <EllipsisOutlined style={{
                    fontSize: "30px",
                    color: "white"
                }} />
            </div>

        </Header>
    )
}
