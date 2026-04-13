/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import clientImage from "../../../../public/assets/image/testimonial-demo.png"

export default function BannerSection() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl min-h-[200px]">
        {/* Left Section - Dark Green */}
        <div className="bg-second text-white px-12 py-10 flex-[1] flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-main mb-3 leading-tight">
            Let's Do Great!
          </h1>
          <p className="text-white/90 text-lg">
            Together, we build, grow, and succeed.
          </p>
        </div>

        {/* Right Section - Lime Green */}
        <div className="bg-main flex-[1.4] px-8 py-10">
          <div className="h-full flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center space-x-6">
              {/* Profile Images */}
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full border-3 border-white overflow-hidden bg-gray-200 shadow-lg"
                  >
                    <Image
                      src={clientImage}
                      alt={`Client ${i}`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Statistics */}
              <div className="ml-2">
                <div className="text-xl font-bold text-second leading-tight">
                  10+ Projects
                </div>
                <div className="text-emerald-800 font-medium text-base mt-1">
                  Worldwide clients
                </div>
              </div>
            </div>

            {/* Contact Us Button */}
            <div>
              <button className="bg-transparent border-2 border-second text-second px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-second hover:text-white transition-all duration-200 whitespace-nowrap cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
