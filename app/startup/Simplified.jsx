import React from "react";

const Simplified = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-t from-white to-blue-100 flex flex-col items-center justify-center px-6 py-20">
      {/* Main Headline */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-5xl font-extrabold text-gray-900">
          <span className="text-blue-600">Why Choose</span> Talentbard?
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-700">
          Build, Collaborate, and Scale Effortlessly
        </p>
      </div>
      
      {/* Sections */}
      <div className="mt-16 grid gap-16 w-full max-w-6xl">
        {sections.map((section, index) => (
          <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-10`}>
            <img src={section.image} alt={section.title} className="w-60 md:w-80 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            <div className="text-center md:text-left">
              <h2 className="text-4xl  ml-4 font-bold text-gray-900">{section.title}</h2>
              <p className="mt-2 text-xl font-semibold ml-4 text-gray-600">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      
    </section>
  );
};

const sections = [
  {
    image: "/Images/Talent-Page1.png",
    title: "Instantly Hire Pre-Vetted Talent",
    description: "Skip the endless search. Find top-tier freelancers ready to work from day one.",
  },
  {
    image: "/Images/Talent-Page5.png",
    title: "Effortless Hiring & Collaboration",
    description: "Build agile teams, track projects in real-time, and manage freelancers seamlessly—just like a full-time workforce.",
  },
  {
    image: "/Images/Talent-Page3.png",
    title: "AI-Driven Talent Scoring",
    description: "Get data-backed insights on freelancer reliability, response time, and delivery speed.",
  },
  {
    image: "/Images/Talent-Page2.png",
    title: "Escrow Payment Management: Secure Payments & Smart Investments",
    description: "Escrow-based payments ensure freelancers get paid on time, while startups earn yields on idle cash with low-risk investments.",
  },
  {
    image: "/Images/Talent-Page4.png",
    title: "Global Payments, Zero Hassle",
    description: "Flat fees, zero FX markups, and same-day settlements help freelancers keep more of what they earn.",
  },
];

export default Simplified;
