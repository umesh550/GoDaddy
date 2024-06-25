"use client";
import React from "react";
import { FAQItem, FAQ_ITEMS } from "@/constants";
import Accordion from "./Accordion";

const FAQ: React.FC = () => {
  return (
    <section className="my-12 px-8 mx-auto max-w-[1000px] 2xl:max-w-[1300px]">
      <h2 className="md:text-2xl xl:text-3xl 2xl:4xl text-xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>
      {FAQ_ITEMS.map((faqItem: FAQItem, index: number) => (
        <Accordion
          key={index}
          question={faqItem.question}
          ans={faqItem.ans}
          points={faqItem.points}
        />
      ))}
    </section>
  );
};

export default FAQ;
