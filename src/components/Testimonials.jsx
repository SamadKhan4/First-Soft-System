/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import bg from "../assets/testibg.png"; // Background image
import testimonialImage from "../assets/testimonials.png";

const testimonials = [
  {
    id: 1,
    name: "Ravi Zha",
    role: "Business Client",
    text: "First Soft Systems helped us find qualified professionals quickly and efficiently. Their recruitment team understood our requirements perfectly and delivered excellent candidates within a short time.",
    stars: 5,
    image: testimonialImage,
  },
  {
    id: 2,
    name: "Savita Singh",
    role: "Freelance Talent",
    text: "First Soft Systems connected me with great job opportunities that matched my skills and career goals. The recruitment process was smooth, and the team provided excellent support throughout.",
    stars: 5,
    image: testimonialImage,
  },
  {
    id: 3,
    name: "John Doe",
    role: "Recruitment Client",
    text: "First Soft Systems provided outstanding recruitment services. They understood our hiring needs and delivered top-notch candidates that fit our company culture. Highly recommended!",
    stars: 5,
    image: testimonialImage,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  return (
    <section
      className="relative w-full py-15 bg-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left: Text Content */}
        <div className="lg:w-1/2 flex flex-col space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold">
            What Our <span className="text-blue-800">Clients Say</span>
          </h2>
          <p className="text-gray-600">
            Trusted by businesses across industries for delivering reliable staffing and recruitment solutions.
          </p>

          {/* Stars */}
          <div className="flex items-center space-x-1">
            {Array.from({ length: testimonial.stars }).map((_, idx) => (
              <FaStar key={idx} className="text-yellow-400 w-5 h-5" />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 mt-2">{testimonial.text}</p>

          {/* Client Info */}
          <div className="flex items-center space-x-3 mt-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex space-x-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === current ? "bg-blue-800" : "bg-gray-300"
                }`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>

        {/* Right: Testimonial Image */}
        <div className="lg:w-1/2 flex justify-end">
          <img
            src={testimonial.image}
            alt="Clients"
            className="w-full max-w-md rounded-[24px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;