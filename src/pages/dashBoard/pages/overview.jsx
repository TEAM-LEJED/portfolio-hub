import { useEffect, useState } from "react";
import { K } from "../../../constants";
import { apiGetachievements } from "../../../services/achievements";
import { apiGetEducation } from "../../../services/education";
import { apiGetExperiences } from "../../../services/experience";
import { apiGetProjects } from "../../../services/projects";
import { apiGetSkills } from "../../../services/skills";
import { apiGetVoluteering } from "../../../services/voluteering";
import CountUp from "react-countup";
import PageLoader from "../../../components/dashBorad/pageLoader";
import { useNavigate, useOutletContext } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    education: 0,
    voluteering: 0,
    experiences: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [profile] = useOutletContext();
  console.log(profile);

  const getData = async () => {
    setIsLoading(true);
    try {
      const [
        totalSkills,
        totalAchievements,
        totalProjects,
        totalVoluteering,
        totalEducation,
        totalExperience,
      ] = await Promise.all([
        apiGetSkills(),
        apiGetachievements(),
        apiGetProjects(),
        apiGetVoluteering(),
        apiGetEducation(),
        apiGetExperiences(),
      ]);
      console.log(" Total skills", totalSkills.data.skill);

      const newData = {
        skills: totalSkills.data.skill.length,
        projects: totalProjects.data.Projects.length,
        achievements: totalAchievements.data.Achievements.length,
        education: totalEducation.data.education.length,
        voluteering: totalVoluteering.data.Volunteerings.length,
        experiences: totalExperience.data.Experience.length,
      };
      console.log(newData);

      setData(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="p-10 flex flex-col gap-y-10 ">
          <button
            className="ml-auto px-3 py-2 bg-[#12071F] rounded-md text-white font-semibold"
            onClick={() =>
              navigate(`/preview/${profile ? profile.userName : "gitAma"}`)
            }
          >
            View Preview
          </button>
          <div className="grid grid-cols-3 gap-10">
            {K.OVERVIEW.map(({ icons, text, id }, index) => (
              <div
                key={index}
                className="h-40 shadow-lg bg-[#12071F] p-6 flex flex-col justify-between"
              >
                <div className="flex justify-between">
                  <span className="text-amber-400">{icons}</span>
                  <span className="text-lg text-white font-semibold">
                    {text}
                  </span>
                </div>
                <CountUp
                  className="text-2xl font-semibold text-white"
                  start={0}
                  end={data[id]}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;
