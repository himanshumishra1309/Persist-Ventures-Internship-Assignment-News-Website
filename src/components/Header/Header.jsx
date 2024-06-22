import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'

//NEW LEARNING(this question is asked in interviews): rather than using a tag we use link tag because in a tag the whole page is reloaded whereas the link tag prevents the relaoading of the whole page

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <style>
                {`
                    #mobile-menu {
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.3s ease-in-out;
                    }

                    #mobile-menu.block {
                        max-height: 500px; /* Adjust this value based on your content height */
                    }

                    @media (min-width: 1024px) {
                        #mobile-menu {
                            max-height: none;
                            overflow: visible;
                        }
                    }
                    @media (max-width: 1023px){ 
                        #mobile-menu{ 
                            width: 100%; 
                        } 
                    } 
                `}
            </style>
            <header className="shadow sticky top-0 z-50 w-full bg-white">
                <nav className="border-gray-200 px-4 lg:px-6 py-2.5 w-full">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712534400&semt=ais"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                        <button
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            onClick={toggleMobileMenu}
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0zm0 4a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0zm0 4a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <div className={`flex-grow items-center ${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex lg:justify-center lg:w-auto`} id="mobile-menu">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink
                                        to='/'
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        General
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/business'
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Business
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/world'
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        World
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/nation'
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Nation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/entertainment'
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Entertainment
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/health'
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Health
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/science'
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Science
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/sports'
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Sports
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/technology'
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Technology
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;

//usually using tailwind we directly write "className=" and add the css part but in NavLink we used callbacks in order to add the css art that is because we are adding n functionality that is isActive and that helps us to know which content are we actually viewing and changes the color of the text accordingly


    