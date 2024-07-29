import React from "react";

function About() {
  return (
    <>
        <div className="bg-home-bg">
          <div className="grid grid-cols-1 md:grid-cols-2 text-center md:gap-y-7">
            
            <div className="flex flex-col justify-center p-10 bg-about-bg ">
              <div className="text-mdWhite text-4xl md:text-6xl md:mt-32">
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

    </>
  );
}

export default About;
