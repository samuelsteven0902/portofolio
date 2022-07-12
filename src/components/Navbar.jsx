import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import resume from '../assets/CV_Samuel Steven Prisma Hasiyono.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);



  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300  z-50 '>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} className="rounded-full"/>
      </div>

      {/* menu */}
      <ul className='hidden md:flex '>
      <a href="#home" > <li className='nav-link' data-aos='fadedown-1'>Home</li> </a>
        <a href="#about" ><li className='nav-link' data-aos='fadedown-2'>
        About
        </li></a>
        <a href="#skills" ><li className='nav-link' data-aos='fadedown-3'>
          Skills
        </li></a>
        <a href="#work" > <li className='nav-link' data-aos='fadedown-4'>
       Work
        </li></a>
        <a href="#portfolio" ><li className='nav-link' data-aos='fadedown-5'>
        Portfolio
        </li></a>
        <a href="#contact" ><li className='nav-link' data-aos='fadedown-6'>
          Contact
        </li></a>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <a href="#home" > <li className='nav-link py-6 text-3xl'>Home</li> </a>
        <a href="#about" ><li className='nav-link py-6 text-3xl'>
        About
        </li></a>
        <a href="#skills" ><li className='nav-link py-6 text-3xl'>
          Skills
        </li></a>
        <a href="#work" > <li className='nav-link py-6 text-3xl'>
       Work
        </li></a>
        <a href="#portfolio" ><li className='nav-link py-6 text-3xl'>
        Portfolio
        </li></a>
        <a href="#contact" ><li className='nav-link py-6 text-3xl'>
          Contact
        </li></a>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/samuelsph/' target='_blank'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/samuelsteven0902 ' target='_blank'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/' target='_blank'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
