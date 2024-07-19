import React from 'react'

const VoluteeringForm = () => {
    return (
        <div className="max-w-4xl p-20 ml-30   ">
            <form className='grid grid-rows-4 grid-flow-col gap-4'>
                {/* Voluteering */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                            Organization
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="organization"
                        type="text"
                        placeholder="organization"
                        name="voluterringName"
                       
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
                        placeholder="Role"
                        name="role"
                     
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
                    Location
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        type="text"
                        placeholder="location"
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
}

export default VoluteeringForm