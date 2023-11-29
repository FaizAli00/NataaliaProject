import React from 'react';
import { Link } from 'react-router-dom';
import { IoCartSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";

const Navbar = () => {
    const navLinks = [
        { name: "home", link: "/", css: true },
        { name: "new arrivals", link: "/" },
        { name: "Products", link: "/" },
        { name: "about us", link: "/" },
        { name: "contact us", link: "/" },
    ];

    return (
        <>
            <div className="flex items-center justify-around py-5 px-4 font-serif">
                <div>
                    <h2 className="text-[#d97706] text-3xl font-bold">NATAALIA <span className=' text-indigo-800'>.</span></h2>
                </div>
                <div className="">
                    <ul className="flex gap-5 font-semibold">
                        {navLinks.map((item, ind) => (
                            <li key={ind} className={` ${item.css ? 'border-b-[#ff7200] border-b-[2px] border' : ''} cursor-pointer border border-transparent hover:border hover:border-b-[2px] hover:border-b-[#ff7200] transition-colors duration-300 ease-in-out capitalize`}>
                                {item.css ? (
                                    <Link to={item.link}>{item.name}</Link>
                                ) : (
                                    item.name
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex items-center gap-3 '>
                    <IoCartSharp className='text-[30px] text-[#ff7200] cursor-pointer' />
                    <MdFavorite className='text-[30px] text-[#ff7200] cursor-pointer' />

                    <Link to="/register">
                        <button className="btn bg-blue-500 text-black font-bold py-2 px-4 rounded hover:bg-[#ff7200] hover:text-white transition-all duration-300 delay-200">
                            Sign Up
                        </button>
                    </Link>
                    <Link to="/login">
                    <button className="btn bg-blue-500 text-black font-bold py-2 px-3 rounded hover:bg-[#ff7200] hover:text-white transition-all duration-300 delay-200">
                        Login
                    </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
