import React from "react";
import { FaEllipsisVertical, FaRegCircleUser } from "react-icons/fa6";
import ThemeSwitch from "../theme-switch/ThemeSwitch";
import Link from "next/link";
import OrganizationTab from "./OrganizationTab";
import brand from "../../../../public/images/brandLogo.svg";
import Image from "next/image";

const OrganizationComp = () => {
  return (
    <div className="flex flex-col h-screen py-1 relative">
      <header className="bg-white dark:bg-[#1f1e1d] dark:text-white px-5 py-2 sticky top-0 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Link href={"/portal/dashboard"}>
            <Image src={brand} height={40} alt="brand logo" />
          </Link>
        </div>
        <div className="flex gap-x-3">
          <span>
            <ThemeSwitch />
          </span>
        </div>
      </header>
      <main className=" bg-[#fafafb] dark:text-white dark:bg-[#1e1d1d]  h-fit min-h-full">
        <div className="w-[90%] mx-auto  mt-3 ">
          <OrganizationTab />
        </div>
      </main>
    </div>
  );
};

export default OrganizationComp;
