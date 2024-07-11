import React, { useState } from 'react';
import { SignUp, fieldImage, googleIcon, linkedinIcon } from '../assets';
import { Link } from 'react-router-dom';
import '../App.css';
import LoginForm from '../components/loginForm';
import SocialLogin from '../components/socialIcons';

const LoginPage = () => {

 return (

  // <div>
  //   Sign Up
  // </div>
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black w-[65rem] h-[35rem] p-8 rounded-lg shadow-lg text-center">
        <div className="flex flex-row h-full">
          <div className="w-1/2">
            <img src={SignUp} alt="SignUp" className="w-full h-full object-cover" />
          </div>
          <div className="relative w-1/2 flex items-center justify-center">
            <img src={fieldImage} alt="FieldImage" className="w-full h-full object-cover" />

            <div className="absolute h-96 w-80 bg-[#F5F1EA] top-20 backdrop-blur-md bg-opacity-50 rounded-lg border border-[#FFCD58] p-4">
            
            <LoginForm />
            <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
