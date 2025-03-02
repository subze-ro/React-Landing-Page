import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className='text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide'>
        E&M Tech Hub 
        <br/>
        <span className='bg-gradient-to-r from-blue-600 to-blue-600 text-transparent bg-clip-text '>
          {"  "}
          Empowering Sub-Saharan Africa with Innovative Software Solutions
        </span>
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        E&M Tech Hub is the leading software development company in Sub-Saharan Africa, delivering cutting-edge digital solutions. From scalable apps to AI-driven platforms, we help businesses innovate and stay ahead in the digital era</p>
      
      <div className='flex justify-center my-10'>
        <a href="#" className='bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md'>
          Start for free
        </a>
        <a href="#" className='py-3 px-4 mx-3 rounded-md border'>
          Company White Paper
        </a>
      </div>
      <div className='flex mt-10 justify-center'>
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4' >
          <source src={video1} type='video/mp4'/>
          Your browser does not support this video format
        </video>
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4' >
          <source src={video2} type='video/mp4'/>
          Your browser does not support this video format
        </video>
      </div>
   </div>
  )
}

export default Hero