"use client";
import React, { ChangeEvent, useState } from "react";
import { Form, Flex, Typography, Button, notification } from "antd";
import EmailLoginInput from "../input/email-login-input";
import PasswordLoginInput from "../input/password-login-input";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const { Title } = Typography;
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleClick = async () => {
    try {
      const data = await axios.post("http://localhost:3000/api/auth", {
        email: input.email,
        password: input.password,
      });

      router.push("/");
    } catch (error) {
      notification.error({
        message: "รหัสผ่านไม่ถูกต้อง",
      });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Form className="w-1/3 backdrop-opacity-10    bg-white/35 p-20 rounded-lg backdrop-blur-sm shadow-2xl ">
      <Flex vertical gap={30} align="center" className="w-full">
        <Title style={{color:"#714b1c"}}>Login cathotel</Title>
        <Flex vertical gap="small" align="center" className="w-full">
          <EmailLoginInput name="email" onChange={handleChange} />
          <PasswordLoginInput name="password" onChange={handleChange} />
        </Flex>
        <Button onClick={handleClick} size="large" className="w-1/2" type='primary'>
          Login
        </Button>
      </Flex>
    </Form>
  );
}
