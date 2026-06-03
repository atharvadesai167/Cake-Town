export default function Navbar() {
    return (
        <nav className="fixed top-0 w-screen z-50 transition-all duration-300 bg-white backdrop-blur-sm">
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
                    <div className="ml-auto flex items-center space-x-6 lg:space-x-8">
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

                    <button>
                    </button>

                </div>
            </div>
        </nav>
    );
}   