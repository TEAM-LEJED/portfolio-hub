import { useNavigate } from "react-router-dom"
import PagesLayout from "../layout/pagesLayout";


const Resume = () => {
  const navigate = useNavigate();
  return (
    <PagesLayout headerText="Resume" buttonText="Add Resume"
      onClick={() => navigate("/dashboard/resume/add-resume")}>
      <span>Upload Resume Here</span>
    </PagesLayout>
  )
}

export default Resume