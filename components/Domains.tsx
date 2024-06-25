import React from "react";
import Image from "next/image";
import domains from "@/public/Images/domains.png";
import domains2 from "@/public/Images/domains2.png";
import domains3 from "@/public/Images/domains3.png";

const Domains: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="md:col-span-1 lg:row-span-2 p-10 bg-[#D9EEEC] hover:shadow-2xl rounded-3xl">
        <Image src={domains} alt="domains-1" className="object-cover" />
        <div>
          <h2 className="font-semibold text-2xl">Domains</h2>
          <p className="font-medium mt-3 max-w-[300px] hidden md:block">
            Get started with the perfect domain, which comes with free domain
            privacy protection forever.
          </p>
          <button className="font-semibold text-sm px-6 py-3 mt-4 text-white bg-black rounded">
            Search Domains
          </button>
        </div>
      </div>
      <div className="p-6 bg-[#F1F0EC] flex items-center justify-between hover:shadow-2xl rounded-3xl">
        <div>
          <h2 className="font-semibold text-2xl">.in ₹ 1.00/1st yr</h2>
          <p className="font-medium mt-3 max-w-[300px] hidden md:block">
            Boost your local impact with our localized top-level domains.
          </p>
          <button className="font-semibold text-sm px-5 py-3 mt-4 text-white bg-black rounded">
            Get Started
          </button>
        </div>
        <Image
          src={domains2}
          alt="domains-2"
          className="object-cover hidden md:block"
        />
      </div>
      <div className="flex items-center justify-between p-6 bg-[#F8E9E0] hover:shadow-2xl rounded-3xl">
        <div>
          <h2 className="font-semibold text-2xl">.co for ₹ 1.00/1st year</h2>
          <p className="font-medium mt-3 hidden md:block">
            Ensure your company and website stand out with a .co domain.
          </p>
          <button className="font-semibold text-sm px-6 py-3 mt-4 text-white bg-black rounded">
            Find your Domains
          </button>
        </div>
        <Image
          src={domains3}
          alt="domains-3"
          className="object-cover hidden md:block"
        />
      </div>
    </div>
  );
};

export default Domains;
