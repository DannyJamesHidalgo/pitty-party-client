import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FaRectangleList } from "react-icons/fa6";
import Logo from './Logo.jsx';
import { HiMenu } from "react-icons/hi";


export const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-6 py-3">
                {/* Use flex-row to ensure horizontal layout on all screens, including smartphones */}
                <div className="flex flex-row items-center justify-between">
                    <div className="w-full md:w-auto mb-4 md:mb-0">
                        <a href="/" className="text-white no-underline hover:text-gray-300 hover:no-underline block md:inline-block">
                            {<Logo/>}
                            </a>
                    </div>
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white w-full md:w-auto text-center md:text-left sm:block hidden">Soft eyes, big smiles, loyal hearts.</h1>
                    <div className="relative group">
                        <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white focus:outline-none focus:text-white focus:border-white">
                            <span className="text-lg">{<HiMenu/>}</span>
                        </button>
                        {/* Trigger button */}
                        <div className={`absolute right-0 mt-2 w-48 max-w-xs bg-white border border-gray-200 rounded-md shadow-xl transform scale-95 opacity-0 transition-transform duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 z-50`}>
                            {/* Dropdown content */}
                            {localStorage.getItem("pitty_token") !== null ? (
                                <>
                                    <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/myadoptions">My Adoptions</NavLink>
                                    <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/">Home</NavLink>
                                    <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/events">Events</NavLink>
                                    <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/AllDogs">All Dogs</NavLink>
                                    <button className="block w-full px-4 py-2 text-sm text-red-500 hover:bg-red-100" onClick={() => {
                                        localStorage.removeItem("pitty_token");
                                        navigate('/login');
                                    }}>
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/login">Login</NavLink>
                                    <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/register">Register</NavLink>
                                </>
                            )}
    </div>
                        </div>
                    </div>
                </div>
            
        </nav>
        
    );
};
