import React from 'react'
import html from '../assets/html.png'
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"

import react from "../assets/react.png"
import  python from "../assets/python.png"
import nodejs from "../assets/nodejs.png"
import mongo from "../assets/mongo.png"
import sql from "../assets/sql.png"
import bootstrap from "../assets/bootstrap.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300' id='skills'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are my certified skills</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={css} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={bootstrap} alt="HTML icon" />
                  <p className='my-4'>Bootstrap</p>
              </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={javascript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
                      
              </div>
  
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={react} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              {/*<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={python} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
           
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>

              */}
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={nodejs} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110         duration-500'>
                  <img className='w-20 mx-auto' src={sql} alt="HTML icon" />
                  <p className='my-4'>SQL</p>
             </div>
           
          </div>
      </div>
    </div>
  )
}

export default Skills