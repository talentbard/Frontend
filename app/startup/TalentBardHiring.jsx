import React from "react";

const TalentBardHiring = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-tr from-white to-blue-100 flex flex-col items-center justify-center px-6 py-20">
      {/* Main Headline */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-black font-sans">
          <span className="text-blue-600">Why Hire from</span> TalentBard?
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600 font-sans">
          Pre-Vetted, High-Performing Talent
        </p>
        <p className="mt-2 text-md md:text-lg text-gray-600 font-sans">
          We eliminate the guesswork by providing you with top-tier, rigorously vetted freelancers who are:
        </p>
      </div>
      
      {/* Sections */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl text-center">
        {/* Section 1 */}
        <div>
          <img src="/Images/Tech-Excellent.png" alt="Technically Excellent" className="w-20 mx-auto" />
          <h2 className="text-xl font-bold font-sans mt-4">Technically Excellent</h2>
          <p className="mt-2 text-md text-gray-600 font-sans">
            Proven experience, strong portfolios, and deep technical expertise.
          </p>
        </div>
        
        {/* Section 2 */}
        <div>
          <img src="/Images/Soft-Skills.png" alt="Soft Skills Assessed" className="w-20 mx-auto" />
          <h2 className="text-xl font-bold font-sans mt-4">Soft Skills Assessed</h2>
          <p className="mt-2 text-md text-gray-600 font-sans">
            Great communication, collaboration, and problem-solving abilities.
          </p>
        </div>
        
        {/* Section 3 */}
        <div>
          <img src="/Images/Live-Tested.png" alt="Live-Tested" className="w-20 mx-auto" />
          <h2 className="text-xl font-bold font-sans mt-4">Live-Tested</h2>
          <p className="mt-2 text-md text-gray-600 font-sans">
            Evaluated through real-world coding challenges and system design walkthroughs.
          </p>
        </div>
        
        {/* Section 4 */}
        <div>
          <img src="/Images/Monitored.png" alt="Continuously Monitored" className="w-20 mx-auto" />
          <h2 className="text-xl font-bold font-sans mt-4">Continuously Monitored</h2>
          <p className="mt-2 text-md text-gray-600 font-sans">
            Regular performance tracking, client satisfaction ratings, and ongoing growth assessments.
          </p>
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

export default TalentBardHiring;
