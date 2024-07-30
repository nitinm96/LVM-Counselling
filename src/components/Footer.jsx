import React from 'react'
import LVMLogo from "../assets/LVM LOGO.png";

function Footer() {
  return (
    <div className='bg-brightWhite h-44'>
        <div className='flex flex-col justify-center items-center'>
            <img src={LVMLogo} className=" h-52 absolute mt-32 pt-4" />
            <div className="text-darkTeal text-lg absolute mt-64">
            © 2024 | LVM Counselling    
            </div>
        </div>
    </div>
  )
}

export default Footer