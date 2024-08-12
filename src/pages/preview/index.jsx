import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "./hero/hero";
import About from "./about/about";
import Experience from "./experience/experience";
import Achievement from "./Achievements/achievement";
import Education from "./Education/education";
import Projects from "./projects/projects";
import Resume from "./resume/resume";
import Skills from "./skills/skills";
import Volunteering from "./volunteering/volunteering"; // correct spelling
import Loader from "../../components/preview/loader";

const PreviewPage = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const data = useLoaderData();

  useEffect(() => {
    if (data) {
      setIsLoading(false); // Set loading to false once data is loaded
    }
  }, [data]);

  if (isLoading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <div>
      <Hero  firstName={data.firstName} lastName={data.lastName} about={data.userProfile.bio}/>
      <About /* about={data.userProfile.bio} */ />
      <Experience /* experiences={data.experience} */ />
      {/* <Achievement /* achievements={data.achievements} */ /> */}
      <Education /* education={data.education} */ />
      <Projects /* projects={data.projects} */ />
      <Resume /* resume={data.userProfile.resume} */ />
      {/* <Skills /* skills={data.skills} */ /> */}
      {/* <Volunteering /* volunteering={data.volunteering} */ /> */}
    </div>
  );
};

export default PreviewPage;
