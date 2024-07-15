import React from 'react'
import LandingPage from './pages/landingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/loginPage'
import Home from './pages/dashBoard/home'
import About from './components/preview/about'
import Achievements from './components/preview/achievements'
import Contacts from './components/preview/contacts'
import Education from './components/preview/education'
import Experience from './components/preview/experience'
import Projects from './components/preview/projects'
import Resume from './components/preview/resume'
import Skills from './components/preview/skills'
import Voluteering from './components/preview/voluteering'
import PreviewPage from './pages/preview'
import Hero from './components/preview/hero'


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