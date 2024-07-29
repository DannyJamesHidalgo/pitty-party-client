import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FaRectangleList } from "react-icons/fa6";
import Logo from './Logo.jsx';
import { HiMenu } from "react-icons/hi";


export const NavBar = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
               
               <div>
                        <a href="/" className="text-white no-underline hover:text-gray-300 hover:no-underline">
                            {<Logo/>}
                        </a>
                    </div>
               
                <div className="flex justify-between items-center">
                    
                    <div className="">
                        <button onClick={toggleDropdown} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white focus:outline-none focus:text-white focus:border-white">
                            <span className="text-lg">{<HiMenu/>}</span>
                        </button>
                        <div className={`absolute mt-2 w-48 py-2 bg-white border border-gray-200 rounded-md shadow-xl  ${showDropdown ? '' : 'hidden'}`}>
                            {localStorage.getItem("pitty_token") !== null ? (
                                <>
                                    <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/myadoptions">My Adoptions</NavLink>
                                    <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/">Home</NavLink>
                                    <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/events">Events</NavLink>
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
