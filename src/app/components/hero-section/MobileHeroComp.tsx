import React from "react";
import { Carousel } from "antd";
import person from "../../../../public/images/person.svg";
import leftImg from "../../../../public/images/left-hero-icon.svg";
import shop from "../../../../public/images/shop.svg";
import inShop from "../../../../public/images/inShop.svg";
import style from "./Hero.module.css";
import Image from "next/image";

const MobileHeroComp = () => {
  return (
    <div>
      <Carousel autoplay>
        <div className=" bg-[#d8e0f0] relative h-[20rem]">
          <div className="w-full h-full">
            <Image
              src={inShop}
              className="w-full h-full"
              object-fit="cover"
              alt="person"
            />
          </div>
          <div className="absolute bottom-8 mx-auto left-0 right-0 p-2 bg-white rounded shadow w-[90%]">
            <h1 className="text-2xl font-bold mb-2">
              Discover How To Track Your Products
            </h1>
            <p className="w-full text-[#364d79]">
              Our platform is designed to help retailers create personalized
              shopping experiences, foster lasting connections, and build brand
              loyalty.
            </p>
          </div>
        </div>
        <div className=" bg-[#d8e0f0] relative h-[20rem]">
          <div className="w-full h-full">
            <Image
              src={leftImg}
              className="w-full h-full"
              object-fit="cover"
              alt="person"
            />
          </div>
          <div className="absolute bottom-8 mx-auto left-0 right-0 p-2 bg-white rounded shadow w-[90%]">
            <h1 className="text-2xl font-bold mb-2">
              Customer-Centric Retailing
            </h1>
            <p className="w-full text-[#364d79]">
              Our platform is designed to help retailers create personalized
              shopping experiences, foster lasting connections, and build brand
              loyalty.
            </p>
          </div>
        </div>
        <div className=" bg-[#d8e0f0] relative h-[20rem]">
          <div className="w-full h-full">
            <Image
              src={person}
              className="w-full h-full"
              object-fit="cover"
              alt="person"
            />
          </div>
          <div className="absolute bottom-8 mx-auto left-0 right-0 p-2 bg-white rounded shadow w-[90%]">
            <h1 className="text-2xl font-bold mb-2">
              Efficiency Through Technology
            </h1>
            <p className="w-full text-[#364d79]">
              Our platform is designed to help retailers create personalized
              shopping experiences, foster lasting connections, and build brand
              loyalty.
            </p>
          </div>
        </div>
        <div className=" bg-[#d8e0f0] relative h-[20rem]">
          <div className="w-full h-full">
            <Image
              src={shop}
              className="w-full h-full"
              object-fit="cover"
              alt="person"
            />
          </div>
          <div className="absolute bottom-8 mx-auto left-0 right-0 p-2 bg-white rounded shadow w-[90%]">
            <h1 className="text-2xl font-bold mb-2">
              Elevating Retail Standards
            </h1>
            <p className="w-full text-[#364d79]">
              We equip businesses with the digital tools needed to increase
              operational efficiency and deliver exceptional service.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MobileHeroComp;
