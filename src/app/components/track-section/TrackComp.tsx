import React from "react";
import Phone from "../../../../public/images/phoneService.svg";
import checkIcon from "../../../../public/icons/check-circle.svg";
import Image from "next/image";
const TrackComp = () => {
  return (
    <div className="py-16 flex justify-center">
      <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row justify-between ">
        <div className="track-text w-full md:w-[70%]">
          <div className="flex flex-col ">
            <h1 className="text-3xl font-bold text-center md:text-left">
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
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-8 p-2 md:p-0 mt-8">
            <div className="flex gap-5">
              <span>
                <Image src={checkIcon} height={90} alt="check icon" />
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
                <Image src={checkIcon} height={90} alt="check icon" />
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
                <Image src={checkIcon} height={120} alt="check icon" />
              </span>
              <div className="flex flex-col gap-3">
                <h2 className="font-bold">Seamless Sync</h2>
                <p className="text-normal">
                  Experience effortless synchronization across all your devices.
                  Your data stays updated in real time, whether you are on your
                  desktop, tablet, or smartphone
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <span>
                <Image src={checkIcon} height={150} alt="check icon" />
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
          <div className="flex justify-center md:justify-start mb-5 md:mb-0">
            <button className="n-btn mt-5">Learn more</button>
          </div>
        </div>
        <div className="track-img w-1/2 mx-auto  flex justify-center">
          <Image src={Phone} height={600} alt="phone" />
        </div>
      </div>
    </div>
  );
};

export default TrackComp;
