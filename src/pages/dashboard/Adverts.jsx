import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdvertTile from "./AdvertTile";

const Adverts = () => {
    //1.Declare state to store adverts
    const [adverts, setAdverts] = useState([]);
    //2. Define a function to get adverts
    const getAdverts = async () => {
        //Use axios to get adverts
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos?limit=0&skip=5`);
        console.table(response.data);
        //Update adverts state
        setAdverts(response.data);
        
    }

    //3. Call the function with useEffect
    useEffect(() => {
        getAdverts();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">All Adverts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {adverts.map((advert) => (
            <AdvertTile key={advert.id} title={advert.title} icon={advert.icon} />
          ))}
        </div>
        <Link
          to="/dashboard"
          className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add Advert
        </Link>
      </div>
    );
}

export default Adverts;