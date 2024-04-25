import theme from "@/app/Theme/themeConfig";
import { ConfigProvider, DatePicker, Form, Input, Select } from "antd";
import type { DatePickerProps } from "antd";
import {
  LockOutlined,
  MailOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import logo from "../../../../public/images/logo.svg";
import bigEllipse from "../../../../public/icons/Ellipse_big.svg";
import mdEllipse from "../../../../public/icons/Ellipse_md.svg";
import ellipsePlus from "../../../../public/icons/Ellipse_plus.svg";
import calender from "../../../../public/icons/calendar.svg";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { Dayjs } from "dayjs";
import { MdBusiness } from "react-icons/md";

const { Option } = Select;

const handleDateOnChange: any = (
  date: Dayjs,
  dateString: string | string[],
  setDateOfBirth: (arg0: any) => void
) => {
  console.log("onChange date", dateString);
  setDateOfBirth(dateString);
  // return dateString; onChange={(date, dateString) => handleDateOnChange(date, dateString, setDateOfBirth)
};

export const PersonalDetailsStep = ({ form, setDateOfBirth }: any) => (
  //   <ConfigProvider>
  <div className="flex flex-col items-center w-full ">
    {/* Icons used at the background */}
    <div className="absolute top-[-1rem] left-0">
      <Image src={bigEllipse} height={100} width={100} alt="ellipse" />
    </div>
    <div className="absolute right-0 top-0">
      <Image src={mdEllipse} width={30} height={50} alt="ellipse" />
    </div>
    <div className="absolute left-20 bottom-16">
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
    <div>
      <Image src={logo} height={50} width={50} alt="logo" />
    </div>
    <h1 className="text-lg py-4 font-bold text-[#1d4771]">Personal Details</h1>
    <div className="flex flex-col w-[80%]  md:w-[50%] mt-4">
      <Form.Item
        hasFeedback
        name="Fullname"
        validateTrigger="onBlur"
        className="mb--0 input"
        rules={[{ required: true, max: 300 }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Full Name"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="personalEmail"
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
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="personalContact"
        hasFeedback
        className="mb--0"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          prefix={<IoCallOutline className="site-form-item-icon" />}
          placeholder="Contact"
          size="large"
        />
      </Form.Item>

      <Form.Item
        name={"dateOfBirth"}
        className="mr-4 mb--0"
        rules={[{ required: true, message: "Missing Date of Birth" }]}
      >
        <DatePicker
          onChange={(date, dateString) =>
            handleDateOnChange(date, dateString, setDateOfBirth)
          }
          className="w-full flex flex-col-reverse"
          placeholder="Date of Birth"
          size="large"
        />
      </Form.Item>

      <Form.Item
        name="gender"
        // label="Gender"
        validateTrigger="onBlur"
        hasFeedback
        className="mb--0"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Select
          // prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="select your gender"
          size="large"
        >
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>
      <p className="flex text-sm">
        By signing up, You agree to our{" "}
        <span className="text-blue-700">Terms & Conditions</span>
      </p>
    </div>
  </div>
  //   </ConfigProvider>
);

export const OrganizationDetailsStep = ({ form }: any) => (
  //   <ConfigProvider>
  <div className="flex flex-col items-center w-full">
    {/* Icons place at the background on the signUp page */}
    <div className="absolute top-[-1rem] left-0">
      <Image src={bigEllipse} height={100} width={100} alt="ellipse" />
    </div>
    <div className="absolute right-0 top-0">
      <Image src={mdEllipse} width={30} height={50} alt="ellipse" />
    </div>
    <div className="absolute near-logo left-[60%] top-5">
      <Image src={mdEllipse} width={10} height={20} alt="ellipse" />
    </div>

    <div className="absolute left-side left-0 top-56">
      <Image src={mdEllipse} width={20} height={30} alt="ellipse" />
    </div>

    <div className="absolute right-side right-10 bottom-16">
      <Image src={mdEllipse} width={20} height={30} alt="ellipse" />
    </div>

    {/* End of icons */}
    <div>
      <Image src={logo} height={50} width={50} alt="logo" />
    </div>
    <h1 className="text-lg py-4 font-bold text-[#1d4771]">
      Organization Details
    </h1>

    <div className="flex flex-col w-[80%] md:w-[50%]">
      <Form.Item
        hasFeedback
        name="organizationName"
        validateTrigger="onBlur"
        className="mb--0"
        rules={[{ required: true, max: 300 }]}
      >
        <Input
          prefix={<MdBusiness className="site-form-item-icon" />}
          placeholder="Organization Name"
          size="middle"
        />
      </Form.Item>
      <Form.Item
        name="email"
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
            message: "Please input your email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item
        hasFeedback
        name="location"
        validateTrigger="onBlur"
        className="mb--0"
        rules={[{ required: true, max: 300 }]}
      >
        <Input
          prefix={<IoLocationOutline className="site-form-item-icon" />}
          placeholder="Location"
        />
      </Form.Item>

      <Form.Item
        name="contact"
        hasFeedback
        className="mb--0"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          prefix={<IoCallOutline className="site-form-item-icon" />}
          placeholder="Contact"
        />
      </Form.Item>
      <Form.Item
        name="password"
        hasFeedback
        className="mb--0"
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
        dependencies={["password"]}
        hasFeedback
        className="mb--0"
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
          placeholder="Confirm Password"
          // size="large"
        />
      </Form.Item>
      <p className="flex justify-self-start text-sm mb-8 ">
        By signing up, You agree to our{" "}
        <span className="text-blue-700">Terms & Conditions</span>
      </p>
    </div>
  </div>
  /* </ConfigProvider> */
);
