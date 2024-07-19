import React from 'react'

const EducationForm = () => {
  return (

    <div className="max-w-4xl p-20 ml-30   ">
      <form className='grid grid-rows-3 grid-flow-col gap-4'>
        {/* School Name  */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
            School Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="schoolName"
            type="text"
            placeholder="school Name"
            name="schoolName"

          />
        </div>

        {/*  Location */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="location"
            placeholder="location"
            name="location"

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


        {/*  Programe */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Programe
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="programe"
            type="programe"
            placeholder="programe"
            name="programe"

          />
        </div>



        {/*  Qualification */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qualification">
            Qualification
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="qualification"
            type="number"
            placeholder="qualification"
            name="qualification"
            step="0.01"
          />
        </div>


        {/* End Date */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
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
  )
}

export default EducationForm