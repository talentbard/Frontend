import React from "react";

const Simplified = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-tr from-white to-blue-100 flex flex-col items-center justify-center px-6 py-20">
      {/* Main Headline */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-black font-sans">
          <span className="text-blue-600">Why Choose</span> Talentbard?
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600 font-sans">
          Build, Collaborate, and Scale Effortlessly
        </p>
      </div>
      
      {/* Sections */}
      <div className="mt-16 space-y-16 w-full max-w-6xl">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <img src="/Images/Talent-Page1.png" alt="Instantly Hire Pre-Vetted Talent" className="w-60 md:w-80" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-sans">Instantly Hire Pre-Vetted Talent</h2>
            <p className="mt-2 text-lg text-gray-600 font-sans">
              Skip the endless search. Find top-tier freelancers ready to work from day one.
            </p>
          </div>
        </div>
        
        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src="/Images/Talent-Page2.png" alt="Effortless Hiring & Collaboration" className="w-60 md:w-80" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-sans">Effortless Hiring & Collaboration</h2>
            <p className="mt-2 text-lg text-gray-600 font-sans">
              Build agile teams, track projects in real-time, and manage freelancers seamlessly—just like a full-time workforce.
            </p>
          </div>
        </div>
        
        {/* Section 3 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <img src="/Images/Talent-Page3.png" alt="AI-Driven Talent Scoring" className="w-60 md:w-80" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-sans">AI-Driven Talent Scoring</h2>
            <p className="mt-2 text-lg text-gray-600 font-sans">
              Get data-backed insights on freelancer reliability, response time, and delivery speed.
            </p>
          </div>
        </div>
        
        {/* Section 4 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src="/Images/Talent-Page4.png" alt="Escrow Payment Management" className="w-60 md:w-80" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-sans">Escrow Payment Management: Secure Payments & Smart Investments</h2>
            <p className="mt-2 text-lg text-gray-600 font-sans">
              Escrow-based payments ensure freelancers get paid on time, while startups earn yields on idle cash with low-risk investments.
            </p>
          </div>
        </div>
        
        {/* Section 5 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <img src="/Images/Talent-Page5.png" alt="Global Payments, Zero Hassle" className="w-60 md:w-80" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-sans">Global Payments, Zero Hassle</h2>
            <p className="mt-2 text-lg text-gray-600 font-sans">
              Flat fees, zero FX markups, and same-day settlements help freelancers keep more of what they earn.
            </p>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-16">
        <button className="bg-blue-600 text-white text-xl font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 font-sans">
          Start Hiring Now
        </button>
      </div>
    </section>
  );
};

export default Simplified;