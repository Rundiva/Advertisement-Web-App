import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiGetSingleProduct } from "../services/product";
import { toast } from "react-toastify";


const EditAdvertForm = () => {
  const { id } = useParams();  // Get the id from the URL
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch categories from the API
  const getCategories = async () => {
    try {
      const response = await axios.get(`https://advertisement-api.onrender.com/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to load categories");
    }
  };

  // Fetch existing advert details
  const fetchAdvert = async () => {
    try {
      const response = await apiGetSingleProduct(id)
      const { title, description, price, category } = response.data;
      setTitle(title);
      setDescription(description);
      setPrice(price);
      setCategory(category.id);
    } catch (error) {
      console.error("Error fetching advert details:", error);
      toast.error("failed to update");
    }
  };

  useEffect(() => {
    getCategories();
    fetchAdvert();
  }, [id]);

  // Handle updating the advert
  const updateAdvert = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    if (image) formData.append("image", image);
    setLoading(true);

    try {
      await axios.patch(`https://advertisement-api.onrender.com/adverts/${id}`, formData);
      toast.success("Advert updated successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating advert:", error);
      toast.error("Failed to update advert.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-center text-2xl font-bold">Edit Ad</h1>
      <form onSubmit={updateAdvert} className="bg-white flex flex-col gap-6 p-6 rounded-lg shadow-lg w-[620px]">

        {/* Title Field */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Title</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        {/* Description Field */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Category</label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2"
          >
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
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
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
            {loading ? "Updating..." : "Update Ad"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditAdvertForm;
