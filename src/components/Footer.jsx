import { motion } from "framer-motion";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { FaCakeCandles } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 border-t border-orange-200">

            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="text-[80px] md:text-[180px] font-extrabold text-orange-100 select-none">
                    CAKETOWN
                </h1>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-7xl mx-auto px-6 py-20"
            >

                <div className="grid md:grid-cols-3 gap-12">

                    {/* BRAND */}
                    <div>
                        <div className="flex items-center gap-3">
                            <FaCakeCandles className="text-orange-600 text-3xl" />

                            <h2 className="text-3xl font-bold">
                                Cake<span className="text-orange-600">Town</span>
                            </h2>
                        </div>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Our Motto is to bake happiness, make memories and sweeten lives.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a href="#Home" className="text-gray-600 hover:text-orange-600 transition">
                                Home
                            </a>
                            <a href="#About" className="text-gray-600 hover:text-orange-600 transition">
                                About
                            </a>
                            <a href="#Testimonials" className="text-gray-600 hover:text-orange-600 transition">
                                Testimonials
                            </a>
                            <a href="#Gallery" className="text-gray-600 hover:text-orange-600 transition">
                                Gallery
                            </a>
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Connect With Us
                        </h3>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">
                                <MdOutlinePhoneEnabled className="text-orange-600 text-xl" />
                                <span className="text-gray-600">
                                    +91 78880 42515
                                </span>
                            </div>

                            <div className="flex gap-4 pt-2">

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/the_cake_town_/"
                                    className="p-3 rounded-full bg-white shadow-md hover:scale-110 hover:text-orange-600 transition"
                                >
                                    <FaInstagram size={20} />
                                </a>

                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/share/1c4ZPwFWto/"
                                    className="p-3 rounded-full bg-white shadow-md hover:scale-110 hover:text-orange-600 transition"
                                >
                                    <FaFacebook size={20} />
                                </a>

                                {/* Phone */}
                                <a
                                    href="tel:+917888042515"
                                    className="p-3 rounded-full bg-white shadow-md hover:scale-110 hover:text-orange-600 transition"
                                >
                                    <MdOutlinePhoneEnabled size={20} />
                                </a>

                            </div>

                        </div>
                    </div>

                </div>

                {/* DIVIDER */}
                <div className="my-10 border-t border-orange-200"></div>

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-500 text-sm">
                        © 2026 CakeTown. All Rights Reserved.
                    </p>

                    <p className="text-gray-500 text-sm">
                        Made with ❤️ for sweet celebrations
                    </p>

                </div>

            </motion.div>
        </footer>
    );
}