import React from 'react';
import Image from 'next/image';

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
 

}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="flex items-center justify-between p-6 bg-white rounded-lg">
      <div className="max-w-[50%] p-4 space-y-2 lg:space-y-4 bg-white rounded-lg">
        <h3 className="text-black text-[24px] lg:text-[28px]">{title}</h3>
        <h2 className="text-black text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">{mainTitle}</h2>
        <h3 className="text-[24px] text-gray-500">
          <b className="text-[#f23557] text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
        </h3>
        <div className="bg-[#2d4059] text-white text-[14px] sm:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
          Contact Us
        </div>
      </div>

      <div className="max-w-[50%]">
        <Image
          className="rounded-xl object-cover"
          src={img}
          alt="banner"
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
};

export default Slide;
