// src/components/SearchBar.js
import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  // State for managing the search query and fetched data
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch data based on the query
  const fetchData = async (searchQuery) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://advertisemenr-api.onrender.com/ads?search=${searchQuery}`
      );
      setData(response.data);
      setLoading(false);
      setError(null); // Clear error if successful
    } catch (err) {
      setError("Error fetching data");
      setLoading(false);
    }
  };

  // Handle the input change in the search bar
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle the search when the button is clicked or Enter is pressed
  const handleSearch = () => {
    if (query.length >= 3) {
      fetchData(query);
    } else {
      setError("Please enter at least 3 characters.");
    }
  };

  // Handle Enter key press for search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container bg-slate-300">
      <div className="search-bar-wrapper ml-96 items-center pt-10 mr-2">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search Ads..."
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Trigger search on Enter
          className="search-input mr-3 p-5 w-[30vw]"
        />

        {/* Search button */}
        <button  onClick={handleSearch} className="search-button bg-blue-600 p-5 rounded-r-lg text-white">
         {loading ? "Loading..." : "Search"} 
        </button>
      </div>

      {/* Feedback messages beside or below the search bar */}
      <div className="feedback-message">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>

      {/* Render search results */}
      <div className="search-results">
        {data.length > 0 ? (
          data.map((ad) => (
            <div key={ad.id} className="ad-item">
              <h3>{ad.title}</h3>
              <p>{ad.description}</p>
            </div>
          ))
        ) : (
          !loading && <p>No results found</p> // Show if no results and not loading
        )}
      </div>
    </div>
  );
};

export default SearchBar;
