import Image from "next/image";
import React from "react";
import icon_1 from "../../../../public/images/feature_1.svg";
const FeatureComp = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center pt-12">
        <p className="text-center font-bold text-2xl">
          Some Core Features <br /> that help you run your business
        </p>
        <div className="grid grid-cols-3 py-10 gap-y-10 w-[80%]">
          <div className="flex flex-col gap-3">
            <div className="_icon">
              <Image src={icon_1} height={30} width={30} alt="icon" />
            </div>
            <h1 className="font-bold">Advanced User Management</h1>
            <p>
              Effortlessly manage user roles and permissions with our advanced
              user management system
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="_icon">
              <Image src={icon_1} height={30} width={30} alt="icon" />
            </div>
            <h1 className="font-bold">Advanced User Management</h1>
            <p>
              Effortlessly manage user roles and permissions with our advanced
              user management system
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="_icon">
              <Image src={icon_1} height={30} width={30} alt="icon" />
            </div>
            <h1 className="font-bold">Advanced User Management</h1>
            <p>
              Effortlessly manage user roles and permissions with our advanced
              user management system
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="_icon">
              <Image src={icon_1} height={30} width={30} alt="icon" />
            </div>
            <h1 className="font-bold">Advanced User Management</h1>
            <p>
              Effortlessly manage user roles and permissions with our advanced
              user management system
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="_icon">
              <Image src={icon_1} height={30} width={30} alt="icon" />
            </div>
            <h1 className="font-bold">Advanced User Management</h1>
            <p>
              Effortlessly manage user roles and permissions with our advanced
              user management system
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="_icon">
              <Image src={icon_1} height={30} width={30} alt="icon" />
            </div>
            <h1 className="font-bold">Advanced User Management</h1>
            <p>
              Effortlessly manage user roles and permissions with our advanced
              user management system
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="_icon">
              <Image src={icon_1} height={30} width={30} alt="icon" />
            </div>
            <h1 className="font-bold">Advanced User Management</h1>
            <p>
              Effortlessly manage user roles and permissions with our advanced
              user management system
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="_icon">
              <Image src={icon_1} height={30} width={30} alt="icon" />
            </div>
            <h1 className="font-bold">Advanced User Management</h1>
            <p>
              Effortlessly manage user roles and permissions with our advanced
              user management system
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="_icon">
              <Image src={icon_1} height={30} width={30} alt="icon" />
            </div>
            <h1 className="font-bold">Advanced User Management</h1>
            <p>
              Effortlessly manage user roles and permissions with our advanced
              user management system
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComp;
