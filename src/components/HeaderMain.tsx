import React from 'react'
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const HeaderMain = () => {
  return (
    <div className='border-b border-gray-200 py-6 bg-gray-600'>
      <div className='container sm:flex justify-between items-center'>
      <div className='w-[60px] h-[60px] rounded-full overflow-hidden'>
          <img src="/logo.png" alt="Digital Library Logo" className="w-full h-auto" />
        </div>
        <div className='w-full sm:w-[300px] md:w[70%] relative'>
            <input className='border-gray-200 border p-2 px-4 rounded-lg w-full' 
            type="text" placeholder='Enter book name...'>
            </input>

            <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20} />
        </div>
        <div className='sm:flex gap-4 text-gray-500 text-[30px]'>
        <BiUser className='text-white' />
        <div className='relative'> 
        <FaBell className='text-white'/>
             </div>
             <div className='relative'> 
             <FaShoppingCart className='text-white' />
             </div>
             
             </div>
            
      </div>
    </div>
  )
}

export default HeaderMain
