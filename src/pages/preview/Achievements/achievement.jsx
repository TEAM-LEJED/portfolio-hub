import React from 'react';
import achievementData from './constant'; 

const Achievements = () => {
  return (
    <div className="mt-40 rounded-lg shadow-md flex flex-col items-center">

      <h2 className="text-2xl font-semibold text-white mb-4">Notable Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievementData.map((ach, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-gray-200 shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-purple-300"
          >
            <h3 className="text-xl font-bold text-purple-600 mb-1">{ach.title}</h3>
            <p className="text-white mb-2">{ach.description}</p>
            <p className="text-white">
              <strong>{ach.date}</strong> - {ach.institution}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
