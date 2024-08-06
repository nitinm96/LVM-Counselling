import React from 'react'
import OurTeamCard from './OurTeamCard'
import teamData from '../../data/ourTeam.json'

function OurTeam() {
  return (
    <div className='flex flex-col justify-center items-center bg-home-bg'>
        <div className="text-staleBrown text-4xl m-4 mt-10 md:text-6xl">
          Our Team
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10'>
            {teamData.map((teamMember) => (
              <OurTeamCard
                key={teamMember.id}
                id={teamMember.id}  
                name={teamMember.name}
                role={teamMember.qualification}
                qualifications={teamMember.qualificationAbbrv}
                languages={teamMember.languages}
                availability={teamMember.availability}
                bookingLink={teamMember.bookLink}
                description={teamMember.description}
            />                       
          ))}
          
        </div>
    </div>
  )
}

export default OurTeam