import React from "react";
import volunteerData from "./constant"; // Import the data

const VolunteerPreview = () => {
  return (
    <div className="p-4 rounded-lg  mt-40   shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-white mb-20">Volunteer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {volunteerData.map((vol, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-gray-200 shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-purple-300"
          >
            <h3 className="text-xl font-bold text-purple-600 mb-2">
              {vol.title}
            </h3>
            <p className="text-white mb-1">
              <strong>{vol.organization}</strong> - {vol.location}
            </p>
            <p className="text-white mb-2">{vol.dateRange}</p>
            <p className="text-white">{vol.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerPreview;
