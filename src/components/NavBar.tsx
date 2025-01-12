import Link from 'next/link'
import React from 'react'


const NavBar = () => {
  return (
    <div className='hidden lg:block bg-gray-300'>
        <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish '>
        <Link className="navbar__link relative" href="/Home">Home</Link>
        <Link className="navbar__link relative" href="/new-product-page">Library Catalog</Link>
        <Link className="navbar__link relative" href="#">Recommendations</Link>
        <Link className="navbar__link relative" href="#">Subscription</Link>
        <Link className="navbar__link relative" href="#">Blog</Link>
        <Link className="navbar__link relative" href="#">Help</Link>
        <Link className="navbar__link relative" href="#">About Us</Link>
        <Link className="navbar__link relative" href="/contact-page">Contact Us</Link>
        </div>
        </div>
        
    </div>
  )
}

export default NavBar