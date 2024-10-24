import React, { useEffect, useState } from "react";
import axios from "axios";

const DropDownFilter = () => {
  const [ads, setAds] = useState([]); // State to hold the ads data
  const [categories, setCategories] = useState([]); // State to hold unique categories for the dropdown
  const [selectedCategory, setSelectedCategory] = useState(""); // State for the selected category

  // Fetch ads from the API
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get("https://advertisement-api.onrender.com/ads");
        setAds(response.data); // Set the ads data
        // Extract unique categories from the ads
        const uniqueCategories = [...new Set(response.data.map(ad => ad.category))];
        setCategories(uniqueCategories); // Set the unique categories for the dropdown
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, []);

  // Handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter the ads based on the selected category
  const filteredAds = selectedCategory
    ? ads.filter(ad => ad.category === selectedCategory)
    : ads;

  return (
    <div className="container mx-auto p-4 ml-[65rem] -mt-[8rem]">
    
      {/* Dropdown for Category Filter */}
      <div className="mb-4 w-[12vw]">
        <label htmlFor="category" className="block text-gray-700">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Display Filtered Ads */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAds.length > 0 ? (
          filteredAds.map((ad) => (
            <div key={ad.id} className="border p-4 rounded-md shadow-md">
              <h3 className="text-lg font-bold">{ad.title}</h3>
              <p>Category: {ad.category}</p>
              <p>Price: ${ad.price}</p>
              <p>Description: {ad.description}</p>
            </div>
          ))
        ) : (
          <p>No ads found for the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default DropDownFilter;
