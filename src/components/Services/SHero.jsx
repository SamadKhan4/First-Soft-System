/* eslint-disable no-unused-vars */
import React from "react";

const SHero = ({ imageSrc, heading, highlightText, descriptionLines }) => {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        
        {/* Left Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={imageSrc}
            alt={heading}
            className="w-[300px] lg:w-[550px] rounded-[24px] object-cover"
          />
        </div>

        {/* Right Text Content */}
        <div className="lg:w-1/2 flex flex-col space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {heading} <span className="text-blue-800">{highlightText}</span>
          </h2>

          {descriptionLines.map((line, idx) => (
            <p key={idx} className="text-gray-700 text-base sm:text-lg lg:text-xl">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SHero;