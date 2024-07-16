import React from "react";
import LVMLogo from "../assets/LVM LOGO.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0">
      <nav
        id="nav-container"
        className="flex items-center justify-between z-20"
      >
        {/* nav bar rectangle backround */}
        <div className="absolute h-32 top-0 left-0 w-full bg-white/80 backdrop-blur-md drop-shadow-md z-0"></div>
        {/* nav bar rectangle backround */}

        <div className=" flex items-center justify-center cursor-pointer text-6xl font-bold m-4 z-10 text-[#0478FF]">
          <Link
            to="/"
            activeClass="true"
            spy={true}
            offset={-96}
            smooth
            duration={500}
          >
            LVM
          </Link>
        </div>
        <div className="flex flex-row z-30">
          <Link to="/" className="p-5 cursor-pointer">
            Home
          </Link>
          <Link to="/about" className="p-5 cursor-pointer">
            About Us
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
