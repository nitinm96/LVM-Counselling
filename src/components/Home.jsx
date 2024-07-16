import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center bg-home-bg">
        Home screen
      </div>
    </>
  );
}
export default Home;
