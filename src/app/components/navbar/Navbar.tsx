"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import brand from "../../../../public/images/brandLogo.svg";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const currentPath = usePathname();
  const [mobileNav, showMobileNav] = useState(false);

  const toggleNav = () => {
    showMobileNav(!mobileNav);
    console.log("Toggle navigation", mobileNav);
  };
  const links = [
    { label: "Home", href: "/" },
    { label: "Feature", href: "/feature" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "FQA", href: "/FAQ" },
    { label: "Tutorials", href: "/tutorials" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <header className=" bg-[#F3F9FD] z-50 sticky py-2 top-0">
      <div className="px-5  flex justify-between items-center z-40 relative">
        <div className="flex w-2/3 justify-between md:justify-start items-center">
          <button className="flex md:hidden"  onClick={toggleNav}>
          <FaBars />
        </button>
        <Link href={"/"}>
          <Image src={brand} height={50} alt="brand logo" />
        </Link>
        <nav
          className={classNames({
            "flex flex-col px-3 pb-4 absolute w-[40%] left-0 top-12 bg-[#F3F9FD] gap-3":
              true,
            hidden: mobileNav === false,
          })}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames({
                " font-bold py-1 px-3 border-b-2 border-[#517292]":
                  link.href === currentPath,
                "text-black py-1 px-3 ": link.href !== currentPath,
                "hover:border-b-[#517292]  hover:border-b-2 transition-colors":
                  true,
              })}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex">
            <Link
              href={"/pricing"}
              className=" px-3  py-1 rounded  border-[0.5px] font-bold bg-[#1d4771] text-white"
            >
              Get Started
            </Link>
          </div>
        </nav>

        <nav className=" hidden md:flex ml-12 items-center justify-around w-[80%] ">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames({
                " font-bold py-1 px-3 border-b-2 border-[#517292]":
                  link.href === currentPath,
                "text-black py-1 px-3 ": link.href !== currentPath,
                "hover:border-b-[#517292]  hover:border-b-2 transition-colors":
                  true,
              })}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        </div>
        

        <div className="flex  gap-x-7 md:gap-x-16">
          <Link
            href={"/login"}
            className="text-black px-3 py-1 rounded border-[#0034b9] border-[0.5px] font-bold hover:bg-[#1d4771] hover:text-white"
          >
            Log in
          </Link>
          <Link
            href={"/pricing"}
            className="hidden md:flex px-3  py-1 rounded  border-[0.5px] font-bold bg-[#1d4771] text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
