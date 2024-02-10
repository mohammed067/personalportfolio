import React from 'react'


const Home = () => {
  return (
    <div className='bg-[black] h-screen w-full 
     ' id='Home'>  

     <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p id='myname' className='text-red-600 mt-['> Hi, my name is </p>
       <h1 className='text-white text-4xl'>Abdul Rahaman</h1>
       <h2 className='text-[gray]'>iam a front end developer</h2>
       <p className='text-[gray] mt-4'> iam a front end developer specializing in building and ocassionally designing exceptional digital experience,currently, iam focused on building responsive web application.</p>
       <div>
        <a href='Abdul Rahaman Resume.pdf ' download='Abdul Rahaman Resume.pdf'>
        <button id='resume' className='flex items-center group hover:border-2 hover:bg-transparent bg-[red] p-2 mt-5 ml-[20%] text-white'>Download My Resume
          
         
         </button>
        </a>
           
           
       </div>
      
     </div>
        
       

     </div>
  )
}

export default Home