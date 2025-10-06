import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const WishList = () => {
    const [wishlist, setWishlist] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(savedList);
    }, []);


    const handleRemove = (id) => {
        const updatedList = wishlist.filter(item => item.id !== id);
        setWishlist(updatedList);
        localStorage.setItem('wishlist', JSON.stringify(updatedList));
    };

    const sortedItem = (() => {
        if (sortOrder === 'price-asc') {
            return [...wishlist].sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'price-dsc') {
            return [...wishlist].sort((a, b) => b.price - a.price);
        } else {
            return wishlist;
        }
    })();

    return (
        <div className="p-2 md:p-4 mt-6">
            <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-600">
                    Total Products: {wishlist.length}
                </h2>

                <div className="dropdown dropdown-left dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1">Sort</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><button onClick={() => setSortOrder('price-asc')}>Price Ascending</button></li>
                        <li><button onClick={() => setSortOrder('price-dsc')}>Price Descending</button></li>
                    </ul>
                </div>
            </div>

            <div>
                {sortedItem.map((product) => (
                    <div key={product.id} className="border border-gray-200 rounded-lg p-2 my-4 shadow flex justify-between items-center">
                        <div className="flex gap-2 md:gap-5 items-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-[80px] h-[70px] md:w-[100px] md:h-[80px] object-cover rounded" />
                            <div>
                                <p className="text-[15px] md:text-xl md:mt-2 font-medium">{product.name}</p>
                                <div className="flex items-center gap-5 md:gap-20">
                                    <p className="text-gray-500 text-[14px] mt-2 ">{product.category}</p>
                                    <span className="font-semibold text-[14px] text-gray-500 mt-3">{product.price} Tk</span>
                                </div>
                            </div>
                        </div>


                        <button
                            onClick={() => handleRemove(product.id)}
                            className="btn btn-secondary btn-sm">Remove
                        </button>
                    </div>
                ))}
            </div>

            {/* Chart  */}
            <div className='space-y-3 mt-8'>
                <h3 className='text-lg md:text-xl text-gray-600 font-semibold'>Wishlist Summery</h3>
                <div className='bg-base-100 border rounded-xl p-4 h-80'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <BarChart data={wishlist}>
                            <CartesianGrid strokeDasharray={'3 3'}></CartesianGrid>
                            <XAxis dataKey={'category'}></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Bar dataKey={'price'} fill='#82ca9d'></Bar>
                            <BarChart></BarChart>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default WishList;
