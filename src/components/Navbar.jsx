import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-10 py-5 flex items-center justify-between ">
        <Link to="/" className="text-2xl font-bold text-blue-500">
          goodspace
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative inline-block text-left">
            <span className="rounded-md shadow-sm">
              <button
                onClick={toggleMenu}
                type="button"
                className="flex justify-center w-full px-4 py-2 text-sm font-small text-gray-700 "
                id="menu-button"
              
              >
                Company
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </span>
            {isOpen && (
              <div
                className="origin-top-right absolute mt-2 w-56 justify-center  px-4 py-2 text-sm font-small text-gray-700"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    About Us
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Our Team
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                  >
                    Careers
                  </a>
                </div>
              </div>
            )}
          </div>
          <Link to="/pricing" className="hover:text-blue-700 text-sm text-gray-700">
            Pricing
          </Link>
          <Link to="/book-demo" className="px-4 py-2 rounded-md bg-white text-blue-400 border-2 border-blue-300 font-normal text-sm" >
            Book Demo
          </Link>
          <Link to="/login" className="px-4 py-2 rounded-md bg-white text-blue-400 border-2 border-blue-300 font-normal text-sm">
            Login/Signup
          </Link>
          <Link
  to="https://goodspace.ai/job-seeker"
  className="px-4 py-2 rounded-md bg-sky-600 text-white relative overflow-hidden group"
>
  <span className="relative z-10">Looking for a job?</span>
  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out -skew-x-12"></span>
</Link>

        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            
          </button>
        </div>
      </div>
    
    </nav>
  );
};

export default Navbar;