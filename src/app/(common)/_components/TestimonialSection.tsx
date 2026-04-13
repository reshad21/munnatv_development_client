"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import phoneIcon from "../../../../public/assets/image/Link.png";
import testimonialImage from "../../../../public/assets/image/testimonial-demo.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    text: "There are many variations of passage of Lorem Ipsum available, but the major have suffered There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    name: "Starli shane",
    image: "/public/assets/image/testimonial-demo.png",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    name: "John Doe",
    image: "/public/assets/image/testimonial-demo.png",
  },
  {
    id: 3,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    name: "Jane Smith",
    image: "/public/assets/image/testimonial-demo.png",
  },
];

export default function TestimonialSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="">
      <div className="container py-16 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center gap-2 text-teal-600">
              <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-teal-600"></div>
              </div>
              <span className="text-sm font-medium">Clients Testimonial</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Hear From Our
              <br />
              <span className="text-gray-800">Customers</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Hear from our satisfied clients who trust us for delivering
              quality software solutions that drive their success.
            </p>

            {/* Contact Info */}
            <div className="flex items-center gap-3 pt-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src={phoneIcon}
                  alt="phone-icon"
                  width={55}
                  height={55}
                  className="text-teal-600"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Need help?</p>
                <p className="text-lg font-semibold text-gray-900">
                  (319) 555-0115
                </p>
              </div>
            </div>
          </div>

          {/* Right Testimonial Slider */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              {/* Quote Icon */}
              <div className="my-6 flex justify-center">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-0.5 bg-second"></div>
                  <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-second" />
                  </div>
                  <div className="w-16 h-0.5 bg-second"></div>
                </div>
              </div>

              {/* Swiper Container */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="testimonial-swiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="text-center space-y-6">
                      {/* Testimonial Text */}
                      <p className="text-gray-600 text-base leading-relaxed">
                        {testimonial.text}
                      </p>

                      {/* Customer Name */}
                      <h4 className="text-xl font-semibold text-gray-900 mt-6">
                        {testimonial.name}
                      </h4>

                      {/* Customer Image */}
                      <div className="flex justify-center mt-4">
                        <Image
                          src={testimonialImage}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
