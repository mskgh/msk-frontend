import React from "react";
import laptop from "../../../../public/images/laptop.svg";
import Image from "next/image";
const ServiceComp = () => {
  return (
    <div className="bg-[#1D4771] flex justify-center py-5">
      <div className="flex w-[90%] justify-between  pt-10 ">
        <div className="Image">
          <Image src={laptop} height={900} alt="laptop" />
        </div>
        <div className="service-text flex flex-col gap-5 text-white">
          <h1 className="font-bold text-2xl">
            MSK simplifies the services <br /> of your web applications{" "}
          </h1>
          <p className="text-[#e2e2e2]">
            Discover a new level of streamlined efficiency with our cutting-edge
            application. Seamlessly manage every aspect of your web services
            with advanced user management, shop and warehouse oversight, budget
            tracking, sales optimization, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceComp;
