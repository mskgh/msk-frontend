"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FooterComp = () => {
  return (
    <section className="flex justify-center py-16 bg-[#1d4771]">
      <div className="w-[80%] flex flex-col">
        <div className="flex justify-between pb-10 border-b border-b-white">
          <h1 className="text-lg font-bold text-white">
            Start your 30 days trial <br /> with us
          </h1>
          <div>
            <button className="rounded px-4 py-2 font-bold  flex bg-white text-[#1d4771] hover:bg-white">
              Contact us
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="aboutUs flex flex-col gap-5 w-[30%] text-white">
            <h3>About Us</h3>
            <p className="text-normal">
              MSK to provide a centralized place for organizations ranging from
              smaller to larger ones to efficiently manage their businesses
              without worrying about operational overhead.
            </p>
            <div className="socialIcon text-white flex gap-4">
              <Link href={"/social"}>
                <FaTwitter />
              </Link>
              <Link href={"/social"}>
                <FaFacebookF />
              </Link>

              <Link href={"/social"}>
                <FaInstagram />
              </Link>
              <Link href={"/social"}>
                <FaGithub />
              </Link>
            </div>
          </div>
          <div className="nav grid grid-cols-3 text-white w-[60%]">
            <div className="flex flex-col gap-5">
              <h1 className="text-white font-bold ">Company</h1>
              <div className="flex flex-col gap-2 text-normal text-sm hover:text-white text-[#e9e8e8]">
                <Link href={"/about"}>About</Link>
                <Link href={"/feature"}>Features</Link>
                <Link href={"/work"}>Work</Link>
                <Link href={"/career"}>Career</Link>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-5">
                <h1 className="text-white font-bold ">Help</h1>
                <div className="flex flex-col gap-2 text-normal hover:text-white text-sm text-[#e9e8e8]">
                  <Link href={"/about"}>Customer Support</Link>
                  <Link href={"/feature"}>Delivery Detail</Link>
                  <Link href={"/work"}>Term & Condition</Link>
                  <Link href={"/career"}>Privacy Policy</Link>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-5">
                <h1 className="text-white font-bold ">Resources</h1>
                <div className="flex flex-col gap-2 text-normal hover:text-white text-sm text-[#e9e8e8]">
                  <Link href={"/about"}>Development Tutorial</Link>
                  <Link href={"/feature"}>Blog</Link>
                  <Link href={"/work"}>Youtube</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyRight mt-8 ">
          <p className="text-xs text-[#d8d7d7]">
            &copy; Copyrights {new Date().getFullYear()} Mystorekeeper. All
            rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterComp;
