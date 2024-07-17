import React from 'react'
import PagesLayout from '../layout/pagesLayout'
import { useNavigate } from 'react-router-dom';

const Volunteering = () => {
  const navigate = useNavigate();
  return (
<PagesLayout headerText="Voluteering" buttonText="Add New "
onClick={() => navigate("/dashboard/volunteering/add-voluteering")}>
  <span>Voluteering list Here</span>
</PagesLayout>  )
}

export default Volunteering