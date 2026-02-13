import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Library from "./pages/Library";
import Hierarchy from "./pages/Hierarchy";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/library">Library</Link>
        <Link to="/hierarchy">Hierarchy</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/library" element={<Library />} />
        <Route path="/hierarchy" element={<Hierarchy />} />
      </Routes>
    </Router>
  );
}

export default App;
