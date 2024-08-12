import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiAddEducation } from "../../../services/education";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";

const AddEducation = () => {
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
      const res = await apiAddEducation({
        schoolName: data.schoolName,
        location: data.location,
        program: data.program,
        qualification: data.qualification,
        grade: data.grade,
        startDate: data.startDate,
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-rows-3 grid-flow-col gap-4"
      >
        {/* School Name  */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="schoolName"
          >
            School Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="schoolName"
            type="text"
            placeholder="school Name"
            {...register("schoolName", {
              required: "name of School required",

          })}         
           />
        </div>

        {/*  Location */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="location"
            placeholder="location"
            {...register("location", {
              required: "location required",

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
            {...register("startDate", {
              required: "Date Started is  required",

          })}          
           
          />
        </div>

        {/*  Programe */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="program"
          >
            Program
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="program"
            type="text"
            placeholder="program"
            {...register("program", {
              required: "program is  required",

          })}             
          />
        </div>

        {/*  Qualification */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="qualification"
          >
            Qualification
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="qualification"
            type="number"
            placeholder="qualification"
            step="0.01"
            {...register("qualification", {
              required: "qualification is  required",

          })}             
          />
        
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="endDate"
            type="month"
            placeholder="End Date"
            name="endDate"
       
             {...register("endDate", {
              required: "End Date is  required",

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

export default AddEducation;
