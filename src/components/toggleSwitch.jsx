import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "./pageTransition";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the initial state of the switch based on the current pathname
  useEffect(() => {
    if (location.pathname === "/signup") {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
  }, [location.pathname]);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    setTimeout(() => {
      if (isOn) {
        navigate('/login');
      } else {
        navigate('/signup');
      }
    }, 700); 
  };

  return (
    <PageTransition> 
      <div
        className={`switch w-44 h-11 bg-[#3D5A5E] bg-opacity-40 flex items-center rounded-full p-2 cursor-pointer ${isOn ? 'justify-end' : 'justify-start'}`}
        data-isOn={isOn}
        onClick={toggleSwitch}
      >
        <motion.div 
          className="handle w-10 h-10 bg-[#FDC744] rounded-full" 
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        />
        {(!isOn && location.pathname === "/login") && 
          <span className="text-white mx-auto italic text-[10px] flex flex-col">
            Don't have an account?
            <span className="text-[14px] not-italic">SIGN UP</span>
          </span>}
        {(isOn && location.pathname === "/signup") && 
          <span className="text-white mx-auto italic text-[10px] flex flex-col">
            Already have an account?
            <span className="text-[14px] not-italic">LOG IN</span>
          </span>}
      </div>
    </PageTransition>
  );
}
