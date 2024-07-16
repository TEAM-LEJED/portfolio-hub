import React from 'react'
import LandingPage from './pages/landingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/loginPage'
import Home from './pages/dashBoard/home'
import PreviewPage from './pages/preview'
<<<<<<< HEAD
import Hero from './components/preview/hero'
import About from './components/preview/about'
=======
>>>>>>> 9098e987a44dd3c77d3ca1f81ea8b9c6e56e4d5f
// import Navbar from './components/navbar'

const App = () => {
  const router = createBrowserRouter([

{
  path:"/",
  element: <LandingPage/>
},
// {
//   path : "navbar",
//   element:<Navbar/>
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
<<<<<<< HEAD
=======

>>>>>>> 9098e987a44dd3c77d3ca1f81ea8b9c6e56e4d5f





    ]
    


  
  )
  return <RouterProvider router={router}/>
}

export default App