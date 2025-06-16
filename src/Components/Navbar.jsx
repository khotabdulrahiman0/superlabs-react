import React from "react";
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="w-full border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="text-gray-500 text-lg font-normal">
            World's Largest Medical Equipment Market Place
          </div>
          <div>
            <a href="/account" className="text-gray-800 font-semibold hover:underline mr-2">
              My account
            </a>
            <span className="text-gray-500">|</span>
            <a href="/contact" className="text-gray-800 font-semibold hover:underline ml-2">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {/* Logo and Nav */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={logo}
            alt="1MDM Logo"
            className="h-12"
          />
        </div>
        <nav className="flex space-x-8">
          <a href="/aboutus" className="text-gray-600 hover:text-red-600 text-lg font-normal">
            About Us
          </a>
          <a href="/our-story" className="text-gray-600 hover:text-red-600 text-lg font-normal">
            Our Story
          </a>
          <a href="/" className="text-gray-600 hover:text-red-600 text-lg font-normal">
            Sell on 1MDM
          </a>
          <a href="/pricing" className="text-gray-600 hover:text-red-600 text-lg font-normal">
            Pricing
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;