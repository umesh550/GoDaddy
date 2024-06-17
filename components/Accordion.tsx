"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useState } from "react";

interface AccordionProps {
  question: string;
  ans: string;
  points?: string[];
}

const Accordion: React.FC<AccordionProps> = ({ question, ans, points }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="leading-8 text-sm max-w-[750px] mx-auto">
      <hr className="border-[#111]" />
      <div className="py-6 px-2">
        <div
          onClick={() => setIsActive(!isActive)}
          className="flex items-center cursor-pointer justify-between font-semibold md:text-xl text-base"
        >
          <p>{question}</p>
          <RiArrowDropDownLine
            size={30}
            className={` ${isActive ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        {isActive && (
          <div className="mt-3 font-medium">
            <div>{ans}</div>
            <div>
              {points && (
                <ul className="list-disc list-inside">
                  {points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
