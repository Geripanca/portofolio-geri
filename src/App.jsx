import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/beranda.jsx";
import Tentang from "./pages/tentang.jsx";

function App() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
