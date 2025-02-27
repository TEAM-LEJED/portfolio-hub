import React from 'react';
import { fieldImage, SignUp } from '../../assets';
import LoginForm from '../../components/loginForm';
import SocialIcons from '../../components/socialIcons';
import ToggleSwitch from '../../components/toggleSwitch';
import PageTransition from '../../components/pageTransition';
import { ArrowBigRight } from 'lucide-react';
const LoginPage = () => {
  return (
    <PageTransition>
      <div className="flex bg-[#12071F] items-center justify-center min-h-screen">
        <div className="bg-[#12071F] w-[65rem] h-[35rem] text-white p-8 rounded-lg shadow-lg text-center">
          <div className="flex flex-row h-full">
            <div className="relative w-1/2">
              <img src={SignUp} alt="SignUp" className="w-full h-full object-cover opacity-50 bg-black" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">


                <h1 className="text-3xl font-bold mb-2">Welcome</h1>
                <p className="text-lg mb-4">To keep connected with us <br />please login with your credentials</p>
                <ArrowBigRight className="w-8 h-8 animate-bounceLR " />
              </div>
            </div>

            <div className="relative w-1/2 flex items-center justify-center">
              <img src={fieldImage} alt="FieldImage" className="w-full h-full object-cover opacity-70" />
              <div className="absolute h-96 w-80 top-20 bg-[#12071F] backdrop-blur-md bg-opacity-50 rounded-lg border border-[#FFCD58] p-4">
                <LoginForm />
                <div className='flex items-center justify-center'>
                  <SocialIcons />
                  <ToggleSwitch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LoginPage;
