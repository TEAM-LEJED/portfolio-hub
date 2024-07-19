import React from 'react'
import { Edit, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import PagesLayout from '../layout/pagesLayout'
import c from '../../../components/preview/constants';

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>
    <PagesLayout headerText="Projects" buttonText="Add New" onClick={() => navigate("/dashboard/projects/add-project")}>
          </PagesLayout>

      <div className='p-20'>
        <div className='grid h-5 grid-cols-2 gap-9'>
          {
            c.PROJECTS.map((project, index) => (
              <div key={index} className='relative flex flex-col h-64 w-72 p-4 border border-[#FFCD58] rounded shadow-lg'>
                <img src={project.image} alt="projectImage" className='h-32 w-full object-cover rounded' />
                <h3>{project.projectName}</h3>
                <p>{project.description}</p>
                <p>{project.contributors}</p>
                <p>{project.skills}</p>
                <p>{project.nameOfInstitution}</p>
                <p>{project.startDate} - {project.endDate}</p>
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

export default Projects
