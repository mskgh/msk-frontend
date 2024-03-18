import React from "react";
import leftImg from "../../../../public/images/left-hero-icon.svg";
import person from "../../../../public/images/person.svg";
import shop from "../../../../public/images/shop.svg";
import inShop from "../../../../public/images/inShop.svg";
import Image from "next/image";
import style from "./Hero.module.css";
const HeroSecComp = () => {
  return (
    <section className="h-80 bg-[#F3F9FD]">
      <div className={style.carouselContainer}>
        <div className={style.carouselTrack}>
          <div className={style.carouselItem}>
            <div >
              <Image src={inShop} height={500} width={400} alt="left-img" />
            </div>
            <div className="textContent ">
              <h1 className="text-lg font-bold">
                Discover How To Track <br /> Your Products
              </h1>
              <p className="w-full">
                Boost your productivity with a simple click of a button.
              </p>
            </div>
          </div>
          <div className={style.carouselItem}>
            <Image src={leftImg} height={300} width={300} alt="left-img" />
            <div className="textContent ">
              <h1 className="text-lg font-bold">
                Customer-Centric <br /> Retailing
              </h1>

              <p className="w-full">
                Our platform is designed to help retailers create personalized
                shopping experiences, foster lasting connections, and build
                brand loyalty.
              </p>
            </div>
          </div>

          <div className={style.carouselItem}>
            <Image src={person} height={300} width={300} alt="left-img" />
            <div className="textContent ">
              <h1 className="text-2xl font-bold">
                Efficiency Through <br /> Technology
              </h1>

              <p className="w-full">
                Our platform is designed to help retailers create personalized
                shopping experiences, foster lasting connections, and build
                brand loyalty.
              </p>
            </div>
          </div>

          <div className={style.carouselItem}>
            <Image src={shop} height={300} width={400} alt="left-img" />
            <div className="textContent ">
              <h1 className="text-lg">
                Elevating Retail <br /> Standards
              </h1>

              <p className="w-full">
                We equip businesses with the digital tools needed to increase
                operational efficiency and deliver exceptional service.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSecComp;
