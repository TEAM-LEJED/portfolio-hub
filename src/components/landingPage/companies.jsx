import React from 'react';
import { skillsComImg, skillsComLogo } from '../../assets';


const Companies = () => {
  return (
    <div className="bg-[#12071F]">
      {/* company logo */}
      <div className="w-full">
        <img src={skillsComImg} alt="SkillsCompany" className="w-full h-30" />
        <br /><br />
        <h1 className=" text-3xl text-white font-bold flex items-center  justify-center">
                Companies Your Profile can be Linked to in Ghana and Internationally
         </h1>
        <img src={skillsComLogo} alt="Company Logo" className="w-full h-30 " />
      </div>
    </div>
  );
};

export default Companies;
