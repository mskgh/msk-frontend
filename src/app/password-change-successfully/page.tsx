import Image from "next/image";
import React from "react";
import successSide from "../../../public/images/success-side.svg";
import successMark from "../../../public/images/success-mark.svg";
import bigEllipse from "../../../public/images/downEllipse.svg";
import mdEllipse from "../../../public/icons/Ellipse_md.svg";
import ellipsePlus from "../../../public/icons/Ellipse_plus.svg";

const page = () => {
  return (
    <div className="w-screen h-screen  px-18">
      <div className="gap-x-2 flex flex-row-reverse h-full">
        <div className={`w-full md:w-2/3 p-8`}>
          <div className="flex w-full justify-center relative p-2 bg-[#f5f5f5] shadow-md items-center h-full my-auto">
            <div className="flex flex-col items-center w-full">
              {/* Icons used at the background */}
              <div className="absolute bottom-[-2rem] left-1/3">
                <Image
                  src={bigEllipse}
                  height={150}
                  width={150}
                  alt="ellipse"
                />
              </div>
              <div className="absolute left-20 bottom-16">
                <Image src={ellipsePlus} width={70} height={70} alt="ellipse" />
              </div>
              <div className="absolute right-20 bottom-20">
                <Image src={mdEllipse} width={20} height={30} alt="ellipse" />
              </div>
              <div className="absolute left-side left-0 top-56">
                <Image src={mdEllipse} width={20} height={30} alt="ellipse" />
              </div>

              <div className="absolute near-logo left-[60%] top-5">
                <Image src={mdEllipse} width={10} height={20} alt="ellipse" />
              </div>
              {/* end of icons */}
              <div className="flex flex-col items-center">
                <Image
                  src={successMark}
                  height={150}
                  width={150}
                  alt="success mark"
                />
                <h4 className="text-[#1d4771] font-bold">Password Changed!</h4>
                <p className="text-[#1d4771]">
                  You can now Login to your account.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-center gap-y-8 h-full py-8  rounded">
          <Image src={successSide} height={560} alt="otp" />
        </div>
      </div>
    </div>
  );
};

export default page;
