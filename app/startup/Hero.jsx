import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-blue-900 text-center px-4">
      <div className="text-white max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold">
          India's <span className="text-blue-400">Startup-Focused</span> Freelance Platform
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Hire Right Talent with Right Skills at Right Cost!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg transition duration-300">
          Free Sign In
        </button>
      </div>
    </section>
  );
};

export default Hero;
