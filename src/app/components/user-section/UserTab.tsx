"use client";
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { MdAutoDelete, MdBusiness, MdDelete } from "react-icons/md";
import { Users } from "./UserTabItems";


const onChange = (key: string) => {
  console.log(key);
};

interface CustomTabProps extends TabsProps {
  handleEditBusiness: () => void;
}

const items: CustomTabProps["items"] = [
  {
    key: "1",
    label: (
      <span className="text-gray-500 dark:text-white flex items-center font-bold">
        <SettingOutlined className="mr-2" />
        Users
      </span>
    ),
    children: <Users/>,
  },
  {
    key: "2",
    label: (
      <span className="text-gray-500 dark:text-white flex items-center font-bold">
        <MdBusiness className="mr-2" />
        Guess Users
      </span>
    ),
    children: "",
  },
  {
    key: "3",
    label: (
      <span className="text-gray-500 dark:text-white flex items-center font-bold">
        <MdAutoDelete className="mr-2" />
        Login Users
      </span>
    ),
    children: "",
  },
  {
    key: "4",
    label: (
      <span className="text-gray-500 dark:text-white flex items-center font-bold">
        <MdDelete className="mr-2" />
        Pending Deleted Users
      </span>
    ),
    children: "",
  },
  {
    key: "5",
    label: (
      <span className="text-gray-500 dark:text-white flex items-center font-bold">
        <MdDelete className="mr-2" />
        Deleted Users
      </span>
    ),
    children: "",
  },
];

const UserTab: React.FC = () => (
  <div className="flex ">
    <Tabs
      tabBarStyle={{
        display: "flex",
        justifyContent: "space-between",
      }}
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  </div>
);

export default UserTab;
