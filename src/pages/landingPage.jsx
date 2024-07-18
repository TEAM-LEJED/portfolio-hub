import React from 'react'
import Navbar from '../components/navbar.jsx'
import Hero from '../components/hero.jsx'
import Contact from '../components/contact.jsx'
import Companies from '../components/companies.jsx'
import Footer from '../components/footer.jsx'



const LandingPage = () => {
  return (
    <div className ="overflow-x-hidden">
  <Navbar/>
  <Hero/>
  <Contact/>
  <Companies/>
  <Footer/>
    
  </div>

export default LandingPage;
