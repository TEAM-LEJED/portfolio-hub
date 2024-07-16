
import LandingPage from './pages/landingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/loginPage'
import Resume from './pages/dashBoard/pages/resume'
import Projects from './pages/dashBoard/pages/projects'
import DashBoardLayout from './pages/dashBoard/layout'
import Skills from './pages/dashBoard/pages/skills'
import Achievement from './pages/dashBoard/pages/achievement'
import Education from './pages/dashBoard/pages/education'
import Volunteering from './pages/dashBoard/pages/volunteering'
import Overview from './pages/dashBoard/pages/overview'
import AddProject from './pages/dashBoard/pages/addProject'
import AddExperience from './pages/dashBoard/pages/addExperience'
import AddSkill from './pages/dashBoard/pages/addSkill'
import AddResume from './pages/dashBoard/pages/addResume'
import Experiences from './pages/dashBoard/pages/experiences'

const App = () => {
  const router = createBrowserRouter([

{
  path:"/",
  element: <LandingPage/>
},
{
  path : "signup",
  element:<SignupPage/>
},
{
  path : "login",
  element:<LoginPage/>
},
{
  path : "dashboard",
  element:<DashBoardLayout/>,
  children: [
{
  index: true,
  element:<Overview/>
},
{
  path : "resume",
  element:<Resume/>
},
{
  path: "resume/add-resume",
  element: <AddResume/>
  },
{
  path : "skills",
  element:<Skills/>
},
{
  path: "skills/add-skill",
  element: <AddSkill/>
  },
{
  path : "projects",
  element:<Projects/>
},
{
  path: "projects/add-project",
  element: <AddProject/>
  },

{
  path : "experiences",
  element:<Experiences/>
},

{
  path: "experiences/add-experience",
  element: <AddExperience/>
  },

{
  path: "achievement",
  element: <Achievement/>
},
{
  path: "education",
  element: <Education/>
},
{
  path: "volunteering",
  element: <Volunteering/>
}
  ]
},

 ])
  return <RouterProvider router={router}/>
}

export default App