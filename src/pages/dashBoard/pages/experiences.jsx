
import PagesLayout from '../layout/pagesLayout'
import { useNavigate } from 'react-router-dom'
import ExperienceForm from './allForms/experienceForm'

const Experiences = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Experiences" buttonText="Add New " 
    onClick={() => navigate("/dashboard/experiences/add-experience")}>

    </PagesLayout>
  )
}

export default Experiences