/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { HoveredLink, Menu } from "../ui/navbar-menu";
import Image from "next/image";
import softysta from "../../../public/softysta.svg";

export default function NavbarDemo() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-16 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-center px-4">
        <div className="bg-black/90 backdrop-blur-md border border-lime-400/20 rounded-2xl px-6 py-3 shadow-2xl shadow-lime-400/10 relative overflow-hidden">
          {/* Background geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-16 h-16 border border-lime-400/20 rotate-45 -translate-x-8 -translate-y-8"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border border-lime-400/30 rotate-12 translate-x-6 -translate-y-6"></div>
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

          <Menu setActive={setActive} className="py-0">
              {/* <Image
                alt="softysta"
                width={1080}
                height={720}
                src={softysta}
                className="size-6"
              /> */}
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/services">Services</HoveredLink>
            <HoveredLink href="/portfolio">Portfolio</HoveredLink>
            <HoveredLink href="/teams">Teams</HoveredLink>
          </Menu>
        </div>
      </div>
    </div>
  );
}
