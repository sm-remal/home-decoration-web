import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)



const ShowFurniture = ({ furniture }) => {

    const { id, name, category, image, price, description } = furniture;


    // ---------------------

    const handleAddToWishList = () => {
        const existingList = JSON.parse(localStorage.getItem('wishlist'))
        let updateList = [];
        if (existingList) {
            const isDuplicate = existingList.some(product => product.id === id)
            if (isDuplicate) {

                // SweetAlert 2 
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "This product is already in your wishlist !",
                    confirmButtonText: "Got it !",
                    footer: '<p style="color:#888;">💡 Visit your <b>Wishlist</b> page to manage items.</p>'
                });
                return;
            }
            updateList = [...existingList, furniture]
        } else {
            updateList.push(furniture);
        }
        localStorage.setItem('wishlist', JSON.stringify(updateList));
    }



    //----------------------

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
                    <div className='flex items-center text-[18px] font-bold text-gray-600'><span className='text-2xl'><TbCurrencyTaka /></span><span>{price}</span></div>
                </div>
                <div className='flex gap-2'>
                    <Link onClick={() => handleAddToWishList()} className='btn btn-secondary btn-sm mt-4 flex-1'>Add To WishList</Link>
                    <Link to={`/products/${id}`} className='btn btn-secondary btn-sm mt-4 flex-1'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ShowFurniture;