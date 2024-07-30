import React from 'react'
import servicesData from "../data/services.json";
import services from "../assets/Services.png";

function Services() {
  return (
    <>
    <div className="flex flex-col justify-center items-center bg-home-bg">
        <div className="text-staleBrown text-4xl m-4 mt-10 md:text-5xl">
          Services
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5 gap-10 overflow-hidden">
          {/* Services Card */}
          {servicesData.map((serviceItem) => (
            <div className="flex flex-col justify-start items-center bg-olive/20 rounded-xl text-white gap-y-3 mx-10">
              <img src={services} alt="home" className=" object-cover w-full h-60 rounded-t-2xl" />
              <div className="text-2xl px-5">{serviceItem.title}</div>
              <div className="text-base px-5">
                {serviceItem.description}
              </div>
              <hr className="w-3/4" />
              <div className="flex flex-row justify-between items-center w-full px-5 py-5">
                <div>
                  {serviceItem.serviceTime}<div>{serviceItem.cost}</div>
                </div>
                <a href={serviceItem.redirectUrl} target="_blank">
                  <button className="bg-mdWhite text-darkTeal text-xl mx-4 px-8 py-2 rounded-lg hover:bg-darkTeal hover:text-mdWhite transition-all duration-150 ease-out cursor-pointer">
                    Book Now
                  </button>
                </a>
              </div>
            </div>                
          ))}

          {/* Services Card */}
        </div>
      </div>
    </>
  )
}

export default Services