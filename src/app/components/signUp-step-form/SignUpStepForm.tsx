"use client";
import theme from "@/app/Theme/themeConfig";
import { Button, ConfigProvider, Form, Select, Steps } from "antd";
import React, { useState } from "react";
// import { steps } from "./formSteps";
import { IoMdArrowBack } from "react-icons/io";
import { OrganizationDetailsStep, PersonalDetailsStep } from "./Steps";
import { useRouter } from "next/navigation";

const { Step } = Steps;
const SignUpStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [dateOfBirth, setDateOfBirth] = useState<any>(null);
  const [form] = Form.useForm();

  const router = useRouter();

  const handleNext = () => {
    form.validateFields().then(() => {
      setCurrentStep(currentStep + 1);
    });
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleBack=()=>{
    router.push("/")
  }

  const onFinish = () => {
    const formData = { ...form.getFieldsValue(true) };

    console.log("All input values:", formData);
    router.push("/first-time-login");
  };

  const steps = [
    {
      title: "Personal Details",
      content: PersonalDetailsStep,
    },
    {
      title: "Organizational Details",
      content: OrganizationDetailsStep,
    },
  ];

  const renderStepContent = (step: { content: any }) => {
    const StepComponent = step.content;
    return <StepComponent form={form} setDateOfBirth={setDateOfBirth} />;
  };

  console.log("the date imputed", dateOfBirth);

  return (
    <div className=" p-2 bg-[#f5f5f5] shadow-md relative h-full">
      <Form form={form} onFinish={onFinish} layout="vertical">
        <ConfigProvider theme={theme}>
          {/* <Steps current={currentStep}>
          {steps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps> */}
        </ConfigProvider>

        <div className=" mt-2">{renderStepContent(steps[currentStep])}</div>
        {/* <div className=" mt-2">{steps[currentStep].content}</div> */}

        <div className="steps-action mt-8  w-[80%] md:w-[50%] my-4 mx-auto flex justify-between">
          {currentStep > 0 && (
            <Button
              style={{ margin: "0 8px" }}
              className="p-2 font-bold btnBg"
              onClick={handlePrev}
            >
              <IoMdArrowBack />
            </Button>
          )}

          {currentStep === 0 && (
            <Button
              style={{ margin: "0 8px" }}
              className="p-2 font-bold btnBg"
              onClick={handleBack}
            >
              Home
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button type="default" className="btnBg" onClick={handleNext}>
              Next
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button className="btnBg" type="default" htmlType="submit">
              SignUp
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default SignUpStepForm;
