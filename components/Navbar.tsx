"use client";
import React from "react";
import Image from "next/image";
import { SlMenu } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Sidebar from "./Sidebar";
import { LuUser2 } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";
const Navbar = () => {
  const [sidebar, setSidebar] = React.useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="flex items-center justify-between h-16 bg-[#111]">
      <div className="flex md:ml-14 ml-4 gap-4 items-center">
        <Sidebar />
        <Image
          src="/Images/GoDaddy_dark.svg"
          width={130}
          height={120}
          alt="logo"
        />
      </div>
      <div className="flex items-center text-white md:gap-10 gap-7 text-sm font-semibold md:mr-14 mr-4">
        <IoIosHelpCircleOutline className="md:hidden block" size={20} />
        <div className="md:flex items-center cursor-pointer hidden">
          Help
          <span>
            <RiArrowDropDownLine size={24} />
          </span>
        </div>
        <LuUser2 className="block md:hidden" size={18} />
        <div className="md:flex items-center cursor-pointer hidden">
          Sign In
          <span>
            <RiArrowDropDownLine size={24} />
          </span>
        </div>
        <FiShoppingCart size={18} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
