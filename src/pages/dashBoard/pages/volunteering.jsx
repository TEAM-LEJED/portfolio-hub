import React, { useEffect, useState } from 'react'
import PagesLayout from '../layout/pagesLayout'
import { useNavigate } from 'react-router-dom';
import { Edit, Loader, Trash } from 'lucide-react';
import c from '../../../components/preview/constants';
import { apiDeleteVolunteering, apiGetVolunteering } from '../../../services/volunteering';
import { noData } from '../../../assets';
import PageLoader from '../../../components/dashBorad/pageLoader';
import { toast } from 'react-toastify';

const Volunteering = () => {
  const navigate = useNavigate();
  const [volunteering, setVolunteering] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);


  const fetchVolunteering = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetVolunteering();
      console.log(res.data);
      setVolunteering(res.data.Volunteering || []);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteVolunteering(_id);
      console.log(res.data);
      toast.success(res.data.message);

    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  }

  useEffect(() => {
    fetchVolunteering();
  }, []);


  return (
    <div>
<PagesLayout headerText="Voluteering" buttonText="Add New "
onClick={() => navigate("/dashboard/volunteering/add-voluteering")}/>

{isLoading ? (
        <PageLoader />
      ) : (
<div className='p-20'>
      <div className='grid h-5 grid-cols-2 gap-9'>
        {
          volunteering.length == 0 ? (
            <p>
              {/* No experience added yet */}
              <img src={noData} alt="" />

            </p>
            
          ) : (
          volunteering.map((item, index) => (
            <div key={index} className='relative flex flex-col h-64 w-72 p-4 border border-[#FFCD58] rounded shadow-lg'>
              <h3>{item.organisation}</h3>
              <h4>{item.role}</h4>
              <p>{item.skills}</p>
              <p>{item.responsibility}</p>
              <p>{item.location}</p>
              <p>{item.projectName}</p>
              <p>{item.description}</p>
              <p>{item.startDate} - {item.endDate}</p>
              <div className='absolute right-0 top-0 h-full flex flex-col justify-between items-center'>
                <div className='bg-yellow-500 w-1 h-full'></div>
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
       ) }
      </div>
    </div>
      )}
      </div>
  )
}

export default Volunteering

