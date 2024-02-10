import React from 'react';

import youtube from "../assets/youtube.png"
import weather from "../assets/weather.jpg"
import todo from "../assets/todo.png"
import linkedin from "../assets/linkedin.png"

const Projects = () => {

    // projects file

    //setProject(data);
  
  return (
    <div name='Projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]' id='Projects'> 
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'>// Check out some of my recent Projects</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
         
  <div
   
    style={{ backgroundImage: `url(${linkedin})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-3xl font bolder text-black tracking-wider ">
          Linkedin-Clone
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
      
        {/* eslint-disable-next-line */}
        <a href='https://linkedinbyabudul.netlify.app/' >
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg border-solid border-2 border-gray-600 ."
          >
            Live
          </button>
        </a>
      </div>
    </div>
  </div>

  <div
   
   style={{ backgroundImage: `url(${youtube})` }}
   className="shadow-lg shadow-[#040c16] group container rounded-md 
             flex justify-center text-center items-center mx-auto content-div "
 >
   {/* Hover effect for images */}
   <div className="opacity-0 group-hover:opacity-100 ">
     <span className="text-2xl font bold text-white tracking-wider ">
         Youtube clone
     </span>
     <div className="pt-8 text-center ">
       {/* eslint-disable-next-line */}
     
       {/* eslint-disable-next-line */}
       <a href='/' >
         <button
           className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg border-solid border-2 border-gray-600 ."
         >
           will be upload soon
         </button>
       </a>
     </div>
   </div>
 </div>

  <div
   
    style={{ backgroundImage: `url(${weather})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-black font-bold tracking-wider ">
          Weather App
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        {/*<a href='/' target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
  </button> 
  </a>  */}
        {/* eslint-disable-next-line */}
        <a href='https://weatherappbyabdulrahaman.netlify.app/' target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg border-solid border-2 border-gray-600 ."
          >
            Live
          </button>
        </a>
      </div>
    </div>
  </div>

{/**-------------------------------------------------------------------------------------------- */}

  <div
   
   style={{ backgroundImage: `url(${todo})` }}
   className="shadow-lg shadow-[#040c16] group container rounded-md 
             flex justify-center text-center items-center mx-auto content-div "
 >
   {/* Hover effect for images */}
   <div className="opacity-0 group-hover:opacity-100 ">
     <span className="text-2xl font bold text-black font-b tracking-wider  ">
        Todo App
     </span>
     <div className="pt-8 text-center ">
       {/* eslint-disable-next-line */}
      {/* <a href='/' target="_blank">
         <button
           className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
         >
           Code
         </button>
  </a>
       {/* eslint-disable-next-line */}
      
       <a href='https://abdultodoapp1.ccbp.tech/' target="_blank">
         <button
           className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg border-solid border-2 border-gray-600 ."
         >
           Live
         </button>
       </a>  
     </div>
   </div>
 </div>

{/**-------------------------------------------------------------------------------------------- */}

 




</div>
      </div>
    </div>
  );
};

export default Projects;