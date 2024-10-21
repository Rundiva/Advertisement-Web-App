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
import SearchBar from './searchBar';


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
                        <Link to='/adverts'><button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-white hover:text-blue  transition mt-5">View Ads</button></Link>
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
                        <SearchBar />
                    <h1 className='text-4xl flex p-4 ml-16 items-center font-sans font-semibold pt-16 mb-[-3rem]'>Latest Ads</h1>

                    {/* Grid and list view icons */}
                    <div className='flex w-32 ml-[85rem] gap-3'>
                        <Link to='/ListView'><img src={ListViewIcon} alt="img" /></Link>
                        <Link to='/GridView'> <img src={GridViewIcon} alt="img" /></Link>
                    </div>

                    {/* Grid View */}
                    <div className='flex'>
                        <div className='flex p-20 items-center'>
                            <div>
                                <Link to='/login'><img className='w-[20vw]' src={AdIcon} alt="img" /></Link>
                                <h2 className='font-extrabold text-red-600'>Are you a vendor? Post New Ads for Free</h2>
                                {/* <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <h2 className='font-bold'>GHC200,0000</h2> */}
                                <Link to='/login'><button className="px-9 py-5 mt-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">Post Now!</button></Link>
                            </div>
                        </div>
                        <div className='flex p-20 items-center'>
                            <div>
                                <Link to='/singleAd'><img className='w-[20vw]' src={ExampleAd} alt="img" /></Link>
                                <h2 className='font-extrabold'>Macedece Benz</h2>
                                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <h2 className='font-bold'>GHC200,0000</h2>
                                <button className='bg-[#1A1F71] p-5 rounded-md text-white'>Contact Vendor</button>
                            </div>
                        </div>
                        <div className='flex p-20 items-center'>
                            <div>
                                <img className='w-[20vw]' src={ExampleAd} alt="img" />
                                <h2 className='font-extrabold'>Macedece Benz</h2>
                                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <h2 className='font-bold'>GHC200,0000</h2>
                                <button className='bg-[#1A1F71] p-5 rounded-md text-white'>Contact Vendor</button>
                            </div>
                        </div>
                        <div className='flex p-20 items-center'>
                            <div>
                                <img className='w-[20vw]' src={ExampleAd} alt="img" />
                                <h2 className='font-extrabold'>Macedece Benz</h2>
                                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <h2 className='font-bold'>GHC200,0000</h2>
                                <button className='bg-[#1A1F71] p-5 rounded-md text-white'>Contact Vendor</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>

                        <div className='flex p-20 items-center'>
                            <div className='flex p-20 items-center'>
                                <div>
                                    <img className='w-[20vw]' src={ExampleAd} alt="img" />
                                    <h2 className='font-extrabold'>Macedece Benz</h2>
                                    <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <h2 className='font-bold'>GHC200,0000</h2>
                                    <button className='bg-[#1A1F71] p-5 rounded-md text-white'>Contact Vendor</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex p-20 items-center'>
                            <div>
                                <img className='w-[20vw]' src={ExampleAd} alt="img" />
                                <h2 className='font-extrabold'>Macedece Benz</h2>
                                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <h2 className='font-bold'>GHC200,0000</h2>
                                <button className='bg-[#1A1F71] p-5 rounded-md text-white'>Contact Vendor</button>
                            </div>
                        </div>
                        <div className='flex p-20 items-center'>
                            <div>
                                <img className='w-[20vw]' src={ExampleAd} alt="img" />
                                <h2 className='font-extrabold'>Macedece Benz</h2>
                                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <h2 className='font-bold'>GHC200,0000</h2>
                                <button className='bg-[#1A1F71] p-5 rounded-md text-white'>Contact Vendor</button>
                            </div>
                        </div>
                        <div className='flex p-20 items-center'>
                            <div>
                                <img className='w-[20vw]' src={ExampleAd} alt="img" />
                                <h2 className='font-extrabold'>Macedece Benz</h2>
                                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <h2 className='font-bold'>GHC200,0000</h2>
                                <button className='bg-[#1A1F71] p-5 rounded-md text-white'>Contact Vendor</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>

                        <div className='flex p-20 items-center'>
                            <div className='flex p-20 items-center'>
                                <div>
                                    <img className='w-[20vw]' src={ExampleAd} alt="img" />
                                    <h2 className='font-extrabold'>Macedece Benz</h2>
                                    <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <h2 className='font-bold'>GHC200,0000</h2>
                                    <button className='bg-[#1A1F71] p-5 rounded-md text-white'>Contact Vendor</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex p-20 items-center'>
                            <div>
                                <img className='w-[20vw]' src={ExampleAd} alt="img" />
                                <h2 className='font-extrabold'>Macedece Benz</h2>
                                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <h2 className='font-bold'>GHC200,0000</h2>
                                <button className='bg-[#1A1F71] p-5 rounded-md text-white'>Contact Vendor</button>
                            </div>
                        </div>
                        <div className='flex p-20 items-center'>
                            <div>
                                <img className='w-[20vw]' src={ExampleAd} alt="img" />
                                <h2 className='font-extrabold'>Macedece Benz</h2>
                                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <h2 className='font-bold'>GHC200,0000</h2>
                                <button className='bg-[#1A1F71] p-5 rounded-md text-white'>Contact Vendor</button>
                            </div>
                        </div>
                        <div className='flex p-20 items-center'>
                            <div>
                                <img className='w-[20vw]' src={ExampleAd} alt="img" />
                                <h2 className='font-extrabold'>Macedece Benz</h2>
                                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <h2 className='font-bold'>GHC200,0000</h2>
                                <button className='bg-[#1A1F71] p-5 rounded-md text-white'>Contact Vendor</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LandingPage;
