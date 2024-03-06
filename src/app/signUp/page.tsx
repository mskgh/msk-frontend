import Image from "next/image";
import React from "react";
import signUpImg from "../../../public/images/signupImg.svg";
import SignUpStepForm from "../components/signUp-step-form/SignUpStepForm";
import style from "./signUp.module.css";
const page = () => {
  return (
    <div className="w-screen h-screen px-24">
      <div className="gap-x-16 flex flex-row-reverse h-full">
        <div className={`${style.signUp} w-1/2 mt-5 relative  py-24`}>
          <div className="p-0  h-full my-auto ">
            <SignUpStepForm />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-8 w-1/3 h-full rounded p-4">
          <Image src={signUpImg} alt="signUp" />
        </div>
      </div>
    </div>
  );
};

export default page;
