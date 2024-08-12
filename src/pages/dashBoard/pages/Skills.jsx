import PagesLayout from "../layout/pagesLayout";
import { useNavigate } from "react-router-dom";
import { Edit, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { apiDeleteSkill, apiGetSkills } from "../../../services/skills";
import PageLoader from "../../../components/dashBorad/pageLoader";
import Loader from "../../../components/preview/loader";
import { toast } from "react-toastify";
import { noData } from "../../../assets";

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState([false]);

  const fetchSkills = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetSkills();
      console.log(res.data);
      setSkills(res.data.skills || []);
    } catch (error) {
      console.log(error);

    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setIsDeleting((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteSkill(_id);
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
    fetchSkills();
  }, []);
  return (
    <div>
      <PagesLayout
        headerText="Skills"
        buttonText="Add New"
        onClick={() => navigate("/dashboard/skills/add-skill")}
      />

      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          {skills.length == 0 ? (
            <p>
              <img src={noData} alt="No Data" />
              {/* <p>No skills available</p> */}

            </p>
          ) : (
            <div className="grid grid-cols-4 gap-6">
              {skills?.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-md shadow-md bg-white"
                >
                  <span>{skill.skillName}</span>
                  <span>{skill.levelOfProficiency}</span>

                  <div className="flex mt-2">
                    <button
                      onClick={() => handleDelete(skill.id)}
                      className="cursor-pointer"
                    >
                      {isDeleting[skill.id] ? (
                        <Loader />
                      ) : (
                        <Trash2Icon className="text-red-500 hover:text-red-700" />
                      )}
                    </button>
                    <button className="ml-2 cursor-pointer">
                      <Edit className="text-green-600 hover:text-blue-700" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Skills;
