import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for menu and close

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header sticky top-0 z-50 bg-gray-100 shadow-md">
      <div className="nav-container flex justify-between items-center p-4 md:p-2">

        {/* Left Logo Section */}
        <Link to="/">
        <div className="left flex items-center ml-5 md:ml-10">
            
          <img
            src="https://cdnasd.countrydelight.in/cdproductimg/new-website/icon-512x512.png_1704437508084.png"
            alt="Logo"
            className="w-10 h-auto md:w-12"
          />
          <h5 className="ml-3 text-xs md:text-sm font-semibold text-gray-800">Deliver On</h5>
        </div>
        </Link>

        {/* Middle Links Section */}
        <div className={`middle absolute md:static left-0 w-full md:w-auto bg-gray-100 md:flex gap-4 lg:gap-8 md:items-center transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-16' : 'top-[-400px]'}`}>
          <Link to="/about" className="block text-gray-700 text-xs md:text-sm font-light hover:text-green-500 transition-colors p-4 md:p-0 text-center">Our Story</Link>
          <Link to="/products" className="block text-gray-700 text-xs md:text-sm font-light hover:text-green-500 transition-colors p-4 md:p-0 text-center">Products</Link>
          <Link to="/reviews" className="block text-gray-700 text-xs md:text-sm font-light hover:text-green-500 transition-colors p-4 md:p-0 text-center">Reviews</Link>
          <Link to="#" className="block text-gray-700 text-xs md:text-sm font-light hover:text-green-500 transition-colors p-4 md:p-0 text-center">Product Quality Report</Link>
        </div>

        {/* Right Button Section */}
        <div className="right hidden md:block">
          <button className="bg-green-500 text-white py-2 px-3 md:px-4 rounded-lg hover:bg-green-600 transition-colors text-xs md:text-sm">
            Download the App & Claim Offer Now
          </button>
        </div>

        {/* Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 text-2xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between bars and close icon */}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
