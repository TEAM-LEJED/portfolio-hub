import PagesLayout from '../layout/pagesLayout'
import { useNavigate } from 'react-router-dom'
import { K } from '../../../constants'
import { Edit, Trash2Icon } from 'lucide-react'

const Skills = () => {
  const navigate = useNavigate()
  return (
    <div>
    <PagesLayout headerText="Skills" buttonText="Add New" 
    onClick={() => navigate("/dashboard/skills/add-skill")}>
     
    </PagesLayout>
    <div className='grid grid-cols-4 gap-6'>
  {K.SKILLS.map(({ name, levelOfProfeciency }, index) => (
    <div key={index} className='p-4 border rounded-md shadow-md bg-white'>
      <span>{name}</span>
      <span>{levelOfProfeciency}</span>
      
      <div className='flex mt-2'>
        <span className='cursor-pointer'>
          <Trash2Icon className='text-red-500 hover:text-red-700'/>
        </span>
        <span className='ml-2 cursor-pointer'>
          <Edit className='text-blue-500 hover:text-blue-700'/>
        </span>
      </div>
    </div>
  ))}
</div>

      </div>

    
  )
}

export default Skills