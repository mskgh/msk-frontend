import React from "react";
import Rate from "../../../../public/icons/Rate.svg";
import Avata from "../../../../public/images/Avatar Image.svg";
import Image from "next/image";
import { Card } from "antd";
const TestimonialComp = () => {
  const card = [1, 2, 3, 4];
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem delectus eveniet nemo expedita nisi repellendus sunt
                    repudiandae quisquam aliquam officiis obcaecati dolorem.
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
