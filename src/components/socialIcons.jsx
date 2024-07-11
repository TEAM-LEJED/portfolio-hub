import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { Instagram, Facebook, Twitter } from 'lucide-react';

const SocialLogin = () => {
  return (
    <div className="fixed bottom-1 right-0  rounded-tl-md rounded-br-md flex flex-col items-end p-2">
      <h3 className="text-[#E16D3C] mb-1 font-extrabold">Log in via</h3>
      <div className="social-icons flex space-x-2">
        <Link to="#" className="p-1 bg-[#FCC73F] rounded-full hover:scale-150 transform transition duration-300">
          <Instagram className="h-3 w-3" />
        </Link>
        <Link to="#" className="p-1 bg-[#FCC73F] rounded-full hover:scale-150 transform transition duration-300">
          <Facebook className="h-3 w-3" />
        </Link>
        <Link to="#" className="p-1 bg-[#FCC73F] rounded-full hover:scale-150 transform transition duration-300">
          <Twitter className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}

export default SocialLogin;
