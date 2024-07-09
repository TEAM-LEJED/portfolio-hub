import React from 'react'
import Navbar from '../globalComponents/navbar'
import Footer from '../globalComponents/footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default RootLayout