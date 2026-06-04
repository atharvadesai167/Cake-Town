 import Navbar from "../components/Navbar";
 import Hero from "../components/Hero";
 import About from "../components/About";
 import Testimonials from "../components/Testimonials";
 import Footer from "../components/Footer";

 export default function Home() {
   return (
      <>
         <Navbar />
         <div className="mt-2"><Hero /></div>
         <About />
         <Testimonials />
         <Footer />
      </>
   );
 }