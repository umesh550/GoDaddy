"use client";

import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface AccordionProps {
  question: string;
  ans: string;
  points?: string[];
}

const Accordion: React.FC<AccordionProps> = ({ question, ans, points }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="leading-8 text-sm sm:text-base md:text-lg max-w-[750px] xl:max-w-[1000px] 2xl:max-w-[1200px] mx-auto">
      <hr className="border-[#111]" />
      <div className="py-6 px-2">
        <div
          onClick={() => setIsActive(!isActive)}
          className="flex items-center cursor-pointer justify-between font-semibold text-base sm:text-lg md:text-xl"
        >
          <p className="text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
            {question}
          </p>
          <RiArrowDropDownLine
            size={30}
            className={`transform transition-transform duration-300 ${
              isActive ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        {isActive && (
          <div className="mt-3 font-medium text-sm sm:text-base md:text-base xl:text-lg 2xl:text-xl leading-9">
            <div>{ans}</div>
            {points && (
              <ul className="list-disc list-inside mt-2">
                {points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
