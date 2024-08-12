import React, { useState } from "react";
import { toast } from "react-toastify";
import { apiAddProject } from "../../../services/projects";
import { useForm } from "react-hook-form";
import { ColorRing } from "react-loader-spinner";

const AddProject = () => {
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
      formData.append("image", data.projectImage[0]);
      formData.append("projectName", data.projectName);
      formData.append("description", data.description);
      formData.append("contributors", data.contributors);
      formData.append("nameOfInstitution", data.nameOfInstitution);
      formData.append("skills", data.skills);
      formData.append("link", data.link);
      formData.append("startDate", data.startDate);
      formData.append("endDate", data.endDate);

      const res = await apiAddProject(formData);
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
        className="grid grid-rows-4 grid-flow-col gap-4"
      >
        {/* Project Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="companyName"
          >
            Project Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="projectName"
            type="text"
            placeholder="Project Name"
            {...register("projectName", {
              required: "name of project required",
            })}
          />
        </div>

        {/* Link */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="link"
            type="text"
            placeholder="Link"
            {...register("link", {
              required: "link to project is  required",
            })}
          />
        </div>
        {/* Contributors */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            contributors
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contributors"
            type="text"
            placeholder="contributors"
            {...register("contributors", {
              required: " contributors required",
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
              required: "date you started is required ",
            })}
          />
        </div>

        {/* description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description"
            {...register("description", {
              required: "description is required",
            })}
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name Of Institution
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nameOfInstitution"
            type="text"
            placeholder="Name Of Institution"
            {...register("nameOfInstitution", {
              required: "name of institution is required",
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
            {...register("skills", { required: "skill is requured" })}
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

        <div className="sm:col-span-3">
          <label
            htmlFor="cv"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="projectImage"
            accept=".pdf,.jpg,.png,.docx"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            {...register("projectImage", {
              required: " project Image required",
            })}
          />
        </div>
      </form>
    </div>
  );
};

export default AddProject;
