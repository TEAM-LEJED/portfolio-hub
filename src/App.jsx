import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/dashBoard/pages/projects";
import DashBoardLayout from "./pages/dashBoard/layout";
import Skills from "./pages/dashBoard/pages/Skills";
import Education from "./pages/dashBoard/pages/education";
import Volunteering from "./pages/dashBoard/pages/volunteering";
import Overview from "./pages/dashBoard/pages/overview";
import AddProject from "./pages/dashBoard/pages/addProject";
import AddExperience from "./pages/dashBoard/pages/addExperience";
import AddSkill from "./pages/dashBoard/pages/addSkill";
import Experiences from "./pages/dashBoard/pages/experiences";
import AddAchievement from "./pages/dashBoard/pages/addAchievement";
import AddEducation from "./pages/dashBoard/pages/addEducation";
import AddVoluteering from "./pages/dashBoard/pages/addVolunteering";
import Profile from "./pages/dashBoard/pages/profile";
import AddProfile from "./pages/dashBoard/pages/addprofile";
import PreviewPage from "./pages/preview";
import AchievementDashboard from "./pages/dashBoard/pages/achievement";
import LandingPage from "./pages/landingPage/landingPage";
import { apiGetUserDetails } from "./services/preview";
import AuthLayout from "./pages/auth/authLayout";
import LoginPage from "./pages/auth/loginPage";
import SignupPage from "./pages/auth/signupPage";
import Hero from "./pages/preview/hero/hero";
import About from "./pages/preview/about/about";
import Experience from "./pages/preview/experience/experience";
import ProjectPreview from "./pages/preview/projects/projects";
import Achievement from "./pages/preview/Achievements/achievement";
import ExperiencePreview from "./pages/preview/experience/experience";
import Resume from "./pages/preview/resume/resume";
import RootLayout from "./pages/preview/layout";
import PreviewLayout from "./pages/preview/layout";
import VolunteeringPreview from "./pages/preview/volunteering/volunteering";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "signup",
          element: <SignupPage />,
        },
      ],
    },
    {
      path: "preview",
      element: <PreviewPage />,
    },
    {
      path: "dashboard",
      element: <DashBoardLayout />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "profile/add-profile",
          element: <AddProfile />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "skills/add-skill",
          element: <AddSkill />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "projects/add-project",
          element: <AddProject />,
        },
        {
          path: "experience",
          element: <Experiences />,
        },
        {
          path: "experiences/add-experience",
          element: <AddExperience />,
        },
        {
          path: "achievement",
          element: <AchievementDashboard />,
        },
        {
          path: "achievement/add-achievements",
          element: <AddAchievement />,
        },
        {
          path: "education",
          element: <Education />,
        },
        {
          path: "education/add-education",
          element: <AddEducation />,
        },
        {
          path: "volunteering",
          element: <Volunteering />,
        },
        {
          path: "volunteering/add-volunteering",
          element: <AddVoluteering />,
        },
      ],
    },
    {
      path: "/preview/:username", // Updated path with dynamic segment
      element: <PreviewLayout />,
      loader: async ({ params }) => {
        const username = params.username;
        try {
          const response = await apiGetUserDetails(username);
          const userProfileData = response?.data.user;
          return userProfileData;
        } catch (error) {
          toast.error("An error occurred");
          return null;
        }
      },
      children: [
        {
          index: true,
          element: <Hero />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
        {
          path: "experience",
          element: <ExperiencePreview />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
        {
          path: "projects",
          element: <ProjectPreview />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
