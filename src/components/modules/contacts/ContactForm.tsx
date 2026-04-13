import { ContactInput } from "./ContactInput";

const ContactForm = () => {
  return (
    <div>
      <header className="mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
            </div>
            <span className="text-teal-600 font-medium">Talk to Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Strategic Solutions
          </h2>
        </div>
      </header>

      <ContactInput />
    </div>
  );
};

export default ContactForm;
