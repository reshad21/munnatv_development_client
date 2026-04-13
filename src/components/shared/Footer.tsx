import React from "react";
import { Separator } from "../ui/separator";
import FooterBrand from "./footer/FooterBrand";
import FooterContact from "./footer/FooterContact";
import FooterLinks from "./footer/FooterLinks";
import FooterGallery from "./footer/FooterGallery";
import FooterBottom from "./footer/FooterBottom";
import { ArrowRight } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-[#EAF3EE] relative mt-28">
      {/* Newsletter Section */}
      <section className="bg-teal-800 py-16 absolute -top-24 left-1/2 -translate-x-1/2 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto rounded-3xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white lg:flex-1">
              <h3 className="text-3xl font-bold mb-3">Newsletter</h3>
              <p className="text-teal-100 text-lg">Lorem Ipsum is simply dummy text of the printing</p>
            </div>

            <div className="flex gap-4 w-full lg:w-auto lg:flex-shrink-0">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white border-0 h-14 px-6 rounded-lg text-base placeholder:text-gray-500 min-w-[300px]"
              />
              <button className="bg-lime-400 flex items-center hover:bg-lime-500 text-gray-900 font-semibold px-8 h-14 rounded-lg whitespace-nowrap text-base">
                Subscribe <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 lg:pb-16 lg:pt-32">
          <div className="sm:col-span-1">
            <FooterBrand />
          </div>

          <div className="sm:col-span-1">
            <FooterContact />
          </div>

          <div className="sm:col-span-1">
            <FooterLinks />
          </div>

          <div className="sm:col-span-1">
            <FooterGallery />
          </div>
        </div>

        <Separator className="bg-gray-600/20" />

        <div className="py-6 container">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
