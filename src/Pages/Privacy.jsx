import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const privacySections = [
  {
    title: "1. Information We Collect",
    content: "a. Personal Information",
    description: "We may collect information that you provide directly when you:",
    items: [
      "Submit inquiry forms",
      "Register for services",
      "Subscribe to newsletters",
      "Apply for jobs or recruitment services",
    ],
    after:
      "Examples of personal information: Name, email address, phone number, company details, job title.",
    secondContent: "b. Non-Personal Information",
    secondDescription:
      "We may also collect information automatically when you visit our website, such as:",
    secondItems: [
      "IP address",
      "Browser type and version",
      "Pages visited and time spent",
      "Cookies and usage data",
    ],
  },
  {
    title: "2. How We Use Your Information",
    description: "We use the collected information to:",
    items: [
      "Provide staffing and recruitment services",
      "Respond to inquiries and support requests",
      "Improve our website and service offerings",
      "Send updates, newsletters, and promotional information (with consent)",
      "Comply with legal and regulatory requirements",
    ],
  },
  {
    title: "3. Information Sharing & Disclosure",
    description:
      "We do not sell, rent, or trade your personal information to third parties. Information may be shared with:",
    items: [
      "Service providers or partners assisting with recruitment and hiring services",
      "Legal authorities, if required by law or in the case of a legal dispute",
      "Third parties involved in business operations, strictly on a need-to-know basis",
    ],
  },
  {
    title: "4. Cookies & Tracking",
    content:
      "Our website uses cookies and similar tracking technologies to enhance user experience, analyze traffic, and improve site functionality. You may disable cookies in your browser settings, but some features of the website may not function properly without them.",
  },
  {
    title: "5. Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, or misuse. While we strive to protect your information, no online transmission can be guaranteed as 100% secure.",
  },
  {
    title: "6. Data Retention",
    content:
      "We retain your personal information only as long as necessary for the purposes outlined in this policy or to comply with legal obligations. Once the information is no longer needed, it will be securely deleted or anonymized.",
  },
  {
    title: "7. Third-Party Links",
    content:
      "Our website may contain links to external websites. First Soft Systems is not responsible for the privacy practices or content of third-party sites. Accessing these links is at your own discretion.",
  },
  {
    title: "8. Your Rights",
    description: "You have the right to:",
    items: [
      "Access the personal information we hold about you",
      "Request correction or update of your data",
      "Request deletion of your personal data, subject to legal and contractual obligations",
      "Opt-out of receiving marketing communications",
    ],
    after:
      "To exercise your rights, please contact us using the details below.",
  },
  {
    title: "9. Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. The latest version will be posted on our website with the effective date. Continued use of our website or services constitutes acceptance of any changes.",
  },
];

const Privacy = () => {
  return (
    <main className="bg-white py-12">
      <section className="max-w-6xl mx-auto px-6 lg:px-8 text-slate-900">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm leading-6">
          {privacySections.map((section) => (
            <section key={section.title}>
              <h2 className="font-semibold mb-1">{section.title}</h2>
              {section.content && <p>{section.content}</p>}
              {section.description && <p>{section.description}</p>}
              {section.items && (
                <ul className="list-disc pl-8 mt-1 space-y-1">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.after && <p className="mt-1">{section.after}</p>}
              {section.secondContent && <p className="mt-1">{section.secondContent}</p>}
              {section.secondDescription && <p>{section.secondDescription}</p>}
              {section.secondItems && (
                <ul className="list-disc pl-8 mt-1 space-y-1">
                  {section.secondItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h2 className="font-semibold mb-5">10. Contact Information</h2>
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

export default Privacy;
