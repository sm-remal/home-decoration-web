import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';

const ShowFurniture = ({ furniture }) => {
    console.log(furniture)
    const { name, category, image, price, description } = furniture;
    return (
        <div className="card bg-base-100 shadow-sm border-1 border-gray-50 mx-4 md:mx-0">
            <figure className='overflow-hidden rounded-lg relative group'>
                <img
                    src={image}
                    alt="" className='w-[350px] h-[210px] object-cover transform group-hover:scale-105 transition duration-300 md:mt-5 rounded-lg' />
            </figure>
            <div className="card-body">
                <div className='flex justify-between mb-2'>
                    <h2 className="card-title">{name}</h2>
                    <div className="badge badge-secondary">{category}</div>
                </div>
                <p className='text-gray-600'>{description}</p>
                <div className="card-actions flex justify-between mt-4">
                    <div className="badge badge-outline">Products</div>
                    <div className='flex items-center text-[18px] font-bold text-gray-600'><span className='text-2xl'><TbCurrencyTaka/></span><span>{price}</span></div>
                </div>
                <button className='btn btn-secondary mt-4'>Add To Cart</button>
            </div>
        </div>
    );
};

export default ShowFurniture;