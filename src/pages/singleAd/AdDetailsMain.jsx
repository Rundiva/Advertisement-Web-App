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
// import LinkedinIcon from '../../assets/linkedin.png'
import SocialLinks from "./SocialLinks"; 



const AdDetailsMain = () => {
    const { id } = useParams()
    const navigate = useNavigate(); 
    const [data, setData] = useState({});

    // Fetch single product details
    const fetchAdvert = async () => {
        try {
            const res = await apiGetSingleProduct(id) 
            // const response = await axios.get('https://advertisement-api.onrender.com/adverts/6718d1e719201d61f364d410')
            setData(res.data);
            console.log('ress',res) 

            
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    };
   

   
    useEffect(() => {
        fetchAdvert()
    }, [])

    const [loading, setLoading] = useState(false);

    return (
        <div >
            <Navbar />
            <div className="flex flex-col md:flex-row mx-auto p-36 bg-blue-100 rounded-lg shadow-md mb-28">
                {/* Left side - Image */}
                <div className="md:w-1/2">
                    <img
                        src={`https://savefiles.org/${data.image}?shareable_link=450`}
                        alt="Item preview"
                        className="w-[100vw] h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-r-none"
                    />
                </div>

                {/* Right side - Details */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                        <h4 className="text-2xl font-semibold mb-4">{data.title}</h4>
                       
                        
                        <h4 className="text-gray-600 mb-6 font-medium">
                            Price: GHC {data.price}
                        </h4>
                        <p className="text-gray-600 mb-6 mr-12">
                            Description: {data.description}
                            <h4 className="font-medium">{data.brand}</h4>
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://wa.me/message/WYTP4BTNACT2N1" target="_blank"><button 
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                            {/* {loading ? "Not Yet Available..." : "Contact Vendor"} */}
                            Chat Vendor
                        </button></a>
                        <Link to='/login'>  <button 
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