import React, { Suspense } from "react";
import style from "./tutorial.module.css";
import { BsSearch } from "react-icons/bs";
import VideoComponent from "../components/video-comp/Video";
import Layout from "../components/layout/Layout";
const TutorialPage = () => {
  return (
    <Layout>
      <div className={`${style.tutorialContainer}`}>
        <div className=" text-white flex justify-center  absolute  top-0 z-20  w-full h-full gap-20">
          <div className="flex items-center w-[80%] ">
            <h1 className="text-4xl">Tutorials</h1>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto py-10">
        <div className="w-[40%] mx-auto bg-[#e8e8e8] flex items-center justify-between rounded-md shadow-md px-2">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for Video"
            className="p-2 bg-[#e8e8e8] outline-none w-[80%]"
          />
          <span>
            <BsSearch />
          </span>
        </div>
        <div className="videosSection w-full">
          <div>
            <h1>Organizations</h1>
            <div className="videos">
              <div className="videoCard w-64 overflow-hidden">
                <p className="p-1 bg-slate-400">video 1</p>
                <div className="w-full">
                  <Suspense fallback={<p>Loading video...</p>}>
                    <VideoComponent />
                  </Suspense>
                </div>
                <h5 className="text-center">How to create an organization</h5>
              </div>
            </div>
          </div>
          <div>
            <h1>Business</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TutorialPage;
