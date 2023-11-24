import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch, faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logout from '../Logout/Logout';
import { UserContext } from '../../Context';

export default function Header({ isLoggedIn, username }) {
    const { userData } = useContext(UserContext);
    const [showProfilePopup, setShowProfilePopup] = useState(false);

    const toggleProfilePopup = () => {
        setShowProfilePopup(!showProfilePopup);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-orange-300 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 mr-2 fill-current text-gray-800"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M0 2v16c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V2c0-1.104-.896-2-2-2H2C.896 0 0 .896 0 2zm16 14H4V4h12v12z"
                                />
                            </svg>
                            <h3 className="text-4xl font-bold text-blue-600">eBooks</h3>
                        </div>
                    </Link>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-8 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-2 top-2 text-gray-500"
                        />
                    </div>

                    <div className="flex items-center lg:order-2">
                        {userData.username ? (
                            <>


                                <div className="relative">
                                    <button
                                        onClick={toggleProfilePopup}
                                        className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                    >
                                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                                        Profile
                                    </button>

                                    {showProfilePopup && (
                                        <div className="fixed top-0 right-0 h-full w-96 bg-white border border-gray-200 shadow-md rounded-lg p-4 overflow-y-auto">
                                            {/* Adjust the width, height, and styles as needed */}
                                            <div className="fixed top-0 right-0 h-full w-96 bg-yellow-400 border border-gray-200 shadow-md rounded-lg p-4 overflow-y-auto">
                                                <div>
                                                    <div className="flex items-center mb-4 relative">
                                                        <FontAwesomeIcon icon={faUserCircle} className="text-gray-500 text-4xl mr-2" />
                                                        <h3 className="text-xl font-semibold mb-4 mt-4">{userData.username}</h3>
                                                        <button
                                                            onClick={toggleProfilePopup}
                                                            className="absolute top-5 right-5 -mt-8 -mr-8 bg-white rounded-full p-2 focus:outline-none"
                                                        >
                                                            <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
                                                        </button>
                                                    </div>
                                                    <hr className="my-2" />
                                                    <p className="text-gray-600 mb-2">Email: {userData.email}</p>
                                                    <hr className="my-2" />
                                                    <div className='flex-column'>
                                                        <Link to="/settings" onClick={toggleProfilePopup} className="text-blue-500 hover:underline mb-2 block">
                                                            Settings
                                                        </Link>
                                                        <hr className="my-2" />
                                                        <Link to="/feedback" onClick={toggleProfilePopup} className="text-blue-500 hover:underline mb-2 block">
                                                            Feedback
                                                        </Link>
                                                        <hr className="my-2" />
                                                        <Link to="/askquestions" onClick={toggleProfilePopup} className="text-blue-500 hover:underline mb-2 block">
                                                           Ask Questions
                                                        </Link>
                                                        <hr className="my-2" />
                                                        <Link to="/helpcenter" onClick={toggleProfilePopup} className="text-blue-500 hover:underline mb-2 block">
                                                           Help Center
                                                        </Link>
                                                        <hr className="my-2" />
                                                        <Link to="/chatting" onClick={toggleProfilePopup} className="text-blue-500 hover:underline mb-2 block">
                                                          Chat with us
                                                        </Link>
                                                        <hr className="my-2" />
                                                        <Link to="/cart" onClick={toggleProfilePopup} className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none block">
                                                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                                                            Book Requests
                                                        </Link>
                                                        <hr className="my-2" />
                                                    </div>
                                                </div>
                                                <div className="absolute bottom-10 right-50">
                                                    <Logout />
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/signup"
                                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    Sign Up
                                </Link>
                                <Link
                                    to="/login"
                                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    Log In
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-900" : "text-orange-900"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-900" : "text-orange-900"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

{/* <Link to="/" className="flex items-center">
<div className="flex items-center">
    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-purple-500 text-white">
        <h3 className="text-xl font-bold">e</h3>
    </div>
    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-yellow-500 text-white -ml-3">
        <h3 className="text-xl font-bold">B</h3>
    </div>
    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-green-500 text-white -ml-3">
        <h3 className="text-xl font-bold">o</h3>
    </div>
    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-500 text-white -ml-3">
        <h3 className="text-xl font-bold">o</h3>
    </div>
    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-red-500 text-white -ml-3">
        <h3 className="text-xl font-bold">k</h3>
    </div>
    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-indigo-500 text-white -ml-3">
        <h3 className="text-xl font-bold">s</h3>
    </div>
</div>
</Link> */}