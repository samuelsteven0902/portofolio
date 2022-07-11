import React, {useRef, useEffect} from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profile from '../assets/profile.png'
import { Link } from 'react-scroll';
import '../App.scss'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { TimelineLite, Power2 } from 'gsap/gsap-core';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  AOS.init({
    duration: 1000
  });
  let containe = useRef(null)
  let image = useRef(null)
  let imageReveal = CSSRulePlugin.getRule('.img-container:after')

  const tl = new TimelineLite()

  useEffect(() => {
    tl.to(containe, 0, {css: { visibility: "visible"}})
    .to(imageReveal, 3, {width: "0%", ease: Power2.easeInOut})
    .from(image, 1, {scale: 1.6, ease: Power2.easeInOut, delay: -1.6} )
  })

  return (
    <div  className='section containe w-full min-h-screen  bg-[#041C32] relative block overflow-visible top-1/2' >
      {/* Container */}
      <div className='justify-center flex flex-wrap-reverse'> 
      <div className='w-full mx-auto xl:pl-52  flex flex-col justify-center text-center lg:text-left h-1/2 lg:h-full lg:w-2/3 2xl:w-1/2 px-5 lg:pl-32'>
        <p className='text-[#ECB365]'  data-aos="fadeup-1" >Hi, my name is</p>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6]' data-aos="fadeup-2">
          Samuel Steven
        </h1>
        <h2 className='text-3xl sm:text-5xl md:text-5xl lg:text-5xl xxl:text-7xl font-bold text-[#8892b0]' data-aos="fadeup-3">
          I'm a <span> Front-end Developer.</span>
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] mx-auto lg:mx-0' data-aos="fadeup-4">
        Hello! I'm Samuel and currently I'm a student at Sebelas Maret University Associate Degree in software engineer who is interested in web development.
        </p>
        <div className='flex justify-center lg:justify-start'>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-400 hover:border-orange-400' data-aos="fadeup-5">
          <Link to='work' smooth={true} duration={500}>
            View Work
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
      <div ref={el => (containe = el)} className='w-full mx-auto px-8 flex flex-col justify-center h-1/2 lg:h-full 2xl:w-1/2 lg:w-1/3 pt-32 xl:pt-0 items-center img-container'>
          <img ref={el => (image = el)} className='lg:w-[500px] mx-auto w-96' src={profile} alt="HTML icon" />         
      </div>
      </div>
    </div>
  );
};

export default Home;
