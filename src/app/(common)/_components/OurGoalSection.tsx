import Image from "next/image";
import { Layers, Palette, Monitor, Goal } from "lucide-react";

import businessman from "../../../../public/assets/image/promanevent-thumb.png";
import backgroundimage from "../../../../public/assets/image/backgroundProManevent.png";

const OurGoalSection = () => {
  return (
    <div className="bg-[#f0fbf7] relative overflow-hidden">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 relative z-10">
          {/* Left Content Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Goal className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-green-600">Our Goal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Unlock Business
              <br />
              Your Potential
            </h1>

            <div className="space-y-8 mt-12">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Layers className="w-10 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Best Implementation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ished fact that a reader will be distrol acted bioily desig
                    the.ished fact that a reader will distrol acted bioily
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <Palette className="w-10 h-6 text-lime-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Design make for you
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sreader will be distrol acted bioily desig the.ished fa that
                    a reader will be distrol acted bioily desig the.ished
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Monitor className="w-10 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Finished the process
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Distrol acted bioily desig the.ished fact that a reader will
                    distrol acted bioily desig the.ished fact that a reader.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full h-full flex justify-center items-center">
            {/* Background Geometric Shapes */}
            <Image
              src={backgroundimage}
              alt="Geometric Background"
              className="absolute w-[120%] max-w-none scale-125 -z-10"
            />

            {/* Businessman Image */}
            <Image
              src={businessman}
              alt="Businessman"
              className="relative z-10 max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoalSection;
