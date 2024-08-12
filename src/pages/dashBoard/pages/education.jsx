import React, { useEffect, useState } from 'react'
import PagesLayout from '../layout/pagesLayout'
import { useNavigate } from 'react-router-dom'
import { Edit, Loader, Trash } from 'lucide-react';
import c from '../../../components/preview/constants';
import { apiDeleteEducation, apiGetEducation } from '../../../services/education';
import { toast } from 'react-toastify';
import { noData } from '../../../assets';
const Education = () => {
  const navigate = useNavigate();
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchEducation = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetEducation();
      console.log(res.data);
      setExperiences(res.data.education || []);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteEducation(_id);
      console.log(res.data);
      toast.success(res.data.message);

    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  }

  useEffect(() => {
    fetchEducation();
  }, []);




  return (
    <div>
<PagesLayout headerText="Education" buttonText="Add New "
onClick={() => navigate("/dashboard/education/add-education")}>
</PagesLayout>
     <div className='p-20'>
     <div className='grid h-5 grid-cols-2 gap-9'>
       {education.length == 0 ? (
              <p>
                {/* No experience added yet */}
                <img src={noData} alt="" />

              </p>
              
            ) : (
         education.map((item, index) => (
           <div key={index} className='relative flex flex-col h-64 w-72 p-4 border border-[#FFCD58] rounded shadow-lg'>
             <h3>{item.schoolName}</h3>
             <h4>{item.program}</h4>
             <p>{item.qualification}</p>
             <p>{item.grade}</p>
             <p>{item.location}</p>
             <p>{item.startDate} - {item.endDate}</p>
             <div className="absolute right-0 top-0 h-full flex flex-col justify-between items-center">
                      <div className="bg-yellow-500 w-1 h-full"></div>
                      <Edit className="cursor-pointer text-green-600  hover:text-blue-700" />
                      <button
                        onClick={() => handleDelete(_id)}
                        className="cursor-pointer"
                      >
                        {isDeleting ? (
                          <Loader />
                        ) : (
                          <Trash className="text-red-500 hover:text-red-700" />
                        )}
                      </button>
                    </div>
           </div>
         ))
       )}
     </div>
   </div>
   </div>
 )
}

export default Education;