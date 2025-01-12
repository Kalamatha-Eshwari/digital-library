import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const MainNav = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block bg-gray-900">
      <div className='container py-4'>
        <div className='flex justify-between items-center'>
          <div className='hidden lg:flex gap-1'>
            <div className='header_top__icon_wrapper'>
            <FaFacebook />
            </div>
            <div className='header_top__icon_wrapper'>
            <FaTwitterSquare />
            </div>
            <div className='header_top__icon_wrapper'>
            <FaInstagramSquare />
            </div>
            <div className='header_top__icon_wrapper'>
            <FaLinkedin />
            </div>
            
           
          </div>
          <div className='text-gray-100 text-[15px]'>
            <b>📚 Explore the World of Knowledge:</b> Enjoy Unlimited Access to Thousands of Books for Just $9.99/Month!
          </div>

          <div className='flex gap-4'>
            <select 
            className='text-gray-500 text-[12px] w-[70px]'
            name="currency"
            id="currency"
            >
            <option value="USD $">USD $</option>
            <option value="EUR">EUR €</option>
            <option value="INR">INR ₹</option>
            </select>
            <select 
             className='text-gray-500 text-[12px] w-[80px]'
             name="language"
             id="language"
            >
              <option value="English">English</option>
              <option value="French">French</option>


            </select>
          </div>
        </div>
      </div>
   
    </div>
  )
}

export default MainNav
