/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlinePhone, HiOutlineMail, HiOutlineClock } from "react-icons/hi";

const TopNavbar = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full">

      {/* Left: Follow Us */}
      <div className="flex items-center space-x-3 py-2 px-4 bg-[#1877F2] text-white">
        <span className="font-medium">Follow Us:</span>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="w-4 h-4 hover:text-gray-200" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-4 h-4 hover:text-gray-200" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="w-4 h-4 hover:text-gray-200" />
        </a>
      </div>

      {/* Right: Contact Info */}
      <div className="flex flex-col sm:flex-row sm:space-x-6 items-center py-2 px-4 bg-[#0F4C81] text-white flex-1 justify-end">
        
      </div>

    </div>
  );
};

export default TopNavbar;