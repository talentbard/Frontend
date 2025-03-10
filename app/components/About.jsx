import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-[#0D0D0D] text-white text-center py-24 px-6">
      
      {/* Headline */}
      <h2 className="text-3xl md:text-6xl font-extrabold leading-tight max-w-[1100px]">
  <span className="text-purple-500 font-playfair italic">
  India’s Next-Gen On-Demand Talent 
  </span>{" "}
  Platform for Startups to{" "}
  <br></br>
  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-playfair italic">
    Scale On-Demand
  </span>.
</h2>




      {/* Subheadline */}
      <p className="mt-6 text-lg md:text-2xl max-w-[800px] mx-auto leading-snug text-gray-300 font-sans">
  Hire & manage top IT talent, secure payments with escrow, invest idle cash, and make seamless cross-border payments — all in one dashboard.
</p>


      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <Link href="/freelance" className="px-8 py-4 bg-blue-500 text-white font-bold text-lg rounded-xl shadow-lg transition-transform transform hover:scale-105">
          Are you a Talent?
        </Link>

        <Link href="/startup" className="px-8 py-4 border border-gray-600 text-gray-300 font-bold text-lg rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800">
          Are you a Startup?
        </Link>
      </div>
      
    </section>
  );
};

export default About;
