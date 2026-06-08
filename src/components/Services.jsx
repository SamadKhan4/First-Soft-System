import React from "react";
import our1 from "../assets/our1.png";
import our2 from "../assets/our2.png";
import our3 from "../assets/our3.png";
import our4 from "../assets/our4.png";

const servicesData = [
  {
    image: our1,
    title: "Permanent Hiring",
    desc: "Find qualified professionals for long-term business growth.",
    link: "/services/permanent-hiring",
  },
  {
    image: our2,
    title: "Contract Staffing",
    desc: "Hire skilled talent for short-term, project-based, or flexible workforce needs.",
    link: "/services/contract-staffing",
  },
  {
    image: our3,
    title: "Recruitment Process Outsourcing",
    desc: "Outsource your recruitment process and reduce hiring time with expert support.",
    link: "/services/recruitment-process-outsourcing",
  },
  {
    image: our4,
    title: "Digital Hiring Solutions",
    desc: "Use modern recruitment methods to source, screen, and onboard candidates efficiently.",
    link: "/services/digital-hiring",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#EEF4F4] py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Our Staffing & <span className="text-blue-800">Recruitment Services</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            We offer end-to-end hiring solutions designed to meet your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-2 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 flex-1">{service.desc}</p>
              <a
                href={service.link}
                className="mt-4 text-blue-800 font-medium inline-flex items-center hover:underline"
              >
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
