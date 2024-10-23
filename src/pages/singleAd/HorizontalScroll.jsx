import React, { useRef } from "react";
import scrollImg1 from '../../assets/car5.png';
import scrollImg2 from '../../assets/yaris2.jpg';
import scrollImg3 from '../../assets/yaris1.jpg';
import scrollImg4 from '../../assets/truck1.png';
import scrollImg5 from '../../assets/car1.webp';

const HorizontalScroll = () => {
  // Reference to the scroll container
  const scrollRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      console.log('Scrolling left');
      scrollRef.current.scrollBy({
        left: -300, // Adjust the scroll distance
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      console.log('Scrolling right');
      scrollRef.current.scrollBy({
        left: 300, // Adjust the scroll distance
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      {/* Left scroll button */}
      <button
        onClick={scrollLeft}
        className="bg-blue-500 text-white p-2 rounded-full mr-2 focus:outline-none hover:bg-blue-700"
      >
        &#8592; {/* Left arrow */}
      </button>

      {/* Wrapper for Scrollable container */}
      <div className="overflow-hidden w-full max-w-5xl">
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scroll-smooth"
          style={{ scrollBehavior: 'smooth' }} // Ensuring smooth scrolling
        >
          {/* Items to scroll */}
          <div className="w-48 h-48 bg-gray-300 rounded-lg flex items-center justify-center text-xl">
            <img src={scrollImg1} alt="Car 1" />
          </div>
          <div className="w-48 h-48 bg-gray-300 rounded-lg flex items-center justify-center text-xl">
            <img src={scrollImg2} alt="Yaris 2" />
          </div>
          <div className="w-48 h-48 bg-gray-300 rounded-lg flex items-center justify-center text-xl">
            <img src={scrollImg3} alt="Yaris 1" />
          </div>
          <div className="w-48 h-48 bg-gray-300 rounded-lg flex items-center justify-center text-xl">
            <img src={scrollImg4} alt="Truck 1" />
          </div>
          <div className="w-48 h-48 bg-gray-300 rounded-lg flex items-center justify-center text-xl">
            <img src={scrollImg5} alt="Car 5" />
          </div>
          {/* Add more images if needed */}
        </div>
      </div>

      {/* Right scroll button */}
      <button
        onClick={scrollRight}
        className="bg-blue-500 text-white p-2 rounded-full ml-2 focus:outline-none hover:bg-blue-700"
      >
        &#8594; {/* Right arrow */}
      </button>
    </div>
  );
};

export default HorizontalScroll;
