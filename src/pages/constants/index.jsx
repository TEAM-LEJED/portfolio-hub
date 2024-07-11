import{ FileCheck2, Home, Medal, Newspaper, Power, UserSearch} from "lucide-react";

export const K = {
  NAVLINKS : [
    {
      icon: <Home/>,
      text: "Overview",
      link: "/dashboard"
    },
    {
      icon:<UserSearch/>,
      text: "Experience",
      link: "/dashboard/experience"
    },
    {
      icon:<Newspaper/>,
      text: "Resume",
      link: "/dashboard/resume"
    },
    {
      icon:<Power/>,
      text: "Skills",
      link: "/dashboard/skills"
    },
    {
      icon:<FileCheck2/>,
      text: "Projects",
      link: "/dashboard/projects"
    },
    
  ]
}