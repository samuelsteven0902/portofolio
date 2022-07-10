import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profile from '../assets/profile.png'
import { Link } from 'react-scroll';

const Home = () => {
  
  return (
    <div  className='section w-full min-h-screen  bg-[#041C32]' >
      {/* Container */}
      <div className='justify-center flex flex-wrap-reverse'> 
      <div className='w-full mx-auto xl:pl-52  flex flex-col justify-center text-center lg:text-left h-1/2 lg:h-full lg:w-2/3 2xl:w-1/2 px-5 lg:pl-32'>
        <p className='text-[#ECB365]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6]'>
          Samuel Steven
        </h1>
        <h2 className='text-3xl sm:text-5xl md:text-5xl lg:text-5xl xxl:text-7xl font-bold text-[#8892b0]'>
          I'm a <span> Front-end Developer.</span>
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] mx-auto lg:mx-0'>
        Hello! I'm Samuel and currently I'm a student at Sebelas Maret University Associate Degree in software engineer who is interested in web development.
        </p>
        <div className='flex justify-center lg:justify-start'>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <Link to='work' smooth={true} duration={500}>
            View Work
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
      <div className='w-full mx-auto px-8 flex flex-col justify-center h-1/2 lg:h-full 2xl:w-1/2 lg:w-1/3 pt-32 xl:pt-0 items-center'>
          <img className='lg:w-[500px] mx-auto w-96' src={profile} alt="HTML icon" />         
      </div>
      </div>
    </div>
  );
};

export default Home;
