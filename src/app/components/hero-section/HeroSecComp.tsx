import React from "react";
import leftImg from "../../../../public/images/left-hero-icon.svg";
import rightImg from "../../../../public/images/right-hero-icon.svg";
import person from "../../../../public/images/person.svg";
import shop from "../../../../public/images/shop.svg";
import inShop from "../../../../public/images/inShop.svg.svg";
import Image from "next/image";
import style from "./Hero.module.css";
import { Carousel } from "antd";
const HeroSecComp = () => {
  return (
    <div className="px-3 py-5">
      <Carousel>
        <div className={style.carouselItem}>
          <Image src={leftImg} height={300} width={300} alt="left-img" />
          <div className="textContent text-black">
            <h1 className="text-3xl">Customer-Centric</h1>
            <h1 className="text-3xl">Retailing</h1>
            <p className="w-[85%]">
              Our platform is designed to help retailers create personalized
              shopping experiences, foster lasting connections, and build brand
              loyalty.
            </p>
          </div>
          <Image src={rightImg} alt="right-img" height={300} width={300} />
        </div>
        {/* <div className={style.carouselItem}>
          <Image src={person} height={300} width={300} alt="left-img" />
          <div className="textContent text-black">
            <h1 className="text-3xl">Customer-Centric</h1>
            <h1 className="text-3xl">Retailing</h1>
            <p className="w-[85%]">
              Our platform is designed to help retailers create personalized
              shopping experiences, foster lasting connections, and build brand
              loyalty.
            </p>
          </div>
          <div className="relative z-20">
            <Image
              className=""
              src={shop}
              alt="right-img"
              height={600}
              width={600}
            />
          </div>
        </div> */}
      </Carousel>
    </div>
  );
};

export default HeroSecComp;
