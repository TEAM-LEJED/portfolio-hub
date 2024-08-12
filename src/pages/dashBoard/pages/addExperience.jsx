import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiAddExperience } from "../../../services/experience";
import { toast } from 'react-toastify';
import { ColorRing } from "react-loader-spinner";

const AddExperience = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true);
        try {
          const res = await apiAddExperience({
            companyName: data.companyName,
            role:data.role,
            skills: data.skills,
            responsibility:data.responsibility,
            location:data.location,
            startDate:data.startDate,
            endDate: data.endDate,
          });
          console.log(res.data);
          toast.success(res.data.message);
        } catch (error) {
          console.log(error);
          toast.error("An Error occured");
        } finally {
          setIsSubmitting(false);
        }
      };


  return (
    <div className="max-w-4xl p-20 ml-30   ">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-rows-4 grid-flow-col gap-4">
        {/* Company Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="companyName"
            type="text"
            placeholder="CompanyName"
            {...register("companyName", {
                required: "name of Company required",

            })}
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="role"
            type="text"
            placeholder="Role"
            {...register ("role",{
                required: "role is required",
            })}
            
          />
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Start Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startDate"
            type="month"
            placeholder="Start Date"
            
            {...register("startDate",{
                required:"date you started is required ",
            })}
          />
        </div>

        {/* Responsibility */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="responsibility"
          >
            Responsibility
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="responsibility"
            placeholder="Responsibility"
            {...register ("responsibility",{
              required : "responsibility is required",
           })}
         
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Location"
            {...register ("location",{
                required : "location is required",
             })}
           
          />
        </div>

        {/* Skills */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Skills
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="skills"
            type="text"
            {...register ("skills",{ required : "skill is requured",
             })}
             placeholder="Skills"

          />
        </div>

        {/* End Date */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="endDate"
            type="month"
            placeholder="End Date"
            {...register ("endDate",{
                required : "endDate is required",
             })}
          />
        </div>
      {/* Buttons */}
      <div className="flex items-center justify-between">
        <button
          className="bg-[#12071F] hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {isSubmitting ? <ColorRing/> : "SAVE DRAFT "}
        </button>
        <button
          className="bg-[#12071F] hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
         {isSubmitting ? <ColorRing /> : "SAVE AND CONTINUE "}

        </button>
      </div>
      </form>

    </div>
  );
};

export default AddExperience;
