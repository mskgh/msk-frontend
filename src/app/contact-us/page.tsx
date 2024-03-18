"use client";
import React from "react";
// import FooterComp from "../components/footer-section/FooterComp";
import style from "./Contact.module.css";
import contactFrame from "../../../public/images/contactFrame.svg";
import Image from "next/image";
import { Form, Input } from "antd";
import Layout from "../components/layout/Layout";
const ContactUpComp = () => {
  const { TextArea } = Input;
  return (
    <Layout>
      <div className="flex flex-col  bg-[#fafafa]">
        <div className={`${style.contactContainer}`}>
          <div className=" text-white flex justify-center  absolute  top-0 z-20  w-full h-full gap-20">
            <div className="flex items-center justify-center w-[80%] ">
              <h1 className="text-4xl"> GET IN TOUCH</h1>
            </div>
          </div>
        </div>

        <div className="w-full px-2 md:px-0 md:w-[90%] mx-auto mb-8">
          <div className="flex flex-col   items-center py-10">
            <h1 className="text-2xl font-bold text-[#1d4771]">Contact Us</h1>
            <p className="text-center font-semibold text-[#1d4771] md:text-left mt-4">
              Any question or remarks? Just write us a message!
            </p>
          </div>

          <div className="flex flex-col w-full  py-8 px-3 md:px-0 md:py-0 items-center md:flex-row shadow rounded bg-white mt-5 ">
            <div className="img w-[40%]">
              <Image src={contactFrame} height={400} alt="contact img" />
            </div>
            <div className="form  md:w-[60%]">
              <h2 className="py-4 text-center text-2xl font-semibold">
                LET’S ANSWER YOUR QUERIES
              </h2>
              <Form layout={"vertical"} className="mt-4">
                <div className="grid grid-col-1 md:grid-cols-2">
                  <div>
                    <Form.Item label="First Name" className="md:w-[90%] mb--0">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Last Name" className="md:w-[90%] mb--0">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Email" className="md:w-[90%]">
                      <Input type="email" />
                    </Form.Item>
                  </div>
                  <div className="hidden md:flex md:w-[90%]">
                    <Form.Item
                      label="Message"
                      className="flex flex-col md:flex-row md:h-[15rem] md:pt-7 md:pr-4 "
                    >
                      <TextArea rows={8} cols={40} />
                    </Form.Item>
                  </div>
                  <div className="block md:hidden md:w-[90%]">
                    <Form.Item
                      label="Message"
                      className="flex flex-col md:flex-row md:h-[15rem] md:pt-7 md:pr-4"
                    >
                      <TextArea />
                    </Form.Item>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end pr-4">
                  <button className="a-btn ">Submit</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUpComp;
