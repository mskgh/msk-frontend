import React from "react";
import Accordion from "../accordion/Accordion";

const FAQComp = () => {
  return (
    <section id="fqa" className="faq flex justify-center">
      <div className="md:w-[80%]  flex flex-col items-center pt-12 ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl text-center">
            Frequently Ask Questions{" "}
          </h1>
          <p className="text-normal text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="accordionContainer flex justify-center w-[90%] md:w-[70%] mt-10">
          <Accordion />
        </div>

        <div className="my-8 flex flex-col items-center">
          <h1 className="2xl mb-4 font-bold">Still have a question?</h1>
          <button className="a-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default FAQComp;
