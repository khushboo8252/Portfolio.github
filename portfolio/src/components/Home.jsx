import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className=' w-full pt-12 sm:h-screen bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row sm:ml-12 md:mx-auto'>
        <div className='flex flex-col justify-center h-full pt-10'>
          <h2 className='text-4xl sm:text-6xl font-bold text-white'>
            I'm a Full Stack Web Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Creative thinker to achieve modern business requirements using technical solutions.
            Ability to develop production-ready code using HTML, CSS, JavaScript, Node.js, React.js, Next.js,
            Redux, Tailwind, MongoDB, Mongo Atlas, and Express.js with expressive user experience.
          </p>

          <div>
            <a 
              href="https://drive.google.com/file/d/1tcFwyMbqf_tUemjVtiKG5gnB4c8qozki/view?usp=sharing" 
              download="Khushboo_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className='font-bold text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
              from-cyan-500 to-blue-500 cursor-pointer'
            >
              Resume
              <span className='group-hover:rotate-90 duration-300 ml-2'>
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img src="./image/Profile .png" alt="my profile" className='rounded-2xl mx-auto w-2/3 my-12 sm:w-2/3 md:w-full md:mx-auto'/>
        </div>
      </div>
    </div>
  );
}

export default Home;

