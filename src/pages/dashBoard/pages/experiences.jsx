
import PagesLayout from '../layout/pagesLayout'
import { useNavigate } from 'react-router-dom'
import ExperienceCards from '../../../components/dashBorad/experienceCards'

const Experiences = () => {
  const navigate = useNavigate()
  return (
    <div>
    <PagesLayout headerText="Experiences" buttonText="Add New " 
    onClick={() => navigate("/dashboard/experiences/add-experience")}>
    </PagesLayout>

    <ExperienceCards/>
    </div>

  )
}

export default Experiences