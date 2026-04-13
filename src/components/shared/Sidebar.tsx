import type { FC } from "react";
import { Mail, MapPin, X } from "lucide-react";
import { contactInfo, socialIcons } from "@/constant/navbar.constant";
import Image from "next/image";
import logo from "../../../public/codysta logo.svg"

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Sidebar Overlay - Works on all devices */}
            <div
                className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={onClose}
            />

            {/* Universal White Sidebar - Works on all devices */}
            <div
                className={`fixed top-0 right-0 h-full w-80 sm:w-96 lg:w-[420px] xl:w-[450px] bg-white shadow-2xl z-50 transform transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                        <div className="w-24 h-auto flex items-center justify-center">
                            <Image src={logo} alt="Codysta Logo" width={1080} height={720} />
                        </div>
                        <div className="text-2xl font-bold text-gray-800">CODYSTA</div>
                    </div>
                    <button
                        onClick={onClose}
                        className="size-10 text-second hover:text-second transition-all duration-300 hover:scale-110 focus:outline-none border border-second rounded-full flex items-center justify-center hover:border-gray-300 cursor-pointer active:scale-95"
                        aria-label="Close menu"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                {/* Sidebar Content */}
                <div className="p-6 space-y-8 overflow-y-auto h-full pb-20">
                    {/* Company Description */}
                    <div className="space-y-3">
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                            We provide specialized development services to safeguard your business during digital transformation, and
                            when innovation arrives, we handle the thorough implementation process.
                        </p>
                    </div>

                    {/* Office Address */}
                    <div className="space-y-4">
                        <h3 className="text-gray-800 font-semibold text-lg">Office Address</h3>
                        <div className="flex items-start space-x-3 group cursor-pointer transition-all duration-300 hover:scale-105 p-3 rounded-lg hover:bg-gray-50">
                            <div className="size-10 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-lime-100 transition-all duration-300 mt-1">
                                <MapPin className="size-5 text-gray-600 group-hover:text-lime-600 transition-all duration-300" />
                            </div>
                            <div>
                                <span className="text-gray-600 leading-relaxed">6391 Elgin St, Celina, 10299</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h3 className="text-gray-800 font-semibold text-lg">Follow Us</h3>
                        <div className="flex items-center space-x-4">
                            {socialIcons.map((Icon, idx) => (
                                <div
                                    key={idx}
                                    className="size-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-lime-100 cursor-pointer transition-all duration-300 hover:scale-110 group"
                                >
                                    <Icon className="size-5 text-gray-600 group-hover:text-lime-600 transition-all duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Email Address */}
                    <div className="space-y-4">
                        <h3 className="text-gray-800 font-semibold text-lg">Email Address</h3>
                        <div className="space-y-3">
                            {contactInfo
                                .filter((item) => item.icon === Mail)
                                .map(({ text }, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:scale-105 p-3 rounded-lg hover:bg-gray-50"
                                    >
                                        <div className="size-10 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-lime-100 transition-all duration-300">
                                            <Mail className="size-5 text-gray-600 group-hover:text-lime-600 transition-all duration-300" />
                                        </div>
                                        <span className="text-gray-600 group-hover:text-gray-800 transition-all duration-300">{text}</span>
                                    </div>
                                ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Sidebar;
