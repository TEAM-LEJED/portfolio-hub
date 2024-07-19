import React from 'react'

const ProjectForms = () => {
    return (
        <div className="max-w-4xl p-20 ml-30   ">
            <form className='grid grid-rows-4 grid-flow-col gap-4'>
                {/* Project Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                            Project Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="companyName"
                        type="text"
                        placeholder="Company Name"
                        name="companyName"
                       
                    />
                </div>

                {/* Role */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                        Link
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="role"
                        type="text"
                        placeholder="Link"
                        name="role"
                     
                    />
                </div>
                 {/* Role */}
                 <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                        contributors
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="role"
                        type="text"
                        placeholder="Contributers"
                        name="role"
                     
                    />
                </div>
                <div className="sm:col-span-3">
        <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
          Upload Image
        </label>
        <input
          type="file"
          id="projectImage"
          name="projectImage"
          accept=".pdf,.jpg,.png,.docx"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          required
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
                       
                    />
                </div>

                {/* Responsibility */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="responsibility">
                    Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="responsibility"
                        placeholder="Description"
                        name="responsibility"
                     
                    />
                </div>


                {/* Location */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Name Of Institution
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        type="text"
                        placeholder="Name Of Institution"
                        name="location"
                       
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
                      
                    />
                </div>

            </form>
               {/* Buttons */}
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
        </div>

    );
};

export default ProjectForms