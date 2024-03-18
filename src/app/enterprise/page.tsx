import Image from "next/image";
import React from "react";
import enterpriseImg from "../../../public/images/business_shop.svg";
import EnterpriseComp from "../components/enterprise-section/EnterpriseComp";

const page = () => {
  return (
    <div className="w-screen h-screen  px-18">
      <div className="gap-x-16 flex flex-row-reverse h-full">
        <div className={`w-full md:w-2/3 `}>
          <div className="flex justify-center items-center p-8 h-full my-auto">
            <EnterpriseComp />
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-center gap-y-8 w-1/3 h-full  rounded p-4">
          <Image src={enterpriseImg} alt="otp" />
        </div>
      </div>
    </div>
  );
};

export default page;
