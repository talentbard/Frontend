import React from "react";

const ITTalentAttraction = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-tr from-white to-blue-100 flex flex-col items-center justify-center px-6 py-20">
      {/* Main Headline */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-black font-sans">
          <span className="text-blue-600">Attract</span> Top IT Talent <span className="text-blue-600">to Your Startup</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600 font-sans">
          Your startup is more than just a company—it’s a story that top freelancers want to be part of.
        </p>
        <p className="mt-2 text-md md:text-lg text-gray-600 font-sans">
          Position your brand to attract, hire, and retain the best IT talent.
        </p>
      </div>
      
      {/* Sections */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl text-center">
        {/* Section 1 */}
        <div>
          <img src="/Images/Startup-Page.png" alt="Branded Startup Page" className="w-20 mx-auto" />
          <h2 className="text-xl font-bold font-sans mt-4">Branded Startup Page</h2>
          <p className="mt-2 text-md text-gray-600 font-sans">
            75% of freelancers research companies before working with them. Craft a compelling startup profile.
          </p>
        </div>
        
        {/* Section 2 */}
        <div>
          <img src="/Images/Real-Impact.png" alt="Showcase Real Impact" className="w-20 mx-auto" />
          <h2 className="text-xl font-bold font-sans mt-4">Showcase Real Impact</h2>
          <p className="mt-2 text-md text-gray-600 font-sans">
            Go beyond job listings. Highlight exciting projects, cutting-edge tech, and the meaningful work freelancers will contribute to.
          </p>
        </div>
        
        {/* Section 3 */}
        <div>
          <img src="/Images/Long-Term.png" alt="Build Long-Term Relationships" className="w-20 mx-auto" />
          <h2 className="text-xl font-bold font-sans mt-4">Build Long-Term Relationships</h2>
          <p className="mt-2 text-md text-gray-600 font-sans">
            Attract skilled freelancers who align with your vision, ensuring trust, consistency, and a reliable talent pool.
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

export default ITTalentAttraction;
