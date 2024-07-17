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

const PreviewPage = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Experience/>
        <Achievements/>
        <Contacts/>
        <Education/>
        <Projects/>
        <Resume/>
        <Skills/>
        <Voluteering/>

    </div>
  )
}

export default PreviewPage