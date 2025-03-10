import React from "react";

const Simplified = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-tr from-white to-blue-100 flex flex-col items-center justify-center px-6 py-20">
      {/* Main Headline */}
      <div className="text max-w-3xl">
        <h1 className="text-2xl md:text-5xl font-extrabold text-black font-sans">
          <span className="text-blue-600 text-center">Freelancing, Simplified:</span> Focus on Work, Not the Hassle
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600 font-sans">
          We handle the complexities—so you can focus on delivering great work.
        </p>
      </div>
      
      {/* Sections */}
      <div className="mt-16 space-y-16 w-full max-w-6xl">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <img src="/Images/Talent-Page1.png" alt="Hiring & Collaboration" className="w-60 md:w-80" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-sans">Effortless Hiring & Collaboration</h2>
            <p className="mt-2 text-lg text-gray-600 font-sans">
              Find the right projects, build agile teams, and work seamlessly with real-time collaboration and project tracking—just like a full-time job, but with flexibility.
            </p>
          </div>
        </div>
        
        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src="/Images/Talent-Page2.png" alt="Escrow Payments" className="w-60 md:w-80" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-sans">Escrow Payment Management: Secure Payments & Smart Investments</h2>
            <p className="mt-2 text-lg text-gray-600 font-sans">
              Freelancers get paid, startups earn more. Our escrow-based system ensures secure, timely payouts. While startups can earn yields on idle cash with low-risk investments.
            </p>
          </div>
        </div>
        
        {/* Section 3 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <img src="/Images/Talent-Page3.png" alt="Less Admin Work" className="w-60 md:w-80" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-sans">More Freedom, Less Admin Work</h2>
            <p className="mt-2 text-lg text-gray-600 font-sans">
              No more client hunting, endless proposals, or chasing payments. We automate matchmaking, AI-generated contracts, and integrated invoicing—so you can do what you do best.
            </p>
          </div>
        </div>
        
        {/* Section 4 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src="/Images/Talent-Page4.png" alt="Cross Border Payments" className="w-60 md:w-80" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-sans">Cross Border Payments</h2>
            <p className="mt-2 text-lg text-gray-600 font-sans">
              We offer a flat fee, zero FX markup, and same-day settlements so you get paid faster with no hidden costs. So you get to keep more of what you earn.
            </p>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-16">
        <button className="bg-blue-600 text-white text-xl font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 font-sans">
          Get Hired Instantly!
        </button>
      </div>
    </section>
  );
};

export default Simplified;
