"use client";
import React from "react";
import { Button, ConfigProvider, Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import logo from "../../../../public/images/logo.svg";
import bigEllipse from "../../../../public/icons/Ellipse_big.svg";
import mdEllipse from "../../../../public/icons/Ellipse_md.svg";
import ellipsePlus from "../../../../public/icons/Ellipse_plus.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NewPassword = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const handleNext = () => {
    router.push("/password-change-successfully");
  };
  const onFinish = () => {
    const formData = { ...form.getFieldsValue(true) };

    console.log("All input values:", formData);
  };
  return (
    <div className="flex items-center md:items-center  w-full p-2 bg-[#f5f5f5] shadow-md relative h-full">
      <ConfigProvider>
        <div className="flex flex-col items-center w-full">
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
          <h1 className="text-lg py-4 font-bold text-[#1d4771]">
            New Password
          </h1>

          <Form
            form={form}
            onFinish={onFinish}
            className="w-[90%] md:w-[50%]"
            layout="vertical"
          >
            <div className="flex flex-col items-center w-full   mt-4">
              <Form.Item
                name="newPassword"
                hasFeedback
                className="mb--0 w-full"
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
                  placeholder="New Password"
                />
              </Form.Item>
              <Form.Item
                name="confirm"
                dependencies={["newPassword"]}
                hasFeedback
                className="mb--0 w-full"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Confirm Password"
                />
              </Form.Item>
              <div className="flex">
                <Button onClick={handleNext} className="p-2 btnBg w-full">
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default NewPassword;
