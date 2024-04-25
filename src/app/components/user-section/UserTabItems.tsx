"use client";
import Image from "next/image";
import {
  Button,
  Form,
  Modal,
  Input,
  Select,
  Table,
  DatePicker,
  Upload,
} from "antd";
import type { TableColumnsType } from "antd";
import { useState } from "react";
import { IoIosSearch, IoMdPersonAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import ImgUpload from "../Upload/ImgUpload";

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  contact: string;
  address: string;
  time: string;
  date: string;
}

export const Users = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);

  const [form] = Form.useForm();
  const { Option } = Select;

  const showBusinessModal = () => {
    setIsBusinessModalOpen(true);
  };
  const handleBusinessCancel = () => {
    setIsBusinessModalOpen(false);
  };

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => (
        <div className="flex items-center">
          {" "}
          <span className="mr-1">
            <Image
              src={"/images/profile2.jpg"}
              alt="profile image"
              height={30}
              width={30}
            />
          </span>{" "}
          <span>{text}</span>{" "}
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Contact",
      dataIndex: "contact",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Time",
      dataIndex: "time",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Actions",
      dataIndex: "",
      render: () => (
        <div className="flex ">
          <button className="hover:bg-gray-100 rounded-lg">
            <MdEdit className="text-3xl p-1 " />
          </button>
          <button className="hover:bg-gray-100 rounded-lg">
            <LuEye className="text-3xl p-1" />
          </button>
          <button className="hover:bg-gray-100 rounded-lg">
            <RiDeleteBinLine className="text-3xl p-1" />
          </button>
          <button className="hover:bg-gray-100 rounded-lg">
            <Image
              src={"/icons/access.svg"}
              alt="access icon"
              width={30}
              height={30}
            />
          </button>
        </div>
      ),
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      key: i,
      name: `Emmanuel`,
      email: `emmanuel@gmail.com,${i}`,
      contact: `054787445,${i}`,
      time: "10:34pm",
      date: "02/02/2024",
      address: `Ghana, East Airport`,
    });
  }

  const onFinish = () => {
    const formData = { ...form.getFieldsValue(true) };
    console.log("All input values:", formData);
  };

  return (
    <div>
      <Modal
        title={<h2 className="font-bold text-center uppercase">Add User</h2>}
        open={isBusinessModalOpen}
        onCancel={handleBusinessCancel}
        footer={null}
        style={{
          top: 20,
          maxHeight: "calc(100vh - 100px)",
        }}
        width={800}
      >
        <div className=" flex justify-center pb-3">
          <Form
            form={form}
            onFinish={onFinish}
            className="w-[90%] "
            layout="vertical"
          >
            <div className="flex  w-full  gap-x-8  mt-4">
              <div className="flex flex-col w-1/2 ">
                <Form.Item
                  hasFeedback
                  name="fullName"
                  label="Full Name"
                  validateTrigger="onBlur"
                  className="mb--0 w-full"
                  rules={[{ required: true, max: 500 }]}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
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
                  <Input placeholder="Email" size="large" />
                </Form.Item>
                <Form.Item
                  hasFeedback
                  name="contact"
                  label="Contact"
                  validateTrigger="onBlur"
                  className="mb--0 w-full"
                  rules={[{ required: true, max: 500 }]}
                >
                  <Input type="number" size="large" />
                </Form.Item>
                <Form.Item
                  name={"dateOfBirth"}
                  label="Date of Birth"
                  className="mr-4 mb--0"
                  rules={[{ required: true, message: "Missing Date of Birth" }]}
                >
                  <DatePicker
                    // onChange={(date, dateString) =>
                    //   handleDateOnChange(date, dateString, setDateOfBirth)
                    // }
                    className="w-full flex flex-col-reverse"
                    placeholder="Date of Birth"
                    size="large"
                  />
                </Form.Item>
                <Form.Item
                  hasFeedback
                  name="salary"
                  label="Salary"
                  validateTrigger="onBlur"
                  className="mb--0 w-full"
                  rules={[{ required: true, max: 500 }]}
                >
                  <Input size="large" type="number" />
                </Form.Item>
              </div>

              <div className="flex flex-col w-1/2 ">
                <div>
                  <label className="mb-5">Upload Profile Picture</label>
                  <div className="mt-2 mb-8">
                    <ImgUpload />
                  </div>
                </div>

                <Form.Item
                  hasFeedback
                  name="address"
                  label="Address"
                  validateTrigger="onBlur"
                  className="mb--0 w-full"
                  rules={[{ required: true, max: 500 }]}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  name="location"
                  label="User Type"
                  validateTrigger="onBlur"
                  hasFeedback
                  className="mb--0 w-full"
                  rules={[
                    { required: true, message: "Please select User Type " },
                  ]}
                >
                  <Select size="large">
                    <Option value="Admin">Admin</Option>
                    <Option value="Guess">Guess User</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className="flex w-full gap-x-4 justify-between">
              <Button htmlType="submit" className="p-2  w-1/2">
                Discard
              </Button>
              <Button htmlType="submit" className="p-2 btnBg w-1/2">
                Add User
              </Button>
            </div>
          </Form>
        </div>
      </Modal>

      <div className="flex  sm:flex-col md:flex-row justify-between">
        <div className="businessCard flex flex-col w-[12rem] py-2 px-3 bg-white border shadow rounded  dark:text-white  dark:bg-[#32312f] ">
          <div className="mb-3">
            <h2 className="font-bold text-lg">Total Users</h2>
          </div>
          <div className="flex items-center justify-between">
            <span>
              <Image
                src={"/icons/Users.svg"}
                height={40}
                width={40}
                alt="users"
                className=" dark:invert-0"
              />
            </span>
            <h2 className="text-2xl font-bold">100</h2>
          </div>
        </div>
        <div className="businessCard flex flex-col w-[12rem] py-2 px-3 bg-white border shadow rounded  dark:text-white  dark:bg-[#32312f] ">
          <div className="mb-3">
            <h2 className="font-bold text-lg">Login Users</h2>
          </div>
          <div className="flex items-center justify-between">
            <span>
              <Image
                src={"/icons/loginUser.svg"}
                height={40}
                width={40}
                alt="users"
              />
            </span>
            <h2 className="text-2xl font-bold">50</h2>
          </div>
        </div>

        <div className="businessCard flex flex-col w-[12rem] py-2 px-3 bg-white border shadow rounded  dark:text-white  dark:bg-[#32312f] ">
          <div className="mb-3">
            <h2 className="font-bold text-lg">Guess Users</h2>
          </div>
          <div className="flex items-center justify-between">
            <span>
              <Image
                src={"/icons/guessUser.svg"}
                height={40}
                width={40}
                alt="users"
              />
            </span>
            <h2 className="text-2xl font-bold">20</h2>
          </div>
        </div>
        <div className="businessCard flex flex-col w-[12rem] py-2 px-3 bg-white border shadow rounded  dark:text-white  dark:bg-[#32312f] ">
          <div className="mb-3">
            <h2 className="font-bold text-lg">Deleted Users</h2>
          </div>
          <div className="flex items-center justify-between">
            <span>
              <Image
                src={"/icons/deletedUser.svg"}
                height={40}
                width={40}
                alt="users"
              />
            </span>
            <h2 className="text-2xl font-bold">50</h2>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between mb-5">
          <div className="flex items-center border border-gray-400 rounded-md bg-gray-50 w-2/3 p-1">
            <IoIosSearch className="text-2xl mr-2" />
            <input
              type="search"
              placeholder="search"
              className="outline-none w-full bg-gray h-full bg-gray-50"
              name=""
              id=""
            />
          </div>

          <div className="flex justify-end  gap-x-4 w-1/3 ">
            <button className="flex justify-between items-center font-semibold btnBg rounded px-2 py-2">
              <span className="mr-3"> Filter</span>
              <FaFilter className="text-lg" />
            </button>
            <button
              onClick={showBusinessModal}
              className="flex justify-between items-center font-semibold btnBg rounded px-2 py-2"
            >
              <span className="mr-3">Add User</span>
              <IoMdPersonAdd className="text-lg" />
            </button>
          </div>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};
