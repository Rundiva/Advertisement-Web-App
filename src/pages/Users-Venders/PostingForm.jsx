import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css"; // Ensure you import the CSS

const PostingForm = () => {
  const [categories, setCategories] = useState([]); // State for storing categories
  const [loading, setLoading] = useState(false); // Optional: Handle loading state
  const navigate = useNavigate();

  // Fetch categories from the API
  const getCategories = async () => {
    try {
      const response = await axios.get(`https://advertisement-api.onrender.com/categories`);
      setCategories(response.data); // Set categories from API response
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error("Failed to load categories");
    }
  };

  // Fetch categories when the component mounts
  useEffect(() => {
    getCategories();
  }, []);

  // Handle posting the advert
  const saveAdvert = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Get form data
    setLoading(true); // Optional: Start loading

    try {
      const response = await axios.post(`https://advertisement-api.onrender.com/adverts`, formData);
      console.log('Advert posted:', response.data);
      
      // Show success notification after posting advert
      toast.success("Advert posted successfully");
      
      navigate('/dashboard'); // Navigate to dashboard after success
    } catch (error) {
      console.error('Error posting advert:', error);
      toast.error("Failed to post advert."); // Show error notification if there's a problem
    } finally {
      setLoading(false); // Stop loading after request completes
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <ToastContainer /> {/* Make sure this is included */}
      <h1 className="text-center text-2xl font-bold">Post an Ad</h1>
      <form onSubmit={saveAdvert} className="bg-white flex flex-col gap-6 p-6 rounded-lg shadow-lg w-[620px]">
        
        {/* Title Field */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Title</label>
          <input
            name="title"
            type="text"
            placeholder="Enter the Title"
            required
            className="p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        {/* Description Field */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Description</label>
          <textarea
            name="description"
            placeholder="Enter the Description"
            rows="3"
            required
            className="p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2"
          ></textarea>
        </div>

        {/* Price Field */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Price</label>
          <input
            name="price"
            type="number"
            required
            className="p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Category</label>
          <select name="category" required className="p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2">
            <option value="">Select a Category</option>
            {Array.isArray(categories) && categories.length > 0 ? (
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.brand}
                </option>
              ))
            ) : (
              <option disabled>Loading categories...</option>
            )}
          </select>
        </div>

        {/* Image Upload */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Image</label>
          <input
            type="file"
            name="image"
            required
            className="p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        {/* Submit Button */}
        <div className='text-center'>
          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className={`mt-4 w-[280px] py-3 ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"} text-white text-lg font-semibold shadow-md transition duration-300 ease-in-out`}
          >
            {loading ? "Posting..." : "Post Ad"}
          </button>
        </div>
      </form>
    
    <ToastContainer
    />
    </div>
  );
}

export default PostingForm;
