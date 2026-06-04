import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="About"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        >
            <div className="max-w-7xl mx-auto">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <img
                            src="/cake2.jpg"
                            alt="About CakeTown"
                            className="w-full max-w-md rounded-3xl shadow-xl"
                        />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-orange-600 font-semibold uppercase tracking-wider">
                            About Us
                        </span>

                        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
                            Baking Happiness,
                            <span className="text-orange-600">
                                {" "}One Cake At A Time
                            </span>
                        </h2>

                        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                            At CakeTown, every cake is crafted with passion,
                            creativity, and attention to detail. We believe that
                            every celebration deserves something special, and our
                            goal is to transform your sweetest ideas into beautiful
                            creations that leave lasting memories.
                        </p>

                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            From birthdays and anniversaries to weddings and
                            special occasions, our cakes are designed not only
                            to look stunning but also to taste unforgettable.
                            Every design reflects our commitment to quality,
                            craftsmanship, and customer satisfaction.
                        </p>

                        <div className="mt-8 grid grid-cols-3 gap-6">

                            <div>
                                <h3 className="text-3xl font-bold text-orange-600">
                                    800+
                                </h3>
                                <p className="text-gray-600">
                                    Cakes Created
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-orange-600">
                                    500+
                                </h3>
                                <p className="text-gray-600">
                                    Happy Clients
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-orange-600">
                                    5★
                                </h3>
                                <p className="text-gray-600">
                                    Satisfaction
                                </p>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}