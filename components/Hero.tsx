import React from "react";
import Image from "next/image";
import hero from "@/public/Images/Hero.png";
import { IoSearchSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="py-12 px-4 md:px-14">
      <div className="w-full">
        <div className="flex items-center shadow-xl justify-between border focus-within:ring-2 focus-within:ring-blue-500 border-gray-400 rounded px-2 py-3">
          <input
            type="text"
            placeholder="Type the domain you want"
            className="outline-none w-full pl-4 font-bold text-lg md:text-2xl"
          />
          <button className="bg-[#09757A] hover:bg-[#00838C] py-4 px-5 rounded text-white">
            <IoSearchSharp size={20} />
          </button>
        </div>
      </div>
      <div className="mt-12 flex flex-col xl:flex-row gap-6 xl:items-stretch xl:justify-between">
        <div className="flex flex-col sm:flex-row items-center justify-between bg-black rounded-xl overflow-hidden xl:min-w-[800px] 2xl:min-w-[1200px]">
          <div className="p-8 max-w-full sm:max-w-[400px] text-center sm:text-left">
            <p className="font-semibold text-white md:mb-6 mb-4">
              Domain Names
            </p>
            <p className="font-playfair text-white font-bold lg:text-5xl text-2xl mb-4">
              Get a .com for ₹ 1.00*/1st yr.
            </p>
            <p className="font-semibold text-white lg:text-base text-sm mb-6">
              Grab the world's most popular domain.
            </p>
            <button className="font-semibold text-sm px-12 py-3 bg-white rounded">
              Get It Now
            </button>
          </div>
          <Image
            src={hero}
            width={500}
            height={500}
            objectFit="contain"
            alt="hero"
            className="md:rounded-r-xl rounded-b-xl"
          />
        </div>
        <article className="bg-[#D8EFEF] w-full p-8 rounded-3xl xl:text-center mt-6 xl:mt-0 xl:min-w-[300px]">
          <p className="font-semibold lg:mb-5 mb-3">Web Hosting</p>
          <p className="font-bold font-playfair md:text-4xl text-2xl mb-4">
            Secured Hosting from ₹ 199.00/mo.
          </p>
          <ul className="font-semibold list-disc list-inside leading-7 mb-4">
            <li>Improved page loads and SEO</li>
            <li>24/7 network security</li>
            <li>30-day money back guarantee</li>
          </ul>
          <button className="font-semibold text-sm px-12 py-3 bg-black text-white rounded">
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
