import React, { useState } from 'react'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'

function FaqCard({ faqQuestion, faqAnswer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className='flex flex-col p-4 border-solid border-t-2 border-staleBrown cursor-pointer md:mx-14'
      onClick={toggleAnswer}
    >
      <div className="flex flex-row justify-between items-center text-staleBrown text-base md:text-xl">
        <div>{faqQuestion}</div>
        {isOpen ? (
          <KeyboardArrowUp fontSize='medium' className="text-staleBrown" />
        ) : (
          <KeyboardArrowDown fontSize='medium' className="text-staleBrown" />
        )}
      </div>
      {isOpen && (
         <div className='text-staleBrown bg-brightWhite/50 p-4 m-2 md:text-xl'>
          {faqAnswer}
         </div>
      )}
    </div>
  );
}

export default FaqCard;