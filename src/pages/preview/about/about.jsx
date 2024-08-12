import React from "react";
import AboutCard from "./aboutCard";
import { laptopImg } from "../../../assets";
import Techstack from "./techstack";
import Toolstack from "./toolstack";
import Github from "./github";
import "../../../App.css";

const About = ({ bio }) => { // Accept bio as a prop
  return (
    <div className="flex flex-col items-center px-4">
      <div className="flex flex-col md:flex-row justify-center py-10">
        <div className="md:w-7/12 flex flex-col items-center md:items-start pt-8 pb-12 md:pb-16">
          <h1 className="ml-40 mb-8 text-3xl md:text-4xl font-bold pb-5">
            Know Who <strong className="text-purple-600">I'M</strong>
          </h1>
          <AboutCard bio={bio} /> {/* Pass bio to AboutCard */}
        </div>
        <div className="md:w-5/12 flex justify-center md:justify-end pt-28 pb-12 md:pb-16">
          <img src={laptopImg} alt="about" className="max-w-full h-auto" />
        </div>
      </div>

      <h1 className="text-3xl text-white md:text-4xl font-bold pb-10">
        Professional <strong className="text-purple-600">Skillset</strong>
      </h1>
      <Techstack />

      <h1 className="text-3xl md:text-4xl mt-20 font-bold text-white pb-10">
        <strong className="text-purple-600">Tools</strong> I use
      </h1>
      <Toolstack />

      <Github />
    </div>
  );
};

export default About;
