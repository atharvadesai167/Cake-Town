import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Credits from "../components/Credits";

export default function Home() {
   return (
      <>
         <Navbar />

         <div id="Home" className="mt-2">
            <Hero />
         </div>

         <div id="About">
            <About />
         </div>

         <div id="Testimonials">
            <Testimonials />
         </div>

      </>
   );
}