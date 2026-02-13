import React from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Library from "./pages/Library";
import Hierarchy from "./pages/Hierarchy";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/library">Library</NavLink>
        <NavLink to="/hierarchy">Hierarchy</NavLink>
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
