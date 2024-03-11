"use client";
import { UserOutlined } from "@ant-design/icons";
import { Input, InputProps } from "antd";

export default function EmailLoginInput(props: InputProps) {
  return (
    <Input
      {...props}
      type="text"
      size="large"
      placeholder="email"
      prefix={<UserOutlined />}
    />
  );
}
