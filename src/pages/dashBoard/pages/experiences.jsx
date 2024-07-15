
import PagesLayout from '../layout/pagesLayout'
import { useNavigate } from 'react-router-dom'

const Experiences = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Experiences" buttonText="Add New Experience" 
    onClick={() => navigate("/dashboard/experiences/add-experience")}>
      <span>Eperience List Here</span>
    </PagesLayout>
  )
}

export default Experiences