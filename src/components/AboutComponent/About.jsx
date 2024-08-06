import React from "react";
import AboutCard from "./AboutCard";
import { motion } from "framer-motion";

function About() {

  const purposeDescription ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content."
  const missionDescription = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  const valuesDescription ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal."
  return (
    <>
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
              <AboutCard title="Our Purpose" description={purposeDescription} />
              <AboutCard title="Our Mission" description={missionDescription} />
              <AboutCard title="Our Values" description={valuesDescription} />           
        </div>
          </div>        
      </div>
    </>
  );
}

export default About;
