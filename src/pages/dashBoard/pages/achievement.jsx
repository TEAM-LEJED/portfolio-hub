import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import { Edit, Trash } from "lucide-react";
import {
  apiDeleteAchievement,
  apiGetachievements,
} from "../../../services/achievements";
import { toast } from "react-toastify";
import { noData } from "../../../assets";
import { useEffect, useState } from "react";
import PageLoader from "../../../components/dashBorad/pageLoader";

const AchievementDashboard = () => {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchAchievements = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetachievements();
      console.log(res.data);
      setAchievements(res.data.achievements || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteAchievement(_id);
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
    fetchAchievements();
  }, []);

  return (
    <div>
      <PagesLayout
        headerText="Achievements"
        buttonText="Add New "
        onClick={() => navigate("/dashboard/achievement/add-achievements")}
      />
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="p-20">
          <div className="grid h-5 grid-cols-2 gap-9">
            {achievements.length == 0 ? (
              <p>
                <img src={noData} alt="no data found" />
              </p>
            ) : (
              { achievements }.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col h-64 w-72 p-4 border border-[#FFCD58] rounded shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.awards}
                    className="h-32 w-full object-cover rounded"
                  />
                  <h3>{item.awards}</h3>
                  <p>{item.description}</p>
                  <p>{item.nameOfInstitution}</p>
                  <p>{item.date}</p>
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
                         <Edit className="cursor-pointer text-red-600 my-2" />

                      </button>
                    </div>
                </div>
              ))

            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementDashboard;
