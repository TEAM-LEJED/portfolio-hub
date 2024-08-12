import React from "react";
import VolunteerPreview from "../volunteering/volunteering";
import Achievements from "../Achievements/achievement";

const ExperiencePreview = ({ experiences }) => {
  return (
    <div className="p-4 m-40 mt-10 rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-white mb-20">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-gray-200 shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-purple-300"
          >
            <h3 className="text-xl font-bold text-purple-600 mb-2">
              {exp.title}
            </h3>
            <p className="text-white mb-1">
              <strong>{exp.company}</strong> - {exp.location}
            </p>
            <p className="text-white mb-2">{exp.dateRange}</p>
            <p className="text-white">{exp.description}</p>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-lg shadow-md flex flex-col items-center mt-10">
        <VolunteerPreview />
        <Achievements />
      </div>
    </div>
  );
};

export default ExperiencePreview;
