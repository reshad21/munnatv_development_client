import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import About2Image from "@/assets/about_2-1.jpg.png"
import About1Image from "@/assets/about_2-2.png.png"
import TargetLogo from "@/assets/title_left.svg fill.svg"

export default function StorySection() {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-2 text-teal-600">
              <Image
                src={TargetLogo}
                width={20}
                height={20}
                alt="aboutUsLogo"
                className="size-4 sm:size-6"
              />
              <span className="text-sm md:text-lg font-medium">About Us</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Get to Know Our Story Better
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We create innovative, scalable software solutions that empower businesses and deliver exceptional user
              experiences.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm sm:text-base">
                  We build cutting-edge software tailored to your needs.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm sm:text-base">
                  Your success drives our commitment and quality.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm sm:text-base">
                  Skilled professionals delivering reliable and scalable products.
                </span>
              </div>
            </div>

            <p className="text-lg sm:text-xl max-w-full sm:max-w-[408px] font-semibold text-gray-900">
              We Build Innovative Solutions with Passion and Purpose
            </p>

            <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium h-12 sm:h-14 flex items-center justify-center w-full sm:w-[190px] cursor-pointer gap-2">
              Explore More
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          {/* Right Column - Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-x-10 order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Statistics Card */}
              <Card className="bg-teal-600 text-white border-0 shadow-lg">
                <CardContent className="p-3 sm:p-4 mx-auto space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 sm:gap-5">
                    <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg">
                      <Users className="size-8 sm:size-10 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold">6k+</div>
                      <div className="text-sm sm:text-md opacity-90">Clients</div>
                    </div>
                  </div>
                  <div className="opacity-80 mt-2 text-base sm:text-lg">
                    Trusted & Satisfied
                    <br />
                    Clients Worldwide
                  </div>
                </CardContent>
              </Card>

              {/* Left smaller image */}
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={About1Image}
                    alt="Man working at desk with laptop"
                    width={300}
                    height={400}
                    className="object-cover w-full h-48 hidden lg:block sm:h-56 md:h-64 lg:h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Images Container */}
            <div className="gap-4 mt-0 sm:mt-4 md:mt-6 lg:mt-8">
              {/* Right larger image */}
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={About2Image}
                  alt="Woman working on laptop in business attire"
                  width={350}
                  height={500}
                  className="object-cover w-full hidden lg:block h-56 sm:h-64 md:h-72 lg:h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
