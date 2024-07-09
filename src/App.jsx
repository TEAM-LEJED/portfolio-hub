import React from 'react'
import LandingPage from './pages/landingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/rootLayout'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/loginPage'
import DashBoard from './pages/dashBoard'

const App = () => {
  const router = createBrowserRouter([
{    path:"/",
    element: <RootLayout/>,
    children:[
{
  index:true,
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
  element:<DashBoard/>
},

    ]
}    


  ])
  return <RouterProvider router={router}/>
}

export default App