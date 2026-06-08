/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo.png"; // replace with your footer logo
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import bg from "../assets/footer.png"; // replace with your footer background image


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }} >
      {/* Call to Action */}
      <div className="text-center py-12 px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Join Hundreds of Businesses That Trust First Soft Systems
        </h2>
        <p className="text-gray-300 mb-6">
          From permanent hiring to workforce solutions, we help organizations build stronger teams with the right talent.
        </p>
        <a href="/contact" className="inline-block bg-blue-800 hover:bg-blue-700 px-6 py-3 rounded text-white font-medium">
          Start Hiring Today
        </a>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-700 py-10">
        {/* Logo & About */}
        <div className="flex flex-col space-y-4">
          <img src={logo} alt="Logo" className="w-32 bg-white p-2 rounded" />
          <p className="text-gray-400 text-sm">
            About Company. <br />
            Welcome to First Soft Systems, your trusted partner in the world of staffing solutions in the United States.
          </p>
          <div className="flex space-x-3 mt-2">
            <a href="#"><FaFacebookF className="w-5 h-5 hover:text-gray-300" /></a>
            <a href="#"><FaInstagram className="w-5 h-5 hover:text-gray-300" /></a>
            <a href="#"><FaLinkedinIn className="w-5 h-5 hover:text-gray-300" /></a>
            <a href="#"><FaTwitter className="w-5 h-5 hover:text-gray-300" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <a href="/" className="text-gray-400 hover:text-white">Home</a>
          <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
          <a href="/blog" className="text-gray-400 hover:text-white">Blog</a>
          <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
        </div>

        {/* Services */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold mb-2">Services</h3>
          <a href="/services/permanent-hiring" className="text-gray-400 hover:text-white">Permanent Hiring</a>
          <a href="/services/recruitment-process-outsourcing" className="text-gray-400 hover:text-white">Recruitment Process Outsourcing</a>
          <a href="/services/digital-hiring" className="text-gray-400 hover:text-white">Digital Hiring</a>
          <a href="/services/contract-staffing" className="text-gray-400 hover:text-white">Contract Staffing</a>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold mb-2">Contact</h3>
          <a href="tel:+918702102450" className="text-gray-400 hover:text-white">+91 8702102450</a>
          <a href="tel:+14796969788" className="text-gray-400 hover:text-white">+1 479 696 9788</a>
          <p className="text-gray-400 text-sm">
            H. No. 1–36/1/12/19, Vemana Colony, Chandanagar, Hyderabad, Tirumalagiri, Telangana, India, 500050 <br />
            First Soft Systems 1116 S Walton Blvd Suite #163, Bentonville, AR 72712
          </p>
          <a href="mailto:hr-manager@firstsoftsystems.com" className="text-gray-400 hover:text-white">hr-manager@firstsoftsystems.com</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 py-4 text-center text-gray-400 text-sm">
        <a href="/privacy" className="hover:text-white">Privacy Policy</a>
        &nbsp;|&nbsp;
        <a href="/terms" className="hover:text-white">Terms & Conditions</a>
        <br />
        Copyright © 2026 Designed and developed by <a href="#" className="text-blue-800 hover:underline">Adbornsolutions</a>
      </div>
    </footer>
  );
};

export default Footer;
