import React from 'react'
import LandingPage from './pages/landingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/loginPage'
import Preview from './pages/preview'
import Home from './pages/dashBoard/home'

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
  element:<Home/>
},
{
  path : "preview",
  element:<Preview/>
},

    ]
    


  
  )
  return <RouterProvider router={router}/>
}

export default App