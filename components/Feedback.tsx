"use client";
import React, { useState } from "react";
import Card from "./Card";
import { FEEDBACK } from "@/constants";
import { IoMdStar } from "react-icons/io";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

interface FeedbackProps {}

const Feedback: React.FC<FeedbackProps> = () => {
  const [currIndex, setCurrIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrIndex((prevIndex) =>
      prevIndex === FEEDBACK.length - 1 ? FEEDBACK.length - 1 : prevIndex + 1
    );
  };

  return (
    <div className="md:mx-14 mx-4 my-8">
      <h1 className="text-3xl max-w-[450px] font-bold mb-6">
        Trusted by 20+ million customers around the world.
      </h1>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currIndex * 21.25}em)`,
          }}
        >
          {FEEDBACK.map((item, index) => (
            <Card
              key={index}
              user={item.user}
              review={item.review}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="flex justify-between items-start mt-8">
          <div>
            <p className="flex text-2xl items-center space-x-3 font-bold">
              <IoMdStar size={28} className="text-green-700" />
              <span>Trustpilot</span>
            </p>
            <div className="flex items-center pl-1 gap-1 my-2">
              {Array.from({ length: 4 }, (_, i) => (
                <IoMdStar
                  key={i}
                  size={35}
                  className="text-white bg-green-600"
                />
              ))}
              <IoMdStar
                size={35}
                className="text-white bg-gradient-to-r from-green-600 to-gray-400"
              />
            </div>
            <p className="font-semibold">
              4.7 out of 5 stars based on 100,068 reviews | Showing our 4 and 5
              stars reviews.
            </p>
          </div>
          <div className="flex justify-center mt-8 space-x-1">
            <button
              onClick={handlePrev}
              disabled={currIndex === 0}
              className={`flex items-center px-2 cursor-pointer ${
                currIndex === 0 && "opacity-50 cursor-not-allowed"
              }`}
            >
              <FaChevronCircleLeft size={40} />
            </button>
            <button
              onClick={handleNext}
              disabled={currIndex === FEEDBACK.length - 1}
              className={`flex items-center px-2 cursor-pointer ${
                currIndex === FEEDBACK.length - 1 &&
                "opacity-50 cursor-not-allowed"
              }`}
            >
              <FaChevronCircleRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
