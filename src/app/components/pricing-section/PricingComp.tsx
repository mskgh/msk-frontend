"use client";
import React from "react";
import checkIcon from "../../../../public/icons/Tick Square.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PricingComp = () => {
  const router = useRouter();
  const basicPlan = () => {
    router.push("/signUp");
  };

  const enterpriseSubscription = () => {
    router.push("/enterprise");
  };
  return (
    <section className="bg-[#F3F9FD] flex justify-center items-center py-10">
      <div className="flex flex-col justify-center items-center w-[80%]">
        <h1 className="pb-8 font-bold text-center text-3xl">
          Simple, easy pricing plans <br /> for the application
        </h1>
        <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* card of card */}
          <div className="flex flex-col h-fit max-w-sm px-5 py-5 bg-white border-2 hover:border-[#FBAF5B] border-gray-200 rounded-lg shadow">
            <h2 className="font-bold text-2xl md:text-lg text-center md:text-left">
              Basic
            </h2>
            <div className="py-5 flex justify-center md:justify-start items-end">
              <h1 className="text-4xl font-bold mr-0 md:mr-1">$20</h1>
              <span>/month</span>
            </div>
            <div className="mb-4">
              <h6>
                Flexible pricing without monthly fees and a 5% fee per
                transaction.
              </h6>
            </div>
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
                <p>2 Shops 1 free. $10 per shop</p>
              </div>

              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>5 User management free</p>
              </div>

              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>2 login users</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Shared infrastructure</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>24 hours support</p>
              </div>
            </div>
            <button
              onClick={basicPlan}
              className="btn mt-8 mx-auto transition-colors hover:bg-black hover:text-white"
            >
              Start Fre Trial
            </button>
          </div>
          <div className="flex flex-col h-fit max-w-sm p-5 bg-white border-2 border-gray-200 hover:border-[#FBAF5B] rounded-lg shadow">
            <h2 className="font-bold text-2xl md:text-lg text-center md:text-left">
              Advance
            </h2>
            <div className="py-5  flex justify-center md:justify-start items-end">
              <h1 className="text-4xl font-bold mr-0 md:mr-1">$60</h1>
              <span>/month</span>
            </div>
            <div className="mb-4">
              <h6>
                Monthly pricing that automatically adjusts based on your
                transaction volume.
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Unlimited organization. $30 per organization</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Unlimited business. $20 per business</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Unlimited warehouse $15 per warehouse</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Unlimited shops. $10 per shop</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Unlimited user management. $5 per user</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Unlimited login users</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>24 hours support</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Advance Logging</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Shared Infrastructure</p>
              </div>
            </div>
            <button
              onClick={basicPlan}
              className="btn mt-8 mx-auto transition-colors hover:bg-black hover:text-white"
            >
              Choose plan
            </button>
          </div>
          <div className="flex flex-col h-fit max-w-sm p-5 bg-white border-2 border-gray-200 rounded-lg hover:border-[#FBAF5B] shadow">
            <h2 className="text-bold text-2xl md:text-lg text-center md:text-left">
              Enterprise
            </h2>
            <div className="py-5 flex justify-center md:justify-start items-end">
              <h1 className="text-4xl font-bold mr-0 md:mr-1">$100</h1>
              <span>/month</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Custom Domain Name</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Unlimited organization. $50 per organization</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Unlimited business. $40 per business</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Unlimited warehouse $30 per warehouse</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Unlimited shops. $20 per shop</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Unlimited user management. $10 per user</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Unlimited login users</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>24 hours support</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Advanced logging</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src={checkIcon} alt="check icon" />
                </span>
                <p>Dedicated Infrastructure</p>
              </div>
            </div>
            <button
              onClick={enterpriseSubscription}
              className="btn mt-8 mx-auto transition-colors hover:bg-black hover:text-white"
            >
              Choose plan
            </button>
          </div>

          {/* end of card */}
        </div>
      </div>
    </section>
  );
};

export default PricingComp;
