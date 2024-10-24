import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiGetSingleProduct } from "../services/product";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import productImg from '../../assets/car5.png';
import HorizontalScroll from "./HorizontalScroll";
import Navbar from "../../component/Navbar";
import LinkedinIcon from '../../assets/linkedin.png'
import SocialLinks from "./SocialLinks";


const AdDetailsMain = () => {
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
        try {
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
        navigate(`/signup`);
    };
    useEffect(() => {
        fetchAdvert()
    }, [])

    const [loading, setLoading] = useState(false);

    return (
        <div >
            <Navbar />
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-blue-100 rounded-lg shadow-md mt-28 mb-28 p-36">
                {/* Left side - Image */}
                <div className="md:w-1/2">
                    <img
                        src={productImg}
                        alt="Item preview"
                        className="w-[100vw] h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-r-none"
                    />
                </div>

                {/* Right side - Details */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                        <h4 className="text-2xl font-semibold mb-4">Toyota</h4>
                        <h4 className="text-gray-600 mb-6 font-medium">
                            Price: GHC 99,000
                        </h4>
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Ipsam ratione accusantium exercitationem officiis sequi corrupti.
                            <h4 className="font-medium">Ama Ghana Motors</h4>
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://wa.me/message/WYTP4BTNACT2N1" target="_blank"><button onClick={handleEdit}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                            {/* {loading ? "Not Yet Available..." : "Contact Vendor"} */}
                            Chat Vendor
                        </button></a>
                        <Link to='/login'>  <button onClick={handleDelete}
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"> 
                            Post Ads Like This
                        </button></Link>
                    </div>
                    <div className="w-[3vw] mt-5"> 
                    
                    <SocialLinks />
                    </div>

                </div>
            </div>
            <span>
                <HorizontalScroll />
            </span>



        </div>
    );
};

export default AdDetailsMain;