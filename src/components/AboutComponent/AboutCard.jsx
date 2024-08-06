import React from 'react'

function AboutCard({title, description}) {
  return (
    <div className="bg-mdWhite/30 p-6 md:p-12 text-center rounded-2xl">
       {title}
        <div className="text-sm md:text-lg">
            {description}
        </div>
    </div>
  )
}

export default AboutCard