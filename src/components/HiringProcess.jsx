/* eslint-disable no-unused-vars */
import React from "react";
import { FaClipboardList, FaUsers, FaComments, FaUserFriends } from "react-icons/fa";

const steps = [
  {
    number: "1",
    icon: <FaClipboardList className="w-6 h-6 text-white" />,
    title: "Job Requirement Analysis",
    desc: "We analyze your hiring needs and define the perfect candidate profile.",
  },
  {
    number: "2",
    icon: <FaUsers className="w-6 h-6 text-white" />,
    title: "Sourcing Candidates",
    desc: "We search, screen, and shortlist the most suitable candidates.",
  },
  {
    number: "3",
    icon: <FaComments className="w-6 h-6 text-white" />,
    title: "Interview & Selection",
    desc: "We coordinate interviews and assist in selecting the best fit.",
  },
  {
    number: "4",
    icon: <FaUserFriends className="w-6 h-6 text-white" />,
    title: "Onboarding Support",
    desc: "We help onboard selected candidates and ensure a smooth transition.",
  },
];

const HiringProcess = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our Hiring <span className="text-blue-800">Process</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            We follow a structured approach to ensure the best talent for your business.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Numbered Circle with Icon */}
              <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-blue-800 mb-4">
                <span className="absolute top-0 left-0 -mt-4 -ml-4 bg-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold text-blue-800">
                  {step.number}
                </span>
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;