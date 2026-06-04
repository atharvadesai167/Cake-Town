import { useState, useEffect } from 'react';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(event) {
            setMousePosition({ x: event.clientX, y: event.clientY });
            console.log(event.clientX, event.clientY);
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 165, 0, 0.4), transparent 80%)` 
            }} />

            <div>
                <div>
                    <div>
                        <section>
                            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-162.5 relative">
                                <div>
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                                        Welcome to Cake 
                                        <span className="text-orange-400">Town</span>
                                    </h1>
                                    <p className="text-lg text-orange-950 mt-4">
                                        Every celebration deserves a cake that's as special as the moment itself. At CakeTown, we create beautifully crafted custom cakes made with quality ingredients, creativity, and care to make your birthdays, weddings, anniversaries, and special occasions truly unforgettable.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}
