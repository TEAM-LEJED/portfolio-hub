import { useNavigate } from "react-router-dom"
import PagesLayout from "../layout/pagesLayout";


const Profile = () => {
  const navigate = useNavigate();
  return (
    <PagesLayout headerText="Profile" buttonText="Add New"
      onClick={() => navigate("/dashboard/profile/add-profile")}>
    </PagesLayout>
  )
}

export default Profile