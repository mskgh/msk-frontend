"use client";
import { useRef } from "react";

export interface FAQ {
  question: string;
  answer: string;
}

interface AccordionItemProps {
  faq: FAQ;
  active: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  faq,
  active,
  onToggle,
}) => {
  const { question, answer } = faq;
  const contentEl = useRef<HTMLDivElement>(null);

  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button " onClick={onToggle}>
        {question}
        <span className="control">{active ? "—" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
