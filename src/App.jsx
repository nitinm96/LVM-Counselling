import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <HomeRender />
        <Footer />
      </BrowserRouter>
    </>
  );
}

const HomeRender = () => {
  const path = useLocation();
  return (
    <>
      {path.pathname === '/' && (
        <>
          <About />
          <Services />
          <Contact />
        </>
      )}
      {path.pathname === '/home' && (
        <>
          <About />
          <Services />
          <Contact />
        </>
      )}
      
    </>
  );
}

export default App;
