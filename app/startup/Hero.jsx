"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Hero = () => {
  const router = useRouter();
  return (
    <section className="flex items-center justify-center min-h-[50vh] md:min-h-[60vh] bg-gradient-to-r from-black to-blue-900 px-4 sm:px-6 py-10 sm:py-12">
      <div className="text-white max-w-3xl text-center space-y-4 px-4 sm:px-0">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-2xl lg:text-5xl font-bold leading-tight">
          India's <span className="text-blue-400">Startup-Focused</span> Freelance Platform
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
        Hire Skilled, Reliable and In-Budget Talent
        </p>

        {/* Call to Action Button */}
        <div>
          <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl font-semibold text-white 
            bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg 
            hover:from-blue-400 hover:to-purple-500 hover:shadow-xl 
            transform hover:scale-105 transition-all duration-300" onClick={() => router.push("/company_registration")}>
            🚀 Hire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;