"use client";
import { useState } from "react";
import AccordionItem, { FAQ } from "./AccordionItem";

const Accordion: React.FC = () => {
  const [clicked, setClicked] = useState<string | number>("0");

  const faqs: FAQ[] = [
    {
      question: "Do I get 24 hours support?",
      answer: "lorem ipsum dolor sit amet velit cumque. Aperiam ab atque i",
    },
    {
      question: "Can I manage multiple store locations from one account??",
      answer:
        "andae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      question: "Is there an offline subscription?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
      question: "Can I customize receipts with my logo and branding?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
      question: "How do I create an account?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
      question: "Is the POS system compatible with my smartphone or tablet?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
  ];

  const handleToggle = (index: string | number) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          faq={faq}
        />
      ))}
    </ul>
  );
};

export default Accordion;
