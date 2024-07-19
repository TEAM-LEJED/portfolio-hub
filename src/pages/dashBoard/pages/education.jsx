import React from 'react'
import PagesLayout from '../layout/pagesLayout'
import { useNavigate } from 'react-router-dom'
import { Edit, Trash } from 'lucide-react';
import c from '../../../components/preview/constants';
const Education = () => {
  const navigate = useNavigate();
  return (
    <div>
<PagesLayout headerText="Education" buttonText="Add New "
onClick={() => navigate("/dashboard/education/add-education")}>
</PagesLayout>
     <div className='p-20'>
     <div className='grid h-5 grid-cols-2 gap-9'>
       {
         c.EDUCATION.map((item, index) => (
           <div key={index} className='relative flex flex-col h-64 w-72 p-4 border border-[#FFCD58] rounded shadow-lg'>
             <h3>{item.schoolName}</h3>
             <h4>{item.program}</h4>
             <p>{item.qualification}</p>
             <p>{item.grade}</p>
             <p>{item.location}</p>
             <p>{item.startDate} - {item.endDate}</p>
             <div className='absolute right-0 top-0 h-full flex flex-col justify-between items-center'>
               <div className='bg-yellow-500 w-1 h-full'></div>
               <Edit className='cursor-pointer text-green-600 my-2' />
               <Trash className='cursor-pointer text-red-600 my-2' />
             </div>
           </div>
         ))
       }
     </div>
   </div>
   </div>
 )
}

export default Education;