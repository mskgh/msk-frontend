"use client";
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import {
  BusinessTab,
  DeleteBusinessTab,
  DeletedBusinessTab,
  OrganizationalSetting,
} from "./tab-items/TabItems";
import { MdAutoDelete, MdBusiness, MdDelete } from "react-icons/md";

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
        <MdBusiness className="mr-2" />
        Business
      </span>
    ),
    children: <BusinessTab />,
  },
  {
    key: "2",
    label: (
      <span className="text-gray-500 dark:text-white flex items-center font-bold">
        <MdAutoDelete className="mr-2" />
        Pending Deletion
      </span>
    ),
    children: <DeleteBusinessTab />,
  },
  {
    key: "3",
    label: (
      <span className="text-gray-500 dark:text-white flex items-center font-bold">
        <MdDelete className="mr-2" />
        Deleted Business
      </span>
    ),
    children: <DeletedBusinessTab />,
  },
  {
    key: "4",
    label: (
      <span className="text-gray-500 dark:text-white flex items-center font-bold">
        <SettingOutlined className="mr-2" />
        Organization Settings
      </span>
    ),
    children: <OrganizationalSetting />,
  },
];

const NewTab: React.FC = () => (
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

export default NewTab;
