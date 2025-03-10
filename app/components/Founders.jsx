import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { FaLinkedin } from "react-icons/fa";

const founders = [
  { 
    name: "Akshay Narvate", 
    role: "Co-founder", 
    exp: "Business, Strategy, Operations", 
    img: "/Images/Akshay-Narvate.jpg", 
    linkedinProfile: "https://www.linkedin.com/in/akshaynarvate"  
  },
  { 
    name: "Karthikeya", 
    role: "Co-Founder", 
    exp: "Tech", 
    img: "/Images/Karthikeya.jpg", 
    linkedinProfile: "https://www.linkedin.com/in/karthikeya-voocha-423588253"
  },
];

const Founders = () => {
  return (
    <section className="text-center py-20 px-6 md:px-20 bg-gradient-to-t from-blue-200 to-white">
      <h3 className="text-4xl font-bold">Meet the Founders</h3>
      
      <div className="flex flex-wrap justify-center mt-12 mx-4 gap-10">
        {founders.map((founder, index) => (
          <div key={index} className="text-center max-w-xs">
            
            <div className="w-32 h-32 mx-auto overflow-hidden rounded-full relative">
              <Image 
                src={founder.img} 
                alt={founder.name} 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
            
            <h4 className="font-semibold mt-4">{founder.name}</h4>
            <p className="text-gray-600">{founder.role}</p>
            <p className="text-sm text-gray-500">{founder.exp}</p>
          
            <a 
              href={founder.linkedinProfile} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 text-2xl mt-2 inline-block"
            >
              <FaLinkedin />
            </a>
          </div>
        ))}
      </div>

      {/* "Are you talent?" Button Redirecting to FreelancePage */}
      <div className="text-center my-16 py-12 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl shadow-lg">
  <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
    🚀 Ready to build with the <span className="text-blue-600">best?</span>
  </h3>
  <p className="text-gray-600 mt-3 text-lg md:text-xl">
    Join top talents and unlock new opportunities!
  </p>

  <Link href="/freelance">
    <button className="mt-8 px-12 py-4 text-lg font-bold rounded-full 
      bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl 
      hover:from-blue-500 hover:to-purple-500 hover:shadow-blue-400/50 
      transition-all duration-300 transform hover:scale-110 animate-pulse">
      ✨ Are you talent?
    </button>
  </Link>
</div>


    </section>
  );
};

export default Founders;
