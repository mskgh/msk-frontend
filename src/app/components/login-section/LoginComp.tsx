"use client";
import React from "react";
import { Button, ConfigProvider, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import logo from "../../../../public/images/logo.svg";
import bigEllipse from "../../../../public/icons/Ellipse_big.svg";
import mdEllipse from "../../../../public/icons/Ellipse_md.svg";
import ellipsePlus from "../../../../public/icons/Ellipse_plus.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const LoginComp = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = () => {
    const formData = { ...form.getFieldsValue(true) };

    console.log("All input values:", formData);
    router.push("/");
  };
  return (
    <div className="flex items-center md:items-start w-[90%] p-2 bg-[#f5f5f5] shadow-md relative h-full">
      <ConfigProvider>
        <div className="flex flex-col items-center w-full ">
          {/* Icons used at the background */}
          <div className="absolute top-[-2rem] left-0">
            <Image src={bigEllipse} height={100} width={100} alt="ellipse" />
          </div>
          <div className="absolute right-0 top-0">
            <Image src={mdEllipse} width={30} height={50} alt="ellipse" />
          </div>
          <div className="absolute left-20 bottom-16">
            <Image src={ellipsePlus} width={70} height={70} alt="ellipse" />
          </div>
          <div className="absolute right-20 bottom-20">
            <Image src={mdEllipse} width={20} height={30} alt="ellipse" />
          </div>
          <div className="absolute left-side left-0 top-56">
            <Image src={mdEllipse} width={20} height={30} alt="ellipse" />
          </div>

          <div className="absolute near-logo left-[60%] top-5">
            <Image src={mdEllipse} width={10} height={20} alt="ellipse" />
          </div>
          {/* end of icons */}
          <div>
            <Image src={logo} height={50} width={50} alt="logo" />
          </div>
          <h1 className="text-lg py-4 font-bold text-[#1d4771]">log in</h1>

          <Form
            form={form}
            onFinish={onFinish}
            className="w-[90%] md:w-1/2"
            layout="vertical"
          >
            <div className="flex flex-col  mt-4">
              <Form.Item
                name="email"
                validateTrigger="onBlur"
                hasFeedback
                className="mb--0"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                hasFeedback
                className="mb--0"
                rules={[
                  {
                    required: true,
                    min: 6,
                    message: "Required! with at least 6 characters",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <div className="flex justify-between">
                <Link
                  className="text-sm underline text-blue-700"
                  href={"/forget-password"}
                >
                  Forgot password?
                </Link>
                <Link
                  className="text-sm underline text-blue-700"
                  href={"/signUp"}
                >
                  Sign up
                </Link>
              </div>
              <div className="flex justify-end mt-5">
                <Button htmlType="submit" className="p-2 btnBg">
                  Sign In
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default LoginComp;
