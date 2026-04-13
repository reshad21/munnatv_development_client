import Link from "next/link";

const FooterLinks = () => {
  const links = [
    { href: "/blogs", label: "Latest Blogs" },
    { href: "/consulting-center", label: "Consulting Center" },
    { href: "/about-us", label: "About Us" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-second mb-4">Useful Links</h3>
      <div className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block text-gray-600 hover:text-gray-600 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
