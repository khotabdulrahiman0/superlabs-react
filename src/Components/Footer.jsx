import React from 'react';
import logo from '../assets/logo-white.png'; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="1MDM Logo" className="mb-4 w-24" />
          <p className="text-sm text-gray-300">One Medical Devices<br />Market Place</p>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">Platform</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Sell on 1MDM</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Brands</li>
          </ul>
        </div>

        {/* Press Room & Policies */}
        <div>
          <h3 className="font-bold text-white mb-4">Press Room</h3>
          <ul className="space-y-2 text-gray-300 text-sm mb-6">
            <li>Images & B-roll</li>
          </ul>
          <h3 className="font-bold text-white mb-2">Policies</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Delivery Information</li>
          </ul>
        </div>

        {/* Reach Us */}
        <div>
          <h3 className="font-bold text-white mb-4">Reach Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Corporate Information</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
