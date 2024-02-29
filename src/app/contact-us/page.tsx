"use client";
import React from "react";
// import FooterComp from "../components/footer-section/FooterComp";
import style from "./Contact.module.css";
import contactFrame from "../../../public/images/contactFrame.svg";
import Image from "next/image";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
const ContactUpComp = () => {
  return (
    <div className="flex flex-col  bg-[#fafafa]">
      <div className={`${style.contactContainer}`}>
        <div className=" text-white flex justify-center  absolute  top-0 z-20  w-full h-full gap-20">
          <div className="flex items-center justify-center w-[80%] ">
            <h1 className="text-4xl"> GET IN TOUCH</h1>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto mb-8">
        <div className="flex flex-col   items-center py-10">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <p>Any question or remarks? Just write us a message!</p>
        </div>

        <div className="flex shadow rounded bg-white mt-5">
          <div className="img w-[40%]">
            <Image src={contactFrame} height={400} alt="contact img" />
          </div>
          <div className="form  w-[60%]">
            <h2 className="py-4 text-center text-2xl font-semibold">
              LET’S ANSWER YOUR QUERIES
            </h2>
            <Form layout={"vertical"}>
              <div className="grid grid-cols-2">
                <div>
                  <Form.Item label="First Name" className="w-72">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Last Name" className="w-72">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Email" className="w-72">
                    <Input type="email" />
                  </Form.Item>
                </div>
                <div className="flex h-[15rem] pt-7 pr-4">
                  <TextArea />
                </div>
              </div>
              <div className="flex justify-end pr-4">
                <button className="a-btn ">Submit</button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      {/* <FooterComp /> */}
    </div>
  );
};

export default ContactUpComp;
