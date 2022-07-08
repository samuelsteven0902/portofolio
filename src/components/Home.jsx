import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profile from '../assets/profile.png'
import { Link } from 'react-scroll';

const Home = () => {
  
  return (
    <div name='home' className='w-full h-screen bg-[#041C32] flex justify-center'>
      {/* Container */}
      <div className='w-full mx-auto md:pl-32 flex flex-col justify-center h-full md:w-2/3'>
        <p className='text-[#ECB365]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Samuel Steven
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front-end Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Hello! I'm Samuel and currently I'm a student at Sebelas Maret University Associate Degree in software engineer who is interested in web development.
        </p>
        <div>
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
      <div className='w-full mx-auto px-8 md:pr-24 flex flex-col justify-center h-full md:w-1/3'>
          <img className='w-[500px] mx-auto ' src={profile} alt="HTML icon" />         
      </div>
    </div>
  );
};

export default Home;
