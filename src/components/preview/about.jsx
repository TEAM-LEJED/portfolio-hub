import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div >
      <h2 className='flex flex-row text-x3l p-9 tracking-wider' >
        <span  className='p-10 '>
          I am a Full Stack Developer. I studied computer science  web Design at the Elizabeth University.
          Years of experience have given me a unique angle to approach client projects.
        </span>

        <span className='p-10' >
          I work mostly with startups and advise them on the best technology that is suitable for their project.

          I helps you bring your vision to life with attention to detail and an unrivaled focus on quality.
          Curious to know more? Check-out
        <Link to={"/projects"}>
          <span className='text-[#FCC73F] italic underline'> my project</span>
        </Link>
        <span> or </span>
        <Link to={"/contacts"}>
          <span className='text-[#FCC73F] italic underline'>hire me</span>
        </Link>
        </span>
      
      </h2> 
      



    </div>
  )
}

export default About