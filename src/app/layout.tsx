import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import FooterComp from "./components/footer-section/FooterComp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Store Keeper",
  description: "This is a POS application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <AntdRegistry>
          {/* <Navbar /> */}
          <main>{children}</main>
          {/* <FooterComp /> */}
        </AntdRegistry>
      </body>
    </html>
  );
}
