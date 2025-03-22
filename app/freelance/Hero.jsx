"use client";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter(); // Initialize useRouter

  return (
    <div className="w-full min-h-[70vh] bg-gradient-to-r from-black to-blue-900 flex items-center justify-center px-6">
      <div className="text-center max-w-4xl space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-snug text-white">
          <span className="text-blue-600">Making Freelancing Mainstream</span> –  
          as <span className="font-bold text-white">Seamless, Stable, and Secure</span>  
          as a <span className="text-blue-400">Full-Time Job</span>
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl font-medium">
          Get hired faster, collaborate effortlessly, and receive escrow-protected payments—  
          all in one powerful platform.
        </p>
        
        <div className="mt-4">
          <button 
            className="px-10 py-3 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={() => router.push("/registration/personal-info")}
          >
            Get Hired
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
