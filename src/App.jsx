import React from 'react'
import LandingPage from './pages/landingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/loginPage'
import Resume from './pages/dashBoard/pages/resume'
import Experience from './pages/dashBoard/pages/experience'
import Projects from './pages/dashBoard/pages/projects'
import Overview from './pages/dashBoard/pages/overview'
import DashBoardLayout from './pages/dashBoard/layout'
import Skills from './pages/dashBoard/pages/Skills'

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
  path : "skills",
  element:<Skills/>
},
{
  path : "project",
  element:<Projects/>
},
{
  path : "experience",
  element:<Experience/>
},
{
  path: "overview",
  element: <Overview/>
}
  ]
},

 ])
  return <RouterProvider router={router}/>
}

export default App