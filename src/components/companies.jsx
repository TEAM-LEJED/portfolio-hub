import React from 'react';
import CompanyLogo from "../assets/skillscompany.png";
import SkillsCompany from "../assets/skillscompany.jpg";


const Companies = () => {
  return (
    <div className="bg-gray">
      {/* company logo */}
      <div className="w-full">
        <img src={SkillsCompany} alt="SkillsCompany" className="w-full h-30" />
        <br /><br />
        <h1 className=" text-3xl text-white font-bold flex items-center flex justify-center">
                Companies Your Profile can be Linked to in Ghana and Internationally
         </h1>
        <img src={CompanyLogo} alt="Company Logo" className="w-full h-30 " />
      </div>
    </div>
  );
};

export default Companies;
