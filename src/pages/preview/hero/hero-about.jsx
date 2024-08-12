import React from "react";
import { Tilt } from "react-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { myImg } from "../../../assets";

const HeroAbout = ({ bio }) => {
  return (
    <div className="flex flex-col min-h-screen py-12 px-6 md:px-12 lg:px-24">
      {/* Main Content Container */}
      <div className="flex flex-col items-center text-center mb-20 flex-grow">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Text Section */}
          <div className="flex-1 mt-12 mb-10 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-16">
              LET ME <span className="text-purple-600">INTRODUCE</span> MYSELF
            </h1>
            <p className="text-lg md:text-xl">
              {bio}
            </p>
          </div>

          {/* Avatar Section */}
          <div className="mt-12 md:mt-0 md:ml-12 flex-shrink-0">
            <Tilt options={{ max: 50 }}>
              <img
                src={myImg}
                alt="avatar"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
              />
            </Tilt>
          </div>
        </div>

        {/* "Find Me On" Section */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-10">FIND ME ON</h1>
          <p className="text-lg mb-4">
            Feel free to <span className="text-purple-600">connect</span> with me
          </p>
          <ul className="flex space-x-6 justify-center p-3">
            <li>
              <a
                href="https://github.com/bethheal"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-purple-600 transition-colors duration-300"
              >
                <AiFillGithub className="text-3xl" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/elizabethdowuona/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-purple-600 transition-colors duration-300"
              >
                <FaLinkedinIn className="text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
