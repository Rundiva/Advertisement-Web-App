import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { apiGetSingleProduct } from "../services/product";
import { toast } from "react-toastify";
import { apiDelete } from "../services/auth";

const SingleView = () => {
    const navigate = useNavigate()
    const { id } = useParams();  // Get the advert id from the URL
    const [advert, setAdvert] = useState({});

    // Fetch single advert details
    const fetchAdvert = async () => {
        try {
            const res = await apiGetSingleProduct(id);
            setAdvert(res.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    // Delete advert function
    const handleDelete = async () => {
        try {
           const response = await apiDelete() // Use the advert id to delete the advert
            toast.success("Advert deleted successfully!");
            navigate("/dashboard"); // Redirect to home or advert listing page after deletion
        } catch (error) {
            console.log(error.message);
            toast.error("Failed to delete the advert.");
        }
    };



    useEffect(() => {
        fetchAdvert();
    }, [id]);

    return (
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto bg-white rounded-lg shadow-md">
            {/* Left side - Image */}
            <div className="md:w-1/2">
                <img
                    src={`https://savefiles.org/${advert.image}?shareable_link=450`}
                    alt="Item preview"
                    className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-r-none"
                />
            </div>

            {/* Right side - Details */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                    <h4 className="text-2xl font-semibold mb-4">{advert.title}</h4>
                    <p className="text-gray-600 mb-6">{advert.description}</p>
                    <p>{advert.price}</p>
                </div>

                <div className="flex gap-4">
                   <Link to={'/editadvertform'}>
                   <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Edit
                    </button>
                   </Link>
                    <button 
                        onClick={handleDelete}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleView;
