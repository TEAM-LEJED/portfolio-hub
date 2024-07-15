import{ 
  FileCheck2, 
  Home,
   Newspaper, 
   Trophy,
   GraduationCap, 
   BriefcaseBusiness, 
   HeartHandshake, 
   UserSearch,
  } from "lucide-react";
export const K = {
  NAVLINKS: [
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
      icon:<BriefcaseBusiness/>,
      text: "Skills",
      link: "/dashboard/skills"
    },
    {
      icon:<FileCheck2/>,
      text: "Projects",
      link: "/dashboard/projects"
    },
    
    {
      icon:< Trophy/>,
      text: "Achievement",
      link: "/dashboard/achievement"
    },
    
    {
      icon:<GraduationCap/>,
      text: "Education",
      link: "/dashboard/education"
    },
    
    {
      icon:<HeartHandshake/>,
      text: "Volunteering",
      link: "/dashboard/volunteering"
    },
    
  ],
  OVERVIEW: [
    {
      icons: <BriefcaseBusiness />,
      text: "Skills",
      total: 40,
    },
    {
      icons: <FileCheck2 />,
      text: "Projects",
      total: 10,
    },
    {
      icons: <UserSearch />,
      text: "Experiences",
      total: 9,
    },
    {
      icons: <Trophy />,
      text: "Achievement",
      total: 10,
    },
  ],
  SKILLS: [
    {
      name: "JavaScript",
      levelOfProficiency: "Intermediate",
    },
    {
      name: "JavaScript",
      levelOfProficiency: "Advanced",
    },
    {
      name: "CSS",
      levelOfProficiency: "Beginner",
    },
    {
      name: "Typescript",
      levelOfProficiency: "Beginner",
    },
    {
      name: "React Native",
      levelOfProficiency: "Beginner",
    },

  ]

}