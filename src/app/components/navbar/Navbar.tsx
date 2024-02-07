"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import brand from "../../../../public/images/brandLogo.svg";
import { usePathname } from "next/navigation";
import classNames from "classnames";
const Navbar = () => {
    
const currentPath = usePathname()
  const links = [
    { label: "Home", href: "/" },
    { label: "Feature", href: "/feature" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "FQA", href: "/fqa" },
    { label: "Tutorials", href: "/tutorials" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="px-5 py-2 flex items-center justify-between">
      <nav className="flex items-center justify-between w-[60%]">
        <Link href={"/"}>
          <Image src={brand} height={50} alt="brand logo" />
        </Link>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
                'text-[#0d243b]': link.href === currentPath,
                'text-black': link.href !== currentPath,
                'hover:text-[#0d243b] transition-colors':true
            })}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex w-[30%] gap-x-16">
        <button className="n-btn">Log in</button>
        <button className="a-btn">Get Started Free</button>
      </div>
    </header>
  );
};

export default Navbar;
