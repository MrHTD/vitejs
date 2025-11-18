import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Watch from "./pages/Watch";
import Notfound from "./pages/notfound";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/watch">Watch</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/notfound">Notfound</Link>
        </nav>

        <Header />

        <Routes>
          {/* Dynamic Routes with Optional Parameters */}
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
