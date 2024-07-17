import React, { useState } from 'react';
import ProfileForms from './allForms/profileForms';
import ProfileAvatar from './allForms/avatar';

const AddProfile = () => {
     
  
      return (
          <div >
<div className="grid bg-gray-700 justify-center p-1 h-64 w-full">
            <div className='flex justify-center'>
                <ProfileAvatar/>
            </div>
            <div className='grid grid-cols-2 p-0 pb-16   '/>
            <div className='  bg-gray-200 h-[rem] w-[65rem] p-9 items-center'>
                <ProfileForms/>
            </div>
           
        </div>      
          </div>
      );
  };




export default AddProfile;
