import Image from "next/image";
import React from "react";
import icon_1 from "../../../../public/images/feature_1.svg";
const FeatureComp = () => {
  const cards = [
    {
      title: "Advanced User Management",
      des: "Effortlessly manage user roles and permissions with our advanced user management system",
      img: "/images/feature_1.svg",
    },
    {
      title: "Shop Management",
      des: "Streamline your business with our shop management tools, allowing you to easily handle products, orders, and more",
      img: "/icons/SM.svg",
    },
    {
      title: "Warehouse Management",
      des: "Optimize inventory control and logistics with our warehouse management capabilities",
      img: "/icons/WM.svg",
    },
    {
      title: "Budget and Expenditure",
      des: "Track your budget and expenditures seamlessly to maintain financial health",
      img: "/icons/EE.svg",
    },
    {
      title: "Sales Management",
      des: "Boost sales efficiency and effectiveness by utilizing our sales management features",
      img: "/icons/SaM.svg",
    },
    {
      title: "Inventory",
      des: "Efficiently manage your inventory levels and avoid stock outs or excess stock",
      img: "/icons/Inv.svg",
    },
    {
      title: "Automatic Reporting",
      des: "Generate insightful reports automatically, saving you time and effort",
      img: "/icons/Auto.svg",
    },
    {
      title: "Mobile Version",
      des: "Access your tools on the go with our intuitive mobile version",
      img: "/icons/Mob.svg",
    },
    {
      title: "Desktop Version",
      des: "Experience the full power of our application with the desktop version",
      img: "/icons/Des.svg",
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col items-center pt-12">
        <p className="text-center font-bold text-3xl mb-5">
          Some Core Features <br /> that help you run your business
        </p>
        <div className="grid lg:grid-cols-3  sm:grid-cols-1 md:grid-cols-2 py-10 gap-x-7 gap-y-16 w-[80%]">
          {cards.map((card, index) => {
            const { title, des, img } = card;
            return (
              <div
                key={index}
                className="flex flex-col gap-3 p-3 border  shadow rounded hover:transition-colors hover:border-[#364d79]"
              >
                <div className="_icon">
                  <Image src={img} height={30} width={30} alt="icon" />
                </div>
                <h1 className="font-bold">{title}</h1>
                <p>{des}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureComp;
