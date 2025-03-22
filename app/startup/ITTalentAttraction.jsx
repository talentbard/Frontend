// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// const ITTalentAttraction = () => {
//   const router = useRouter();
//   return (
//     <section className="w-full min-h-screen bg-gradient-to-tr from-white to-blue-100 flex flex-col items-center justify-center px-6 py-20">
//       {/* Main Headline */}
//       <div className="text-center max-w-4xl px-4">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-black font-sans leading-tight">
//           <span className="text-blue-600">Attract</span> Top IT Talent <span className="text-blue-600">to Your Startup</span>
//         </h1>
//         <p className="mt-4 font-semibold md:text-2xl text-gray-700 font-sans">
//           Your startup is more than just a company—it’s a story that top freelancers want to be part of.
//         </p>
//         <p className="mt-2 text-md md:text-lg text-gray-600 font-sans">
//           Position your brand to attract, hire, and retain the best IT talent.
//         </p>
//       </div>
      
//       {/* Sections */}
//       <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
//         {/* Section 1 */}
//         <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md transition-transform transform hover:scale-105">
//           <img src="/Images/Attract1.png" alt="Branded Startup Page" className="w-full max-w-xs rounded-lg" />
//           <h2 className="text-xl font-bold font-sans mt-4">Branded Startup Page</h2>
//           <p className="mt-2 text-md text-gray-600 font-sans">
//           <span className='text-blue-600  font-extrabold'  >&nbsp;75%&nbsp;</span> of freelancers research companies before working with them. Craft a compelling startup profile.
//           </p>
//         </div>
        
//         {/* Section 2 */}
//         <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md transition-transform transform hover:scale-105">
//           <img src="/Images/Attract2.png" alt="Showcase Real Impact" className="w-full max-w-xs rounded-lg" />
//           <h2 className="text-xl font-bold font-sans mt-4">Showcase Real Impact</h2>
//           <p className="mt-2 text-md text-gray-600 font-sans">
//             Go beyond job listings. Highlight exciting projects, cutting-edge tech, and the meaningful work freelancers will contribute to.
//           </p>
//         </div>
        
//         {/* Section 3 */}
//         <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md transition-transform transform hover:scale-105">
//           <img src="/Images/Attract3.png" alt="Build Long-Term Relationships" className="w-full max-w-xs rounded-lg" />
//           <h2 className="text-xl font-bold font-sans mt-4">Build Long-Term Relationships</h2>
//           <p className="mt-2 text-md text-gray-600 font-sans">
//             Attract skilled freelancers who align with your vision, ensuring trust, consistency, and a reliable talent pool.
//           </p>
//         </div>
//       </div>


//       <div className="mt-16">
//       <button
//       className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xl font-semibold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-all"
//       onClick={() => router.push("/company_registration")}
//     >Start Hiring Now</button>
//       </div>
//     </section>
//   );
// };

// export default ITTalentAttraction;

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Briefcase, Rocket, Users } from "lucide-react"; // Import icons

const ITTalentAttraction = () => {
  const router = useRouter();

  return (
    <section className="w-full min-h-screen bg-gradient-to-tr from-white to-blue-100 flex flex-col items-center justify-center px-6 py-20">
      {/* Main Headline */}
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black font-sans leading-tight">
          <span className="text-blue-600">Attract</span> Top IT Talent <span className="text-blue-600">to Your Startup</span>
        </h1>
        <p className="mt-4 font-semibold md:text-2xl text-gray-700 font-sans">
          Your startup is more than just a company—it’s a story that top freelancers want to be part of.
        </p>
        <p className="mt-2 text-md md:text-lg text-gray-600 font-sans">
          Position your brand to attract, hire, and retain the best IT talent.
        </p>
      </div>
      
      {/* Sections */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {/* Section 1 */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md transition-transform transform hover:scale-105">
          <Briefcase className="text-blue-600 w-20 h-20" /> {/* Replaced image with an icon */}
          <h2 className="text-xl font-bold font-sans mt-4">Branded Startup Page</h2>
          <p className="mt-2 text-md text-gray-600 font-sans">
            <span className='text-blue-600 font-extrabold'>&nbsp;75%&nbsp;</span> of freelancers research companies before working with them. Craft a compelling startup profile.
          </p>
        </div>
        
        {/* Section 2 */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md transition-transform transform hover:scale-105">
          <Rocket className="text-blue-600 w-20 h-20" /> {/* Replaced image with an icon */}
          <h2 className="text-xl font-bold font-sans mt-4">Showcase Real Impact</h2>
          <p className="mt-2 text-md text-gray-600 font-sans">
            Go beyond job listings. Highlight exciting projects, cutting-edge tech, and the meaningful work freelancers will contribute to.
          </p>
        </div>
        
        {/* Section 3 */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md transition-transform transform hover:scale-105">
          <Users className="text-blue-600 w-20 h-20" /> {/* Replaced image with an icon */}
          <h2 className="text-xl font-bold font-sans mt-4">Build Long-Term Relationships</h2>
          <p className="mt-2 text-md text-gray-600 font-sans">
            Attract skilled freelancers who align with your vision, ensuring trust, consistency, and a reliable talent pool.
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="mt-16">
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xl font-semibold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-all"
          onClick={() => router.push("/login/signup")}
        >
          Start Hiring Now
        </button>
      </div>
    </section>
  );
};

export default ITTalentAttraction;
