"use client";

import type { FC } from "react";
import { AlignRight } from "lucide-react"; // Removed Search import
import Image from "next/image";
import { contactInfo, socialIcons } from "@/constant/navbar.constant";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-black h-16 2xl:h-[68px] flex items-center animate-in slide-in-from-top duration-500 relative z-40 overflow-hidden">
      {/* Background geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 border border-lime-400/20 rotate-45 -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border border-lime-400/30 rotate-12 translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 left-1/4 w-16 h-16 border border-lime-400/25 rotate-45"></div>
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
               linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
             `,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container mx-auto px-4 flex justify-between items-center text-sm text-white relative z-10">
        {/* Desktop Contact Info */}
        <div className="hidden lg:flex items-center space-x-[30px]">
          {contactInfo.map(({ icon: Icon, text }, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 group cursor-pointer transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Icon className="size-[14px] xl:size-[18px] text-lime-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-lime-300" />
              <span className="text-[14px] 2xl:text-[18px] transition-all duration-300 group-hover:text-lime-100 whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Logo */}
        <div className="flex lg:hidden items-center">
          <div className="w-24">
            <span className="px-3 py-1.5 transition-all duration-300">
              <Image
                src="/codysta lime logo.svg"
                alt="Codysta Logo"
                width={1080}
                height={720}
              />
            </span>
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-3 sm:space-x-7">
          {/* Desktop Social Icons */}
          <div className="hidden lg:flex items-center space-x-3">
            {socialIcons.map((Icon, idx) => (
              <span
                key={idx}
                className="size-[20px] 2xl:size-[30px] flex items-center justify-center rounded-full ring-lime-400 ring-1
                           transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-lime-300
                           hover:bg-lime-400/10 hover:shadow-lg hover:shadow-lime-400/20 cursor-pointer
                           active:scale-95"
                style={{ animationDelay: `${(idx + 3) * 100}ms` }}
              >
                <Icon className="text-lime-400 p-0.5 transition-all duration-300 hover:text-lime-300 hover:scale-110" />
              </span>
            ))}
          </div>

          <button
            onClick={onMenuClick}
            className="lg:hidden size-[28px] sm:size-[30px] text-lime-400 cursor-pointer transition-all duration-300
                     hover:scale-110 hover:text-lime-300 active:scale-95 focus:outline-none"
            aria-label="Toggle menu"
          >
            <AlignRight className="w-full h-full" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

{/* <AlignRight className="w-full h-full" /> */}