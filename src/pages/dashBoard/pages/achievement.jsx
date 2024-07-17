import { useNavigate } from 'react-router-dom'
import PagesLayout from '../layout/pagesLayout'


const Achievement = () => {
const navigate = useNavigate();
  return (
<PagesLayout headerText="Achievements" buttonText="Add New "
onClick={() => navigate("/dashboard/achievement/add-achievement")}>
  <span>Projects list Here</span>
</PagesLayout>
  )
}

export default Achievement