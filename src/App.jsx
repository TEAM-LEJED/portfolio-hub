import React from 'react'
import LandingPage from './pages/landingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/loginPage'
import Home from './pages/dashBoard/home'
import Navbar from './components/navbar'

const App = () => {
  const router = createBrowserRouter([

{
  path:"/",
  element: <LandingPage/>
},
{
  path : "navbar",
  element:<Navbar/>
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
  element:<PreviewPage/>
},
{
  path : "home",
  element:<Hero/>
},
{
  path : "about",
  element:<About/>
},
{
  path : "achievements",
  element:<Achievements/>
},
{
  path : "contacts",
  element:<Contacts/>
},
{
  path : "education",
  element:<Education/>
},
{
  path : "experience",
  element:<Experience/>
},
{
  path : "projects",
  element:<Projects/>
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
  path : "voluteering",
  element:<Voluteering/>
},





    ]
    


  
  )
  return <RouterProvider router={router}/>
}

export default App