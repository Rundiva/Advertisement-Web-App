import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGetProducts } from "../services/product";
import AdvertTile from "./AdvertTile"; // Import AdvertTile

const Adverts = () => {
  // State to store adverts
  const [adverts, setAdverts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to get adverts
  const getAdverts = async () => {
    try {
      // Fetch adverts from API
      const response = await apiGetProducts();
      console.table(response.data);
      setAdverts(response.data);
    } catch (err) {
      setError("Failed to load adverts.");
    } finally {
      setLoading(false);
    }
  };

  // Call the function with useEffect
  useEffect(() => {
    getAdverts();
  }, []);

  // Render loading or error message
  if (loading) {
    return <div className="text-center py-12">Loading adverts...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
        {/* Add Advert Button */}
        <Link
          to="/postingform"
          className="inline-block px-8 py-3 mb-8 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300 font-poppins"
        >
          + Add Advert
        </Link>

        {/* Header */}
        <h1 className="text-5xl font-bold text-gray-900 mb-10 text-center font-poppins">
          All Adverts
        </h1>

        {/* Adverts Grid */}
        {adverts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-roboto">
            {adverts.map((advert) => (
              <AdvertTile // Use AdvertTile component
                key={advert.id}
                id={advert.id}
                title={advert.title}
                description={advert.description}
                image={advert.image || 'https://via.placeholder.com/150'}
                category={advert?.category?.brand}
                price={advert.price}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">No adverts available at the moment.</div>
        )}
      </div>
    </div>
  );
};

export default Adverts;
