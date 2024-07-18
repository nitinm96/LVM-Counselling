import React from "react";

function About() {
  return (
    <>
      <div className="h-screen flex flex-row justify-center items-center bg-home-bg">
          <div className="flex flex-col justify-center items-center bg-about-bg w-1/2 h-full text-center gap-y-7">
            <div className="text-mdWhite text-6xl">
              About Us
            </div>
            <div className="text-mdWhite text-3xl">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 h-full gap-y-3 text-3xl text-mdBrown">
            <div className="bg-mdWhite/30 p-12 text-center">
              Our Purpose
              <div className="text-lg">
                It is a long established fact that a reader will be 
                distracted by the readable content of a page when 
                looking at its layout. The point of using Lorem Ipsum is 
                that it has a more-or-less normal distribution of letters, as 
                opposed to using 'Content here, content.
              </div>
            </div>
            <div className="bg-mdWhite/30 p-12 text-center">
              Our Mission
              <div className="text-lg">
                It is a long established fact that a reader will be 
                distracted by the readable content of a page when 
                looking at its layout.
              </div>
            </div>
            <div className="bg-mdWhite/30 p-12 text-center">
              Our Values
              <div className="text-lg">
                It is a long established fact that a reader will be 
                distracted by the readable content of a page when 
                looking at its layout. The point of using Lorem Ipsum is 
                that it has a more-or-less normal.
              </div>
            </div>            
        </div>
      </div>
    </>
  );
}

export default About;
