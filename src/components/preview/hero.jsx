import React from 'react'
import BgMotion from './bg-motion'
import { TypeAnimation } from 'react-type-animation'
import { googleIcon, LynImg } from '../../assets'
import { CircleArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="w-full h-screen relative bg-[#12071F]" >
      <BgMotion />
      <div  className='flex items-center justify-center absolute top-0 left-0 w-full h-full   '>
        <div className='text-[#FCC73F] pr-12  font-bold w-1/2' >
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              'I am  Elizabeth James Hammond',

              1000,
              'I am a Full Stack Developer',
              1000,
            ]}
            speed={30}
            style={{ fontSize: '5rem' }}
            repeat={Infinity}
             />
            
        </div>
        <div className="absolute bottom-8 w-full flex justify-center">
        <Link to="/about">
        <CircleArrowDown className="animate-bounce text-white size-16"   />
        </Link>
      </div>
        <div className='shadow-white shadow-2xl bg-[#12071F] rounded-full  bg-opacity-50'>
        <img src={LynImg} alt=""  />
        </div>
        
      </div>
      
      </div>
  )
}

export default Hero