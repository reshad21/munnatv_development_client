import Link from "next/link";
import { Clock, Mail, MapPin } from "lucide-react";

const FooterContact = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-second mb-4">Contact</h3>

      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <Mail className="w-4 h-4 text-green-600 mt-1.5 flex-shrink-0" />
          <Link
            href="mailto:contact.codysta@gmail.com"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            contact.codysta@gmail.com
          </Link>
        </div>

        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
          <Link
            href="https://goo.gl/maps/1b7Z5c8d9gk2"
            target="_blank"
            className=" text-gray-600 hover:text-gray-800 transition-colors"
          >
            8200, Barishal, Bangladesh
          </Link>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-medium text-second mb-2">Open Hours</h4>
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-green-600 mt-2 flex-shrink-0" />
            <span className="text-base text-gray-600 leading-relaxed">
              Saturday to Thursday
              <br />
              9:00 AM - 5:00 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
