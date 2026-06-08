/* eslint-disable no-unused-vars */
import React from "react";
import heroImage from "../assets/MainHero.png"; // Your uploaded hero image
import { FaUsers, FaBuilding } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          className="w-full h-full object-cover"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Optional overlay */}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center min-h-screen">
        {/* Left Text & Buttons */}
        <div className="lg:w-1/2 flex flex-col space-y-6 text-white text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Connecting Businesses With <br />
            <span className="text-blue-800">The Right Talent</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-md mx-auto lg:mx-0">
            We provide reliable staffing, recruitment, and workforce solutions to help businesses hire skilled professionals across multiple industries.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start sm:space-x-4 space-y-4 sm:space-y-0 justify-center lg:justify-start mt-4">
            <a href="/contact" className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 flex items-center space-x-2">
              <FaUsers /> <span>Hire Talent</span>
            </a>
            <a href="/#services" className="border border-blue-900 text-white px-6 py-3 rounded hover:bg-blue-700/50 flex items-center space-x-2">
              <FaBuilding /> <span>Explore Services</span>
            </a>
          </div>
        </div>

        {/* Optional Right Image (if you want, currently empty) */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          {/* You can add a floating hero image here */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
