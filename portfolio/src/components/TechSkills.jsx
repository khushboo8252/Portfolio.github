import React from 'react';

const TechSkills = () => {
    const techs = [
        {
            id: 1,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBd2rMcfI56SZEenhvautbZl_xUsPSHaktNw&s",
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXhjVqtRd6tiqcsSQ7rD6VF7NxI-3VvoR0w&s",
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: "https://cdn.sanity.io/images/s7xbv9bz/production/03a9f6fc484719e6ce9349f4a57aae9cb75bdcc9-600x600.svg?w=600&h=600&auto=format&fm=webp",
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwh-2btrw1P54k-yIKqG_lsB_SVc48vGzWZQ&s",
            title: 'Redux',
            style: 'shadow-violet-400'
        },
        {
            id: 6,
            src: "https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg",
            title: 'Next.Js',
            style: 'shadow-white'
        },
        {
            id: 7,
            src: "https://velog.velcdn.com/images/dlghgus5656/post/7f74313e-a7d5-4368-af0a-7d460540e18b/image.png",
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 8,
            src: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png",
            title: 'Node.Js',
            style: 'shadow-green-400'
        },
        {
            id: 9,
            src: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
            title: 'GitHub',
            style: 'shadow-gray-300'
        }
    ];

    return (
        <div name="tech-skill"
            className='w-full sm:h-screen md:h-screen sm:py-[50%] pt-[2%] bg-gradient-to-b  bg-gray-900 to-black  h-full'>
            <div className='  max-w-screen-lg p-2 mx-auto  flex flex-col justify-center w-full h-full text-white'>
                <div className='pb-1  mt-5'> 
                    <p className='text-4xl font-bold border-b-4 border-gray-500 py-2 inline'>Tech-Skill</p>
                    <p className='py-6'>These are the technologies I've worked with</p> 
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TechSkills;
