import React from "react";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="md:mx-14 mx-4 py-12">
      <div className="flex justify-between">
        <SearchBar />
        <PromoSection />
      </div>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        <DomainPromotion />
        <HostingPromotion />
      </div>
    </section>
  );
};

const SearchBar = () => (
  <div className="w-full flex max-w-[800px] items-center justify-between border border-gray-400 shadow-slate-950 rounded-xl p-2 focus-within:ring-2 focus-within:ring-blue-500">
    <input
      type="text"
      className="outline-none w-full pl-4 text-bold text-2xl"
      placeholder="Type the domain you want"
    />
    <button
      className="ml-2 px-6 py-4 bg-[#00838C] text-base font-semibold text-white rounded"
      aria-label="Search Domain"
    >
      <IoSearchSharp size={20} className="font-bold" />
    </button>
  </div>
);

const PromoSection = () => (
  <div className="lg:flex items-center justify-center hidden gap-8 hover:border cursor-pointer py-4 lg:min-w-[300px] border-gray-400 px-3 rounded-xl">
    <p className="text-gray-400 font-bold font-playfair">pro.</p>
    <div>
      <p className="font-bold hover:text-[#00838C] text-lg">
        ₹ 332.50* /1st yr
      </p>
      <p className="text-sm">.pro says you&apos;re the best</p>
    </div>
  </div>
);

const DomainPromotion = () => (
  <article className="flex flex-col md:flex-row max-w-[800px] items-center bg-black justify-between rounded-3xl overflow-hidden">
    <div className="p-8 max-w-[400px] text-center lg:text-left">
      <p className="font-semibold md:mb-6 mb-4 text-white">Domain Names</p>
      <p className="font-playfair lg:text-5xl text-3xl font-bold text-white mb-4">
        Get a .com for ₹ 1.00*/1st yr.
      </p>
      <p className="font-semibold mb-6 lg:text-base text-sm text-white">
        Grab the world's most popular domain.
      </p>
      <button className="font-semibold text-sm px-12 py-3 bg-white rounded">
        Get It Now
      </button>
    </div>
    <div className="w-full lg:w-auto">
      <Image
        src="/Images/Hero.png"
        alt="Promotional image for domain names"
        width={500}
        height={500}
        className="md:rounded-3xl"
      />
    </div>
  </article>
);

const HostingPromotion = () => (
  <article className="bg-[#D8EFEF] w-full lg:max-w-[300px] py-8 px-4 rounded-3xl lg:text-center">
    <p className="lg:mb-5 mb-3 font-semibold">Web Hosting</p>
    <p className="font-bold font-playfair md:text-4xl text-2xl mb-4">
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
  </article>
);

export default Hero;
