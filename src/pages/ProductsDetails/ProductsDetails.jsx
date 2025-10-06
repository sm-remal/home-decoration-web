import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { TbCurrencyTaka } from 'react-icons/tb';

const ProductsDetails = () => {
    const {id} = useParams();
    const productId = parseInt(id)
    const productDetails = useLoaderData();
    const product = productDetails.find(product => product.id === productId)
    const {name, category, description, dimensions, image, material, price} = product;
    
    return (
        <div className='flex flex-col md:flex-row justify-center items-center mx-4 md:mx-0 my-8 md:my-12'>
            <div className='flex-1 flex justify-center'>
                <img src={image} alt="" className='w-[400px] h-[400px] rounded-xl' />
            </div>
            <div className='flex-1 space-y-5 md:pr-20 mt-6 md:mt-0'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700'>{name}</h1>
                <hr />
                <p className='text-gray-600'><span className='font-semibold'>Description:</span> {description}</p>
                <hr />
                <div className='space-y-3'>
                    <h3 className='text-gray-600'><span className='font-semibold'>Category:</span> &nbsp; &nbsp; &nbsp; &nbsp; {category}</h3>
                    <h3 className='text-gray-600'><span className='font-semibold'>Material:</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {material}</h3>
                    <h3 className='text-gray-600'><span className='font-semibold'>Dimensions:</span> &nbsp; &nbsp; {dimensions}</h3>
                    <h3 className='text-gray-600 flex'><span className='font-semibold'>Price:</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span className='text-xl'><TbCurrencyTaka /></span>{price}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;