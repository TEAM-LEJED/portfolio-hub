import PagesLayout from '../layout/pagesLayout'
import { useNavigate } from 'react-router-dom'
import { K } from '../../../constants'
import { Edit, Trash2Icon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { apiGetSkills } from '../../../services/skills'
import PageLoader from '../../../components/dashBorad/pageLoader'
import Popup from 'reactjs-popup'
import Loader from '../../../components/preview/loader'
import { toast } from 'react-toastify'

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const fetchSkills = async () => {
    setIsLoading(true)
    try {

      const res = await apiGetSkills();
      console.log(res.data)
      setSkills(res.data.skill)

    } catch (error) {
      console.log(error)

    } finally {
      setIsLoading(false);
    }
  }

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteSkill(_id)
      console.log(res.data)
      toast.success(res.data.message)


    } catch (error) {
      console.log(error)
      toast.error("An error occured")

    }

  }
  useEffect(() => {
    fetchSkills()

  }, []);
  return (
    <div>
      <PagesLayout headerText="Skills" buttonText="Add New"
        onClick={() => navigate("/dashboard/skills/add-skill")}>

      </PagesLayout>


      {
        isLoading ? <PageLoader /> :

          <div>
            {
              skills.length == 0 ? <p>No Skills Added Yet </p> :
                <div className='grid grid-cols-4 gap-6'>
                  {skills.map(({ name, levelOfProfeciency, _id }, index) => (
                    <div key={index} className='p-4 border rounded-md shadow-md bg-white'>
                      <span>{name}</span>
                      <span>{levelOfProfeciency}</span>

                      <div className='flex mt-2'>
                        <button onClick={() => handleDelete(_id)} className='cursor-pointer'>
                          {
                            isDeleting ? <Loader /> :
                              <Trash2Icon className='text-red-500 hover:text-red-700' />

                          }
                        </button>
                        <button className='ml-2 cursor-pointer'>
                          <Edit className='text-blue-500 hover:text-blue-700' />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
            }
          </div>


      }




    </div>


  )
}

export default Skills