import { Avatar, Button, Input, Modal, Space } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { images } from '../../public'


import { ApiOutlined, AppstoreAddOutlined, ArrowRightOutlined, BorderRightOutlined, CheckOutlined, CheckSquareOutlined, ClockCircleOutlined, ClusterOutlined, CopyOutlined, DisconnectOutlined, EllipsisOutlined, ExpandAltOutlined, EyeOutlined, FrownOutlined, FundOutlined, PicCenterOutlined, PlusOutlined, ShareAltOutlined, TagsOutlined, UnorderedListOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import { ReactQuillComponent } from './react-quill'
interface ICardProps {
    open: boolean,
    // handleOk:()=>void
    handleCancel: () => void
}
export const DetailCard = ({ open, handleCancel }: ICardProps) => {
    const [valueQuill, setValueQuill] = useState<string>("")
    const [isShowInputComment, setIsShowInputComment] = useState<boolean>(false)

    const handleFocusInput = () => {
        setIsShowInputComment(true)
    }

    return (
        <Modal
            open={open}
            onCancel={handleCancel}
            onClose={handleCancel}
            footer={null}
            width={770}
            style={{
                borderRadius: "10px",
                // padding:"0px",
                // margin:"0px"
            }}
            bodyStyle={{
                padding: "0",
                margin: "0" // Loại bỏ padding mặc định
            }}
        >
            <div style={{
                width: "100%",
                height: "163px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "white"
            }}>
                <Image alt='' src={images.trelloUI} width={300} height={163} />
            </div>
            <div style={{
                background: "#F1F2F4"
            }}>

                <div style={{
                    display: "flex",
                    padding: "20px 0"
                }}>
                    <div>
                        <FundOutlined style={{
                            fontSize: "17px",
                            marginRight: "15px"
                        }} />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <strong style={{
                            fontSize: "17px"
                        }}>BUG-TUOITT-240724001 (Merchant)  Lỗi hiển thị button Cập nhật mặc dù off quyền</strong>
                        <Space>trong danh sách <strong>SIT - TESTING DONE</strong></Space>
                    </div>

                </div>
                <div style={{
                    width: "100%",
                    display: "flex"
                }}>
                    <div style={{
                        width: "70%"
                    }}>
                        <div style={{ display: "flex", alignItems: "centerr" }}>
                            <div>
                                <Space>Thành viên</Space>
                                <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
                                    <Avatar />
                                    <Avatar style={{ margin: "0 3px" }} />
                                    <Avatar />
                                    <Button style={{
                                        borderRadius: "50%",
                                        width: "40px",
                                        height: "40px",
                                        marginLeft: "10px"
                                    }}><PlusOutlined /></Button>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Space>Thông báo</Space>
                                <Button>
                                    <EyeOutlined />
                                    <Space>Đang theo dõi</Space>
                                    <CheckOutlined />
                                </Button>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between", margin: "20px"
                        }}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <PicCenterOutlined style={{
                                    fontSize: "17px",
                                    marginRight: "10px"
                                }} />
                                <Space style={{ fontSize: "17px", fontWeight: 600 }}>Mô tả</Space>
                            </div>
                            <Button type='primary'>Chỉnh sửa</Button>
                        </div>
                        <div style={{
                            margin: 0,
                            padding: 0,
                            fontSize: "14px",
                            lineHeight: "20px"
                            // lineHeight:"1.5"
                        }} dangerouslySetInnerHTML={{ __html: valueQuill }}>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between", margin: "20px"
                        }}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <ApiOutlined style={{
                                    fontSize: "17px",
                                    marginRight: "10px"
                                }} />
                                <Space style={{ fontSize: "17px", fontWeight: 600 }}>Các tệp đính kèm</Space>
                            </div>
                            <Button type='primary'>Thêm</Button>
                        </div>
                        <div>
                            <Space>Tệp</Space>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: "15px"
                            }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Image alt='' src={images.trelloUI} width={100} height={60} />
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <Space>image.png</Space>
                                        <Space>Đã thêm 15:26</Space>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Button type='text'
                                        style={{
                                            marginRight: "10px"
                                        }}> <ExpandAltOutlined /></Button>

                                    <Button><EllipsisOutlined /></Button>
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: "15px"
                            }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Image alt='' src={images.trelloUI} width={100} height={60} />
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <Space>image.png</Space>
                                        <Space>Đã thêm 15:26</Space>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Button type='text'
                                        style={{
                                            marginRight: "10px"
                                        }}> <ExpandAltOutlined /></Button>

                                    <Button><EllipsisOutlined /></Button>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <UnorderedListOutlined style={{
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    marginRight: "10px"
                                }} />
                                <Space style={{
                                    fontWeight: 600,
                                    fontSize: "15px"
                                }}>Hoạt động</Space>
                            </div>
                            <Button>Chi tiết</Button>
                        </div>
                        <div style={{
                            display: "flex",
                            width: "100%",
                            margin: "20px 0"
                            // alignItems: "center"
                        }}>
                            <div><Avatar style={{
                                // fontSize: "15px",
                                marginRight: "10px"
                            }} /></div>
                            {
                                !isShowInputComment && <Input placeholder="Viết bình luận..." style={{
                                    background: "white",
                                    borderRadius: "10px",
                                    boxShadow: "",
                                    height: "40px",
                                    // margin: "20px 0"
                                }} onFocus={handleFocusInput} />
                            }
                            {
                                isShowInputComment && <ReactQuillComponent valueQuill={valueQuill} setValueQuill={setValueQuill} />

                            }

                        </div>
                        <div style={{
                            display: "flex",
                            // alignItems: "center"
                        }}>
                            <div><Avatar style={{
                                // fontSize: "15px",
                                marginRight: "10px"
                            }} /></div>
                            <div>
                                <p>
                                    <strong>Nguyen Viet Anh</strong> đã di chuyển thẻ này từ danh sách
                                    <span>SIT - BUG</span>
                                    tới danh sách
                                    <span > SIT - DEV PENDING - DOING</span>.
                                </p>
                                <p style={{ marginTop: "-15px" }}>
                                    14:39 31 thg 7, 2023
                                </p>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            // alignItems: "center"
                        }}>
                            <div><Avatar style={{
                                // fontSize: "15px",
                                marginRight: "10px"
                            }} /></div>
                            <div>
                                <strong>Nguyen Viet Anh</strong> 14:39 31 thg 7, 2023
                                <div style={{
                                    background: "white",
                                    borderRadius: "10px",
                                    border: "1px solid black",
                                    padding: "5px 5px",
                                    margin: "8px 0"
                                }}>@zyan6199  vậy kiểm tra tiếp số lượng hồ sơ tab chứng từ + tổng hồ sơ chờ duyệt + hiệu lực nhé</div>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer"
                                }}>
                                    <FrownOutlined style={{
                                        fontSize: "14px",
                                        fontWeight: 550
                                    }} />
                                    <Space style={{
                                        fontWeight: 600,
                                        marginLeft: "10px",

                                    }}>Trả lời</Space>
                                </div>
                            </div>

                        </div>
                        <div style={{
                            display: "flex",
                            // alignItems: "center"
                        }}>
                            <div><Avatar style={{
                                // fontSize: "15px",
                                marginRight: "10px"
                            }} /></div>

                            <div>
                                <div>
                                    <Space style={{ fontSize: "15px", fontWeight: 600 }}>Nguyen Viet Anh</Space> đã di chuyển thẻ này từ danh sách
                                    <span>SIT - BUG</span>
                                    tới danh sách
                                    <span > SIT - DEV PENDING - DOING</span>.
                                </div>
                                <Space>
                                    14:39 31 thg 7, 2023
                                </Space>
                                <Image alt='' src={images.trelloUI} style={{
                                    width: "100%",
                                    height: "200px"
                                }} />
                            </div>
                        </div>
                    </div>

                    <div style={{
                        flex: 1,
                        paddingLeft: "15px"
                    }}>
                        <Button style={{
                            width: "90%",
                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginBottom: "15px"
                        }}> <UserAddOutlined />Tham gia</Button>
                        <Button style={{
                            width: "90%",
                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            marginBottom: "15px",
                            justifyContent: "flex-start",
                            alignItems: "center"
                        }}> <UserOutlined />Thành viên</Button>
                        <Button style={{
                            width: "90%",
                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center", marginBottom: "15px"
                        }}> <TagsOutlined />Nhãn</Button>
                        <Button style={{
                            width: "90%",
                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center", marginBottom: "15px"
                        }}> <CheckSquareOutlined />Cần làm việc</Button>
                        <Button style={{
                            width: "90%",
                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center", marginBottom: "15px"
                        }}><ClockCircleOutlined />Ngày</Button>
                        <Button style={{
                            width: "90%",
                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center", marginBottom: "15px"
                        }}> <ApiOutlined />Đính kèm</Button>
                        <Button style={{
                            width: "90%",
                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center", marginBottom: "15px"
                        }}> <AppstoreAddOutlined />Trường tùy chỉnh</Button>
                        <Space style={{
                            margin: "10px 0 20px 0"
                        }}>Thêm nút</Space>
                        <Button style={{
                            width: "90%",

                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center", marginBottom: "15px"
                        }}> <UserAddOutlined />Thêm nút</Button>
                        <Space style={{
                            margin: "30px 0 20px 0"
                        }}>Thao tác</Space>
                        <Button style={{
                            width: "90%",

                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center", marginBottom: "15px"
                        }}> <ArrowRightOutlined />Di chuyển</Button>
                        <Button style={{
                            width: "90%",

                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center", marginBottom: "15px"
                        }}> <CopyOutlined />Sao chép</Button>
                        <Button style={{
                            width: "90%",

                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center", marginBottom: "15px"
                        }}> <BorderRightOutlined />Đối xứng</Button>
                        <Button style={{
                            width: "90%",

                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center", marginBottom: "15px"
                        }}> <ClusterOutlined />Tạo mẫu</Button>
                        <Button style={{
                            width: "90%",

                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center", marginBottom: "15px"
                        }}> <DisconnectOutlined />Lưu trữ</Button>
                        <Button style={{
                            width: "90%",

                            fontSize: "15px",
                            fontWeight: 600,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center", marginBottom: "15px"
                        }}> <ShareAltOutlined />Chia sẻ</Button>
                    </div>

                </div>

            </div>
        </Modal>
    )
}
