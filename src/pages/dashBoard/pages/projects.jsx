import React, { useEffect, useState } from "react";
import { Edit, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import { apiDeleteProject, apiGetProjects } from "../../../services/projects";
import { toast } from "react-toastify";
import PageLoader from "../../../components/dashBorad/pageLoader";
import { noData } from "../../../assets";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetProjects();
      console.log(res.data);
      setProjects(res.data.projects || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteProject(_id);
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setIsDeleting((prev) => ({ ...prev, [_id]: false }));
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <PagesLayout
        headerText="Projects"
        buttonText="Add New"
        onClick={() => navigate("/dashboard/projects/add-project")}
      />
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="p-20">
          <div className="grid h-5 grid-cols-2 gap-9">
            {projects.length == 0 ? (
              <p>
                <img src={noData} alt="no data found" />
              </p>
            ) : (
              projects.map(
                (
                  {
                    image,
                    projectName,
                    description,
                    contributors,
                    skills,
                    link,
                    nameOfInstitution,
                    startDate,
                    endDate,
                  },
                  index
                ) => (
                  <div
                    key={index}
                    className="relative flex flex-col h-64 w-72 p-4 border border-[#FFCD58] rounded shadow-lg"
                  >
                    <div className="absolute right-0 top-0 h-full flex flex-col justify-between items-center">
                      <div className="bg-yellow-500 w-1 h-full"></div>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="cursor-pointer"
                      >
                        {isDeleting ? (
                          <Loader />
                        ) : (
                          <Trash className="text-red-500 hover:text-red-700" />
                        )}
                      </button>
                    </div>
                    <img
                      src={image}
                      alt="projectImage"
                      className="h-32 w-full object-cover rounded"
                    />
                    <span>{image}</span>
                    <span>{projectName}</span>
                    <span>{description}</span>
                    <span>{contributors}</span>
                    <span>{skills}</span>
                    <span>{link}</span>
                    <span>{nameOfInstitution}</span>
                    <span>
                      {startDate} - {endDate}
                    </span>
                  </div>
                )
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
