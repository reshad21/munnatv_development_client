import subscribeImage from "@/assets/subscribe.png";
import Image from "next/image";
import SubscriptionForm from "./SubscriptionForm";

const SubscribeSection = () => {
  return (
    <section className="w-[90%] mx-auto bg-second rounded-xl mb-20 mt-44 relative">
      <div className="container py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src={subscribeImage}
            alt="Subscribe to our newsletter"
            width={500}
            height={500}
            className="absolute bottom-0"
          />
        </div>
        <div>
          <h1 className="text-white text-3xl lg:text-5xl font-bold">
            Successful Expert
          </h1>
          <p className="text-white/80 mt-4 text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
          <SubscriptionForm />
        </div>
      </div>  
    </section>
  );
};

export default SubscribeSection;
