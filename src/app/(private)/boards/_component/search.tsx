import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { useState } from 'react'

export const Search = () => {
      const [widthSearch, setWidthSearch] = useState<number>(250)
    
      const handleFocusInput = () => {
        setWidthSearch(500)
      }
  return (
    <Input size="large" placeholder="Tìm kiếm" prefix={<SearchOutlined />} style={{ width: `${widthSearch}px`, marginRight: "20px" }} onFocus={handleFocusInput} />
  )
}
