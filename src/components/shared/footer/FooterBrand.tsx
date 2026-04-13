import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logoDark from "@/assets/logoDark.png";

const FooterBrand = () => {
  return (
    <div className="space-y-6">
      <div>
        <Image
          src={logoDark}
          alt="Codysta logo"
          className="w-32 sm:w-40 mb-3"
        />
        <h1 className="text-sm font-medium text-gray-800 mb-1">
          Quality First | Quantity Next
        </h1>
        <h2 className="text-sm font-medium text-gray-600">Excellence Always</h2>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Follow Us</h3>
        <div className="flex items-center gap-3">
          <Link
            href="https://www.facebook.com/profile.php?id=61577894527220"
            target="_blank"
            className="w-8 h-8 bg-white rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <Facebook className="w-4 h-4 text-blue-600" />
          </Link>
          <Link
            href="https://www.instagram.com/codysta"
            target="_blank"
            className="w-8 h-8 bg-white rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/codysta"
            target="_blank"
            className="w-8 h-8 bg-white rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-blue-700" />
          </Link>
          <Link
            href="https://x.com/codysta"
            target="_blank"
            className="w-8 h-8 bg-white rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <Twitter className="w-4 h-4 text-blue-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBrand;
