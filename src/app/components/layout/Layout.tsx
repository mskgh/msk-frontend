import React from "react";
import Navbar from "../navbar/Navbar";
import FooterComp from "../footer-section/FooterComp";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="h-fit">{children}</div>
      <FooterComp />
    </div>
  );
};

export default Layout;
