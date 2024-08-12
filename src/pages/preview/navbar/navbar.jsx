import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { lejedLogo } from '../../../assets';
import { motion } from "framer-motion";
import { x } from './navConstant';

const Navbar = () => {
  const container = (delay) => ({
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

  return (
    <div className="bg-[#12071F]">
      <div className="flex justify-between items-center">
        {/* Logo section */}
        <div>
          <img src={lejedLogo} alt="Logo" className="w-[80px]" />
        </div>
        {/* Nav Menu section aligned to the right */}
        <div className="flex-grow flex justify-end">
          <ul className="flex gap-10">
            {x.PREVIEW_NAVLINKS.map(({ name, path }, index) => (
              <li key={index}>
                <motion.div
                  variants={container(-0.4 - index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <NavLink
                    to={path}
                    className="text-xl font-semibold text-white relative transition-all duration-500 hover:after:w-full after:absolute after:bg-white after:h-[2px] after:w-0 after:left-0 after:bottom-[-2px] after:transition-all after:duration-500"
                    activeClassName="text-gray-400"  // optional, for active link styling
                  >
                    {name}
                  </NavLink>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
