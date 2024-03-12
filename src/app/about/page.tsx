import React from "react";
import style from "./about.module.css";
import Image from "next/image";
import about_1 from "../../../public/images/about_1.svg";
import about_2 from "../../../public/images/about_2.svg";
import about_3 from "../../../public/images/about_3.svg";
import about_4 from "../../../public/images/about_4.svg";
import about_5 from "../../../public/images/about_5.svg";
import about_6 from "../../../public/images/about_6.svg";
import about_7 from "../../../public/images/about_7.svg";
import about_8 from "../../../public/images/about_8.svg";
import Layout from "../components/layout/Layout";
const AboutPage = () => {
  return (
    <Layout>
      <section className="flex flex-col  bg-[#fafafa]">
      <div className={`${style.aboutContainer}`}>
        <div className=" text-white flex justify-center  absolute  top-0 z-20  w-full h-full gap-20">
          <div className="flex items-center justify-center w-[80%] ">
            <h1 className="text-4xl"> ABOUT US</h1>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto mb-8">
        <div className="flex flex-col md:flex-row py-4 items-center justify-between md:px-10 text-[#1D4771]">
          <div className=" md:w-[60%] mt-10 md:mt-0">
            <h4 className="font-bold text-3xl text-center md:text-left mb-4">
              Mission
            </h4>
            <p className="text-center md:text-left  md:w-[80%]">
              Our mission is to provide a centralized place for organizations
              ranging from smaller to larger ones to efficiently manage their
              businesses without worrying about operational overhead.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <Image src={about_1} height={400} width={400} alt="mission" />
          </div>
        </div>

        <div className="flex flex-col-reverse  md:flex-row gap-2 py-4 items-center justify-between md:px-10 text-[#1D4771]">
          <div>
            <Image src={about_2} height={400} width={400} alt="mission" />
          </div>
          <div className=" md:w-[60%] mt-10 md:mt-0">
            <h4 className="font-bold text-3xl mb-4 text-center md:text-left">
              Reliable Support
            </h4>
            <p className="md:w-[80%] text-center md:text-left">
              We stand by our clients every step of the way. Our responsive
              customer support ensures that our clients have a reliable partner
              to assist them whenever they need assistance or guidance.
            </p>
          </div>
        </div>
        <div className="flex gap-2 py-4 items-center justify-between  text-[#1D4771] md:px-10 flex-col md:flex-row ">
          <div className="md:w-[60%] mt-10 md:mt-0">
            <h4 className="font-bold text-3xl mb-4 text-center md:text-left">
              Continuous Learning
            </h4>
            <p className="md:w-[80%] text-center md:text-left">
              We are on a journey of continuous learning and improvement. We
              actively seek feedback from our clients and use it to enhance our
              system, adapting to evolving business needs.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <Image src={about_3} height={400} width={400} alt="mission" />
          </div>
        </div>

        <div className="flex gap-2 py-4 items-center justify-between text-[#1D4771] md:px-10 flex-col-reverse md:flex-row">
          <div className="mt-8 md:mt-0">
            <Image src={about_4} height={400} width={400} alt="mission" />
          </div>

          <div className="md:w-[60%] mt-10 md:mt-0">
            <h4 className="font-bold text-3xl mb-4 text-center md:text-left">
              Customer-Centric Excellence
            </h4>
            <p className="md:w-[80%] text-center md:text-left">
              We prioritize the needs and satisfaction of our customers above
              all else. Our shop management system is designed with the user
              experience in mind, ensuring efficiency, convenience, and a
              seamless shopping process.
            </p>
          </div>
        </div>
        <div className="flex gap-2 py-4 items-center justify-between  text-[#1D4771] md:px-10 flex-col md:flex-row">
          <div className="md:w-[60%] mt-10 md:mt-0">
            <h4 className="font-bold text-3xl mb-4 text-center md:text-left">
              {" "}
              Innovation in Simplification
            </h4>
            <p className="md:w-[80%] text-center md:text-left">
              We continuously explore innovative ways to simplify shop
              management for our clients. Our platform leverages cutting-edge
              technology to streamline inventory management, sales tracking, and
              customer interactions.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <Image src={about_5} height={400} width={400} alt="mission" />
          </div>
        </div>
        <div className="flex gap-2 py-4 items-center justify-between  text-[#1D4771] md:px-10 flex-col-reverse md:flex-row">
          <div>
            <Image src={about_6} height={400} width={400} alt="mission" />
          </div>
          <div className="md:w-[60%] my-10 md:mt-0">
            <h4 className="font-bold text-3xl mb-4 text-center md:text-left">
              Transparent Integrity
            </h4>
            <p className="md:w-[80%] text-center md:text-left">
              We conduct business with utmost honesty and transparency. Our
              commitment to integrity means that our customers can trust us to
              provide accurate data, fair pricing, and reliable support.
            </p>
          </div>
        </div>

        <div className="flex gap-2 py-4 items-center justify-between  text-[#1D4771] md:px-10 flex-col md:flex-row">
          <div className="md:w-[60%] mb-7 md:mb-0">
            <h4 className="font-bold text-3xl mb-4 text-center md:text-left">
              Collaborative Growth
            </h4>
            <p className="md:w-[80%] text-center md:text-left">
              We believe in the power of collaboration. We work closely with our
              clients to understand their unique needs and adapt to our system
              to help their businesses flourish
            </p>
          </div>
          <div>
            <Image src={about_7} height={400} width={400} alt="mission" />
          </div>
        </div>
        <div className="flex gap-2 py-4 items-center justify-between  text-[#1D4771] md:px-10 flex-col-reverse md:flex-row">
          <div>
            <Image src={about_8} height={400} width={400} alt="mission" />
          </div>
          <div className="md:w-[60%]">
            <h4 className="font-bold text-3xl mb-4 text-center md:text-left">Empowering Knowledge</h4>
            <p className="md:w-[80%] text-center md:text-left">
              We empower shop owners with knowledge. Our system provides
              insights and analytics that enable data-driven decision-making,
              helping our clients make informed choices to drive success
            </p>
          </div>
        </div>
      </div>
    </section>
    </Layout>
    
  );
};

export default AboutPage;
