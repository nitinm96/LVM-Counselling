import React from 'react'

function ServiceCard({serviceTitle, serviceImg, serviceDescription, serviceTime, serviceCost, redirectUrl}) {
  return (
    <div className="flex flex-col justify-start items-center bg-olive/20 rounded-xl text-white gap-y-3 mx-10">
        <img src={serviceImg} alt="Service_Image" className=" object-cover w-full h-60 rounded-t-2xl" />
        <div className="text-2xl px-5">{serviceTitle}</div>
        <div className="text-base px-5">
            {serviceDescription}
        </div>
              <hr className="w-3/4" />
        <div className="flex flex-row justify-between items-center w-full px-5 py-5">
            <div>
              {serviceTime}
              <div>{serviceCost}</div>
            </div>
            <a href={redirectUrl} target="_blank">
              <button className="bg-mdWhite text-darkTeal text-xl mx-4 px-8 py-2 rounded-lg hover:bg-darkTeal hover:text-mdWhite transition-all duration-150 ease-out cursor-pointer">
                Book Now
              </button>
            </a>
        </div>
    </div>  
  )
}

export default ServiceCard