import { MdOutlineFileUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";



const PostingForm = () => {
    const navigate = useNavigate();

    const saveAdvert = async (event) => {
        event.preventDefault();
        //Colllect form input
        const formData = new FormData(event.target);

        try {
        //Post data to todo api
        await axios.post(`${import.meta.env.VITE_BASE_URL}/adverts`,formData);
        console.log('Advert posted:', response.data);

         // Show success notification
         toast.success("Advert posted successfully");

        //Goto the homepage
        navigate('/dashboard');
    } catch (error) {
       // Log and show error if API call fails
       console.error('Error posting advert:',error);
       toast.error("Failed to post advert.")
    }
  }
  
  return (
    
        <div className='flex flex-col justify-center items-center'>
        <h1 className="text-center text-2xl font-bold">Post an Ad</h1>
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
            rows= "3"
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
            <select name="category"   className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 ">
    
         
            
        
</select>
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Image </label>
        
          <div className=''>
      <input  
            type="file"
            name="image"
            required
            className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 " />

          
            
             {/* <MdOutlineFileUpload className="text-2xl ml-2" /> */}
          
         
          </div>

        </div>
        <div className='text-center'>
        <button 
        
            type="submit"
            className="mt-4 w-[280px]  py-3 bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold  shadow-md transition duration-300 ease-in-out "
          >
            Post Adv
          </button>
          </div>
        </form>
    </div>
  );
}

export default PostingForm