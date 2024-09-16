import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/beranda.jsx";
import Tentang from "./pages/tentang.jsx";
import Portofolio from "./pages/portofolio.jsx";

function App() {
  return (
    <div className="bg-[#121212] ">
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/portofolio" element={<Portofolio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
