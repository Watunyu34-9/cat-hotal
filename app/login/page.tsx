import React from "react";
import LoginForm from "../components/forms/login-form";
import { Flex } from "antd";

export default function Login() {
  return (
    <Flex align="center" justify="center" className="h-screen w-full bg-[#f8ebe1]" >
      <LoginForm />
    </Flex>
  );
}
