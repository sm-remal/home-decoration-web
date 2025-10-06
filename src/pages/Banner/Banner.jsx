import React from 'react';
import banner from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row items-center p-4 md:px-16 md:py-10 bg-gray-100'>
            <div className='flex-1 space-y-5 text-center md:text-left my-4 md:my-0'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Bring Comfort & Style to Your Home Furniture</h1>
                <p>Your home deserves more than just furniture — it deserves warmth, comfort, and timeless design.
                    Each piece we craft blends elegance, durability, and craftsmanship to make your space truly feel like home.</p>
                <button className='btn btn-secondary'>Explore More</button>
            </div>
            <div className='flex justify-end items-center flex-1 my-6 md:my-0'>
                <img src={banner} alt="Banner" className='w-[480px] h-[360px] rounded-lg' />
            </div>
        </div>
    );
};

export default Banner;