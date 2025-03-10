import React from "react";
import { FaStar, FaGraduationCap, FaUsers, FaShieldAlt } from "react-icons/fa";
import Application from "./Application";

const features = [
  { icon: <FaStar />, title: "Exclusive Freelance Opportunities", desc: "Get hired by top startups" },
  { icon: <FaGraduationCap />, title: "Skill Growth & Mentorship", desc: "Learn from industry experts" },
  { icon: <FaUsers />, title: "Community & Networking", desc: "Connect with like-minded professionals" },
  { icon: <FaShieldAlt />, title: "Financial Security", desc: "Stable income, benefits, & seamless payments" },
];

const FreelancePage = () => {
  return (
    <div className="bg-white text-black py-20 w-full">
      {/* Hero Section */}
      {/* <div className="text-center max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          We are Making Freelancing Mainstream
        </h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Launch your freelance career with stability and growth
        </p>
        <button className="mt-6 px-8 py-3 text-lg bg-black text-white rounded-lg hover:bg-gray-900 transition duration-300">
          Join the League
        </button>
      </div> */}

      {/* Features Section */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 max-w-7xl mx-auto px-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-200 p-8 rounded-lg text-center shadow-md flex flex-col items-center">
            <div className="text-5xl text-black mb-4">{feature.icon}</div>
            <h4 className="font-semibold text-xl">{feature.title}</h4>
            <p className="text-gray-500 text-md">{feature.desc}</p>
          </div>
        ))}
      </div> */}

      {/* Full-Width Application Section */}
      <div className="w-full">
      
      </div>

      {/* Final Call to Action */}
      {/* <div className="text-center mt-24 max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-bold">🚀 Ready to build with the best?</h3>
        <button className="mt-6 px-8 py-3 text-lg bg-black text-white rounded-lg hover:bg-gray-900 transition">
          Are you talent?
        </button>
      </div> */}
    </div>
  );
};

export default FreelancePage;
