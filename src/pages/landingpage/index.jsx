import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import image1 from '../assets/ads.jpg';
import image1 from "../../assets/ads.jpg"
import image2 from '../../assets/car3.jpg';
import image3 from '../../assets/car4.jpg';
import ExampleAd from '../../assets/car1.webp'
import AdIcon from '../../assets/addIcon.png'
import ListViewIcon from '../../assets/list-view.png'
import GridViewIcon from '../../assets/grid.png'
import FilterViewIcon from '../../assets/filter.png'
import SearchBar from './searchBar';
import { Filter } from 'lucide-react';
import AdFetchMain from './AdFetchMain';
import DropDownFilter from './DropDownFilter';
import AllAdverts from './AllAdverts';
import K from '../../constants';
import AdDetailsMain from '../singleAd/AdDetailsMain';




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

                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10 space-x-4 pt-[20rem items-center">
                        {/* hero-caption */}
                        <div className='text-6xl font-sans font-extrabold items-center text-white'>Welcome to RunAds! Sell your Automobile Faster with Us</div>

                        {/* Buttons */}
                        <a href="#all-adverts"><button id='all-adverts' className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-white hover:text-blue-600  transition mt-5">View Ads</button></a>
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
                <div>
                    <div>
                        <SearchBar />

                    </div>
                    <h1 className='text-4xl flex p-4 ml-16 items-center font-sans font-semibold pt-16 -mt-[8rem]'>Latest Ads</h1>

                    {/* Grid and list view icons */}
                    <div className='flex w-32 ml-[75rem] gap-3'>
                        <Link to='/ListView'><img src={ListViewIcon} alt="img" /></Link>
                        <Link to='/GridView'> <img src={GridViewIcon} alt="img" /></Link>
                        <Link to='/FilterView'> <img src={FilterViewIcon} alt="img" /></Link>
                    </div>
                    <AllAdverts />
                    
                 
                    {/* Grid View */}
                   
                </div>
            </div>

        </div>
    );
};

export default LandingPage;
