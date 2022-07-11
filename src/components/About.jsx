import React from 'react';
// import ScrollMagic from 'react-scrollmagic';

const About = () => {
  // function splitScroll(){
  //   const controller = new ScrollMagic.Controller();

  //   new ScrollMagic.Scene({
  //     duration: 500,
  //     triggerElement: '.about-title',
  //   }) 
  //   .addIndicators()
  //   .addTo(controller)
  // }
  // splitScroll();


  return (
    <div  className='section w-full h-[300vh]  bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-400'>
              About Me
            </p>
          </div>
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


      {/* <div className='about flex h-[300vh] '>
        <div className='about-title flex w-1/2 h-[100vh] justify-center items-center text-3xl'>
          <h2>About Me</h2>
        </div>
        <div className='about-pages w-1/2'>
              <div className='bg-blue-300 h-[100vh] flex flex-col justify-around items-center'>
                <h2>Aboutmeee</h2>
                <p className='w-4/5 text-xl leading-[30px]'>I have technology interest in html, css (I use Bootstrap & Tailwind for css framework), JavaScript (I'm very helpful with javascript library which helps my project to be more interactive and since I'm interested in frontend I'm learning ReactJS and hope to be expert on this framework), PHP (ever I used this for my BackEnd project and once I used Laravel & CodeIgniter for the framework) </p>
              </div>
              <div className='bg-yellow-400 h-[100vh] flex flex-col justify-around items-center'>
                <h2>Umur</h2>
                <p className='w-4/5 text-xl leading-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas vitae quae asperiores exercitationem ipsam repellendus quos voluptatibus accusamus, tempora nihil dolorum quibusdam totam corporis non itaque dolor dolore est.</p> 
              </div>
              <div className='bg-red-500 h-[100vh] flex flex-col justify-around items-center'>
                <h2>Kuliah</h2>
                <p className='w-4/5 text-xl leading-[30px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore magnam laboriosam nesciunt quasi natus..</p> 
              </div>
        </div>
      </div> */}

    </div>
  );
};

export default About;
