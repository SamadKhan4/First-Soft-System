/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../components/SubHero";

const ContactUs = () => {
  return (
    <div>
      {/* Top SubHero */}
      <SubHero heading="Contact Us" />

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12">
        
        {/* Left: Contact Info */}
        <div className="lg:w-1/2 flex flex-col space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Grow Your Business With Our <span className="text-blue-800">Expertise</span>
          </h2>
          <p className="text-gray-700">
            Thank you for considering First Soft Systems as your staffing partner. We value your interest and look forward to assisting you with your staffing needs. Please feel free to reach out to us using the following contact information:
          </p>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            {/* Phone */}
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded">
              <span className="font-semibold">Contact:</span>
              <span>+91 8702102450 | +1 479 696 9788</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded">
              <span className="font-semibold">Email Address:</span>
              <span>hr-manager@firstsoftsystems.com</span>
            </div>

            {/* Office Address */}
            <div className="flex flex-col space-y-1 bg-gray-100 p-4 rounded">
              <span className="font-semibold">Office Address:</span>
              <span>H. No. 1–36/1/12/19, Vemana Colony, Chandanagar, Hyderabad, Tirumalagiri, Telangana, India, 500050</span>
              <span>First Soft Systems 1116 S Walton Blvd Suite #163, Bentonville, AR 72712</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:w-1/2">
          <form className="flex flex-col space-y-4 bg-white p-6 rounded shadow">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <textarea
              placeholder="Comment"
              className="border border-gray-300 rounded px-4 py-2 w-full h-32"
            />
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-700 w-max"
            >
              Send application
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.181901326189!2d79.05012981536414!3d21.145800685991926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c8c7f2f3f3f3%3A0x3f0f0f0f0f0f0f0f!2sNagpur%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Office Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
