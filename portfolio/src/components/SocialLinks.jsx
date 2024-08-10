import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const handleResumeClick = (e) => {
    e.preventDefault();
    const resumeUrl = "./image/Khushboo_Kumari.Resume.pdf";

    // Trigger a download
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = "Khushboo_Kumari.Resume.pdf"; // Ensure the download attribute is set
    a.target = '_blank'; // Open the URL in a new tab
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/khushboo-kumari-23814225b/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/khushboo8252',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:foo@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '#', 
      style: 'rounded-br-md',
      onClick:handleResumeClick
      
    }
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, child, onClick, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              onClick={onClick}
              target='_blank'
              rel='noopener noreferrer' 
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
