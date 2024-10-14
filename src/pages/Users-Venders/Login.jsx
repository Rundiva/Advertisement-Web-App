import React from 'react'

const Login = () => {
  return (
  
    <div className='flex flex-col justify-center items-center mt-[170px]  '>
            <h1 className=" text-2xl font-bold">Login</h1>
            <form className='w-96 shadow-lg'>
                <div className='flex flex-col'>
            <label className="text-lg font-semibold mb-2">Email </label>
            <input
             name="title"
             type="email"
             placeholder="Enter your Email" 
             required
             className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 "/>

             </div>
             <div className="flex flex-col">
           <label className="text-lg font-semibold mb-2"> Password </label>
            <input
             name="title"
             type="password" 
             required
             className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 "/>

             </div>

             <div className='flex flex-row items-center justify-center'>
                   <button
                  type="submit"
                  className="mt-4 w-[150px]  py-3 bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out "
                >
                  Sign UP 
                </button>
                   </div>
            </form>


    </div>
  )
}

export default Login