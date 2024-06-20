// components/Footer.tsx
import React from "react";
import Image from "next/image";
import { FOOTER_LINKS, FooterLink } from "@/constants"; // Assuming FooterLink interface is defined
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-white py-8">
      <section className="lg:flex justify-between block lg:px-16 px-12">
        {FOOTER_LINKS.map((footerLink: FooterLink, index: number) => (
          <div key={index} className="mb-5">
            <h2 className="font-medium mb-3">{footerLink.title}</h2>
            <ul>
              {footerLink.links.map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  className="text-[#BAC0C3] max-w-[148px] text-xs py-[10px] hover:underline cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="flex items-center justify-between my-3 lg:px-16 px-12">
        <Image
          src="/Images/GoDaddy_dark.svg"
          width={150}
          height={150}
          alt="logo"
        />
        <div className="flex items-center gap-5">
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
        </div>
      </section>
      <hr />
      <section className="mt-4 mb-2 lg:px-16 px-12">
        <p className="text-[#BAC0C3] text-xs leading-6 mb-3">
          Copyright © 1999 - 2024 GoDaddy Operating Company, LLC. All Rights
          Reserved. The GoDaddy word mark is a registered trademark of GoDaddy
          Operating Company, LLC in the US and other countries. The “GO” logo is
          a registered trademark of GoDaddy.com, LLC in the US.
        </p>
        <p className="text-[#BAC0C3] text-xs leading-6">
          Use of this Site is subject to express terms of use. By using this
          site, you signify that you agree to be bound by these Universal Terms
          of Service.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
