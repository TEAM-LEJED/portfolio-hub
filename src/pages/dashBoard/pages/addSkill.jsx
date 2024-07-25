import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { apiAddSkill } from "../../../services/skills";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";

const AddSkill = () => {
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
      const res = await apiAddSkill({
        skillName: data.name,
        levelOfProficiency: data.skillProficiency,
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
    <div>
      <Popup
        trigger={
          <button className="bg-[#12071F] hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {" "}
            CLICK TO ADD SKILLS{" "}
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> ADD SKILLS </div>
            <div className="content">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="name"
                  name="name"
                  {...register("name", { required: "name is required" })}
                  placeholder="Skill Name"
                />

                <select
                  name="skillProficiency"
                  {...register("skillProficiency", {
                    required: "skillProficiency is required",
                  })}
                >
                  <option disabled selected>
                    Skill Proficiency
                  </option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Expert</option>
                </select>
                <div className="actions flex items-center justify-between">
                  <button
                    className="button bg-[#12071F] hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {isSubmitting ? <ColorRing /> : "SAVE DRAFT "}
                  </button>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-[#12071F] hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Save and Continue
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default AddSkill;
