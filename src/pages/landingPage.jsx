import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from '../components/navbar';


const LandingPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      
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
