// ServicesPage.tsx
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/shared/common/HeroSection';
import Image from 'next/image';
import Link from 'next/link';
import { fakeServices } from './fakeServices';
import appointment from "@/assets/appointment-thumb-2-1.png.svg"

// Reusable service item renderer
const renderServiceItem = (
  id: string,
  title: string,
  imageSrc: string,
  imageAlt: string,
  description: string
): ReactNode => (
  <Link href={`/services/${id}`} className="flex gap-6 group">
    <div className="w-36 bg-red-500 flex-shrink-0 rounded-lg overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={112}
        height={80}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:underline">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      <span className="flex items-center text-sm font-medium text-gray-800 group-hover:text-gray-600 transition-colors">
        Read More <ArrowRight className="ml-2 h-4 w-4" />
      </span>
    </div>
  </Link>
);

export default function ServicesPage() {
  return (
    <div className="w-full bg-white">
      <HeroSection title="Our Services" />

      {/* Services Grid Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {fakeServices.map((s) => (
              <div key={s.id}>
                {renderServiceItem(
                  s.id,
                  s.title,
                  s.image?.src ?? "",
                  s.title,
                  s.description
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Solutions Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <Image
                src={appointment}
                alt="Strategic business meeting with charts"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  Talk to Us
                </div>
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">Strategic Solutions</h2>
              </div>

              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Full name"
                  className="h-14 pl-4 pr-4 border-gray-300 rounded-lg text-base placeholder:text-gray-500 w-full"
                />
                <input
                  type="email"
                  placeholder="Your mail"
                  className="h-14 pl-4 pr-4 border-gray-300 rounded-lg text-base placeholder:text-gray-500 w-full"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="h-14 pl-4 pr-4 border-gray-300 rounded-lg text-base placeholder:text-gray-500 w-full"
                />
                <textarea
                  placeholder="Write your message here..."
                  className="min-h-[140px] p-4 border-gray-300 rounded-lg text-base placeholder:text-gray-500 resize-none w-full"
                />

                <button className="bg-gray-900 flex hover:bg-white text-white hover:text-gray-900 hover:border-gray-900 hover:border cursor-pointer px-8 py-4 h-auto rounded-full text-base font-medium">
                  Send Now <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
