import { Button, Input } from "antd";
import React from "react";
import playStore from "../../../../public/icons/Google Play logo.svg";
import apple from "../../../../public/icons/Apple logo.svg";
import download from "../../../../public/images/phoneDownload.jpg";
import Image from "next/image";
const DownloadComp = () => {
  return (
    <section className="bg-[#1D4771] flex items-center justify-center py-16">
      <div className=" md:w-[80%] flex flex-col md:flex-row relative justify-center  text-white">
        <div className="flex md:w-[60%]   items-center   flex-col  gap-5">
          <h1 className="text-4xl text-center px-3 md:px-0">Download our app for free</h1>
          <p className="text-normal text-center px-2 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare duis cursus, mi quis viverra.
          </p>

          <div className="flex justify-center flex-col md:flex-row items-center gap-6 w-full ">
            <div className="flex w-[80%]  md:w-[55%] ">
              {" "}
              <Input placeholder="Enter your email" />{" "}
            </div>

            <button className="rounded bg-[#FBAF5B] font-semibold px-4 py-2 text-center text-sm">
              Download up
            </button>
          </div>
          <p className="text-normal text-center px-2 md:px-0">
            By clicking Sign Up you are confirming that you agree with our Terms
            and Conditions.
          </p>

          <div className="flex gap-5 justify-center mt-5">
            <button className="flex items-center gap-3 outline-1 outline-white rounded bg-black text-white px-3 py-2 text-center text-sm">
              <span>
                <Image src={playStore} alt="play store" />
              </span>
              <span className="flex flex-col items-start">
                <p className="text-sm">Get it On</p>
                <h4 className="text-2xl font-bold">Google Play</h4>
              </span>
            </button>
            <button className="flex items-center gap-3 rounded bg-black px-3 py-2 text-center text-sm">
              <span>
                <Image src={apple} alt="apple icon" />
              </span>
              <span className="flex flex-col items-start">
                <p className="text-sm">Download on the</p>
                <p className="font-bold text-2xl">App Store</p>
              </span>
            </button>
          </div>
        </div>
        <div className="Image hidden md:flex absolute top-[-4rem] right-[-6rem]">
          <Image src={download} height={400} alt="download app" />
        </div>
      </div>
    </section>
  );
};

export default DownloadComp;
