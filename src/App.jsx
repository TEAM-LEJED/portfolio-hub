
import LandingPage from './pages/landingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/loginPage'
import Projects from './pages/dashBoard/pages/projects'
import DashBoardLayout from './pages/dashBoard/layout'
import Skills from './pages/dashBoard/pages/Skills'
import Achievement from './pages/dashBoard/pages/achievement'
import Education from './pages/dashBoard/pages/education'
import Volunteering from './pages/dashBoard/pages/volunteering'
import Overview from './pages/dashBoard/pages/overview'
import AddProject from './pages/dashBoard/pages/addProject'
import AddExperience from './pages/dashBoard/pages/addExperience'
import AddSkill from './pages/dashBoard/pages/addSkill'
import Experiences from './pages/dashBoard/pages/experiences'
import AddAchievement from './pages/dashBoard/pages/addAchievement'
import AddEducation from './pages/dashBoard/pages/addEducation'
import AddVoluteering from './pages/dashBoard/pages/addVoluteering'
import Profile from './pages/dashBoard/pages/about'
import AddProfile from './pages/dashBoard/pages/addprofile'
import Home from './pages/dashBoard/home'
import PreviewPage from './pages/preview'

// import Navbar from './components/navbar'

const App = () => {
  const router = createBrowserRouter([

{
  path:"/",
  element: <LandingPage/>
},
{
  path : "preview",
  element:<PreviewPage/>
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
  
  path : "profile",
  element:<Profile/>
},
{
  path: "profile/add-profile",
  element: <AddProfile/>
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
  path : "experience",
  element:<Experiences/>
},

{
  path: "experiences/add-experience",
  element: <AddExperience/>
  },


    ]

},

{
  path: "achievement",
  element: <Achievement/>
},
{
  path: "achievement/add-achievement",
  element: <AddAchievement/>
},
{
  path: "education",
  element: <Education/>
},
{
  path: "education/add-education",
  element: <AddEducation/>
},
{
  path: "volunteering",
  element: <Volunteering/>
},
{
  path: "volunteering/add-voluteering",
  element: <AddVoluteering/>
},
  

  ])
  return <RouterProvider router={router}/>


}

export default App