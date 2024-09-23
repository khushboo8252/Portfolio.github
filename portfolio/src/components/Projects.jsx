import React from 'react';

const Projects = () => {
  const portfolios = [
    { id: 1, src: "./image/ChatApp.png" ,
        description:"Its developing chatApp, user can chat and exchange thought here.",
        techSkill:"HTML|CSS|JS|React|MongoDB",
        demo:"https://chatapp-mernstack.onrender.com/", 
        code:"https://github.com/khushboo8252/ChatApp_MERNStack"},

    { id: 2, src: "./image/ChatAI.png" ,
      description:" The app features a clean, modern interface for smooth, real-time conversations with an AI",
      techSkill:"HTML|CSS|JS|React",
      demo:"https://66eefaad3e2f928d1a948dcd--dapper-nougat-048475.netlify.app/",
       code:"https://github.com/khushboo8252/ChatAI"},

    { id: 3, src: "./image/Ecommerce.png" ,
      description:"The dashboard allows administrators to efficiently handle inventory by adding, editing, or removing products, as well as tracking customer orders and updating their statuses.",
      techSkill:"HTML|CSS|JS|React|MongoDB",
      demo:"https://incredible-meerkat-a1368e.netlify.app/",
       code:"https://github.com/khushboo8252/Ecommerce"},
  ];

  return (
    <div name="projects" className="bg-gradient-to-b  bg-gray-900 pt-[20%] w-full sm:h-screen text-white md:h-screen">
      <div className=" pb-20  max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Projects</p>
          <p className="py-6  ">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code,description,techSkill }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt={`Project ${id}`} className="rounded-md duration-200 hover:scale-105" />
              <div className='p-4'>
                   <p className='text-sm font-medium'>{description}</p>
                   <div className='text-gray-400'>
                      <p className='font-semibold'>Tech Skills:</p>
                      <div className='flex items-center'>
                        <span className='ml-1 text-sm'>{techSkill}</span>
                      </div>
                   </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                onClick={() => window.open(demo)}>Demo</button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" 
                onClick={() => window.open(code)}>Code</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
