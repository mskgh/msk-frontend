import Image from "next/image";
import React from "react";
import pwdImg from "../../../public/images/forgetPwd.svg";
import ChangePwd from "../components/change-password/ChangePwd";

const page = () => {
  return (
    <div className="w-screen h-screen  px-18">
      <div className="gap-x-16 flex flex-row-reverse h-full">
        <div className={`w-full md:w-2/3 `}>
          <div className="flex justify-center items-center md:p-8 h-full my-auto">
            <ChangePwd />
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-center gap-y-8 w-1/3 h-full rounded p-4">
          <Image src={pwdImg} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default page;
