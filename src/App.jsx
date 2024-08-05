import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import OurTeam from "./components/OurTeam";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/our-team/:userId" element={<Profile />} />

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
          <OurTeam />
          <Services />
          <Faq />
          <Contact />
        </>
      )}
      {path.pathname === '/home' && (
        <>
          <About />
          <OurTeam />
          <Services />
          <Faq />
          <Contact />
        </>
      )}
      
    </>
  );
}

export default App;
