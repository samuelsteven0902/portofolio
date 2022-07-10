import React from 'react';

const About = () => {
  return (
    <div  className='section w-full min-h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-400'>
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Samuel, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I have technology interest in html, css (I use Bootstrap & Tailwind for css framework), JavaScript (I'm very helpful with javascript library which helps my project to be more interactive and since I'm interested in frontend I'm learning ReactJS and hope to be expert on this framework), PHP (ever I used this for my BackEnd project and once I used Laravel & CodeIgniter for the framework) </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
