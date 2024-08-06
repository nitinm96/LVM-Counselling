import React from 'react'
import mePic from '../../assets/lavanya.jpg'
import { useNavigate } from 'react-router-dom'

function OurTeamCard({id, name, role, qualifications, languages, availability, bookingLink, description}) {
  
    const navigate = useNavigate();
    
    const handleReadMore = () => {
    navigate(`/our-team/${id}${name}`, {
      state: {
        name,
        role,
        qualifications,
        languages,
        availability,
        bookingLink,
        description
      },
    });
  };

    return (
    <div className="flex flex-col justify-start items-start bg-brightWhite rounded-2xl text-staleBrown gap-y-3 my-4">
        <img src={mePic} alt="team" className=" object-cover w-full h-60 rounded-t-2xl" />
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
        <div className="text-md px-5">
            Availability: {availability}
        </div>
        <button onClick ={handleReadMore} className=" text-darkTeal px-5 py-2 text-xl hover:opacity-60 transition-all ease-in">
            Read More
        </button>        
    </div>  
  )
}

export default OurTeamCard