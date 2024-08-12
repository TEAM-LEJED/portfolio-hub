import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiW3Schools,
  SiWindows,
  SiWindows11,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-10">
      <div className="tech-icon-container text-white bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
      <SiW3Schools />
      </div>
      <div className="tech-icon-container text-white bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <SiVisualstudiocode />
      </div>
      <div className="tech-icon-container text-white bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <SiGit />
      </div>
      <div className="tech-icon-container text-white bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <SiSlack />
      </div>
      <div className="tech-icon-container text-white bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <SiWindows11 />
      </div>
    </div>
  );
}

export default Toolstack;
