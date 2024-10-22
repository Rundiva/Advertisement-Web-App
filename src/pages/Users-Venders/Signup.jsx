import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { apiSignup } from '../services/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault() //prevent the page from reloading
    try {
      //prepare data to be sent to backend
      setLoading(true)
      const formData = new FormData(event.target) //takes data from the form
      const name = formData.get("name")
      const email = formData.get("email")
      const password = formData.get("password")
      const confirmPassword = formData.get("confirmPassword")
      const userType = formData.get("role")

      console.log(name, email, password)

      //Check if passwords match
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!")
        return
      }
      // if (name && email && password && userType) {

      const payload = { name: name, email: email, password: password, role: "admin" }
      //shorthand const payload ={name,email,password}
      const response = await apiSignup(payload)
      console.log(response.data)
      toast.success("Sign Up Successful!")
      navigate("/login")
      // } 
      // else {
      //   toast.error("Please fill in all fields")
      // }


    } catch (error) {
      toast.error("Signup failed. Please try again.")

      console.log(error)

    } finally {
      setLoading(false)
    }

  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>
      <form className="bg-white flex flex-col gap-6 p-6 rounded-lg shadow-lg w-[620px]" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Full Name </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your Full Name"
            required
            className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 " />

        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Email </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your Email"
            required
            className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 " />

        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2"> Password </label>
          <input
            name="password"
            type="password"
            required
            className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 " />

        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Confirm Password </label>
          <input
            name="confirmPassword"
            type="password"
            required
            className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 " />

        </div>


        <div className='flex flex-row items-center justify-center gap-6'>


          <button
            type="submit"
            className="mt-4 w-[190px]  py-3 bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out "
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <p className='flex justify-center mt-6 text-blue-500'> <Link to="/login">Already have an Account? <span className=' text-black'>Login</span> </Link> </p>
        </div>


      </form>
      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  )
}

export default Signup