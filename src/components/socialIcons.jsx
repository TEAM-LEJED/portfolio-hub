import React from 'react';
import { Link } from 'react-router-dom'; 
import { googleIcon, linkedIcon } from '../assets';

const SocialIcons = () => {
  return (
    <div className="fixed bottom-1 right-0  rounded-tl-md rounded-br-md flex flex-row items-end p-2">
      {/* <span className="text-[#E16D3C] mb-1 p-5 italic">Login or Sign up with</span> */}
      <div className="social-icons flex space-x-2">
        <Link to="#" className="p-1 bg-[#979CA9] rounded-full hover:scale-150 transform transition duration-300">
        <img src={googleIcon} alt="" className="h-3 w-3 "/>
        </Link>
        <Link to="#" className="p-1 bg-[#979CA9] rounded-full hover:scale-150 transform transition duration-300">
        <img src={linkedIcon} alt="" className="h-3 w-3" />
        </Link>
        
      </div>
    </div>
  );
}

export default SocialIcons;
