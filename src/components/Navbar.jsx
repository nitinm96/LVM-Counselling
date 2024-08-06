import React, { useState, useEffect } from "react";
import LVMLogo from "../assets/LVM LOGO.png";
import { Link } from "react-router-dom";
import navLinks from "../data/navLinks.json";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { CloseRounded } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleNav = () => {
    setNav(!nav);
  };

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const mailTo = () => {
    window.location = "mailto:lvmcounselling@gmail.com";
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className="sticky top-0 z-30">
      <nav
        id="nav-container"
        className=" sticky flex items-center justify-between h-32 top-0 left-0 w-full bg-mdWhite backdrop-blur-md drop-shadow-md z-30"
      >
        {/* LOGO HERE */}
        <div className=" flex items-center justify-center cursor-pointer text-6xl font-bold m-4 z-10">
          <Link to="/">
            <img src={LVMLogo} className="h-52" />
          </Link>
        </div>

        {isMobile ? (
          <div>
            <MenuRoundedIcon
              htmlColor="black"
              fontSize="large"
              style={{ fontSize: "48px" }}
              onClick={handleNav}
              className="z-20 cursor-pointer mr-5"
            />
          </div>
        ) : (
          <>
            {/* RENDER DESKTOP VIEW */}
            <ul className="hidden md:flex items-center justify-center text-2xl gap-x-8 z-30 md:mr-14">
              {navLinks.map((navItem) => (
                <li
                  key={navItem.id}
                  className="p-5 hover:text-darkTeal transition-all duration-150 ease-out cursor-pointer"
                >
                  <Link to={navItem.url}>{navItem.name}</Link>
                </li>
              ))}
              <div className="flex flex-col items-center justify-center text-lg gap-y-3">
                <a
                  href="https://calendly.com/nitinminhas18"
                  target="_blank"
                >
                  <button className="bg-darkTeal text-mdWhite text-xl px-8 py-2 rounded-lg hover:opacity-90 transition-all duration-150 ease-out cursor-pointer ">
                    Book Now
                  </button>
                </a>
                <div
                  className="flex flex-row items-center justify-center cursor-pointer"
                  onClick={mailTo}
                >
                  <MailIcon fontSize="medium" className="text-darkTeal" />
                  lvmcounselling@gmail.com
                </div>
              </div>
            </ul>
          </>
        )}

        {/* RENDER MOBILE VIEW */}
        {isMobile && (
          <div
            className={
              nav
                ? "absolute ease-in duration-200 left-0 top-0 w-full h-screen bg-darkTeal/90 backdrop-blur-md z-30 text-mdWhite"
                : "absolute w-full h-screen opacity-0 -left-full -top-full ease-in duration-200"
            }
          >
            <div className="absolute top-0 left-0 md:hidden">
              <CloseRounded
                fontSize="large"
                onClick={handleNav}
                className="text-mdWhite z-20 cursor-pointer hover:opacity-55 m-4"
              />
            </div>
            {/* NAVIGATION LINKS */}
            <ul className="flex flex-col items-center justify-center w-full h-screen md:flex-row text-3xl gap-y-4 z-30 md:mr-32 md:gap-x-16">
              {navLinks.map((navItem) => (
                <li
                  key={navItem.id}
                  className="p-5 hover:text-darkTeal transition-all duration-150 ease-out cursor-pointer"
                  onClick={handleNav}
                >
                  <Link to={navItem.url}>{navItem.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
