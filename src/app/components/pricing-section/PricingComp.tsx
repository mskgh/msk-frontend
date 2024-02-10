"use client";
import { Card, Checkbox } from "antd";
import React from "react";
import checkIcon from "../../../../public/icons/Tick Square.svg";
import Image from "next/image";
const PricingComp = () => {
  return (
    <section className="bg-[#F3F9FD] flex justify-center py-8">
      <div className="flex flex-col items-center w-[80%]">
        <h1 className="py-5">
          Simple, easy pricing plans <br /> for the application
        </h1>
        <div className="flex gap-10">
          {/* <Card bordered={false} style={{ width: 350 }}>
            <h2 className="py-4">Basic</h2>
            <p className="py-5 flex items-end">
              <h1 className="text-4xl font-bold mr-1">$20</h1>
              <span>/month</span>
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>1 Organization $20 per organization</p>
              </div>

              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>1 Business $15 per business</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>1 Default warehouse free</p>
              </div>
            </div>
            <button className="btn border-2 border-black mt-8 mx-auto">
              Start Free Trail
            </button>
          </Card> */}

          {/* card of card */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h2 className="py-4">Basic</h2>
            <p className="py-5 flex items-end">
              <h1 className="text-4xl font-bold mr-1">$20</h1>
              <span>/month</span>
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <span>
                  <Checkbox className="p-1"></Checkbox>
                </span>
                <p>1 Organization $20 per organization</p>
              </div>

              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                  {/* <Checkbox defaultChecked disabled /> */}
                </span>
                <p>1 Business $15 per business</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>1 Default warehouse free</p>
              </div>
            </div>
            <button className="btn mt-8 mx-auto">Start Fre Trial</button>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h2 className="py-4">Enterprise</h2>
            <p className="py-5 flex items-end">
              <h1 className="text-4xl font-bold mr-1">$20</h1>
              <span>/month</span>
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <span>
                  <Checkbox className="p-1"></Checkbox>
                </span>
                <p>1 Organization $20 per organization</p>
              </div>

              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                  {/* <Checkbox defaultChecked disabled /> */}
                </span>
                <p>1 Business $15 per business</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>1 Default warehouse free</p>
              </div>
            </div>
            <button className="btn mt-8 mx-auto">Choose plan</button>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h2 className="py-4">Advance</h2>
            <p className="py-5 flex items-end">
              <h1 className="text-4xl font-bold mr-1">$20</h1>
              <span>/month</span>
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <span>
                  <Checkbox className="p-1"></Checkbox>
                </span>
                <p>1 Organization $20 per organization</p>
              </div>

              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                  {/* <Checkbox defaultChecked disabled /> */}
                </span>
                <p>1 Business $15 per business</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>1 Default warehouse free</p>
              </div>
            </div>
            <button className="btn mt-8 mx-auto">Choose plan</button>
          </div>

          {/* end of card */}
        </div>
      </div>
    </section>
  );
};

export default PricingComp;
