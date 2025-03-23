import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-12 lg:px-24 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-700 pb-6">
        
        <div>
          <h2 className="text-lg font-bold">TalentBard</h2>
          <p className="text-gray-400 text-sm mt-2">
            Building the future of freelance work
          </p>
        </div>

         <div>
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li><Link href="/" className="hover:text-gray-200">About</Link></li>

            <li><Link href="/terms_condition/privacy_policy" className="hover:text-gray-200">Privacy Policy</Link></li>
            <li><Link href="/terms_condition/terms_and_conditions" className="hover:text-gray-200">Terms</Link></li>
            <li><Link href="/terms_condition/client_terms" className="hover:text-gray-200">Client Terms</Link></li>
          </ul>
        </div> 

        <div>
          <h3 className="text-sm font-semibold">Connect</h3>
          <div className="flex space-x-4 mt-2 text-gray-400">
            <a href="https://www.linkedin.com/company/talentbard/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaLinkedin size={18} />
            </a>
           
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <p className="text-gray-400 text-sm mt-2">akshay@talentbard.com</p>
          <p className="text-gray-400 text-sm">+91 7981347373</p>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="text-center text-gray-500 text-xs mt-4">
        © 2025 TalentBard. All rights reserved.
      </p>
    </footer>
  );
};

 export default Footer;

// import React from "react";
// import Link from "next/link";
// import { FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-20 px-8 md:px-16 lg:px-32 text-center">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        
//         {/* Brand Section */}
//         <div className="space-y-4 flex flex-col items-center">
//           <h2 className="text-lg font-bold">TalentBard</h2>
//           <p className="text-gray-400 text-sm max-w-xs">
//             Building the future of freelance work
//           </p>
//         </div>

//         {/* Connect Section */}
//         <div className="space-y-4 flex flex-col items-center">
//           <h3 className="text-sm font-semibold">Connect</h3>
//           <div className="flex justify-center gap-6 text-gray-400">
//             <a 
//               href="https://www.linkedin.com/company/talentbard/" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="hover:text-gray-200"
//             >
//               <FaLinkedin size={20} />
//             </a>
//           </div>
//         </div>

//         {/* Contact Section */}
//         <div className="space-y-4 flex flex-col items-center">
//           <h3 className="text-sm font-semibold">Contact</h3>
//           <p className="text-gray-400 text-sm">akshay@talentbard.com</p>
//           <p className="text-gray-400 text-sm">+91 7981347373</p>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <p className="text-center text-gray-500 text-xs mt-6">
//         © 2025 TalentBard. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;
