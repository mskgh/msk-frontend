import React from "react";
import Rate from "../../../../public/icons/Rate.svg";
import Avata from "../../../../public/images/Avatar Image.svg";
import Image from "next/image";
import { Card } from "antd";
const TestimonialComp = () => {
  const card = [1, 2, 3, 4];

  const cardData = [
    {
      id: "1",
      name: "Sarah T.",
      company: "Small Business Owner",
      message:
        "Using this MSK app has been a game-changer for my small business! It's incredibly intuitive and streamlined, making transactions a breeze. Plus, the reporting features have helped me track sales and inventory like never before. Highly recommended!",
      rate: 3,
    },
    {
      id: "2",
      name: "Mike H.",
      company: "Retail Store Manager",
      message:
        "I've tried several POS systems, but none compare to this app. Its user-friendly interface makes training new staff a snap, and the customizable features cater perfectly to my unique business needs. Thanks to this app, managing my store has never been easier!",
      rate: 5,
    },
    {
      id: "3",
      name: "David S.",
      company: "E-commerce Entrepreneur",
      message:
        "I've been using this POS app for my online store, and I couldn't be happier. It seamlessly integrates with my e-commerce platform, making it simple to process orders and manage inventory in real-time. Plus, the responsive customer support team has been incredibly helpful whenever I've had questions. It's a must-have for any online retailer",
      rate: 6,
    },
    { id: "4", name: "", message: "", rate: 5 },
    { id: "5", name: "", message: "", rate: 3 },
  ];

  return (
    <section className="py-10 flex justify-center">
      <div className="w-[80%] flex flex-col items-center ">
        <h1 className="text-3xl">Customer Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-20">
          {card.map((card, idx) => (
            <Card key={idx}>
              <p className="flex mb-4">
                <Image src={Rate} height={15} alt="rate" />
                <Image src={Rate} height={15} alt="rate" />
                <Image src={Rate} height={15} alt="rate" />
                <Image src={Rate} height={15} alt="rate" />
                <Image src={Rate} height={15} alt="rate" />
              </p>

              <p className="text-normal mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                dicta distinctio voluptatum suscipit tempora consequuntur amet
                minus impedit dolore ipsam sint enim a dolorum? Officiis!
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Image src={Avata} alt="profile" />
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold ">Emmanuel Rahl</h3>
                  <p className="text-normal">
                    Using MSK app has been a game-changer for my small business!
                    It is incredibly intuitive and streamlined, making
                    transactions a breeze. Plus, the reporting features have
                    helped me track sales and inventory like never before.
                    Highly recommended!
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialComp;
