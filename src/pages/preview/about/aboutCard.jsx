import React from "react";
import { ImPointRight } from "react-icons/im";

const AboutCard = ({ bio }) => {
  return (
    <div className="ml-40 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 text-gray-800">
      <div className="text-justify">
        {/* Display bio if available */}
        {bio ? (
          <p className="mb-4 mt-10 text-white">
            {bio}
          </p>
        ) : (
          <p className="mb-4 mt-10 text-white">
            Hi Everyone, I am{" "}
            <span className="text-purple-600">Elizabeth Dowuona </span>
            from <span className="text-purple-600">Accra, Ghana.</span>
            <br />
            I am currently a frontend developer.
            <br />
            I have completed Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
        )}
        <ul className="list-disc list-inside mb-4 text-white">
          <li className="flex items-center mb-2">
            <ImPointRight className="mr-2" /> Reading Books
          </li>
          <li className="flex items-center mb-2">
            <ImPointRight className="mr-2" /> Trying new Skills
          </li>
          <li className="flex items-center mb-2">
            <ImPointRight className="mr-2" /> Playing Games
          </li>
        </ul>

        <p className="text-purple-600">
          "Strive to build things that make a difference!"
        </p>
        <footer className="text-right font-semibold">- Soumyajit</footer>
      </div>
    </div>
  );
};

export default AboutCard;
