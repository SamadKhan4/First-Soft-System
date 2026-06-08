/* eslint-disable no-unused-vars */
import React from "react";
import whyImage from "../assets/Whychoose.png"; // replace with your uploaded image

const WhyChooseUs = () => {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start  ">
          <img
            src={whyImage}
            alt="Why Choose Us"
            className="w-full max-w-md lg:max-w-lg rounded-[24px] object-cover"
          />
        </div>

        {/* Right Text & Bullet Points */}
        <div className="lg:w-1/2 flex flex-col space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold">
            Why Businesses Choose <span className="text-blue-800">First Soft Systems</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg lg:text-lg">
            We combine recruitment expertise with a practical hiring approach to deliver better workforce solutions.
          </p>

          {/* Bullet Points */}
          <ul className="list-none space-y-2 text-gray-700">
            <li>✔ Industry-specific recruitment knowledge</li>
            <li>✔ Strong candidate screening process</li>
            <li>✔ Faster hiring support</li>
            <li>✔ Flexible staffing solutions</li>
            <li>✔ Experienced recruitment team</li>
            <li>✔ Reliable client support</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;