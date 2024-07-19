
import { useEffect, useState } from "react";
import { K } from "../../../constants"
import { apiGetachievements } from "../../../services/achievements";
import { apiGetEducation } from "../../../services/education";
import { apiGetExperiences } from "../../../services/experience";
import { apiGetProjects } from "../../../services/projects";
import { apiGetSkills } from "../../../services/skills";
import { apiGetVoluteering } from "../../../services/voluteering";
import PageLoader from "../../../components/dashBorad/pageLoader";


const Overview = () => {

  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    education: 0,
    voluteering: 0,
    experiences: 0,

  });
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)
    try {
      const [
        totalSkills,
        totalAchievements,
        totalProjects,
        totalVoluteering,
        totalEducation,
        totalExperience
      ] = await Promise.all([
        apiGetSkills(),
        apiGetachievements(),
        apiGetProjects(),
        apiGetVoluteering(),
        apiGetEducation(),
        apiGetExperiences(),

      ]);
      console.log(" Total skills", totalSkills)

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        education: totalEducation.length,
        voluteering: totalVoluteering.length,
        experiences: totalExperience.length,

      };
      console.log(newData)

      setData(newData);

    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
  <>
    {isLoading ? 
        <PageLoader/>:
        <div className="p-10">
        <div className="grid grid-cols-3 gap-10">
          {K.OVERVIEW.map(({ icons, text, total }, index) => (
            <div
              key={index}
              className="h-40 shadow-lg bg-[#12071F] p-6 flex flex-col justify-between"
            >
              <div className="flex justify-between">
                <span className="text-amber-400">{icons}</span>
                <span className="text-lg text-white font-semibold">{text}</span>
              </div>
              <span className="text-2xl text-white font-semibold">{total}</span>
            </div>
          ))}
        </div>
      </div>
      
    }
  
  </>
  )
}

export default Overview