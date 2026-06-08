import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import FloatingContact from "./components/FloatingContact";
import Credits from "./components/Credits";
import ClickSpark from "./components/ClickSpark";

function App() {
  return (
    <ClickSpark
      sparkColor="#f97316"
      sparkSize={12}
      sparkRadius={25}
      sparkCount={10}
      duration={500}
    >
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
    </ClickSpark>
  );
}

export default App;