import React from 'react'

const Contact = () => {
  return (
    <div className='section w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/b396a9d5-1f9a-48b6-80d0-51b2d2369627" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-400 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// You can contact me by sending the form below or email me -- Thanks</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-orange-400 hover:border-orange-400 px-4 py-3 my-8 mx-auto flex items-center transition dura'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact