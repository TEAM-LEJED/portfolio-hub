import React from 'react'
import { Edit, Trash } from 'lucide-react';
import c from "../../components/preview/constants";

const ExperienceCards = () => {
  return (
    <div className='p-20'>
      <div className='grid h-5 grid-cols-2 gap-9'>
        {
          c.EXPERIENCECARD.map((item, index) => (
            <div key={index} className='relative flex flex-col h-64 w-72 p-4 border border-[#FFCD58] rounded shadow-lg'>
              <h3>{item.companyName}</h3>
              <h4>{item.role}</h4>
              <p>{item.skills}</p>
              <p>{item.responsibility}</p>
              <p>{item.location}</p>
              <p>{item.startDate}</p>
              <p>{item.endDate}</p>
              <div className='absolute right-0 top-0 h-full flex flex-col justify-between items-center'>
                <div className='bg-yellow-500 w-1 h-full'></div>
                <Edit className='cursor-pointer text-green-600' />
                
                <Trash className='cursor-pointer text-red-600' />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ExperienceCards
