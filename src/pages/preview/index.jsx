import React from 'react'
import About from '../../components/preview/about'
import Achievements from '../../components/preview/achievements'
import Contacts from '../../components/preview/contacts'
import Education from '../../components/preview/education'
import Experience from '../../components/preview/experience'
import Projects from '../../components/preview/projects'
import Resume from '../../components/preview/resume'
import Skills from '../../components/preview/skills'
import Voluteering from '../../components/preview/voluteering'
import Hero from '../../components/preview/hero'
import { useLoaderData } from 'react-router-dom'

const PreviewPage = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
        <Hero firstName={data.firstName} lastName={data.lastName} />
        <About 
        // about={data.userProfile.bio}
         />
        <Experience experiences={data.experience}/>
        <Achievements/>
        <Education/>
        <Projects/>
        <Resume/>
        <Skills/>
        <Voluteering/>
        <Contacts/>

    </div>
  )
}

export default PreviewPage