import React from "react";
import homeImg from "../assets/LVM IMG.png";

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
          <button className="bg-mdWhite text-darkTeal text-xl m-4 px-8 py-2 rounded-lg hover:bg-darkTeal hover:text-mdWhite transition-all duration-150 ease-out cursor-pointer ">
            Start Your Journey
          </button>
        </a>
        {/* <div className="">
          <img src={homeImg} alt="home" className="w-96 md:w-[500px]" />
        </div> */}
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
