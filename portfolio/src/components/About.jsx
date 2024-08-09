import React from 'react'

const About = () => {
  return (
    <div name="about"
     className='w-full sm:h-screen bg-gradient-to-b py-[15%] bg-gray-900 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='sm:mt-0'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
            </p>
            </div>
            
       
        
        <p className='text-xl mt-10'>
         I'm Khushboo Kumari, a B.Com graduate and certified Full Stack Developer
         from Masai School's Prepleaf program. My journey into web development began with an immersive
          course at Masai School, where I mastered the skills to create dynamic websites and tackle 
          complex problems. I’ve since built various projects that highlight my passion for coding 
          and problem-solving. I’m dedicated to continuous learning, always exploring new technologies 
          and online courses to stay ahead. I enjoy connecting with others in the tech community, whether 
          discussing the latest web development trends or sharing insights on coding projects. Let’s connect
           and explore the exciting world of technology together! 
        </p>
        </div>
    </div>
  )
}

export default About;