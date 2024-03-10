import Image from "next/image";
import React from "react";
import signUpImg from "../../../public/images/signupImg.svg";
import SignUpStepForm from "../components/signUp-step-form/SignUpStepForm";
import style from "./signUp.module.css";
const page = () => {
  return (
    <div className="w-screen h-screen px-18">
      <div className="gap-x-16 flex flex-row-reverse h-full">
        <div className={`${style.signUp} w-full md:w-2/3 relative`}>
          <div className="pr-8 py-4 h-full my-auto ">
            <SignUpStepForm />
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-center gap-y-8 w-1/3 h-full rounded p-4">
          <Image src={signUpImg} alt="signUp" />
        </div>
      </div>
    </div>
  );
};

export default page;
