import PagesLayout from "../layout/pagesLayout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  apiDeleteExperience,
  apiGetExperiences,
} from "../../../services/experience";
import { toast } from "react-toastify";
import PageLoader from "../../../components/dashBorad/pageLoader";
import { noData } from "../../../assets";

const Experiences = () => {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchExperiences = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetExperiences();
      console.log(res.data);
      setExperiences(res.data.experiences || []);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteExperience(_id);
      console.log(res.data);
      toast.success(res.data.message);

    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  }

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div>
      <PagesLayout
        headerText="Experiences"
        buttonText="Add New"
        onClick={() => navigate("/dashboard/experiences/add-experience")}
      />

      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="p-20">
          <div className="grid h-5 grid-cols-2 gap-9">
            {experiences.length == 0 ? (
              <p>
                {/* No experience added yet */}
                <img src={noData} alt="" />

              </p>
              
            ) : (
              experiences.map(
                (
                  {
                    _id,
                    ICON,
                    companyName,
                    role,
                    skills,
                    responsibility,
                    location,
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
                      <Edit className="cursor-pointer text-green-600  hover:text-blue-700" />
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
                    <span>{ICON}</span>
                    <span>{companyName}</span>
                    <span>{role}</span>
                    <span>{skills}</span>
                    <span>{responsibility}</span>
                    <span>{location}</span>
                    <span>{startDate}</span>
                    <span>{endDate}</span>
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

export default Experiences;
