import React from "react";
import homeImg1 from "../assets/slicedPhotos/images/home_img_01.jpg";
import homeImg2 from "../assets/slicedPhotos/images/home_img_02.jpg";
import homeImg3 from "../assets/slicedPhotos/images/home_img_03.jpg";
import services from "../assets/Services.png";
import { motion } from "framer-motion";
import servicesData from "../data/services.json";

function Home() {
  return (
    <>
    {/* HOME PAGE */}
      <div className="h-screen flex flex-col justify-center items-center bg-home-bg gap-y-5">
        <div className="text-staleBrown text-3xl mx-4 md:mx-52 text-center md:text-5xl">
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
            className="bg-mdWhite text-darkTeal text-xl mx-4 px-8 py-2 rounded-lg hover:bg-darkTeal hover:text-mdWhite transition-all duration-150 ease-out cursor-pointer"
            initial={{ y: "-5%", opacity: 0 }}
            animate={{ y1: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            Start Your Journey
          </motion.button>
        </a>
        {/* DESKTOP IMAGES */}
        <div className="hidden md:flex md:flex-row md:justify-center md:items-center md:gap-x-7 overflow-hidden">
          <motion.img
            src={homeImg1}
            alt="home"
            className=" rounded-tl-[25%] h-5/6"
            initial={{ x: "-5%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.img
            src={homeImg2}
            alt="home"
            className="h-5/6"
            initial={{ x: "-5%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.img
            src={homeImg3}
            alt="home"
            className=" rounded-tr-[25%] h-5/6"
            initial={{ x: "-5%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
        </div>

        {/* MOBILE IMAGE */}
        <motion.div
          className="md:hidden"
          initial={{ x: "-5%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img src={homeImg1} alt="home" className="h-4/5 mt-10" />
        </motion.div>
      </div>

      {/* ABOUT ME */}
      <div className="bg-home-bg">
          <div className="grid grid-cols-1 md:grid-cols-2 text-center md:gap-y-7">
            
            <div className="flex flex-col justify-center p-10 bg-about-bg ">
              <div className="text-mdWhite text-4xl md:text-6xl">
              About Us
            </div>
            <div className="text-mdWhite text-lg md:text-3xl">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-5 m-10 md:m-10 text-xl md:text-3xl text-mdBrown">
            <div className="bg-mdWhite/30 p-6 md:p-12 text-center">
              Our Purpose
              <div className="text-sm md:text-lg">
                It is a long established fact that a reader will be 
                distracted by the readable content of a page when 
                looking at its layout. The point of using Lorem Ipsum is 
                that it has a more-or-less normal distribution of letters, as 
                opposed to using 'Content here, content.
              </div>
            </div>
            <div className="bg-mdWhite/30 p-6 md:p-12 text-center">
              Our Mission
              <div className="text-sm md:text-lg">
                It is a long established fact that a reader will be 
                distracted by the readable content of a page when 
                looking at its layout.
              </div>
            </div>
            <div className="bg-mdWhite/30 p-6 md:p-12 text-center">
              Our Values
              <div className="text-sm md:text-lg">
                It is a long established fact that a reader will be 
                distracted by the readable content of a page when 
                looking at its layout. The point of using Lorem Ipsum is 
                that it has a more-or-less normal.
              </div>
            </div>            
        </div>
          </div>
          
      </div>
    
    {/* SERVICES */}
      <div className="flex flex-col justify-center items-center bg-home-bg">
        <div className="text-staleBrown text-4xl m-4 mt-10 md:text-5xl">
          Services
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5 gap-10 overflow-hidden">
          {/* Services Card */}
          {servicesData.map((serviceItem) => (
            <div className="flex flex-col justify-start items-center bg-olive/20 rounded-xl text-white gap-y-3 mx-10">
              <img src={services} alt="home" className=" object-cover w-full h-60 rounded-t-2xl" />
              <div className="text-2xl px-5">{serviceItem.title}</div>
              <div className="text-base px-5">
                {serviceItem.description}
              </div>
              <hr className="w-3/4" />
              <div className="flex flex-row justify-between items-center w-full px-5 py-5">
                <div>
                  {serviceItem.serviceTime}<div>{serviceItem.cost}</div>
                </div>
                <a href={serviceItem.redirectUrl} target="_blank">
                  <button className="bg-mdWhite text-darkTeal text-xl mx-4 px-8 py-2 rounded-lg hover:bg-darkTeal hover:text-mdWhite transition-all duration-150 ease-out cursor-pointer">
                    Book Now
                  </button>
                </a>
              </div>
            </div>                
          ))}

          {/* Services Card */}
        </div>
      </div>
      {/*
      
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
