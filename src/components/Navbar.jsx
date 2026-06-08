/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className="relative z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="/" className="text-gray-800 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-800 hover:text-blue-600">About Us</a>

            {/* Service Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-blue-600">
                Service <FaAngleDown className="ml-1 text-sm" />
              </button>
              <div className="absolute left-0 top-full z-50 hidden w-64 bg-white py-2 shadow-lg group-hover:block">
                <a href="/services/permanent-hiring" className="block px-4 py-2 hover:bg-blue-100">Permanent Hiring</a>
                <a href="/services/recruitment-process-outsourcing" className="block px-4 py-2 hover:bg-blue-100">Recruitment Process Outsourcing</a>
                <a href="/services/digital-hiring" className="block px-4 py-2 hover:bg-blue-100">Digital Hiring</a>
                <a href="/services/contract-staffing" className="block px-4 py-2 hover:bg-blue-100">Contract Staffing</a>
              </div>
            </div>

            <a href="/blog" className="text-gray-800 hover:text-blue-600">Blog</a>
            <a href="/contact" className="text-gray-800 hover:text-blue-600">Contact Us</a>

            <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Let's Talk
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md" onClick={closeMobileMenu}>
          <a href="/" className="block px-4 py-2 hover:bg-blue-100">Home</a>
          <a href="/about" className="block px-4 py-2 hover:bg-blue-100">About Us</a>
          <div className="block px-4 py-2">
            <button className="flex items-center w-full justify-between text-gray-800 hover:text-blue-600">
              Service <FaAngleDown />
            </button>
            <div className="pl-4 mt-1">
              <a href="/services/permanent-hiring" className="block px-4 py-2 hover:bg-blue-100">Permanent Hiring</a>
              <a href="/services/recruitment-process-outsourcing" className="block px-4 py-2 hover:bg-blue-100">Recruitment Process Outsourcing</a>
              <a href="/services/digital-hiring" className="block px-4 py-2 hover:bg-blue-100">Digital Hiring</a>
              <a href="/services/contract-staffing" className="block px-4 py-2 hover:bg-blue-100">Contract Staffing</a>
            </div>
          </div>
          <a href="/blog" className="block px-4 py-2 hover:bg-blue-100">Blog</a>
          <a href="/contact" className="block px-4 py-2 hover:bg-blue-100">Contact Us</a>
          <a href="/contact" className="block px-4 py-2 mt-2 bg-blue-600 text-white rounded text-center hover:bg-blue-700">
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
