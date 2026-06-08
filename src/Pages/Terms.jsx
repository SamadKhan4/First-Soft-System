import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const termsSections = [
  {
    title: "1. Introduction",
    content:
      "Welcome to First Soft Systems. By accessing and using our website (firstsoftsystems.com), services, or resources, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our services.",
  },
  {
    title: "2. Acceptance of Terms",
    content:
      "By visiting or using our website and services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions. If you do not agree to any part of these terms, you must not use our website or services.",
  },
  {
    title: "3. Services",
    content:
      "First Soft Systems provides staffing, recruitment, and workforce solutions, including Permanent Hiring, Contract Staffing, Recruitment Process Outsourcing (RPO), and Digital Hiring Solutions. All services are provided in accordance with the terms outlined on this website and any applicable agreements signed between the client and First Soft Systems.",
  },
  {
    title: "4. User Obligations",
    content: "When using our website or services, you agree to:",
    items: [
      "Provide accurate and complete information when submitting forms or requests.",
      "Use our website and services for lawful purposes only.",
      "Not misuse, copy, reproduce, or interfere with any content or functionality of the website.",
      "Comply with all applicable laws and regulations.",
    ],
  },
  {
    title: "5. Privacy & Data Protection",
    content:
      "Any personal or business information collected through our website or services is governed by our Privacy Policy. By using our services, you consent to the collection, processing, and storage of data as described in the Privacy Policy.",
  },
  {
    title: "6. Intellectual Property",
    content:
      "All content, design, text, graphics, logos, and images on this website are the property of First Soft Systems or its content providers and are protected by intellectual property laws. You may not reproduce, distribute, or use any content from the website without prior written consent from First Soft Systems.",
  },
  {
    title: "7. Limitation of Liability",
    content:
      "First Soft Systems shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising out of the use or inability to use our services or website. This includes, but is not limited to, errors, omissions, or inaccuracies in the content provided.",
  },
  {
    title: "8. Third-Party Links",
    content:
      "Our website may contain links to third-party websites. First Soft Systems is not responsible for the content, privacy policies, or practices of any third-party websites. Accessing these links is at your own risk.",
  },
  {
    title: "9. Changes to Terms",
    content:
      "First Soft Systems reserves the right to update or modify these Terms & Conditions at any time without prior notice. The latest version of the Terms will be posted on the website. Continued use of the website or services constitutes acceptance of any changes.",
  },
  {
    title: "10. Governing Law",
    content:
      "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms will be subject to the exclusive jurisdiction of the courts in India.",
  },
];

const Terms = () => {
  return (
    <main className="bg-white py-12">
      <section className="max-w-6xl mx-auto px-6 lg:px-8 text-slate-900">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-10">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-sm leading-6">
          {termsSections.map((section) => (
            <section key={section.title}>
              <h2 className="font-semibold mb-1">{section.title}</h2>
              <p>{section.content}</p>
              {section.items && (
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h2 className="font-semibold mb-5">11. Contact Information</h2>
          <div className="grid gap-5 md:grid-cols-3 text-sm">
            <div className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 text-blue-800" />
              <div>
                <p className="uppercase text-xs text-slate-500">Address</p>
                <p>First Soft Systems 1116 S Walton Blvd Suite #163, Bentonville, AR 72712</p>
              </div>
            </div>
            <div className="flex gap-3">
              <FaEnvelope className="mt-1 text-blue-800" />
              <div>
                <p className="uppercase text-xs text-slate-500">Email</p>
                <a href="mailto:hr-manager@firstsoftsystems.com" className="hover:text-blue-800">
                  hr-manager@firstsoftsystems.com
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <FaPhoneAlt className="mt-1 text-blue-800" />
              <div>
                <p className="uppercase text-xs text-slate-500">Phone</p>
                <a href="tel:+918702102450" className="hover:text-blue-800">
                  +91 8702102450
                </a>
                <br />
                <a href="tel:+14796969788" className="hover:text-blue-800">
                  +1 479 696 9788
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Terms;
