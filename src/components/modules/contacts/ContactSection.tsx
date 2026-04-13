import contactImage from "@/assets/contact.png";
import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 container my-20">
      <div>
        <Image
          src={contactImage}
          alt="Contact Us"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
