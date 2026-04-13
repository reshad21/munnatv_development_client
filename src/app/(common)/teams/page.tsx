import React from "react";
import Image from "next/image";
import HeroSection from "@/components/shared/common/HeroSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softysta | Team",
  description:
    "Meet the team behind Softysta — Md. Raisul Hasan Rafi, Sourave Haldar, Asif Khan, Saikat Roy Chandan, Rasheduzzaman Reshad, and Md. Sabilar Rahman — a passionate group of UI/UX designers and full stack developers building innovative digital solutions.",
};

import rafi from "../../../../public/assets/profile/rafi.png";
import sourav from "../../../../public/assets/profile/sourav.jpeg";
import asif from "../../../../public/assets/profile/asifkhan.jpg";
import saikat from "../../../../public/assets/profile/saikat.jpeg";
import reshad from "../../../../public/assets/profile/reshad.jpeg";
import sabilar from "../../../../public/assets/profile/sabilar.jpg";

const teamMembers = [
  {
    name: "Md. Raisul Hasan Rafi",
    title: "UI UX Designer",
    image: rafi,
  },
  {
    name: "Sourave Haldar",
    title: "Full Stack Developer",
    image: sourav,
  },
  {
    name: "Asif Khan",
    title: "Full Stack Developer",
    image: asif,
  },

  {
    name: "Saikat Roy Chandan",
    title: "Full Stack Developer",
    image: saikat,
  },
  {
    name: "Rasheduzzaman Reshad",
    title: "Full Stack Developer",
    image: reshad,
  },
  {
    name: "Md. Sabilar Rahman",
    title: "Full Stack Developer",
    image: sabilar,
  },
];

const TeamsPage = () => {
  return (
    <div>
      <div>
        <HeroSection title={"Team Member"} />
      </div>
      <div className="container mx-auto  text-center py-20">
        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-sm group"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 text-left text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-200">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;
