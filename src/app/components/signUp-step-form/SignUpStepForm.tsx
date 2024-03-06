"use client"
import theme from '@/app/Theme/themeConfig';
import { Button, ConfigProvider, Form, Select, Steps } from 'antd';
import React, { useState } from 'react'
import { steps } from './formSteps';
const { Step } = Steps;
const SignUpStepForm:React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [form] = Form.useForm();
   
    const handleNext = () => {
      form.validateFields().then(() => {
        setCurrentStep(currentStep + 1);
      });
    };

    const handlePrev = () => {
      setCurrentStep(currentStep - 1);
    };

    const onFinish = () => {
      const formData = { ...form.getFieldsValue(true) }

      console.log("All input values:", formData);
    };


  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <ConfigProvider theme={theme}>
        {/* <Steps current={currentStep}>
          {steps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps> */}
      </ConfigProvider>

      <div className=" mt-8  flex justify-center  h-full">{steps[currentStep].content}</div>

      <div className="steps-action">
        {currentStep > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
            Previous
          </Button>
        )}
        {currentStep < steps.length - 1 && (
          <Button type="dashed" onClick={handleNext}>
            Next
          </Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button type="dashed" htmlType="submit">
            SignUp
          </Button>
        )}
      </div>
    </Form>
  );
}

export default SignUpStepForm