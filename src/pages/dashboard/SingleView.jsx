import { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { apiGetSingleProduct } from "../services/product";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import axios from "axios";


const SingleView = () => {
    const { id } = useParams()
    const navigate = useNavigate();

        // Fetch single product details
    const fetchAdvert = async () => {
        try {
            const res = await apiGetSingleProduct(id)
            console.log(res)
 // Add logic to set product state (if needed)
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    };
  // Delete product function
    const handleDelete = async () => {
        try{
            await apiDeleteProduct(id);  // Assuming you have an API call for deleting a product
            toast.success("Product deleted successfully!");
            navigate("/"); // Redirect to home or product listing page after deletion

        } catch (error) {
            console.log(error.message);
            toast.error("Failed to delete the product.")
            
        }
    };

        // Edit button function - navigate to edit page
        const handleEdit = () => {
            navigate(`/edit-product/${id}`);
        };
    useEffect(() => {
        fetchAdvert()
    }, [])

    return (
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto bg-white rounded-lg shadow-md">
            {/* Left side - Image */}
            <div className="md:w-1/2">
                <img
                    src="/api/placeholder/400/400"
                    alt="Item preview"
                    className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-r-none"
                />
            </div>

            {/* Right side - Details */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                    <h4 className="text-2xl font-semibold mb-4">Title</h4>
                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Ipsam ratione accusantium exercitationem officiis sequi corrupti.
                    </p>
                </div>

                <div className="flex gap-4">
                    <button onClick={handleEdit}
                     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                        Edit
                    </button>
                    <button onClick={handleDelete}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleView;