import React from 'react'

const Forgotten = () => {
  return (
    <div className=' flex flex-col justify-center items-center mt-[170px] '>
        <h1 className='font-bold text-2xl mb-5'>Find your account</h1>
       <hr />
       <div className='shadow-lg p-10'>
       <h3 className='mb-5 text-lg' >Please enter your email to search for your account.</h3>
        <form className='w-96 shadow-lg mb-5'>
        <input type="text" placeholder='Email' className='p-3 w-96 border border-blue-500 rounded-lg focus:outline-none focus:ring-2' />
        </form>
        <div className='flex ml-40 gap-4'>
        <button className='bg-[#E4E6EB] hover:bg-blue-700 px-6 py-3 rounded-lg'>Cancel</button>

        <button className=' bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded-lg'>Search</button>
        </div>
        
       </div>
       
    </div>
  )
}

export default Forgotten