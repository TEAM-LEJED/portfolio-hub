import React, { useState } from 'react';
import FormMotion from './formMotion';

const ExperienceForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        role: '',
        skills: '',
        responsibility: '',
        location: '',
        startDate: '',
        endDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveDraft = () => {
        // Placeholder for save draft logic
        console.log('Draft saved:', formData);
    };

    const handleSaveAndContinue = () => {
        // Placeholder for save and continue logic
        console.log('Saved and continue:', formData);
    };

    return (
        <div className="max-w-4xl p-20 ml-30   ">
            <form className='grid grid-rows-4 grid-flow-col gap-4'>
                {/* Company Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                        Company Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="companyName"
                        type="text"
                        placeholder="Company Name"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                </div>

                {/* Role */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                        Role
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="role"
                        type="text"
                        placeholder="Role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    />
                </div>

                {/* Start Date */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Start Date
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="startDate"
                        type="month"
                        placeholder="Start Date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                </div>

                {/* Responsibility */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="responsibility">
                        Responsibility
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="responsibility"
                        placeholder="Responsibility"
                        name="responsibility"
                        value={formData.responsibility}
                        onChange={handleChange}
                    />
                </div>


                {/* Location */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Location
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        type="text"
                        placeholder="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>



                {/* Skills */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Skills
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="skills"
                        type="text"
                        placeholder="Skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                    />
                </div>

                {/* End Date */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2"   >
                        End Date
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="endDate"
                        type="month"
                        placeholder="End Date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                </div>

            </form>
               {/* Buttons */}
        <div className="flex items-center justify-between">
          <button
            className="bg-[#12071F] hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSaveDraft}
          >
            Save Draft
          </button>
          <button
            className="bg-[#12071F] hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSaveAndContinue}
          >
            Save and Continue
          </button>
        </div>
        </div>

    );
};

export default ExperienceForm;
