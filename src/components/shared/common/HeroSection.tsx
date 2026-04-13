import Image from "next/image";
import Link from "next/link";

import heroImage from "../../../../public/assets/image/about-us-thumb.png";

const HeroSection = ({ title }: { title: string }) => {
  return (
    <div className="h-[300px] bg-gray-50">
      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left Content */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              {title}
            </h1>

            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-gray-600">
              <Link href="/" className="hover:text-teal-600">
                Home
              </Link>
              <span>›</span>
              <span className="text-teal-600 font-medium">{title}</span>
            </nav>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-h-[250px] flex items-center">
              <Image
                src={heroImage}
                alt="Business professionals collaborating with charts and data"
                className="w-full h-auto max-h-[250px] object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
