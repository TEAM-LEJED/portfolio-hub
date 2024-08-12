import React from 'react';
import { motion } from "framer-motion";
import { lejedLogo } from '../../assets';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-[#12071F] text-white  border-b-4 border-white">
        <div className=" flex justify-between items-center">
          {/* {Logo section} */}
          <div>
            <img src={lejedLogo} alt="Logo" className="w-[80px]" />
          </div>
          {/* {Nav Menu section replaced with buttons} */}
          <div>
            <ul className="flex justify-center gap-10">
              <li>
                <motion.button
                  onClick={() => navigate("/login")}
                  variants={container(-0.4)}
                  initial="hidden"
                  whileInView="show"
                  className="text-xl font-semibold text-black/70 hover:text-white duration-300 border border-white/50 rounded-md px-4 py-2 bg-white hover:bg-yellow-400 transition duration-200">
                  Login
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => navigate("/signup")}
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
