"use client";
import { useState } from "react";
import Domains from "./Domains";
import Recommended from "./Recommended";

const Business: React.FC = () => {
  const [isActive, setIsActive] = useState(true);

  const handleDomainsClick = () => {
    setIsActive(true);
  };

  const handleRecommendedClick = () => {
    setIsActive(false);
  };

  return (
    <section className="mx-4 md:mx-14 my-12">
      <div className="space-x-5 text-center my-9">
        <h2 className="text-xl md:text-4xl font-bold mb-6">
          What's first up for your business?
        </h2>
        <button
          onClick={handleDomainsClick}
          className={`border-2 text-base md:text-lg font-semibold hover:border-black px-5 py-2 rounded-3xl ${
            isActive ? "bg-black text-white border-black" : "border-gray-400"
          }`}
        >
          Domains
        </button>
        <button
          onClick={handleRecommendedClick}
          className={`border-2 text-base md:text-lg font-semibold hover:border-black px-5 py-2 rounded-3xl ${
            !isActive ? "bg-black text-white border-black" : "border-gray-400"
          }`}
        >
          Recommended
        </button>
      </div>
      {isActive ? <Domains /> : <Recommended />}
    </section>
  );
};

export default Business;
