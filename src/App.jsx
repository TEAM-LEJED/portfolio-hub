
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Projects from './pages/dashBoard/pages/projects'
import DashBoardLayout from './pages/dashBoard/layout'
import Skills from './pages/dashBoard/pages/Skills'
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
import PreviewPage from './pages/preview'
import AchievementDashboard from './pages/dashBoard/pages/achievement'
import LandingPage from './pages/landingPage/landingPage'
import SignupPage from './pages/dashBoard/pages/auth/signupPage'
import LoginPage from './pages/dashBoard/pages/auth/loginPage'
import AuthLayout from './pages/dashBoard/pages/auth/authLayout'
import { apiGetUserDetails } from './services/preview'

// import Navbar from './components/navbar'

const App = () => {
  const router = createBrowserRouter([

{
  path:"/",
  element: <LandingPage/>
},
{
  element: <AuthLayout />,
  children: [
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "signup",
      element: <SignupPage />,
    },
  ],
},
{
  path : "preview",
  element:<PreviewPage/>
},
// {
//   path : "signup",
//   element:<SignupPage/>
// },
// {
//   path : "login",
//   element:<LoginPage/>
// },
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
 
{
  path: "achievement",
  element: <AchievementDashboard/>
},
{
  path: "achievement/add-achievements",
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
]

},
{
  path: "preview/:username",
  element: <PreviewPage />,
  loader: async ({ params }) => {
    const username = params.username;
    try {
      const response = await apiGetUserDetails(username);
      const userProfileData = response?.data.user;
      return userProfileData;
    } catch (error) {
      toast.error("An error occured");
      return null;
    }
  },
},


  ])
  return <RouterProvider router={router}/>


}

export default App