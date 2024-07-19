import { Link, Pin, ScanFace, Store, User } from "lucide-react";

const c = {
    NAVPREVIEW:[
        {
            name:"About",
            link:"/about"
        },
        {
            name:"Hero",
            link:"/hero"
        },
        {
            name:"Achievements",
            link:"/achievements"
        },
        {
            name:"Contacts",
            link:"/contacts"
        },
        {
            name:"Education",
            link:"/education"
        },
        {
            name:"Experience",
            link:"/experience"
        },
        {
            name:"Projects",
            link:"/projects"
        },
        {
            name:"Resume",
            link:"/resume"
        },
        {
            name:"Skills",
            link:"/skills"
        },
        {
            name:"Volunteering",
            link:"/volunteering"
        },
    ],

    EXPERIENCECARD:[
        
        { 
        ICON:<Pin/>, 
        companyName: "Google",
        role: "Software Engineer",
        skills: "Java, C++",
        responsibility: "Developed a web application for Google.",
        location: "Accra, Ghana",
        startDate:  "2022-01-01",
        endDate: "2023-12-31" 
        },
        { 
        ICON:<Pin/>,      
        companyName: "Google",
        role: "Software Engineer",
        skills: "Java, C++",
        responsibility: "Developed a web application for Google.",
        location: "Accra, Ghana",
        startDate:  "2022-01-01",
        endDate: "2023-12-31" 
        },
        { 
        ICON:<Pin/>,          
        companyName: "Google",
        role: "Software Engineer",
        skills: "Java, C++",
        responsibility: "Developed a web application for Google.",
        location: "Accra, Ghana",
        startDate:  "2022-01-01",
        endDate: "2023-12-31" 
        },
        {  
        ICON:<Pin/>,      
        companyName: "Google",
        role: "Software Engineer",
        skills: "Java, C++",
        responsibility: "Developed a web application for Google.",
        location: "Accra, Ghana",
        startDate:  "2022-01-01",
        endDate: "2023-12-31" 
        },

    ],

    PROFILESECTIONS:[
        {
            title: "Bio",
            icon: <ScanFace />,
            content: [
              "Married",
              "Female",
              "Accra, Ghana"
            ]
          },
          {
            title: "About",
            icon: <Store />,
            content: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Architecto, excepturi porro.",
              "6th August, 2000",
              "0234556789",
              "English"
            ]
          },
          {
            title: "Links",
            icon: <Link />,
            content: [
              "lyn@example.com",
              "linkedin.com/",
              "github.com/"
            ]
          }
        ],
        PROJECTS:[
            {
                image: "image",
                projectName: "Project Alpha",
                description: "A detailed description of Project Alpha.",
                contributors: "John Doe, Jane Smith",
                skills: "JavaScript, React, CSS",
                link: "https://example.com/project-alpha",
                nameOfInstitution: "Tech University",
                startDate: "2022-01-01",
                endDate: "2022-12-31"
              },
              {
                image: "image",
                projectName: "Project Beta",
                description: "A detailed description of Project Beta.",
                contributors: "Alice Johnson, Bob Brown",
                skills: "Python, Django, HTML",
                link: "https://example.com/project-beta",
                nameOfInstitution: "Code Academy",
                startDate: "2023-01-01",
                endDate: "2023-12-31"
              },
              {
                image: "image",
                projectName: "Project Alpha",
                description: "A detailed description of Project Alpha.",
                contributors: "John Doe, Jane Smith",
                skills: "JavaScript, React, CSS",
                link: "https://example.com/project-alpha",
                nameOfInstitution: "Tech University",
                startDate: "2022-01-01",
                endDate: "2022-12-31"
              },
              {
                image: "image",
                projectName: "Project Beta",
                description: "A detailed description of Project Beta.",
                contributors: "Alice Johnson, Bob Brown",
                skills: "Python, Django, HTML",
                link: "https://example.com/project-beta",
                nameOfInstitution: "Code Academy",
                startDate: "2023-01-01",
                endDate: "2023-12-31"
              }

        ],
         VOLUNTEERING :[
          {
            organization: "Non-Profit Org",
            description: "Worked on community development projects.",
            startDate: "2021-05-01",
            endDate: "2021-11-01",
            skills: "Project Management, Communication",
            role: "Volunteer Coordinator",
            responsibility: "Coordinated volunteer activities",
            location: "City, Country",
            projectName: "Community Development"
          },
          {
            organization: "Environmental Group",
            description: "Participated in environmental conservation efforts.",
            startDate: "2020-03-01",
            endDate: "2020-09-01",
            skills: "Teamwork, Environmental Awareness",
            role: "Field Volunteer",
            responsibility: "Assisted in cleanup activities",
            location: "City, Country",
            projectName: "Conservation Project"
          },
          {
            organization: "Environmental Group",
            description: "Participated in environmental conservation efforts.",
            startDate: "2020-03-01",
            endDate: "2020-09-01",
            skills: "Teamwork, Environmental Awareness",
            role: "Field Volunteer",
            responsibility: "Assisted in cleanup activities",
            location: "City, Country",
            projectName: "Conservation Project"
          },
          {
            organization: "Environmental Group",
            description: "Participated in environmental conservation efforts.",
            startDate: "2020-03-01",
            endDate: "2020-09-01",
            skills: "Teamwork, Environmental Awareness",
            role: "Field Volunteer",
            responsibility: "Assisted in cleanup activities",
            location: "City, Country",
            projectName: "Conservation Project"
          },
        ],

EDUCATION : [
  {
    schoolName: "University of Example",
    location: "City, Country",
    program: "Bachelor of Science in Computer Science",
    qualification: "BSc",
    grade: "3.8 GPA",
    startDate: "2018-09-01",
    endDate: "2022-06-01"
  },
  {
    schoolName: "Example High School",
    location: "City, Country",
    program: "High School Diploma",
    qualification: "Diploma",
    grade: "4.0 GPA",
    startDate: "2014-09-01",
    endDate: "2018-06-01"
  },

],
 ACHIEVEMENTS : [
  {
    awards: "Hackathon Winner",
    description: "Won first place in the annual hackathon.",
    image: "path/to/hackathon-image.jpg",
    date: "2023-10-15",
    nameOfInstitution: "Tech University"
  },
  {
    awards: "Published Research Paper",
    description: "Published a research paper on AI.",
    image: "path/to/research-image.jpg",
    date: "2023-08-20",
    nameOfInstitution: "Dev Academy"
  }
],
        
        


}
export default c;
