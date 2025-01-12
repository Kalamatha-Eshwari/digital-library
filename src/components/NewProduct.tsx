import React from 'react'
import BookCard from './BookCard';
import Image from 'next/image';

const NewProduct = () => {
    const Data=[
        {
           
            img: "/ratan.png",
            title:"Ratan Tata ",
            desc:"Ratan Tata : A Life",
            rating:5,
            price:"1250/-"
        },
        {
            img: "/book_2.png",
            title:"BELIEVE IN YOURSELF",
            desc:"by Dr Joseph",
            rating:3,
            price:"500/-"
        },
        {
            img: "/book_3.png",
            title:"The Sceret Garden",
            desc:"Classic Fiction",
            rating:3,
            price:"300/-"
        },
        {
            img: "/book_4.png",
            title:"Something ",
            desc:"I Never Told You ",
            rating:3,
            price:"600/-"
        },
       
    ];
  return (
    <div>
         <div className='container pt-4'>
        <h2 className='text-[#430f58] font-medium text-2xl pb-4 text-center'>Explore Our Book Collection</h2>
      <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-3 lg:grid-col-3 xl:grid-cols-4
      gap-10 xl:gap-x-20 xl:gap-y-10'>
        {Data.map((item,index)=>(
        <BookCard 
        key={index}
        img={item.img}
        title={item.title}
        desc={item.desc}
        rating={item.rating}
        price={item.price}

        />

        ))}

      </div>
    </div>
    </div>
   
  )
}

export default NewProduct
