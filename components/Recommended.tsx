import React from "react";
import Image from "next/image";
import recommended1 from "@/public/Images/recommended1.png";
import recommended2 from "@/public/Images/recommended2.png";
import recommended3 from "@/public/Images/recommended3.png";

const Recommended = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="md:col-span-1 lg:row-span-2 p-10 bg-[#EEE8E3] rounded-3xl  hover:shadow-2xl">
        <Image src={recommended1} objectFit="cover" alt="domains-1" />
        <div>
          <h2 className="font-semibold text-2xl">
            Professional Email ₹ 34.00 per user/mo
          </h2>
          <p className="font-medium mt-3 max-w-[300px] hidden md:block">
            Earn trust from your customers with an email address that matches
            your domain.
          </p>
          <button className="font-semibold text-sm px-6 py-3 mt-4 text-white bg-black rounded">
            Get Started
          </button>
        </div>
      </div>
      <div className="p-6 bg-[#CFDFEC] flex items-center justify-between rounded-3xl  hover:shadow-2xl">
        <div>
          <h2 className="font-semibold text-2xl">Web Hosting ₹ 79.00/mo</h2>
          <p className="font-medium mt-3 max-w-[300px] hidden md:block">
            Get fast load times and 99.9% uptime guaranteed.***
          </p>
          <button className="font-semibold text-sm px-5 py-3 mt-4 text-white bg-black rounded">
            View Plans and Pricing
          </button>
        </div>
        <Image
          src={recommended2}
          objectFit="cover"
          alt="domains-2"
          className="hidden md:block"
        />
      </div>
      <div className="flex items-center justify-between p-6 bg-[#E4EBE9] rounded-3xl hover:shadow-2xl">
        <div>
          <h2 className="font-semibold text-2xl">Websites ₹ 249.00/mo</h2>
          <p className="font-medium mt-3 hidden md:block">
            Start for free and quickly design a beautiful, mobile-friendly site.
          </p>
          <button className="font-semibold text-sm px-6 py-3 mt-4 text-white bg-black rounded">
            Create Your Site
          </button>
        </div>
        <Image
          src={recommended3}
          objectFit="cover"
          alt="domains-3"
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default Recommended;
