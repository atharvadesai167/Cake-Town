import { motion } from "framer-motion";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function FloatingContact() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">

            {/* Popup Animation Wrapper */}
            <motion.div
            initial={{scale: 0.8, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{duration: 0.3}}
            className="flex flex-col gap-3 items-end"
            >

                {/*Main Button*/}
                <motion.a
                href="tel:78880 42515"
                animate={{
                    scale: [1, 1.08, 1],
                }}
                className="bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-orange-700 transition"
                >
                    <MdOutlinePhoneEnabled />
                    Contact Us
                    </motion.a>

                    {/* Socials */}
                    <div className="flex gap-2">

                        <a 
                        href="https://instagram.com/the_cake_town_/"
                        target="_blank"
                        className="bg-white shadow-md p-3 rounded-full hover:scale-110 transition"
                        >

                            <FaInstagram className="text-pink-500" />
                        </a>

                        <a
                        href="https://facebook.com/share/1c4ZPwFWto/"
                        target="_blank"
                        className="bg-white shadow-md p-3 rounded-full hover:scale-110 transition"
                        >
                            <FaFacebook className="text-blue-600" />
                        </a>

                    </div>
            </motion.div>
        </div>
    );
}