'use client'
import React from 'react';
import Slider from 'react-slick';
import Slide from './slide';


const Content = () => {

    var settings={
        dots:true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        pauseOnHover:false,
    };
    const slideData=[
        {
            id:0,
            img: "/lib.png",
            title:"Discover the World of Knowledge at Your Fingertip",
            mainTitle:"Welcome to Our Digital Library",
            price:"Free to Explore"
        },
        {
            id:1,
            img:"/online_library.png",
            title:"Explore Thousands of Resources",
            mainTitle:"Expand Your Learning Horizon",
            price:"Unlimited Access",
           
        },
       
    ];
  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
        {slideData.map((item) => (
        <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
            
          />
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default Content
