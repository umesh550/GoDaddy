import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-wrap gap-8 md:mx-14 mx-4 py-12 justify-center">
      <div className="flex flex-col md:flex-row max-w-[800px] items-center bg-black justify-between rounded-3xl overflow-hidden">
        <div className="p-8 max-w-[400px] text-center lg:text-left">
          <p className="font-semibold md:mb-6 mb-4 text-white">Domain Names</p>
          <p className="lg:text-5xl text-3xl font-bold text-white mb-4">
            Get a .com for ₹ 1.00*/1st yr.
          </p>
          <p className="font-semibold mb-6 lg:text-base text-sm  text-white">
            Grab the world's most popular domain.
          </p>
          <button className="font-semibold text-sm px-12 py-3 bg-white rounded">
            Get It Now
          </button>
        </div>
        <div className="w-full lg:w-auto">
          <Image
            src="/Images/Hero.png"
            alt="hero"
            width={500}
            height={500}
            className="md:rounded-3xl"
          />
        </div>
      </div>
      <div className="bg-[#D8EFEF] lg:max-w-[300px] py-8 px-4 rounded-3xl w-full lg:text-center">
        <p className="lg:mb-5 mb-3 font-semibold">Web Hosting</p>
        <p className="font-semibold md:text-4xl text-2xl mb-4">
          Secured Hosting from ₹ 199.00/mo.
        </p>
        <ul className="hidden lg:block font-semibold list-disc list-inside leading-7 mb-4">
          <li>Improved page loads and SEO</li>
          <li>24/7 network security</li>
          <li>30-day money back guarantee</li>
        </ul>
        <button className="font-semibold text-sm px-12 py-3 bg-black text-white rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
