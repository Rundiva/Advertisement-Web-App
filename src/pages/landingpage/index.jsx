import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import image1 from '../assets/ads.jpg';
import image1 from "../../assets/ads.jpg"
import image2 from '../../assets/convo.jpg';
import image3 from '../../assets/convo.jpg';

const images = [
    `url(${image1})`,
    `url(${image2})`,
    `url(${image3})`,
];
    
const LandingPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Automatically change the background image every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div id='landingImg'>
                <div className="relative h-screen overflow-hidden">

                    {/* Navbar */}
                    <nav className="absolute top-0 w-full py-4 bg-transparent z-10">
                        <div className="container mx-auto px-4 flex justify-end space-x-6">
                            <a href="#login" className="text-white font-semibold">Login</a>
                            <a href="#signup" className="text-white font-semibold">Sign Up</a>
                        </div>
                    </nav>

                    {/* Buttons */}
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10 space-x-4 pt-[20rem]">
                        <Link to='/ad-list'><button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-white hover:text-blue  transition">View Ads</button></Link>
                        <Link to='/login'><button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">Post Ad</button></Link>
                    </div>

                    {/* Background Image Slider */}
                    <motion.div
                        className="absolute inset-0 h-full w-full bg-cover bg-center transition-all"
                        style={{ backgroundImage: images[currentImageIndex] }}
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    />

                </div>
            </div>

        </div>
    );
};

export default LandingPage;
