import React from 'react'

const AchievementForm = () => {
  return (

    <div className="max-w-4xl p-20 ml-30   ">
      <form className='grid grid-rows-3 grid-flow-col gap-4'>
        {/* Awards  */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
            Awards
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="awardsName"
            type="text"
            placeholder="Awards Name"
            name="awardsName"

          />
        </div>

        {/*  Name of Institution */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Name of Institution
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="descriptipn"
            type="description"
            placeholder="description"
            name="description"

          />
        </div>
        {/* description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="responsibility">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="description"
            name="description"
          />
        </div>


        {/*   Image */}
        <div className="sm:col-span-3">
        <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept=".pdf,.doc,.docx"
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

export default AchievementForm