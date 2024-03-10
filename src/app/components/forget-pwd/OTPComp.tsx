"use client";
import React from "react";
import { ConfigProvider, Form, Button, Input } from "antd";
import logo from "../../../../public/images/logo.svg";
import bigEllipse from "../../../../public/icons/Ellipse_big.svg";
import mdEllipse from "../../../../public/icons/Ellipse_md.svg";
import ellipsePlus from "../../../../public/icons/Ellipse_plus.svg";
import verifyOTP from "../../../../public/images/verify-otp.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const OTPComp = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleNext = () => {
    router.push("/new-password");
  };
  const onFinish = () => {
    const formData = { ...form.getFieldsValue(true) };

    console.log("All input values:", formData);
  };
  return (
    <div className=" w-full p-2 bg-[#f5f5f5] shadow-md relative h-full">
      <ConfigProvider>
        <div className="flex flex-col items-center justify-center w-full ">
          {/* Icons used at the background */}
          <div className="absolute top-[-2rem] left-0">
            <Image src={bigEllipse} height={100} width={100} alt="ellipse" />
          </div>
          <div className="absolute right-0 top-0">
            <Image src={mdEllipse} width={30} height={50} alt="ellipse" />
          </div>
          <div className="absolute left-20 bottom-36">
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
          <div className="">
            <Image src={logo} height={50} width={50} alt="logo" />
          </div>

          <h1 className="text-lg py-4 font-bold text-[#1d4771]">OTP Code</h1>
          <div className="flex justify-center pl-12">
            <Image src={verifyOTP} height={200} alt="otp image" />
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-[0.6rem] w-2/3 text-center text-[#1d4771]">
              For your two factor authentication, a code has been sent to your
              email
            </p>
          </div>
          <Form
            form={form}
            onFinish={onFinish}
            className="w-[90%] md:w-[50%]"
            layout="vertical"
          >
            <div className="flex flex-col  w-full mt-4 ">
              <Form.Item
                name="otp"
                validateTrigger="onBlur"
                hasFeedback
                className="mb--0"
              >
                <Input placeholder="Enter OTP" />
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

export default OTPComp;
