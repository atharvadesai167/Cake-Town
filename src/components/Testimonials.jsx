    import { useState, useEffect } from "react";
    import { motion } from "framer-motion";
    import { Quote, Star } from "lucide-react";

    export default function Testimonials() {
        const testimonials = [
            {
                id: 1,
                name: "Priya Sharma",
                role: "Birthday Celebration",
                content:
                    "The cake was absolutely stunning and tasted even better than it looked. Everyone at the party loved it!",
                rating: 5,
                avatar: "/customer1.jpg",
            },
            {
                id: 2,
                name: "Rahul Patel",
                role: "Wedding Event",
                content:
                    "CakeTown delivered exactly what we imagined. Beautiful design, amazing taste, and great service.",
                rating: 5,
                avatar: "/customer2.jpg",
            },
            {
                id: 3,
                name: "Sneha Joshi",
                role: "Anniversary Celebration",
                content:
                    "The attention to detail was incredible. The cake became the highlight of our celebration.",
                rating: 5,
                avatar: "/customer3.jpg",
            },
        ];

        const [activeIndex, setActiveIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
            }, 5000);

            return () => clearInterval(interval);
        }, [testimonials.length]);

        return (
            <section
                id="Testimonials"
                className="py-24 px-4 sm:px-6 lg:px-8 bg-orange-50 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto">

                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* LEFT SIDE */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-orange-600 font-semibold uppercase tracking-wider">
                                Testimonials
                            </span>

                            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
                                Sweet Words From
                                <span className="text-orange-600">
                                    {" "}Happy Customers
                                </span>
                            </h2>

                            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                                Every cake tells a story, and every celebration
                                creates memories. Here's what our customers have to
                                say about their CakeTown experience.
                            </p>

                            {/* Dots */}
                            <div className="flex gap-3 mt-8">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`h-3 rounded-full transition-all duration-300 ${
                                            activeIndex === index
                                                ? "w-10 bg-orange-600"
                                                : "w-3 bg-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative min-h-[350px]"
                        >
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    className="absolute inset-0"
                                    animate={{
                                        opacity: activeIndex === index ? 1 : 0,
                                        x: activeIndex === index ? 0 : 80,
                                        scale: activeIndex === index ? 1 : 0.95,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    style={{
                                        zIndex:
                                            activeIndex === index ? 10 : 0,
                                    }}
                                >
                                    <div className="bg-white rounded-3xl shadow-xl p-8 h-full flex flex-col">

                                        {/* Stars */}
                                        <div className="flex gap-2 mb-6">
                                            {Array.from({
                                                length: testimonial.rating,
                                            }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <div className="relative flex-1">
                                            <Quote className=" h-10 w-10 text-orange-200 mb-4" />

                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                "{testimonial.content}"
                                            </p>
                                        </div>

                                        {/* Divider */}
                                        <div className="my-6 border-t border-gray-200"></div>

                                        {/* Customer */}
                                        <div className="flex items-center gap-4">

                                            <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-orange-200">
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-gray-900">
                                                    {testimonial.name}
                                                </h3>

                                                <p className="text-sm text-gray-500">
                                                    {testimonial.role}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>

                </div>
            </section>
        );
    }