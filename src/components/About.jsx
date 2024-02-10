import React from 'react';


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300' id='about'>
      <div className='flex flex-col justify-center items-center w-full h-full'>

        {/*..................................about-top-section............................ */}
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                  About
                </p>
              </div>
              <div>
               
              </div>
          </div>
          {/*...................................................*/}


           {/*..................................about-bottom-section............................ */}

          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Abdul Rahaman, nice to meet you. Please take a look around.</p>
            </div>
            <div>
                <p>

                      Results-driven frontend developer with a passion for blending creativity and technical skills to build visually stunning and user-friendly websites. With a solid understanding of responsive design and cross-browser compatibility, I enjoy optimizing performance and delivering exceptional user experiences. As a dedicated learner, I actively seek opportunities to expand my skill set and embrace emerging technologies to create cutting-edge web solutions.?
                </p>  
              </div>
          </div>

           {/*...................................................*/}
      </div>
    </div>
  );
};

export default About;