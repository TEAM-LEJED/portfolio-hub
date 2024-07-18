import React from 'react'
import PagesLayout from '../layout/pagesLayout'
import { useNavigate } from 'react-router-dom'

const Education = () => {
  const navigate = useNavigate();
  return (
<PagesLayout headerText="Education" buttonText="Add New "
onClick={() => navigate("/dashboard/education/add-education")}>
  <span>Education List here </span>
</PagesLayout>
  )

}

export default Education