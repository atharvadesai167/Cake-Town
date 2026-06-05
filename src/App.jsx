import Home from "./pages/Home";
import FloatingContact from "./components/FloatingContact";
import Credits from "./components/Credits";

function App() {
  return (
    <div className="min-h-screen bg-amber-100 overflow-hidden">
      <Home />
      <FloatingContact />
      <Credits />
    </div>
  );
}

export default App;