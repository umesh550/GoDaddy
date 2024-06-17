"use client";
import React from "react";
import { FAQ_ITEMS } from "@/constants";
import { RiArrowDropDownLine } from "react-icons/ri";
import Accordion from "./Accordion";
const FAQ = () => {
  return (
    <section className="my-12 px-8 mx-auto max-w-[1000px]">
      <h2 className="md:text-2xl text-xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>
      {FAQ_ITEMS.map((faqItem, index) => (
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
