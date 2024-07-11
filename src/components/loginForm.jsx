import React from 'react';
import { ChevronRight, Lock, User } from 'lucide-react';
import ToggleSwitch from './toggleSwitch';
const LoginForm = () => {
  return (

      <form className="flex flex-col justify-center items-center mt-24">
        <div>LOG IN </div>
     <div className="relative mb-4">
        <User className="absolute text-[#FCC73F]" />
         <input
           type="text"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4  w-3/4 transition duration-200"
         placeholder="username"
         />
      </div>
       <div className="relative mb-4">
        <Lock className="absolute text-[#FCC73F]" />
        <input
           type="password"
           className="border-b-2 border-[#FCC73F] bg-transparent px-4  w-3/4 transition duration-200"
          placeholder="Password"
         />
       </div>
       <button className="button rounded-full w-40 h-10 bg-[#3D5A5E] text-[#FCC73F] uppercase font-bold shadow-md hover:border-purple-600 hover:outline-none transition duration-200">
       <span>Log In </span>


     </button>
     <ToggleSwitch/>


    </form>
  );
}

export default LoginForm;
