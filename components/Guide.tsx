import Image from "next/image";
import guide from "@/public/Images/Guide.png";
import React from "react";

const Guide: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:mx-auto my-12">
      <Image
        src={guide}
        width={500}
        height={500}
        alt="Guide"
        className="lg:w-full mx-auto"
      />
      <div className="bg-white lg:bg-[#E0E9F6] mx-auto lg:w-full p-8">
        <p className="font-bold mb-5 lg:mb-12">
          GoDaddy <span className="text-[#9A90C6] font-medium">guides</span>
        </p>
        <h1 className="text-3xl md:text-5xl font-playfair font-bold">
          Why go with GoDaddy?
        </h1>
        <p className="font-medium leading-8 mt-3 max-w-[500px]">
          Because we know that even the best technology is only as good as the
          people behind it. That&apos;s why we offer expert support, plus a lot
          more.
        </p>
        <button className="font-semibold text-sm px-12 py-3 mt-8 text-white bg-black rounded">
          Get Help
        </button>
      </div>
    </div>
  );
};

export default Guide;
