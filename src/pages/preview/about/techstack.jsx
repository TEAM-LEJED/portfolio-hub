import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <div className="grid text-white grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-y-5 gap-x-20 py-5 justify-items-center">
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <CgCPlusPlus className="text-4xl" />
      </div>
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <DiJavascript1 className="text-4xl" />
      </div>
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <TbBrandGolang className="text-4xl" />
      </div>
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <DiNodejs className="text-4xl" />
      </div>
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <DiReact className="text-4xl" />
      </div>
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <SiSolidity className="text-4xl" />
      </div>
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <DiMongodb className="text-4xl" />
      </div>
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <SiNextdotjs className="text-4xl" />
      </div>
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <DiGit className="text-4xl" />
      </div>
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <SiFirebase className="text-4xl" />
      </div>
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <SiRedis className="text-4xl" />
      </div>
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <SiPostgresql className="text-4xl" />
      </div>
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <DiPython className="text-4xl" />
      </div>
      <div className="tech-icon-container bg-gray-800 bg-opacity-80 p-4 rounded-lg transition-transform duration-300 hover:shadow-lg hover:shadow-purple-600 hover:scale-105">
        <DiJava className="text-4xl" />
      </div>
    </div>
  );
}

export default Techstack;
