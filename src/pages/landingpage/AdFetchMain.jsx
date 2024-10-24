import React from 'react'
import { Link } from 'react-router-dom'
import K from '../../constants' 
import { useState } from 'react' 
import axios from 'axios'


// mapping on the constants...

const 
AdFetchMain = () => { 
    //1. Declare state to store todos
    const [ads, setAds] = useState([]);
}
    //2. Define a function to get ads
    const getAds = async () => {
        //use axios to get ads 
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/ads?limit=0`);
        console.table(response.data);
        //Update ads state  
        setAds(response.data);  


    return (
        <div>
            {/* <h1 className="text-3xl text-themeColor font-bold pl-10 pt-14">Best Selling Ads</h1> */}
            <div className="container mx-auto flex flex-wrap gap-5 py-4">
                {
                    K.AD.map((ad, index) => {
                        console.log(ad);
                        return (
                            <div className="flex mx-auto">
                                < div className="w-[235px] items-center text-center">
                                    <div key={index} className="border p-4 rounded-lg shadow-md items-center">
                                        <img src={ad.image} alt="ad-image" className='mx-auto' />
                                        <h2 className="text-xl text-themeColor mt-5 font-semibold">{ad.title}</h2>
                                        <p className="text-gray-500">{ad.category}</p>
                                        <p className="text-black font-medium">{ad.vendor}</p>
                                        <div className='flex gap-2'>
                                            <Link to={`/ads/${ad.id}`}>
                                                <button className="mt-4 px-2 py-1 border-themeColor text-themeColor rounded border-2 h-10 hover:bg-themeColor hover:text-blue-600 hover:border-themeColor">
                                                    Preview
                                                </button>
                                            </Link>
                                            <button className="mt-4 px-4 py-2 bg-themeColor text-white rounded hover:bg-blue-600">
                                                Post Ad
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
export default AdFetchMain