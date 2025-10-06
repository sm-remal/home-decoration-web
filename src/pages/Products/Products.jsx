import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ShowFurniture from '../ShowFurniture/ShowFurniture';

const Products = () => {
    const furnitureData = useLoaderData();

    const [search, setSearch] = useState('');

    const productData = search.trim().toLowerCase();
    const searchProduct = productData ? furnitureData.filter(product => product.name.toLowerCase().includes(productData)) : furnitureData;


    console.log(searchProduct)



    return (
        <div className='my-6'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2 px-4 md:px-2'><span className='text-lg md:text-xl lg:text-2xl font-semibold'> All Products</span> <small className='text-gray-500 font-semibold hidden md:flex'>(Our Available Products: {searchProduct.length})</small>
                </div>

                <label onChange={(e) => setSearch(e.target.value)} className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>


            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
                {
                    searchProduct.map(furniture => <ShowFurniture key={furniture.id} furniture={furniture}></ShowFurniture>)
                }
            </div>
        </div>
    );
};

export default Products;