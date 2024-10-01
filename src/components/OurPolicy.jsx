import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      

      <div className="flex flex-col items-center">
        <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="Exchange Icon" />
        <p className='font-semibold'>Easy Exchange</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
      <div className="flex flex-col items-center">
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="Exchange Icon" />
        <p className='font-semibold'>7 day return</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
      <div className="flex flex-col items-center">
        <img className='w-12 m-auto mb-5' src={assets.support_img} alt="Exchange Icon" />
        <p className='font-semibold'>support</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
      

    </div>
  );
};

export default OurPolicy;
