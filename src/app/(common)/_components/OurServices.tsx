import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import serviceImage from "@/assets/service-icon_1-1.svg fill.svg"
import webDevelopment from "@/assets/service-icon_1-2.svg fill.svg"
import sassProduct from "@/assets/service-icon_1-3.svg.svg"
import brand from "@/assets/service-icon_1-4.svg.svg"
import TargetLogo from "@/assets/title_left.svg fill.svg"
import Image from "next/image"

export default function OurServices() {
  const services = [
    {
      icon: serviceImage,
      title: "UI/UX Design",
      description: "Use receiving acco growin number of currencies and get paid lik",
    },
    {
      icon: webDevelopment,
      title: "Web Development",
      description: "Use receiving acco growin number of currencies and get paid lik",
    },
    {
      icon: sassProduct,
      title: "SaaS Product",
      description: "Use receiving acco growin number of currencies and get paid lik",
    },
    {
      icon: brand,
      title: "Brand Identity",
      description: "Use receiving acco growin number of currencies and get paid lik",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
      <div className="rounded-lg bg-white">
        {/* Header Section */}
        <div className="flex items-center gap-2 text-teal-600 mb-4 sm:mb-6">
          <Image
            src={TargetLogo || "/placeholder.svg"}
            width={20}
            height={20}
            alt="aboutUsLogo"
            className="size-4 sm:size-5 md:size-6"
          />
          <span className="text-sm sm:text-base md:text-lg font-medium">Our Services</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 sm:mb-10 md:mb-12 gap-6 lg:gap-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight max-w-full lg:max-w-xl">
              Navigate the Path
              <br />
              to Success
            </h1>
          </div>
          <div className="flex-1 max-w-full lg:max-w-[26rem] lg:ml-0">
            <p className="text-[#7A7A7A] text-base sm:text-lg leading-8">
              We provide custom software development, design, and testing to deliver reliable, user-friendly solutions.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg shadow-md px-4 sm:px-6 pt-8 sm:pt-8 pb-6 relative group transition-all duration-300 hover:shadow-lg border border-transparent hover:border-teal-100"
            >
              {/* Floating Icon */}
              <div className="absolute -top-4 sm:-top-5 left-1/2 sm:left-14 rounded-md -translate-x-1/2 sm:-translate-x-1/2 bg-white p-1 flex items-center justify-center size-14 sm:size-16 border-[2.5px] border-[#EBF3EE]">
                <Image
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="object-contain w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-8 sm:mt-10 text-center sm:text-left">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 sm:mb-6 flex-1 text-sm sm:text-base text-center sm:text-left leading-relaxed">
                {service.description}
              </p>

              {/* Read More Button */}
              <div className="flex justify-center sm:justify-start">
                <Button
                  variant="outline"
                  className="w-[135px] border-[1.5px] text-gray-700 border-second hover:bg-gray-50 bg-transparent px-6 sm:px-8 py-4 sm:py-5 rounded-lg font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
