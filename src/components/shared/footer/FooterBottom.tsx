import Link from "next/link";

const FooterBottom = () => {
  const bottomLinks = [
    { href: "/terms-of-conditions", label: "Terms & Conditions" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-gray-600">
        &copy; Codysta {new Date().getFullYear()} | All Rights Reserved
      </p>

      <div className="flex items-center gap-4">
        {bottomLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterBottom;
