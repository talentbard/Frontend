// import React from "react";
// import Link from "next/link";

// const About = () => {
//   return (
//     <section className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-[#0D0D0D] text-white text-center py-24 px-6">
      
//       {/* Headline */}
//       <h2 className="text-2xl md:text-5xl font-extrabold leading-tight max-w-[1100px]">
//   <span className="text-blue-500 font-playfair italic">
//   On-Demand Tech Talent
//   </span>{" "}
//   Platform for Startups 
//   <br></br>
  
// </h2>




//       {/* Subheadline */}
//       <p className="mt-6 text-lg md:text-1xl max-w-[800px] mx-auto leading-snug text-gray-300 font-sans">
//   Hire & manage top Tech talent, secure payments with escrow, invest idle cash, and make seamless cross-border payments — all in one dashboard.
// </p>


//       {/* Buttons */}
//       <div className="mt-8 flex flex-wrap justify-center gap-6">
//         <Link href="/freelance" className="px-8 py-4 bg-blue-500 text-white font-bold text-lg rounded-xl shadow-lg transition-transform transform hover:scale-105">
//           Are you a Talent?
//         </Link>

//         <Link href="/startup" className="px-8 py-4 border border-gray-600 text-gray-300 font-bold text-lg rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800">
//           Are you a Startup?
//         </Link>
//       </div>
      
//     </section>
//   );
// };

// export default About;
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-[#0D0D0D] text-white text-center py-20 px-6">
      
      {/* Headline */}
      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-[1100px]">
        <span className="text-blue-500 font-playfair italic">On-Demand Tech Talent</span> Platform for Startups 
      </h2>

      {/* Subheadline */}
      <p className="mt-6 text-lg md:text-xl max-w-[800px] mx-auto leading-snug text-gray-300">
      Bridging the gap between full-time jobs and freelancing - giving startups the specialists they need and talents the flexibility they want.
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
