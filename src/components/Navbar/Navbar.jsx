import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink className="nav-btn" to="/">Home</NavLink>
                        <NavLink className="nav-btn" to="/products">Products</NavLink>
                        <NavLink className="nav-btn" to="/about">About</NavLink>
                        <NavLink className="nav-btn" to="/contact">Contact</NavLink>
                    </ul>
                </div>
                <Link className="text-xl md:text-2xl lg:text-3xl font-semibold text-pink-500" to="/">Home Decor</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink className="nav-btn btn-sm" to="/">Home</NavLink>
                    <NavLink className="nav-btn btn-sm" to="/products">Products</NavLink>
                    <NavLink className="nav-btn btn-sm" to="/about">About</NavLink>
                    <NavLink className="nav-btn btn-sm" to="/contact">Contact</NavLink>
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <NavLink className="nav-btn btn-sm" to="/wishlist">WishList</NavLink>
                <a className="btn btn-secondary btn-sm">Login</a>
                <a className="btn btn-secondary btn-sm hidden md:flex">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;