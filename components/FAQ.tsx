// components/FAQ.tsx
"use client";
import React from "react";
import { FAQItem, FAQ_ITEMS } from "@/constants"; // Assuming FAQItem interface is defined
import Accordion from "./Accordion";

const FAQ: React.FC = () => {
  return (
    <section className="my-12 px-8 mx-auto max-w-[1000px]">
      <h2 className="md:text-2xl text-xl font-semibold text-center mb-8">
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
