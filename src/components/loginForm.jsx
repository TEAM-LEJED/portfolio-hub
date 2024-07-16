import React from 'react';
import { Lock, User } from 'lucide-react';

const LoginForm = () => {
  return (
    <form className="flex flex-col justify-center items-center mt-10 mb-8">
      <div className="relative mb-4">
        <User className="absolute text-[#FCC73F]" />
        <input
          type="text"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4 w-3/4 transition duration-200"
          placeholder="username"
        />
      </div>
      <div className="relative mb-4">
        <Lock className="absolute text-[#FCC73F]" />
        <input
          type="password"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4 w-3/4 transition duration-200"
          placeholder="Password"
        />
      </div>
     
      <button
        type="submit"
        className="button rounded-full w-40 h-10 bg-[#12071F] text-[#FCC73F] uppercase font-bold shadow-md hover:border-purple-600 hover:outline-none transition duration-200"
      >
        
        <span>Log In</span>
      </button>
    </form>
  );
};

export default LoginForm;
