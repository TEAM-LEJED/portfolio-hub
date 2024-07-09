import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default RootLayout