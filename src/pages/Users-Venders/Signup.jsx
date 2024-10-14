import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
    <h1 className="text-center text-2xl font-bold">Sign Up</h1>
    <form className="bg-white flex flex-col gap-6 p-6 rounded-lg shadow-lg w-[620px]">
        <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Full Name </label>
                <input
                name="title"
                type="text"
                placeholder="Enter your Full Name" 
                required
                className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 "/>

                </div>
                <div className="flex flex-col">
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
             <div className="flex flex-col">
           <label className="text-lg font-semibold mb-2">Confirm Password </label>
            <input
             name="title"
             type="password" 
             required
             className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 "/>

             </div>
             <div>
                   <label className="text-lg font-semibold mb-2">User Type</label>

                   <select name="Category" placeholder = "Select Category" className="p-2 border rounded-lg border-blue-500 w-full focus:outline-none focus:ring-2" ></select>
                   </div>
                   <div className='flex flex-row items-center justify-center'>
                   <button
                  type="submit"
                  className="mt-4 w-[190px]  py-3 bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out "
                >
                  Sign UP 
                </button>
                   </div>
                 

    </form>

    </div>
  )
}

export default Signup