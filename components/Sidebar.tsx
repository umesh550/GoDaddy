"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { SIDEBAR_LINKS } from "@/constants";
const Sidebar = () => {
  const [sidebar, setSidebar] = React.useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <SlMenu
        className="text-white cursor-pointer"
        onClick={showSidebar}
        size={24}
      />
      <div
        className={`fixed top-0 left-0 h-screen w-[300px] bg-white p-4 shadow-2xl transform duration-300 ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Image
          src="/Images/GoDaddy_light.svg"
          width={150}
          height={150}
          alt="logo"
        />
        <div className="mt-6">
          {SIDEBAR_LINKS.map((link, index) => (
            <div
              key={index}
              className="flex items-center cursor-pointer justify-between py-6 text-lg"
            >
              <p>{link}</p>
              <BsArrowRight size={18} />
            </div>
          ))}
        </div>
      </div>
      {sidebar && (
        <RxCross2
          className="text-white font-bold fixed left-[310px] top-4 cursor-pointer z-50"
          onClick={showSidebar}
          size={24}
        />
      )}
    </>
  );
};

export default Sidebar;
