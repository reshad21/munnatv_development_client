import Image from "next/image";
import React from "react";
import img from '@/assets/subscribe.png'
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
     <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Left side - Image */}
      <div className="bg-gray-100">
        <Image
          src={img}
          alt="Login background"
          width={1920}
          height={1080}
          className=" object-cover flex justify-center items-center w-[86%]"
        />
      </div>
      {/* Right side - Login Form */}
      <div className="flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
