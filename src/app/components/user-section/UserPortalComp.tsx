"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SettingOutlined } from "@ant-design/icons";
import brand from "../../../../public/images/brandLogo.svg";
import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  FaEllipsisVertical,
  FaRegCircleUser,
  FaUsersGear,
} from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import ThemeSwitch from "@/app/components/theme-switch/ThemeSwitch";
import NewTab from "@/app/components/tabs/NewTab";
import { VscOrganization } from "react-icons/vsc";
import classNames from "classnames";
import { Button, Form, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { CgOrganisation } from "react-icons/cg";
import { FaBriefcase, FaBusinessTime } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import UserTab from "./UserTab";

const UserPortalComp = () => {
  const [hideSideNav, showSideNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Form details
  const [form] = Form.useForm();
  const { Option } = Select;
  const onFinish = () => {
    const formData = { ...form.getFieldsValue(true) };
    console.log("All input values:", formData);
  };

  const showMenuCard = () => {
    setShowMenu(!showMenu);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showBusinessModal = () => {
    setIsBusinessModalOpen(true);
  };
  const handleBusinessCancel = () => {
    setIsBusinessModalOpen(false);
  };

  const toggleSideNav = () => {
    showSideNav(!hideSideNav);
  };

  console.log("the hide side nav", hideSideNav);

  // Function to handle clicks outside the menu card
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current?.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  // use effect for hiding menu when clicked outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen py-1 relative">
      <header className="bg-white dark:bg-[#1f1e1d] dark:text-white px-5 py-2 sticky top-0 z-50 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <button onClick={toggleSideNav} className="me-4">
            <RxHamburgerMenu className="text-2xl" />
          </button>
          <Link href={"/"}>
            <Image src={brand} height={40} alt="brand logo" />
          </Link>
        </div>
        <div className="flex items-center w-1/2 p-1 border border-gray-400 rounded-md">
          <div className="w-full px-5 flex justify-between items-center">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for users"
              className="outline-none bg-inherit w-[90%]"
            />
            <span>
              <CiSearch />
            </span>
          </div>
        </div>
        <div className="flex gap-x-3">
          <span>
            <IoIosNotificationsOutline className="text-2xl" />
          </span>
          <span>
            <FaRegCircleUser className="text-2xl" />
          </span>
          <span>
            <ThemeSwitch />
          </span>
          <button onClick={showMenuCard}>
            <FaEllipsisVertical className="text-2xl" />
          </button>
        </div>
      </header>

      {/* Menu Card */}
      {showMenu && (
        <div
          ref={menuRef}
          className="w-[15rem] transition-all shadow-lg absolute top-14 right-8  dark:bg-[#1e1d1d] bg-white  z-50"
        >
          <ul className="list-none flex flex-col">
            <li className="p-2 cursor-pointer flex border border-b-2 dark:hover:bg-[#2e2d2d] hover:bg-gray-50">
              {" "}
              <SettingOutlined className="mr-2" /> Settings
            </li>
            <li className="p-2 cursor-pointer flex items-center border border-b-2 dark:hover:bg-[#2e2d2d] hover:bg-gray-50">
              <HiOutlineChatBubbleLeftRight className="mr-2" /> Chat
            </li>

            <li className="p-2 flex items-center cursor-pointer border border-b-2 dark:hover:bg-[#2e2d2d] hover:bg-gray-50">
              <FaBriefcase className="mr-2" />
              Subscription
            </li>
            <li className="p-2 cursor-pointer border border-b-2 dark:hover:bg-[#2e2d2d] hover:bg-gray-50">
              <Link href={"/portal/user"} className="flex items-center">
                <FaUsersGear className="mr-2" />
                Users
              </Link>
            </li>
            <li className="p-2 cursor-pointer  border border-b-2 dark:hover:bg-[#2e2d2d] hover:bg-gray-50">
              <Link href={"/portal/organization"} className="flex items-center">
                <VscOrganization className="mr-2" /> Organization
              </Link>
            </li>
            <button
              onClick={showBusinessModal}
              className="p-2 cursor-pointer flex items-center border border-b-2 dark:hover:bg-[#2e2d2d] hover:bg-gray-50"
            >
              <FaBusinessTime className="mr-2" /> New Business
            </button>
            <li className="p-2 cursor-pointer border border-b-2 dark:hover:bg-[#2e2d2d] hover:bg-gray-50">
              <Link href={"/portal/users"} className="flex items-center">
                <FaRegCircleUser className="mr-2" />
                Profile
              </Link>
            </li>
            <li className="p-2 cursor-pointer flex  items-center border border-b-2 text-red-600 dark:hover:bg-[#2e2d2d] hover:bg-gray-50">
              <PiSignOutBold className="mr-2" />
              Sign out
            </li>
          </ul>
        </div>
      )}

      <Modal
        title="Add New Organization"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        style={{
          // overflowY: "scroll",
          top: 20,
          // height: "calc(100vh - 30px )",
          // maxHeight: "calc(100vh - 100px)",
        }}
      >
        <div className=" flex justify-center pb-3">
          <Form
            form={form}
            onFinish={onFinish}
            className="w-[98%]"
            layout="vertical"
          >
            <div className="flex flex-col items-center w-full   mt-4">
              <Form.Item
                hasFeedback
                name="organizationName"
                label="Organization Name"
                validateTrigger="onBlur"
                className="mb--0 w-full"
                rules={[{ required: true, max: 500 }]}
              >
                <Input />
              </Form.Item>
              <div className="flex gap-4 w-full">
                <Form.Item
                  hasFeedback
                  name="displayName"
                  label="Display Name"
                  validateTrigger="onBlur"
                  className="mb--0 w-full"
                  rules={[{ required: true, max: 500 }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  hasFeedback
                  name="domainName"
                  label="Domain Name"
                  validateTrigger="onBlur"
                  className="mb--0 w-full"
                  rules={[{ required: true, max: 500 }]}
                >
                  <Input />
                </Form.Item>
              </div>

              <Form.Item
                name="location"
                label="Location"
                validateTrigger="onBlur"
                hasFeedback
                className="mb--0 w-full"
                rules={[{ required: true, message: "Please select location" }]}
              >
                <Select>
                  <Option value="male">East Airport</Option>
                  <Option value="female">East Legon</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="description"
                label="Description"
                validateTrigger="onBlur"
                hasFeedback
                className="mb--0 w-full"
                rules={[
                  {
                    required: true,
                    message: "Give a brief description for the organization",
                  },
                ]}
              >
                <TextArea
                  // value={value}
                  // onChange={(e) => setValue(e.target.value)}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Form.Item>
              <div className="flex w-full">
                <Button htmlType="submit" className="p-2 btnBg w-1/3">
                  Save
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
      <div className="flex h-full">
        <aside
          className={classNames({
            " py-2 h-[90%] dark:text-white dark:bg-[#3b3a38] text-black  fixed z-50":
              true,
            "w-[35%] md:w-[5%]": hideSideNav,
            "md:w-[15%] w-[10%] ": !hideSideNav,
          })}
        >
          <div
            className={classNames({
              "hidden  md:flex  flex-col justify-between h-full": true,
            })}
          >
            <ul className="flex flex-col gap-y-2 list-none mt-5">
              <li className="flex items-center justify-around px-3 py-1 activeOr">
                {!hideSideNav && (
                  <span className="font-bold ">Users</span>
                )}
              </li>

              <li className="flex items-center justify-around px-3 py-1 ">
                {!hideSideNav && <span className="">Groups</span>}
              </li>
            </ul>
          </div>

          {/* Mobile side */}
          <div
            className={classNames({
              "flex md:hidden bg-white flex-col justify-between dark:text-white dark:bg-[#3b3a38] h-full":
                true,
            })}
          >
            <ul className="flex flex-col gap-y-2 list-none mt-5">
              <li className="flex items-center justify-around px-3 py-1 bg-[#2d5b88]">
                {hideSideNav && <span className="font-bold ">Users</span>}
              </li>

              <li className="flex items-center justify-around px-3 py-1 ">
                {hideSideNav && <span className="">Group</span>}
              </li>
            </ul>
          </div>
        </aside>
        <main
          className={classNames({
            " bg-[#fafafb] dark:text-white dark:bg-[#1e1d1d]  h-fit min-h-full":
              true,
            "ml-[10%] md:ml-[5%] md:w-[95%] w-[90%]": hideSideNav,
            "ml-[10%] md:ml-[15%] w-[90%] md:w-[85%]": !hideSideNav,
          })}
        >
          <div className="w-[90%] mx-auto  mt-3 ">
            <UserTab />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserPortalComp;
