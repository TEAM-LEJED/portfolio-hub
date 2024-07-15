import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from '../components/navbar';


const LandingPage = () => {
  return (
    <div>
<<<<<<< HEAD
      {/* <Navbar /> */}
=======
      {/* {/* <Navbar /> */}
>>>>>>> 9098e987a44dd3c77d3ca1f81ea8b9c6e56e4d5f
      
        <div className="container">
          <h1>Welcome to LEJED PORTFOLIO</h1>
          <p>Please login or sign up to continue.</p>
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div> 
    </div>
  );
};

export default LandingPage;
