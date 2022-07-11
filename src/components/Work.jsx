import React from 'react';
import porto1 from '../assets/img/porto1.png';

const Work = () => {
  return (
    <div className='section w-full md:min-h-screen text-gray-300 bg-[#041C32]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-400'>
            Another Portfolio
          </p>
          <p className='py-3'>My previous portfolio</p>
        </div>

{/* Container */}
        <div style={{ backgroundImage: `url(${porto1})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-auto '>
          {/* Hover Effects */}
          {/* <div className=''> */}
            <div className='opacity-0 group-hover:opacity-80 trantition duration-500  ease-in-out bg-black w-screen h-full m-auto items-center justify-center flex '>
               <div> <span className='text-4xl font-bold text-white tracking-wider uppercase'>
                  My Portfolio
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://samuelsteven0902.github.io/portofolio2/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#ECB365]'>
                      Go
                    </button>
                  </a>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
