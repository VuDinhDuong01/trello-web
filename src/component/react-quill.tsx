

import { Button } from 'antd'
import ReactQuill from 'react-quill';
interface IQuillProps {
    valueQuill: string,
    setValueQuill: React.Dispatch<React.SetStateAction<string>>
}
export const ReactQuillComponent = ({ valueQuill, setValueQuill }: IQuillProps) => {
    const modules = {
        toolbar: [
            [{ size: ["small", false, "large", "huge"] }], // Tùy chỉnh font size
            ["bold", "italic", "underline"], // Các công cụ khác
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"], // Xóa định dạng
        ],
    };

    const formats = [
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "code-block",
      ];


    return (
        <div style={{ width: "100%" }}>
        <ReactQuill formats={formats} modules={modules} theme="snow" value={valueQuill} onChange={setValueQuill} style={{
            width: "100%",
            background: "white",
            marginBottom: "10px",
            border: "1px solid #0C66E4",
            borderRadius: "10px"
        }}  />
            <Button type='primary'>Lưu</Button>
        </div>
    )
}
