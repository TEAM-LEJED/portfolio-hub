import React from 'react'
import Companies from '../../components/landingPage/companies.jsx'
import Navbar from '../../components/landingPage/navbar.jsx'
import Contact from '../../components/landingPage/contact.jsx'
import Footer from '../../components/landingPage/footer.jsx'
import Hero from '../../components/landingPage/hero.jsx'



const LandingPage = () => {
  return (
    <div className ="overflow-x-hidden">
  <Navbar/>
  <Hero/>
  <Contact/>
  <Companies/>
  <Footer/>
    
  </div>
  )}
export default LandingPage;
