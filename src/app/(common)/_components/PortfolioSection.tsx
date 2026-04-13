/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { TProject } from "@/types/project.types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection({ portfolioItems }: { portfolioItems: TProject[] }) {
  if (!portfolioItems || portfolioItems.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        No portfolio items found
      </div>
    );
  }

  return (
    <section className="py-16 px-4 container mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
          </div>
          <span className="text-teal-600 font-medium">Latest Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Transform Your Business
          <br />
          with Professional
        </h2>
      </div>

      {/* Portfolio Grid */}
      <div className="space-y-6 mb-12">
        {/* First Row - 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.slice(0, 2).map((item: any) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-80 block"
            >
              <Image
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-main/80 via-main/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/80 text-sm mb-2">{item.category.name}</p>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="w-10 h-10 bg-main rounded-lg flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Second Row - 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.slice(2, 5).map((item: any) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-80 block"
            >
              <Image
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-main/80 via-main/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/80 text-sm mb-2">{item.category.name}</p>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="w-10 h-10 bg-main rounded-lg flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Explore More Button */}
      <div className="text-center">
        <Link href="/portfolio">
          <button className="inline-flex items-center gap-2 bg-second hover:bg-teal-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 cursor-pointer">
            Explore More
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
}
