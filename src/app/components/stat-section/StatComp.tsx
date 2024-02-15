import React from "react";
import style from "./Stat.module.css";
const StatComp = () => {
  return (
    <div className={style.statContainer}>
      <div className=" text-white flex justify-center  absolute  top-0 z-20  w-full h-full gap-20">
        <div className="flex items-center justify-between w-[80%] ">
          <div className="flex flex-col font-bold items-center gap-3">
            <h2 className="text-white text-2xl">Customer Served</h2>
            <p className="text-4xl">21K</p>
          </div>
          <div className="flex flex-col gap-3 font-bold justify-center items-center">
            <h2 className="text-white text-2xl">Transaction Processed</h2>
            <p className="text-4xl">100K</p>
          </div>
          <div className="flex flex-col font-bold gap-3 justify-center items-center">
            <h2 className="text-white text-2xl">Positive Reviews</h2>
            <p className="text-4xl">100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatComp;
