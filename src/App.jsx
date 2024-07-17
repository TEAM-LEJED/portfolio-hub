import React from 'react'
import LandingPage from './pages/landingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/loginPage'
import Home from './pages/dashBoard/home'
import PreviewPage from './pages/preview'
// import Navbar from './components/navbar'

const App = () => {
  const router = createBrowserRouter([

{
  path:"/",
  element: <LandingPage/>
},
// {
//   path : "navbar",
//   element:<Na/>
// },
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
  element:<PreviewPage/>
},





    ]
    


  
  )
  return <RouterProvider router={router}/>
}

export default App