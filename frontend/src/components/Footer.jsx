import React from "react";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              F
            </div>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              L
            </div>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              T
            </div>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              I
            </div>
          </a>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-8 mb-6">
            <Link to='/services' className='text-gray-600 hover:text-gray-800'>Services</Link>
            <Link to='/about' className='text-gray-600 hover:text-gray-800'>About</Link>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 mb-6" />

        {/* Footer Bottom */}
        <div className="flex justify-between items-center text-gray-600 text-sm">
          {/* Left Section */}
          <div>
            <strong className="text-gray-800 text-lg">dotnext</strong>
            <p>123 Main Street, City, State 11111</p>
          </div>
          {/* Right Section */}
          <p>Copyright © 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
