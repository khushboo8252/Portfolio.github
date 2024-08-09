import React from 'react';

const Projects = () => {
  const portfolios = [
    { id: 1, src: "./image/Project6.png" ,
        description:"TATA 1mg is an online healthcare platform that provides users with access to a wide range of healthcar products, services and information.",
        techSkill:"HTML|CSS|JS|React|MongoDB",
        demo:"https://65c6fe92cf29b62c62ea1151--silver-lamington-c305ff.netlify.app/", 
        code:"https://github.com/khushboo8252/TATA-1mg"},

    { id: 2, src: "./image/Project2.png" ,
      description:"Rev up your journey with the Revv Rental Car website, your one-stop destination for renting cars hassle-free.",
      techSkill:"HTML|CSS|JS|React|Node.js",
      demo:"https://656b1d57db89ad397b415f6f--storied-kataifi-a7568c.netlify.app/",
       code:"https://github.com/khushboo8252/Project1"},

    { id: 3, src: "./image/Project3.png" ,
      description:"Experience the elegance of time with our modern and functional clock application.",
      techSkill:"HTML|CSS|JS|Node.js|Git",
      demo:"https://656b20354cdb7d3b25eec3ed--sparkly-chaja-70e6db.netlify.app/",
       code:"https://github.com/khushboo8252/Live-Clock"},
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
