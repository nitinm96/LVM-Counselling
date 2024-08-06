import React from 'react'
import faqData from "../../data/faq.json"
import FaqCard from "./FaqCard"
function Faq() {
  return (
   <div className="flex flex-col justify-center items-center bg-home-bg">
        <div className="text-staleBrown text-4xl m-4 mt-10 md:text-6xl">
          FAQ
        </div>
        <div className='my-8 w-full'>
        {faqData.map((faq, index) => (
        <FaqCard
          key={index}
          faqQuestion={faq.question}
          faqAnswer={faq.answer}
        />
      ))}
        </div>
    </div>
  )
}

export default Faq