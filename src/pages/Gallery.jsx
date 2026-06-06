import Navbar from "../components/Navbar";

export default function Gallery() {
    return (
        <div className="min-h-screen bg-orange-50">
            <Navbar />

            <div className="pt-32 px-6">
                <h1 className="text-5xl font-bold text-center text-orange-600">
                    Cake Gallery
                </h1>

                <p className="text-center mt-4 text-gray-600">
                    Browse through all of our cake creations
                </p>

            </div>

        </div>
    );
}