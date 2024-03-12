import React from "react";
import style from "./Feature.module.css";
import FeatureComp from "../components/feature-section/FeatureComp";
import Layout from "../components/layout/Layout";
const FeaturePage = () => {
  return (
    <Layout>
      <div className="flex flex-col">
      <div className={`${style.featureContainer}`}>
        <div className=" text-white flex justify-center  absolute  top-0 z-20  w-full h-full gap-20">
          <div className="flex flex-col gap-4 items-center justify-center md:w-[80%] ">
            <h1 className="text-4xl ">Feature Request</h1>
            <p className="text-normal md:w-1/2 text-center px-3">
              At mystorekeeper, we are committed to delivering a powerful and
              efficient business management solution. We understand that the
              needs of businesses and organizations are constantly evolving, and
              your insights play a vital role in shaping the future of our
              platform. We are committed to evolving with the changing landscape
              of business, and your feature requests are instrumental in this
              journey.
            </p>
          </div>
        </div>
      </div>
      <FeatureComp />
      <div className="flex flex-col md:flex-row w-full md:w-[80%] mx-auto py-12 gap-x-8">
        <div className="contact-form mx-auto w-[80%] md:w-[60%]">
          <h1 className="text-2xl text-[#1D4771] mb-3">Request a feature</h1>
          <form className="form flex flex-col gap-5">
            <input
              type="text"
              className="p-2 rounded border-2 border-[#1D4771] outline-none"
              placeholder="Name"
            />
            <input
              type="email"
              className="p-2 rounded border-2 border-[#1D4771] outline-none"
              placeholder="Email"
            />
            <textarea
              rows={3}
              placeholder="Message"
              className="p-2 outline-none border-2 border-[#1D4771]"
            ></textarea>

            <button className="a-btn mt-4">Submit</button>
          </form>
        </div>
        <div className=" p-5 flex mt-8 md:mt-0">
          <span className="h-[90%] border border-[#1D4771] my-auto"></span>
          <div className="flex flex-col gap-3 ml-8 text-[#1D4771] ">
            <div className="flex flex-col gap-1 font-bold">
              <h6>Phone Number</h6>
              <p>+233548433878</p>
            </div>
            <div className="flex flex-col gap-1 font-bold">
              <h6>Email</h6>
              <p>info@mystorekeeper.com</p>
            </div>
            <div className="flex flex-col gap-1 font-bold">
              <h6>Address</h6>
              <p>Accra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
    
  );
};

export default FeaturePage;
