import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section name='work' className='w-full text-gray-300 bg-[#0a192f] pt-24'>
      <div className='container max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-5 before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My latest work
          </h2>
          <p className='text-base text-paragraph mb-16 lg:mb-24 max-w-[520px]'>
          This is my small project, some are from the Final Exam Project from lectures and even have their own projects that I have tried
          </p>
        </div>
        <Projects />
      </div>

    </section>
  );
};

export default Portfolio;
