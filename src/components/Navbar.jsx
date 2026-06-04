import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 w-screen z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between flex-row gap-8 items-center h-14 sm:h-16 md:h-20">

                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div>
                            <img
                                src="/logo.png"
                                alt="Caketown"
                                className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16"
                            />
                        </div>

                        <span className="text-lg sm:text-xl md:text-2xl">
                            <span className="font-medium text-xl sm:text-2xl md:text-3xl">
                                Cake
                            </span>
                            <span className="text-orange-400 font-bold text-xl sm:text-2xl md:text-3xl">
                                Town
                            </span>
                        </span>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#Home" className="text-black hover:text-orange-400 text-sm lg:text-base">
                            Home
                        </a>

                        <a href="#About" className="text-black hover:text-orange-400 text-sm lg:text-base">
                            About
                        </a>

                        <a href="#Testimonials" className="text-black hover:text-orange-400 text-sm lg:text-base">
                            Testimonials
                        </a>
                    </div>

                    <button className="md:hidden p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400" onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                        {mobileMenuIsOpen ? (<RxCross2 className="h-6 w-6 cursor-pointer" aria-hidden="true" />) : (
                        <MenuIcon className="h-6 w-6 cursor-pointer" aria-hidden="true" />
                        )
                        }
                    </button>
                </div>
            </div>

            {mobileMenuIsOpen && (
            <div className="md:hidden bg-white-100/95 backdrop-blur-lg border-t border-gray-200 animate-in slide-in-from-top duration-300">
                <div className="px-4 py-4 sm:px-6 space-y-3 sm:space-y-4">

                    <a href="#Home" 
                    onClick={() => setMobileMenuIsOpen(false)}
                    className="block text-black hover:text-orange-400 text-sm lg:text-base">
                            Home
                        </a>

                        <a href="#About"
                        onClick={() => setMobileMenuIsOpen(false)}
                         className="block text-black hover:text-orange-400 text-sm lg:text-base">
                            About
                        </a>

                        <a href="#Testimonials" 
                        onClick={() => setMobileMenuIsOpen(false)}
                        className="block text-black hover:text-orange-400 text-sm lg:text-base">
                            Testimonials
                        </a></div>
                </div>
                )}
        </nav>
    );
}