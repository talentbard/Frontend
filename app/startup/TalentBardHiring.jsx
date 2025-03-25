import React from "react";

const TalentBardHiring = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-blue-100 flex flex-col items-center justify-center px-6 py-20">
      {/* Main Headline */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text 4xl font-extrabold text-black font-sans">
          <span className="text-blue-600">Why Hire </span> from TalentBard?
        </h1>
        <p className="mt-4 text-3xl font-semibold text-gray-800 font-sans">
          Pre-Vetted, High-Performing Talent
        </p>
        <p className="mt-2 text-md md:text-lg text-gray-900 font-sans">
          We eliminate the guesswork by providing you with top-tier, rigorously vetted tech talent who are:
        </p>
      </div>
      
      {/* Sections */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl text-center">
        {/* Section 1 */}
        <div>
          <img src="/Images/Icon1.png" alt="Technically Excellent" className="w-20 mx-auto" />
          <h2 className="text-xl font-bold font-sans mt-4">Technically Excellent</h2>
          <p className="mt-2 text-lg text-gray-800 font-sans">
            Proven experience, strong portfolios, and deep technical expertise.
          </p>
        </div>
        
        {/* Section 2 */}
        <div>
          <img src="/Images/Icon2.png" alt="Soft Skills Assessed" className="w-20 mx-auto" />
          <h2 className="text-xl font-bold font-sans mt-4">Soft Skills Assessed</h2>
          <p className="mt-2 text-lg text-gray-800 font-sans">
            Great communication, collaboration, and problem-solving abilities.
          </p>
        </div>
        
        {/* Section 3 */}
        <div>
          <img src="/Images/Icon3.png" alt="Live-Tested" className="w-20 mx-auto" />
          <h2 className="text-xl font-bold font-sans mt-4">Live-Tested</h2>
          <p className="mt-2 text-lg text-gray-800 font-sans">
            Evaluated through real-world coding challenges and system design walkthroughs.
          </p>
        </div>
        
        {/* Section 4 */}
        <div>
          <img src="/Images/Icon4.png" alt="Continuously Monitored" className="w-20 mx-auto" />
          <h2 className="text-xl font-bold font-sans mt-4">Continuously Monitored</h2>
          <p className="mt-2 text-lg text-gray-800 font-sans">
            Regular performance tracking, client satisfaction ratings, and ongoing growth assessments.
          </p>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-16">
        
      </div>
    </section>
  );
};

export default TalentBardHiring;
