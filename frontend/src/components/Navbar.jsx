import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/QuickLearn/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-4xl font-mono font-semibold whitespace-nowrap text-black">QuickLearn</span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div
            className={`fixed inset-0 z-50 bg-white border-t border-gray-100 md:static md:w-auto md:border-0 md:bg-transparent md:flex md:items-center md:space-x-8 ${isMenuOpen ? 'block' : 'hidden'}`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:p-0">
              <li>
                <Link
                  to="/QuickLearn/"
                  className="block py-2 px-3 text-black bg-gray-100 rounded md:bg-transparent md:text-black md:p-0"
                  aria-current="page"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/QuickLearn/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/QuickLearn/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
