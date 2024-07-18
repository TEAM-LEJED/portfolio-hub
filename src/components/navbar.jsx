import React from 'react';
import Logo from "../assets/lejed.png";
import { motion } from "framer-motion";


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

const Navbar = () => {
  return (
    <>
      <div className="py-10 bg-gray text-white">
        <div className="container flex justify-between items-center">
          {/* {Logo section} */}
          <div>
            <img src={Logo} alt="Logo" className="w-[80px]" />
          </div>
          {/* {Nav Menu section replaced with buttons} */}
          <div>
            <ul className="flex justify-center gap-10">
              <li>
                <motion.button
                  variants={container(-0.4)}
                  initial="hidden"
                  whileInView="show"
                 className="text-xl font-semibold text-black/70 hover:text-white duration-300 border border-white/50 rounded-md px-4 py-2 bg-white hover:bg-yellow-400 transition duration-200">
                  Login
                </motion.button>
              </li>
              <li>
                <motion.button 
                  variants={container(-0.9)}
                  initial="hidden"
                  whileInView="show"
                className="text-xl font-semibold text-black/70 hover:text-white duration-300 border border-white/50 rounded-md px-4 py-2 bg-white hover:bg-yellow-400 transition duration-200">
                  Sign Up
                </motion.button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
