import React from 'react'
import LandingPage from './pages/landingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/loginPage'
import Preview from './pages/preview'
import Home from './pages/dashBoard/home'
import DashboardLayout from './pages/dashBoard/DashboardLayout'

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
  element:<DashboardLayout/>,
  children: [
{
  index: true,
  element: <About/>
}
  ]
},
{
  path : "resume",
  element:<resume/>
},
{
  path : "skills",
  element:<skills/>
},
{
  path : "project",
  element:<project/>
},
{
  path : "experience",
  element:<experience/>
},

    ]
    


  
  )
  return <RouterProvider router={router}/>
}

export default App