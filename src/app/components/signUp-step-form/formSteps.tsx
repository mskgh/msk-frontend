import theme from "@/app/Theme/themeConfig";
import { ConfigProvider, DatePicker, Form, Input, Select } from "antd";
import {
  LockOutlined,
  MailOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../../../../public/images/logo.svg";
import Image from "next/image";

const { Option } = Select;
export const steps = [
  {
    title: "Personal Details",
    content: (
      <ConfigProvider>
        <div className="flex flex-col items-center w-full">
          <div>
            <Image src={logo} height={50} width={50} alt="logo" />
          </div>
          <h1 className="text-lg">Personal Information</h1>
          <div className="flex flex-col w-[60%]">
            <Form.Item
              hasFeedback
              label="Full Name"
              name="Fullname"
              validateTrigger="onBlur"
              rules={[{ required: true, max: 100 }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="First Name"
                // size="default"
              />
            </Form.Item>
            <Form.Item
              name={"StartDate"}
              label="Start Date"
              className="mr-4 "
              rules={[{ required: true, message: "Missing Start Date" }]}
            >
              <DatePicker className="w-full" />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              validateTrigger="onBlur"
              hasFeedback
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select
                // prefix={<TeamOutlined className="site-form-item-icon" />}
                placeholder="select your gender"
                // size="large"
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>
          </div>
        </div>
      </ConfigProvider>
    ),
  },

  {
    title: "Organizational Details",
    content: (
      <ConfigProvider>
        <div className="grid gap-x-4">
          <Form.Item
            hasFeedback
            label="Organization Name"
            name="organizationName"
            validateTrigger="onBlur"
            rules={[{ required: true, max: 12 }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Emano LMD"
              // size="default"
            />
          </Form.Item>
          <Form.Item
            name="email"
            // label={<label style={{ fontSize: "13px" }}>Email</label>}
            label="E-mail"
            validateTrigger="onBlur"
            hasFeedback
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
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              // size="large"
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Locational"
            name="Fullname"
            validateTrigger="onBlur"
            rules={[{ required: true, max: 12 }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="First Name"
              // size="default"
            />
          </Form.Item>
          <Form.Item
            label="Contact"
            name="contact"
            hasFeedback
            rules={[
              {
                required: true,
                min: 3,
                message: "Required! with at least 3 characters",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              // size="large"
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <Form.Item
            label="Password"
            name="password"
            hasFeedback
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
              placeholder="Password"
              // size="large"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              // size="large"
            />
          </Form.Item>
          <p className="text-sm mb-8">
            By signing up, You agree to our{" "}
            <span className="text-blue-700">Terms & Conditions</span>
          </p>
        </div>
      </ConfigProvider>
    ),
  },
];
