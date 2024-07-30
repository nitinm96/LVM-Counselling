import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

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
        </>
      )}
      {path.pathname === '/home' && (
        <>
          <About />
          <Services />
        </>
      )}
      
    </>
  );
}

export default App;
