/* eslint-disable no-unused-vars */
import React from "react";
import heroImage from "../assets/hero.png"; // Keep the same uploaded image

const SubHero = ({ heading }) => {
  return (
    <section
      className="relative w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
        {heading}
      </h1>
    </section>
  );
};

export default SubHero;