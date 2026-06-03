import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return <div className="min-h-screen bg-amber-100 text-white-100 overflow-hidden">

    <Navbar />
    <Hero />
    <About />
    <Testimonials />
    <Footer />
  </div>
}

export default App
