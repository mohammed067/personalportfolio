import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4' id='Contact'>

        <form method='POST' action='https://getform.io/f/6eb70d78-f87b-4306-9b93-d5f849b5f836' className='flex flex-col max-w-[600px] w-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'> Contact</p>
            </div>

            <input type='text' placeholder='Name' name='name'/>
            <input type='email' placeholder='Email' name='email' className='my-3 p-2 bg-[#ccd6f6'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>SEND</button>

        </form>

    </div>
  )
}

export default Contact