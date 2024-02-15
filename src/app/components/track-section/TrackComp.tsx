import React from "react";
import Phone from "../../../../public/images/phoneService.svg";
import checkIcon from "../../../../public/icons/check-circle.svg";
import Image from "next/image";
const TrackComp = () => {
  return (
    <div className="py-16 flex justify-center">
      <div className="w-[80%] flex justify-between ">
        <div className="track-text w-[60%]">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">
              Keeping track of your <br /> expenses is made easy <br /> with
              this app
            </h1>
            <p className="mt-4 text-normal">
              Effortlessly stay on top of your finances with our intuitive
              application. From tracking daily expenditures to managing budgets,
              our app empowers you to take charge of your financial journey.
              Experience the convenience of comprehensive expense management at
              your fingertips
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="flex gap-5">
              <span>
                <Image src={checkIcon} height={70} alt="check icon" />
              </span>
              <div className="flex flex-col gap-3">
                <h2 className="font-bold">Carefully Design</h2>
                <p className="text-normal">
                  Our application is meticulously crafted with attention to
                  every detail, ensuring an elegant and intuitive user
                  experience
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <span>
                <Image src={checkIcon} height={70} alt="check icon" />
              </span>
              <div className="flex flex-col gap-3">
                <h2 className="font-bold">Choose the App features</h2>
                <p className="text-normal">
                  Tailor your app experience to your unique needs.Our flexible
                  options ensure you get exactly what you require.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <span>
                <Image src={checkIcon} height={70} alt="check icon" />
              </span>
              <div className="flex flex-col gap-3">
                <h2 className="font-bold">Seamless Sync</h2>
                <p className="text-normal">
                  Experience effortless synchronization across all your devices.
                  Your data stays updated in real time, whether you're on your
                  desktop, tablet, or smartphone
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <span>
                <Image src={checkIcon} height={80} alt="check icon" />
              </span>
              <div className="flex flex-col gap-3">
                <h2 className="font-bold">User Interactive</h2>
                <p className="text-normal">
                  Engage and empower your users with our interactive interface.
                  Intuitive controls and dynamic features encourage user
                  involvement, making every interaction a seamless and enjoyable
                  experience.
                </p>
              </div>
            </div>
          </div>
          <button className="n-btn mt-5">Learn more</button>
        </div>
        <div className="track-img w-1/2 flex justify-center">
          <Image src={Phone} height={600} alt="phone" />
        </div>
      </div>
    </div>
  );
};

export default TrackComp;
