import React from "react";
import { BUSSINESS_SOLUTIONS } from "@/constants";
import Image from "next/image";

const BussinessSolutions: React.FC = () => {
  return (
    <section className="lg:mx-24 mx-4">
      {BUSSINESS_SOLUTIONS.map((items, index) => (
        <div
          key={index}
          className={`flex flex-col xl:flex-row justify-between 2xl:max-w-[1300px] 2xl:mx-auto py-12 items-center ${
            index % 2 ? "xl:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={items.img}
              width={600}
              height={600}
              objectFit="contain"
              alt={items.title}
              className="shadow-2xl"
            />
          </div>
          <div className="w-full lg:w-1/2 max-w-[600px] mt-4 lg:mt-0 lg:ml-12 lg:mr-12">
            <div className="text-[#868383] mb-3 mt-4 font-bold text-sm">
              {items.subtitle}
            </div>
            <div className="font-bold text-3xl font-playfair">
              {items.title}
            </div>
            <div className="font-normal mt-4 leading-7">{items.content}</div>
            <button className="mt-4 px-4 py-2 border-2 duration-300 border-black font-medium hover:bg-black hover:text-white transition-colors">
              {items.button}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BussinessSolutions;
