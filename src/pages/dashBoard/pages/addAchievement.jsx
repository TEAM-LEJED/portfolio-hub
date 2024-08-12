import React, { useState } from "react";
import { apiAddAchievement } from "../../../services/achievements";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { ColorRing } from "react-loader-spinner";

const AddAchievement = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (data) => {
    console.log(data);
    // console.log(data.image[0])
    setIsSubmitting(true);
    try {
      const formData = new FormData();

      //Append all
      formData.append("image", data.achievementsImage[0]);
      formData.append("award", data.award);
      formData.append("description", data.description);
      formData.append("date", data.date);
      formData.append("nameOfInstitution", data.nameOfInstitution);

      const res = await apiAddAchievement(formData);
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An Error Occured");
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
        {/* Awards  */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="companyName"
          >
            Awards
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="awardsName"
            type="text"
            placeholder="Awards Name"
            {...register("awardsName", {
              required: "name of award required",
            })}
          />
        </div>

        {/*  Name of Institution */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Name of Institution
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nameOfInstitution"
            type="description"
            placeholder="description"
            {...register("nameOfInstitution", {
              required: "Name of institution is required",
            })}
          />
        </div>
        {/* description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="responsibility"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="description"
            placeholder="description"
            {...register("description", {
              required: "description is required",
            })}
          />
        </div>

        {/*   Image */}
        <div className="sm:col-span-3">
          <label
            htmlFor="cv"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="achievementsImage"
            name="image"
            accept=".pdf,.doc,.docx"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            {...register("achievementsImage", {
              required: " achievements Image required",
            })}
          />
        </div>

        {/*  Date */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Start Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="month"
            placeholder=" Date"
            {...register("date", {
              required: "date is required",
            })}
          />
        </div>
        
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

export default AddAchievement;
