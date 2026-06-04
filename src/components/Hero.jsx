import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section
            id="Home"
            className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 md:pt-0"
        >
            {/* Mouse Glow */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `radial-gradient(
                        600px circle at ${mousePosition.x}px ${mousePosition.y}px,
                        rgba(251,146,60,0.35),
                        transparent 80%
                    )`,
                }}
            />

            <div className="container mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-orange-600 font-medium tracking-wider uppercase">
                            Welcome to CakeTown
                        </span>

                        <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            Crafting
                            <span className="text-orange-600">
                                {" "}Sweet Memories
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-700 max-w-xl leading-relaxed">
                            Every celebration deserves a cake that tells a story.
                            At CakeTown, we transform creativity, passion, and
                            craftsmanship into beautiful cakes that make every
                            special moment unforgettable.
                        </p>

                        <div className="flex gap-4 mt-8">
                            <button className="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-500 transition">
                                View Gallery
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <motion.img
                            src="/cake.jpg"
                            alt="CakeTown Showcase"
                            className="w-full max-w-lg object-contain"
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}