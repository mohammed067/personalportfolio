import React, {useState} from 'react'
import {FaBars, FaGithub, FaLinkedin, FaTimes} from "react-icons/fa"
import {HiOutlineMail} from 'react-icons/hi'
import abdul from '../assets/abdul.jpeg'


const Navbar = () => {


  function firstColor(){
    document.getElementById("navbar").style.backgroundColor="#47b19c"
    document.getElementById('resume').style.backgroundColor="#47b19c"
    document.getElementById('myname').style.color="#47b19c"
   
  }
  function secondColor(){
    document.getElementById("navbar").style.backgroundColor="#943980"
    document.getElementById('resume').style.backgroundColor="#943980"
    document.getElementById('myname').style.color="#943980"
   
  }
  function thirdColor(){
    document.getElementById("navbar").style.backgroundColor="#68b6bd"
    document.getElementById('resume').style.backgroundColor="#68b6bd"
    document.getElementById('myname').style.color="#68b6bd"
    
  }
  function fourthColor(){
    document.getElementById("navbar").style.backgroundColor="red"
    document.getElementById('resume').style.backgroundColor="red"
    document.getElementById('myname').style.color="red"
    document.getElementById('resume').style.border="none"
  }
  function fifthColor(){
    document.getElementById("navbar").style.backgroundColor="black"
    document.getElementById('resume').style.backgroundColor="red"
    document.getElementById('myname').style.color="red"

  }


  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
 
 
  return (
    <div id='navbar' className=' flex fixed justify-between px-20 text-white text-2xl  h-[80px] w-full bg-[black] '>
      <div className='rounded'>
         <img className='rounded-[50%] w-[60px] h-[70px] mt-2' src={abdul}/>
      </div>


          {/* menu */}
        <ul className='hidden md:flex'>
         <a href='#Home'> <li  className="text-red-600">Home</li></a>
         <a href='#about'> <li  className="hover:text-red-600">Aboutus</li></a>
         <a href='#skills'> <li className="hover:text-red-600">Skills</li></a>
          <a href='#Projects'><li className="hover:text-red-600">Projects</li></a>
         <a href='#Contact'> <li className="hover:text-red-600"> Contact</li></a>
        </ul>
     
         {/*barr*/}
      <div onClick={handleClick } className='md:hidden z-20 mt-5 w-8'>
        {!nav ? <FaBars/>:<FaTimes/>}
      </div>

       {/* Mobile menu */}
       <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
        
            Home
        
        </li>
        <li className='py-6 text-4xl'>
          {' '}
      
            About
        
        </li>
        <li className='py-6 text-4xl'>
          {' '}
         
            Skills
        
        </li>
        <li className='py-6 text-4xl'>
          {' '}
        
            Work
        
        </li>
        <li className='py-6 text-4xl'>
          {' '}
     
            Contact
       
        </li>
      </ul>


      <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
         <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-113px] hover:ml-[-10px] duration-300 bg-blue-600 '>
          <a className='flex justify-between items-center
           w-full left-0 ' href="https://www.linkedin.com/in/abdul-rahaman-848155184/">
            Linkedin <FaLinkedin size={30}/>
          </a>
         </li>

        {/*} <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-113px] hover:ml-[-10px] duration-300 bg-[#333333]  '>
          <a className='flex justify-between items-center
           w-full left-0 ' href='/'>
            Github <FaGithub size={30}/>
          </a>
         </li>

         <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-113px] hover:ml-[-10px] duration-300  bg-[#a7dea7]'>
          <a className='flex justify-between items-center
           w-full left-0  ' href='/'>
            Linkedin <HiOutlineMail size={30}/>
          </a>
      </li>  */}

      
        </ul>
      </div>

      <div className=' hidden lg:flex fixed flex-col top-[35%] right-0'>
        <ul>
       <li onClick={firstColor} className='rounded-[50%] w-[50px] mt-3  h-[50px] bg-[#47b19c]'> </li>
       
       <button onClick={secondColor} className='rounded-[50%] mt-3 w-[50px] h-[50px] bg-[#943980]'></button>
       
       <li onClick={thirdColor} className='rounded-[50%] w-[50px] mt-3  h-[50px] bg-[#68b6bd]'></li>
       
       <li  onClick={fourthColor} className='rounded-[50%] w-[50px] mt-3  h-[50px] bg-[red]'></li>
       <li  onClick={fifthColor} className='rounded-[50%] border w-[50px] mt-3  h-[50px] bg-[black]'></li>

      
        </ul>
      </div>
    </div>
  )
}

export default Navbar