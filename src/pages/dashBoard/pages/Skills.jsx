import PagesLayout from '../layout/pagesLayout'
import { useNavigate } from 'react-router-dom'
import { K } from '../../../constants'
import { Edit, Trash2Icon } from 'lucide-react'

const Skills = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Skills" buttonText="Add new Skills" onClick={() => navigate("/dashboard/skills/add-skill")}>
      <div className='grid grid-cols-4 gap-6'>
        {K.SKILLS.map(({name, levelOfProfeciency}, index) =>(
          <div key={index}>
            <span>{name}</span>
             <span>{levelOfProfeciency}</span>
          </div>
        ))}
      </div>
      <div className='ml-auto flex gap-x-2'>
        <span>
          <Trash2Icon className='text-red-500'/>
        </span>
        <span>
          <Edit className='text-blue-500'/>
        </span>
      </div>
    </PagesLayout>
    

    
  )
}

export default Skills