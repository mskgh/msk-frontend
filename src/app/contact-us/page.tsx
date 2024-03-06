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
          <p className="text-center md:text-left">Any question or remarks? Just write us a message!</p>
        </div>

        <div className="flex flex-col py-8 px-3 md:px-0 md:py-0 items-center md:flex-row shadow rounded bg-white mt-5 ">
          <div className="img w-[40%]">
            <Image src={contactFrame} height={400} alt="contact img" />
          </div>
          <div className="form  md:w-[60%]">
            <h2 className="py-4 text-center text-2xl font-semibold">
              LET’S ANSWER YOUR QUERIES
            </h2>
            <Form layout={"vertical"}>
              <div className="grid grid-col-1 md:grid-cols-2">
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
                <div>
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

      {/* <FooterComp /> */}
    </div>
  );
};

export default ContactUpComp;
