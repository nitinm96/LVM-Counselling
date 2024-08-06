import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import mePic from '../assets/lavanya.jpg'

function Profile() {

  const { userId } = useParams();
  const location = useLocation();
  const { name, role, qualifications, languages, availability, bookingLink, description } = location.state || {};

  return (
    <div className='flex flex-col justify-center items-center bg-home-bg'>
        <div className='grid grid-cols-1 md:grid-cols-4'>
            <div className="flex flex-col justify-start items-start rounded-2xl bg-brightWhite text-staleBrown gap-y-3 mx-10 md:ml-14 my-8 md:col-span-1">
                <img src={mePic} alt="team" className=" object-cover w-full rounded-t-2xl h-60" />
                <div className="text-3xl px-5">{name}</div>
                <div className="text-xl px-5">
                    {role}
                </div>
                <div className="text-md px-5">
                    {qualifications}
                </div>
                <div className="text-md px-5">
                    Languages Spoken: {languages}
                </div>
                <div className="text-md px-5 pb-5">
                    Availability: {availability}
                </div>     
                <a href={bookingLink} target="_blank" className='my-2'>
                <button className="bg-darkTeal text-mdWhite text-xl mx-4 px-8 py-2 rounded-lg hover:opacity-70 transition-all duration-150 ease-out cursor-pointer">
                    Book Now
                </button>
                </a>
            </div> 
            <div className='md:col-span-3'>
               
                {description.map((desc, index) => (
                     <div key={index} className="flex flex-col justify-center items-center m-10 gap-2 text-staleBrown text-base md:border-darkTeal md:border-l-2">
                       <p className='m-2'>{desc.para1}</p>
                       <p className='m-2'>{desc.para2}</p>
                       <p className='m-2'>{desc.para3}</p>
                       <p className='m-2'>{desc.para4}</p>
                       <p className='m-2'>{desc.para5}</p>
                    </div>                     
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default Profile