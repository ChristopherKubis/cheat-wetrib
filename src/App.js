import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

const baseURL = window.location.origin;


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">Sobre</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Página Inicial</div>} />
        <Route path="about" element={<div>Sobre Nós</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
