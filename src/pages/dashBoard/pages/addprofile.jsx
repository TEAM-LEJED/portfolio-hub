import React, { useState } from 'react';
import ProfileAvatar from '../../../components/dashBorad/allForms/avatar';

const AddProfile = () => {
     
  
      return (
         <form>
             <div >
<div className="grid bg-gray-700 justify-center p-1 h-64 w-full">
            <div className='flex justify-center'>
                <ProfileAvatar/>
            </div>
            <div className='grid grid-cols-2 p-0 pb-16   '/>
            <div className='  bg-gray-200 h-[rem] w-[65rem] p-9 items-center'>
            <form className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 max-w-4xl mx-auto">
      <div className="sm:col-span-1">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
          Marital Status
        </label>
        <select
          id="maritalStatus"
          name="maritalStatus"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        >
          <option value="">Select Marital Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="sex" className="block text-sm font-medium text-gray-700">
          Sex
        </label>
        <select
          id="sex"
          name="sex"

          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        >
          <option value="">Select Sex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"

          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        />
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"

          rows="4"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        ></textarea>
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
          Date of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"

          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
          Contact
        </label>
        <input
          type="tel"
          id="contact"
          name="contact"
          pattern="[0-9]*"
          inputMode="numeric"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="languages" className="block text-sm font-medium text-gray-700">
          Languages
        </label>
        <input
          type="text"
          id="languages"
          name="languages"

          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"

          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"

          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
          Specialization
        </label>
        <input
          type="text"
          id="specialization"
          name="specialization"

          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        />
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
          Upload CV
        </label>
        <input
          type="file"
          id="cv"
          name="cv"
          accept=".pdf,.doc,.docx"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        />
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
          LinkedIn Profile
        </label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"

          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        />
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="github" className="block text-sm font-medium text-gray-700">
          GitHub Profile
        </label>
        <input
          type="text"
          id="github"
          name="github"

          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-[#12071F] hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Save Draft
        </button>
        <button
          className="bg-[#12071F] hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Save and Continue
        </button>
      </div>
    </form>            </div>
           
        </div>      
          </div>
         </form>
      );
  };




export default AddProfile;
