/* eslint-disable no-unused-vars */
import React from "react";
import b1 from "../assets/b1.png"; // replace with your uploaded images
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";

const blogs = [
  {
    id: 1,
    image: b1,
    date: "February 03, 2026",
    title: "How to Build a Strong Hiring Strategy",
  },
  {
    id: 2,
    image: b2,
    date: "February 20, 2026",
    title: "Why Contract Staffing Is Growing Fast",
  },
  {
    id: 3,
    image: b3,
    date: "February 14, 2026",
    title: "The Role of Digital Hiring in Modern Recruitment",
  },
  {
    id: 4,
    image: b4,
    date: "April 9, 2026",
    title: "Top Industries Hiring Skilled Professionals Today",
  },
];

const Blog = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Latest Hiring Insights
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            Explore recruitment trends, staffing strategies, and workforce solutions to help your business hire smarter.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-50 object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col flex-1">
                <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                <h3 className="font-semibold text-lg mb-4">{blog.title}</h3>
                <a
                  href="/blog"
                  className="mt-auto text-blue-800 font-medium inline-flex items-center hover:underline"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
