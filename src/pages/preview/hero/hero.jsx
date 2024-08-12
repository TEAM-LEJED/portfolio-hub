import React from "react";
import Particle from "../../../components/preview/particles";
import Type from "./type";
import HeroAbout from "./hero-about";
import { LynImg } from "../../../assets";

const Hero = ({ firstName, lastName, about }) => {
  return (
    <div className="mt-64 h-screen flex flex-col items-center justify-center">
      <div className="mt-32 flex flex-row">
        <Particle />
        <div className="text-left">
          <h1 className="text-3xl mt-36 text-white font-bold">
            Hi There!{" "}
            <span role="img" aria-label="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="text-5xl text-white font-bold mt-8">
            I'M
            <strong className="text-purple-600"> {`${firstName} ${lastName}`}</strong>
          </h1>

          <div className="mt-4 text-4xl text-purple-600">
            <Type />
          </div>
        </div>

        {/* Uncomment if you need the image */}
        {/* <div className="mt-8">
          <img src={LynImg} alt="home pic" className="max-h-[27rem] mx-auto" />
        </div> */}
      </div>
      {/* Pass `about` as a prop to `HeroAbout` */}
      <HeroAbout bio={about} />
    </div>
  );
};

export default Hero;
