/* eslint-disable no-unused-vars */
import React from "react";

const Partners = ({
  imageSrc,         // main image
  title,            // heading text
  highlightText,    // text to highlight in blue
  descriptionLines, // array of description strings
  buttonText,       // optional button text
  buttonLink        // optional button link
}) => {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        
        {/* Left Image */}
        <div className="relative lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={imageSrc}
            alt={title}
            className="w-[300px] lg:w-[550px] rounded-[24px] object-cover"
          />
        </div>

        {/* Right Text Content */}
        <div className="lg:w-1/2 flex flex-col space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {title} <span className="text-blue-800">{highlightText}</span>
          </h2>

          {descriptionLines.map((line, idx) => (
            <p key={idx} className="text-gray-700 text-base sm:text-lg lg:text-xl">
              {line}
            </p>
          ))}

          {/* Optional Button */}
          {buttonText && (
            <a
              href={buttonLink || "#"}
              className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 w-max inline-block"
            >
              {buttonText} &rarr;
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Partners;