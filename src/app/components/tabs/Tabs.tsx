"use client";
import React from "react";
import { Tabs } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

const MyTabs: React.FC = () => {
  const callback = (key: string) => {
    console.log(key);
  };

  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane
        tab={
          <span className="text-gray-500 font-bold">
            {/* <UserOutlined /> */}
            Business
          </span>
        }
        key="1"
      >
        business
      </TabPane>
      
      <TabPane
        tab={
          <span className="text-gray-500 font-bold">
            {/* <SettingOutlined /> */}
            Pending Deletion
          </span>
        }
        key="2"
      >
        Pending deletion
      </TabPane>
      <TabPane
        tab={
          <span className="text-gray-500 font-bold">
            {/* <HeartOutlined /> */}
            Deleted Business
          </span>
        }
        key="3"
      >
        Deleted Business
      </TabPane>
      <TabPane
        tab={
          <span className="text-gray-500 font-bold">
            <SettingOutlined className="mr-2" />
            Organization Settings
          </span>
        }
        key="4"
      >
        Organization Settings
      </TabPane>
    </Tabs>
  );
};

export default MyTabs;
