"use client";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Button, Input, InputProps } from "antd";
import { useState } from "react";

export default function PasswordLoginInput(props: InputProps) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Input
      {...props}
      type={show ? "text" : "password"}
      size="large"
      placeholder="password"
      prefix={<LockOutlined />}
      suffix={
        <Button
          shape="circle"
          onClick={handleClick}
          icon={show ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        />
      }
    />
  );
}
