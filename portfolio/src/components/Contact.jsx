import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
           <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/khushboo-kumari-23814225b/',
      
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/khushboo8252',
    },
    {
      id: 3,
      child: (
        <>
           <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:foo@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
           <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: './image/resume.pdf', 
      
      download: true
    }
  ];
  return (
    <div
      name="contact"
      className='w-full sm:h-full  bg-gradient-to-b from-gray-900 to-black pt-24 p-4 text-white'>

<div className='md:hidden  flex justify-center items-center bottom-[35%] '>
      <ul className='flex justify-center items-center'>
        {links.map(({ id, child, download, href }) => (
          <li
            key={id}
            className={`flex justify-center items-center  h-1/1 mt-[-10%] py-3 px-2 hover:rounded-md hover:mt-[-15%] duration-500 cursor-pointer bg-gray-500 `}
          >
            <a
              href={href}
              className='flex font-bold text-white'
              download={download}
              target='_blank'
              rel='noopener noreferrer' 
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
      
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline py-2 border-b-4 border-gray-500'>
            Contact
          </p>
          <p className='text-gray500 mt-5'>Mobile:
            <span className='text-sky-600'>+91 8252932969</span>
          </p>
          <p className='text-gray500 mt-1'>Email:
          <span className='text-sky-600 mr-5 md:mr-0 sm:mr-5'>khushbooranjan8252@gmail.com</span>

          </p>
          <p className='py-6'>
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className='flex justify-center items-center'>
          <form
            action="https://getform.io/f/apjmlzpa"
            method='POST'
            className='flex flex-col w-full md:w-1/2'>
            
            <input
              type="text"
              name="name"
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            
            <input
              type="text"
              name="email"
              placeholder='Enter your email'
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />

            <textarea
              name="message"
              rows="10"
              placeholder='Enter your message'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
            </textarea>

            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500
              px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
