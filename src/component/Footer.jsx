import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='flex gap-x-[60px] justify-center items-center bg-[#1A1F71] text-white h-[50vh]'>
      <div>
        <h1 className='mb-3'>GET IN TOUCH</h1>
        <p>Any questions? Let us know in store at 8th floor, 379 <br /> Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
<div className='flex gap-x-3 mt-3'>
<FaFacebook />
<FaInstagramSquare />
<FaTwitterSquare />
</div>


      </div>
      <div>
        <h1 className='mb-3'>Quick links</h1>
        <p>About</p>
        <p>Blogs</p>
        <p>Contact</p>
        <p>FAQ</p>
        
      </div>
      <div>
        <h1 className='mb-3'>Account</h1>
        <p>My Account</p>
        <p>Orders Tracking</p>
        <p>Checkout</p>
        <p>Wishlist</p>
      </div>
      <div>
        <h1 className='mb-8'>Newsletter</h1>
        <input type="text"  placeholder='Email' className='w-[300px] h-10 border rounded-xl p-5'/>
        <button className='bg-[#CA1515] h-9 rounded-xl w-[100px] ml-[-105px]'>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default Footer