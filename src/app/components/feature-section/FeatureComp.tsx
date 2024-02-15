import Image from "next/image";
import React from "react";
import icon_1 from "../../../../public/images/feature_1.svg";
const FeatureComp = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="">
      <div className="flex flex-col items-center pt-12">
        <p className="text-center font-bold text-3xl mb-5">
          Some Core Features <br /> that help you run your business
        </p>
        <div className="grid grid-cols-3 py-10 gap-x-7 gap-y-16 w-[80%]">
          {cards.map((card, index) => {
            return (
              <div key={index} className="flex flex-col gap-3 p-3 border  shadow rounded ">
                <div className="_icon">
                  <Image src={icon_1} height={30} width={30} alt="icon" />
                </div>
                <h1 className="font-bold">Advanced User Management</h1>
                <p>
                  Effortlessly manage user roles and permissions with our
                  advanced user management system
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureComp;
