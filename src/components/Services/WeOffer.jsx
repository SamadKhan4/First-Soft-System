/* eslint-disable no-unused-vars */
import React from "react";
import { FaSearch, FaClipboardCheck, FaCalendarAlt, FaChartLine, FaHandshake, FaUserCheck } from "react-icons/fa";

const offerings = [
  {
    icon: <FaSearch className="w-8 h-8 text-blue-800" />,
    title: "Talent Sourcing",
    desc: "Identifying high–potential candidates via multiple specialized channels and proprietary networks.",
  },
  {
    icon: <FaClipboardCheck className="w-8 h-8 text-blue-800" />,
    title: "Candidate Screening",
    desc: "Rigorous evaluation based on technical skills, professional background, and cultural alignment.",
  },
  {
    icon: <FaCalendarAlt className="w-8 h-8 text-blue-800" />,
    title: "Interview Coordination",
    desc: "Managing complex scheduling, feedback loops, and stakeholder communication seamlessly.",
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-blue-800" />,
    title: "Talent Assessment",
    desc: "Deep assessments including cognitive, behavioral, and technical testing for data–driven decisions.",
  },
  {
    icon: <FaHandshake className="w-8 h-8 text-blue-800" />,
    title: "Offer Management",
    desc: "Expert assistance in negotiations, compensation structuring, and candidate engagement.",
  },
  {
    icon: <FaUserCheck className="w-8 h-8 text-blue-800" />,
    title: "Onboarding Support",
    desc: "Strategic support during the transition phase to ensure long–term integration success.",
  },
];

const WeOffer = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            What We <span className="text-blue-800">Offer</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            Comprehensive end-to-end recruitment services tailored for excellence.
          </p>
        </div>

        {/* Offer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offer, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col p-6"
            >
              <div className="mb-4">{offer.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
              <p className="text-gray-600 text-sm">{offer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeOffer;