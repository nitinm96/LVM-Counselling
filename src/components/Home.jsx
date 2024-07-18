import React from "react";
import homeImg1 from "../assets/slicedPhotos/images/home_img_01.jpg";
import homeImg2 from "../assets/slicedPhotos/images/home_img_02.jpg";
import homeImg3 from "../assets/slicedPhotos/images/home_img_03.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-home-bg gap-y-8">
        <div className="text-staleBrown text-2xl mx-4 md:mx-52 text-center md:text-5xl mt-[100px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page.
        </div>
        <div className="text-staleBrown text-xl md:text-3xl text-center">
          A safe place to discover your true self.
        </div>
        <a
          href="https://www.linkedin.com/in/lavanya-verma-aa168116a/"
          target="_blank"
        >
          <motion.button
            className="bg-mdWhite text-darkTeal text-xl m-4 px-8 py-2 rounded-lg hover:bg-darkTeal hover:text-mdWhite transition-all duration-150 ease-out cursor-pointer"
            initial={{ y: "-5%", opacity: 0 }}
            animate={{ y1: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            Start Your Journey
          </motion.button>
        </a>
        <div className="hidden md:flex md:flex-row md:justify-center md:items-center md:gap-x-7">
          <motion.img
            src={homeImg1}
            alt="home"
            className=" rounded-tl-[25%] h-4/5"
            initial={{ x: "-5%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.img
            src={homeImg2}
            alt="home"
            className="h-4/5"
            initial={{ x: "-5%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.img
            src={homeImg3}
            alt="home"
            className=" rounded-tr-[25%] h-4/5"
            initial={{ x: "-5%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
        </div>
        <motion.div
          className="md:hidden p-6 bg-darkBrown/25"
          initial={{ x: "-5%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img src={homeImg1} alt="home" className="" />
        </motion.div>
      </div>

      {/* <div className="h-screen flex flex-col justify-center items-center bg-home-bg">
        About Screen
      </div>
      <div className="h-screen flex flex-col justify-center items-center bg-home-bg">
        Services
      </div>
      <div className="h-screen flex flex-col justify-center items-center bg-home-bg">
        FAQ
      </div>
      <div className="h-screen flex flex-col justify-center items-center bg-home-bg">
        Contact Us
      </div> */}
    </>
  );
}
export default Home;
