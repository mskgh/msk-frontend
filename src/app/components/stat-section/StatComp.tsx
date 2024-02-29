"use client";
import React from "react";
import style from "./Stat.module.css";
import CountUp from "react-countup";
const StatComp = () => {
  return (
    <div className={`${style.statContainer}`}>
      <div className=" text-white flex justify-center  absolute  top-0 z-20  w-full h-full gap-20">
        <div className="py-4 md:py-0 flex flex-col md:flex-row gap-3    items-center justify-between w-[80%] ">
          <div className="flex flex-col font-bold items-center gap-2 md:gap-3 ">
            <h2 className="text-white text-2xl">Customer Served</h2>
            <div className="flex items-center text-4xl">
              <CountUp className="text-4xl" duration={10} end={100} />
              <span>K</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 font-bold justify-center items-center">
            <h2 className="text-white text-2xl">Transaction Processed</h2>
            <div className="flex items-center text-4xl">
              <CountUp className="text-4xl" duration={10} end={100} />
              <span>K</span>
            </div>
          </div>
          <div className="flex flex-col font-bold gap-2 md:gap-3 justify-center items-center">
            <h2 className="text-white text-2xl">Positive Reviews</h2>
            <div className="flex items-center text-4xl">
              <CountUp className="text-4xl" duration={10} end={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatComp;
