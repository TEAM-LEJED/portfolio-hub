import React, { useState } from "react";
import { apiAddVolunteering } from "../../../services/volunteering";
import { useForm } from "react-hook-form";
import { ColorRing } from "react-loader-spinner";
import { toast } from "react-toastify";

const AddVolunteering = () => {
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
      const res = await apiAddVolunteering({
        organisation: data.organisation,
        description: data.description,
        role: data.role,
        projectName: data.projectName,
        skills: data.skills,
        responsibility: data.responsibility,
        location: data.location,
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
        className="grid grid-rows-4 grid-flow-col gap-4"
      >
        {/* projectName */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="projectName"
          >
            Project Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="projectName"
            type="text"
            placeholder="projectName"
            {...register("projectName", {
              required: "name of project Name required",
            })}
          />
        </div>

        {/* Organization */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="organization"
          >
            Organization
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="organisation"
            type="text"
            placeholder="organisation"
            {...register("organisation", {
              required: "name of organisation required",
            })}
          />
        </div>

        {/* description
         */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            placeholder="description"
            {...register("description", {
              required: "description is required",
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
              required: "  Start Date is required",
            })}
          />
        </div>

        {/* Responsibility */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="responsibility"
          >
            responsibility
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="responsibility"
            placeholder="responsibility"
            {...register("responsibility", {
              required: "responsibility is required",
            })}
          />
        </div>
        {/* role */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="role"
            placeholder="role"
            {...register("role", {
              required: "role is required",
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
            placeholder="location"
            {...register("location", {
              required: "location is required",
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
            placeholder="Skills"
            name="skills"
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
            {...register("endDate", {
              required: "endDate is required",
            })}
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <button
            className="bg-[#12071F] hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isSubmitting ? <ColorRing /> : "SAVE DRAFT "}
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

export default AddVolunteering;
