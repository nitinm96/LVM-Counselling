import React from "react";
import LVMLogo from "../assets/LVM LOGO.png";

function Navbar() {
  return (
    <div className="sticky top-0 z-20">
      <nav
        id="nav-container"
        className="flex items-center justify-between z-20"
      >
        <div className="absolute h-28 top-0 left-0 w-full bg-white/80 backdrop-blur-md drop-shadow-md z-0"></div>
      </nav>
    </div>
  );
}

export default Navbar;
