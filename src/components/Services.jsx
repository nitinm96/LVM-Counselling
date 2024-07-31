import React from 'react'
import servicesData from "../data/services.json";
import servicesImage from "../assets/Services.png";
import ServiceCard from './ServiceCard';

function Services() {
  return (
    <>
    <div className="flex flex-col justify-center items-center bg-home-bg">
        <div className="text-staleBrown text-4xl m-4 mt-10 md:text-6xl">
          Services
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-14 gap-10 overflow-hidden">
          {/* Services Card */}
          {servicesData.map((services) => (
            <ServiceCard 
              serviceTitle={services.title} 
              serviceImg={servicesImage} 
              serviceDescription={services.description} 
              serviceTime={services.serviceTime}
              serviceCost={services.cost}
              redirectUrl={services.redirectUrl}  
            />                       
          ))}
          {/* Services Card */}
        </div>
      </div>
    </>
  )
}

export default Services