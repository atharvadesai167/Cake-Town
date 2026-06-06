import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import FloatingContact from "./components/FloatingContact";
import Credits from "./components/Credits";

function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-orange-50/95 overflow-hidden">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <FloatingContact />
      <Credits />

    </div>
    </BrowserRouter>
  );
}

export default App;