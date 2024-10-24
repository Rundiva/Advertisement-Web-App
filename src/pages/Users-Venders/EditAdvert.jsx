import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditAdvert = () => {
    const {adId} = useParams();

    const navigate = useNavigate();

    const fetchAd = async () = {

    }
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-center text-2xl font-bold">Edit an Ad</h1>
      <form onSubmit={saveAdvert} className="bg-white flex flex-col gap-6 p-6 rounded-lg shadow-lg w-[620px]">
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Title </label>
          <input
            name="title"
            type="text"
            placeholder="Enter your the Title"
            required
            className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 " />

        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Description</label>
          <textarea
            name="description"
            type="text"
            placeholder="Enter the Description"
            rows="3"
            required
            className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 " ></textarea>

        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Price</label>
          <input
            name="price"
            type="Number"
            required
            className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 " />

        </div>
  
         <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Category </label>
          <select name="category" className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 "> 
         <option value="Ford">Ford</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Honda">Honda</option>
              <option value="Jeep">Jeep</option>
              <option value="Jaguar">Jaguar</option>
              <option value="Ferrari">Ferrari</option>
              <option value="Bentley">Bentley</option>
              <option value="BMW">BMW</option>
              <option value="Toyota">Toyota</option>
              <option value="Nissan"> Nissan</option> 

         


         </select>
        </div>  

        {/* <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Category </label>
          <select name="category" className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 ">
            {/* {categories.map((category) => (
                        <option key={categories} value={categories}>
                          {category.name}
                        </option>
                      ))} */}
          {/* </select>
        </div> */} 

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Image </label>

          <div className=''>
            <input
              type="file"
              name="image"
              required
              className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 " />

          </div>

        </div>
        <div className='text-center'>
          <button

            type="submit"
            className="mt-4 w-[280px]  py-3 bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold  shadow-md transition duration-300 ease-in-out "
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditAdvert