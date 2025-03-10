import React from "react";
import { FaUsers, FaHandshake, FaShieldAlt, FaGlobe } from "react-icons/fa";

const features = [
  {
    icon: <FaUsers />,
    title: "Scale Your IT Freelance Workforce",
    desc: "Instantly access pre-vetted developers and tech experts.",
  },
  {
    icon: <FaHandshake />,
    title: "Effortless Hiring & Collaboration",
    desc: "Build agile teams and track projects in real time.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Flexible Payments",
    desc: "Escrow-based payments ensure freelancers get paid on time while startups earn yields on idle cash.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Payments, Zero Hassle",
    desc: "Flat fees, no FX markups, and fast settlements.",
  },
];

const StartupHiring = () => {
  return (
    <div className="bg-gray-100 border border-gray-300 py-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold leading-tight">
          For Startups – Hire & Scale with Ease
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Hire Talent from India's Top Tier Freelance Network
        </p>
        <button className="mt-6 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition duration-300">
          Join Now
        </button>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg text-center shadow-md flex flex-col items-center"
          >
            <div className="text-4xl text-black mb-4">{feature.icon}</div>
            <h4 className="font-semibold text-xl">{feature.title}</h4>
            <p className="text-gray-600 text-md mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
        <div className="flex items-center space-x-4">
          <FaUsers className="text-4xl text-gray-700" />
          <p className="text-gray-600 text-lg">
            Join 1000+ startups already hiring through our platform
          </p>
        </div>
        <button className="mt-6 md:mt-0 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition duration-300 flex items-center space-x-2">
          <span>Get Started</span>
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

export default StartupHiring;
