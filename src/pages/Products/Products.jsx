import React from 'react';
import { useLoaderData } from 'react-router';
import ShowFurniture from '../ShowFurniture/ShowFurniture';

const Products = () => {
    const furnitureData = useLoaderData();
    return (
        <div className='my-6'>
            <div className='flex items-center gap-2 px-4 md:px-2'><span className='text-lg md:text-xl lg:text-2xl font-semibold'> All Products</span> <small className='text-gray-500 font-semibold hidden md:flex'>(Our Available Products: {furnitureData.length})</small></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
                {
                    furnitureData.map(furniture => <ShowFurniture key={furniture.id} furniture={furniture}></ShowFurniture>)
                }
            </div>
        </div>
    );
};

export default Products;