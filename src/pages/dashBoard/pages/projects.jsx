
import { useNavigate } from 'react-router-dom'
import PagesLayout from '../layout/pagesLayout'


const Projects = () => {
const navigate = useNavigate();
  return (
<PagesLayout headerText="Projects" buttonText="Add New Projects"
onClick={() => navigate("/dashboard/projects/add-project")}>
  <span>Projects list Here</span>
</PagesLayout>
  )
}

export default Projects