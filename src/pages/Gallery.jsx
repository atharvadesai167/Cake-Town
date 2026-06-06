import { useState } from "react";
import Navbar from "../components/Navbar";
import { FiFilter } from "react-icons/fi";

export default function Gallery() {

    const categories = [
        "All",
        "Birthday",
        "Wedding Anniversary",
        "Event",
    ];

    const [activeCategory, setActiveCategory] = useState("All");
    const [menuOpen, setMenuOpen] = useState(false);

    const cakes = [
        {
            name: "Cake 1",
            image: "/cake1.jpg",
            category: "Birthday",
        },

        {
            name: "Cake 2",
            image: "/cake2.jpg",
            category: "Wedding Anniversary",
        },

        {
            name: "Cake 3",
            image: "/cake3.jpg",
            category: "Event",
        },

        {
            name: "Cake 4",
            image: "/cake4.jpg",
            category: "Birthday",
        },

        {
            name: "Cake 5",
            image: "/cake5.jpg",
            category: "Wedding Anniversary",
        },
    ];

    return (
        <div className="min-h-screen bg-orange-50 relative overflow-hidden">

            <Navbar />

            <div className="pt-32 px-6">

                {/* FILTER BUTTON */}
                <div className="flex justify-start mb-8">
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="flex items-center gap-2 bg-orange-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-orange-600 transition"
                    >
                        <FiFilter />
                        Categories
                    </button>
                </div>

                {/* TITLE */}
                <h1 className="text-5xl font-bold text-center text-orange-600">
                    Cake Gallery
                </h1>

                <p className="text-center mt-3 text-gray-600">
                    Browse through all of our cake creations
                </p>

                {/* CAKE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

                    {cakes.map((cake) => (

                        <div
                            key={cake.name}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
                        >

                            <img
                                src={cake.image}
                                alt={cake.name}
                                className="w-full h-72 object-cover"
                            />

                            <div className="p-4">

                                <h3 className="text-xl font-bold text-gray-800">
                                    {cake.name}
                                </h3>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* DARK OVERLAY */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* LEFT SLIDE PANEL */}
            <div
                className={`
                    fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50
                    transform transition-transform duration-300
                    ${menuOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <div className="p-6">

                    <h2 className="text-xl font-bold mb-6 text-gray-800">
                        Categories
                    </h2>

                    <div className="flex flex-col gap-3">

                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setMenuOpen(false);
                                }}
                                className={`
                                    px-4 py-2 rounded-lg text-left transition
                                    ${
                                        activeCategory === cat
                                            ? "bg-orange-500 text-white shadow-md"
                                            : "bg-orange-50 hover:bg-orange-100"
                                    }
                                `}
                            >
                                {cat}
                            </button>
                        ))}

                    </div>

                </div>
            </div>

        </div>
    );
}