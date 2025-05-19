// "use client";
// import React, { useState } from "react";
// import { LinkIcon } from '@heroicons/react/24/solid';



// const initialFounders = [
//   {
//     name: "Srijan Gangavarapu",
//     role: "Operations, Partnerships and Sales",
//     about: "The kind of builder who’s been burnt before — and co-founder experience with hunger to build.",
//     linkedin: "https://www.linkedin.com/feed/",
//   },
//   {
//     name: "Vuppala Nitish Kumar",
//     role: "Product, Marketing & Branding Growth",
//     about: "A product guy with sharp insights in competitor analysis, market dynamics, and branding.",
//     linkedin: "https://www.linkedin.com/feed/",
//   },
// ];

// const teamMembers = [
//   {
//     name: "Manager",
//     role: "Senior Manager",
//     about: "Leads the core team.",
//     linkedin: "#",
//   },
//   {
//     name: "Assistant Manager",
//     role: "Assistant Manager",
//     about: "Supports senior management operations.",
//     linkedin: "#",
//   },
// ];

// const locations = ["Bengaluru", "Mumbai", "Delhi", "Remote"];

// export default function CompanyProfile() {
//   const [founders, setFounders] = useState(initialFounders);
//   const [showInviteOptions, setShowInviteOptions] = useState(false);

//   const handleInviteClick = () => {
//     setShowInviteOptions(!showInviteOptions);
//   };

//   const handleAddFounder = (member) => {
//     setFounders([...founders, member]);
//     setShowInviteOptions(false);
//   };

//   return (
//     <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
//       {/* Header */}
//       <div className="bg-black h-48 flex items-center justify-center relative">
//         <div className="absolute bottom-[-32px] left-6">
//           <div className="h-24 w-24 rounded-full bg-white p-1 shadow-md">
//             <div className="h-full w-full rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold">
//               Logo
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="p-6 pt-10">
//         {/* Company Info */}
//         <div className="flex justify-between items-start flex-wrap">
//           <div>
//             <h1 className="text-2xl font-bold">Company Name</h1>
//             <p className="text-sm text-gray-500">
//               Founded 2024 • 1-10 Employees •{" "}
//               <a href="#" className="text-blue-500">www.website.com</a>
//             </p>
//             <p className="mt-1 text-gray-700">
//               Building India's First Talent Marketplace for Startups
//             </p>
//           </div>
//           <div className="flex gap-2 mt-4 sm:mt-0">
//             <button className="text-blue-500 text-sm">Share</button>
//             <button className="text-blue-500 text-sm">Edit</button>
//           </div>
//         </div>

//         {/* Locations */}
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold mb-2">Locations</h2>
//           <div className="flex flex-wrap gap-3 text-sm">
//             {locations.map((loc, index) => (
//               <span
//                 key={index}
//                 className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
//               >
//                 {loc}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="mt-6 flex flex-wrap gap-3 text-sm">
//           <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">B2B</span>
//           <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Marketplace</span>
//           <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Startup Sector</span>
//           <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">Growth Stage</span>
//           <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Valuation $10M+</span>
//           <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">LinkedIn</span>
//         </div>

//         {/* About */}
//         <div className="mt-8">
//           <h2 className="text-lg font-semibold mb-1">About Company <span className="text-red-500">*</span></h2>
//           <p className="text-sm text-gray-600">
//             This is where the company description goes. Tell your story here.
//           </p>
//         </div>

//         {/* Founders */}
//         <div className="mt-8">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">Founders <span className="text-red-500">*</span></h2>
//             <button
//               onClick={handleInviteClick}
//               className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full hover:bg-blue-600"
//             >
//               Invite
//             </button>
//           </div>

//           {/* Founder Cards */}
//           <div className="flex flex-wrap gap-6">
//             {founders.map((founder, index) => (
//               <div
//                 key={index}
//                 className="w-80 bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-2 relative hover:shadow-2xl transition"
//               >
//                 {/* Profile */}
//                 <div className="flex items-center gap-3">
//                   <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">
//                     Photo
//                   </div>
//                   <div className="flex flex-col">
//                     <div className="flex items-center gap-1">
//                       <p className="font-semibold">{founder.name}</p>
//                       {/* LinkedIn Badge (LinkedIn icon) */}
//                       <a
//                         href={founder.linkedin}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="h-6 w-6 ml-auto text-blue-500"
//                       >
//                         <LinkIcon className="w-full h-full" />
//                       </a>
//                     </div>
//                     <p className="text-xs text-gray-500">{founder.role}</p>
//                   </div>
//                 </div>

//                 {/* About Text */}
//                 <p className="text-sm text-gray-600 mt-2 line-clamp-3">{founder.about}</p>
//               </div>
//             ))}
//           </div>

//           {/* Invite Options */}
//           {showInviteOptions && (
//             <div className="mt-6 p-4 bg-gray-100 rounded-xl">
//               <h3 className="text-md font-semibold mb-4">Select a Team Member to Invite as Founder</h3>
//               <div className="flex flex-wrap gap-4">
//                 {teamMembers.map((member, idx) => (
//                   <div
//                     key={idx}
//                     className="w-64 p-4 bg-white rounded-lg shadow flex flex-col items-center"
//                   >
//                     <div className="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium">
//                       Photo
//                     </div>
//                     <div className="text-center mt-2">
//                       <p className="font-semibold">{member.name}</p>
//                       <p className="text-sm text-gray-600">{member.role}</p>
//                       <p className="text-sm mt-1 text-gray-600">{member.about}</p>
//                     </div>
//                     <button
//                       onClick={() => handleAddFounder(member)}
//                       className="mt-2 bg-green-500 text-white text-sm px-4 py-1 rounded-full hover:bg-green-600"
//                     >
//                       Add to Founders
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Funding */}
//         <div className="mt-8">
//           <h2 className="text-lg font-semibold mb-1">Funding</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-sm">
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <p className="text-gray-500 mb-1">Funding Round</p>
//               <p className="font-semibold text-lg">$—</p>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <p className="text-gray-500 mb-1">Total Raised</p>
//               <p className="font-semibold text-lg">$—</p>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <p className="text-gray-500 mb-1">Latest Round</p>
//               <p className="font-semibold text-lg">$—</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { LinkIcon } from '@heroicons/react/24/solid';
import { FaLinkedin } from "react-icons/fa";
const initialFounders = [
  {
    name: "Srijan Gangavarapu",
    role: "Operations, Partnerships and Sales",
    about: "The kind of builder who’s been burnt before — and co-founder experience with hunger to build.",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    name: "Vuppala Nitish Kumar",
    role: "Product, Marketing & Branding Growth",
    about: "A product guy with sharp insights in competitor analysis, market dynamics, and branding.",
    linkedin: "https://www.linkedin.com/feed/",
  },
];

const teamMembers = [
  {
    name: "Manager",
    role: "Senior Manager",
    about: "Leads the core team.",
    linkedin: "#",
  },
  {
    name: "Assistant Manager",
    role: "Assistant Manager",
    about: "Supports senior management operations.",
    linkedin: "#",
  },
];

const locations = ["Bengaluru", "Mumbai", "Delhi", "Remote"];

export default function CompanyProfile() {
  const [founders, setFounders] = useState(initialFounders);
  const [showInviteOptions, setShowInviteOptions] = useState(false);

  const handleInviteClick = () => {
    setShowInviteOptions(!showInviteOptions);
  };

  const handleAddFounder = (member) => {
    setFounders([...founders, member]);
    setShowInviteOptions(false);
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-black h-48 flex items-center justify-center relative">
        <div className="absolute bottom-[-32px] left-6">
          <div className="h-24 w-24 rounded-full bg-white p-1 shadow-md">
            <div className="h-full w-full rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold">
              Logo
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-10">
        {/* Company Info */}
        <div className="flex justify-between items-start flex-wrap">
          <div>
            <h1 className="text-2xl font-bold">Company Name</h1>
            <p className="text-sm text-gray-500">
              Founded 2024 • 1-10 Employees •{" "}
              <a href="#" className="text-blue-500">www.website.com</a>
            </p>
            <p className="mt-1 text-gray-700">
              Building India's First Talent Marketplace for Startups
            </p>
          </div>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <button className="text-blue-500 text-sm">Share</button>
            <button className="text-blue-500 text-sm">Edit</button>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Locations</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            {locations.map((loc, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">B2B</span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Marketplace</span>
          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Startup Sector</span>
          <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">Growth Stage</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Valuation $10M+</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">LinkedIn</span>
        </div>

        {/* About */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-1">About Company <span className="text-red-500">*</span></h2>
          <p className="text-sm text-gray-600">
            This is where the company description goes. Tell your story here.
          </p>
        </div>

        {/* Founders */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Founders <span className="text-red-500">*</span></h2>

          {/* Founder Cards */}
          <div className="flex flex-wrap gap-6 mt-4">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="w-80 bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-2 relative hover:shadow-2xl transition"
              >
                {/* Profile */}
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">
                    Photo
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <p className="font-semibold">{founder.name}</p>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-6 w-6 ml-auto text-blue-500"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                    <p className="text-xs text-gray-500">{founder.role}</p>
                  </div>
                </div>

                {/* About Text */}
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{founder.about}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Funding */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-1">Funding</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-sm">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-500 mb-1">Funding Round</p>
              <p className="font-semibold text-lg">$—</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-500 mb-1">Total Raised</p>
              <p className="font-semibold text-lg">$—</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-500 mb-1">Latest Round</p>
              <p className="font-semibold text-lg">$—</p>
            </div>
          </div>
        </div>

        {/* Invite Button & Options (Moved Below Funding) */}
       {/* Invite Section Styled Like Contra */}
<div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
  <h3 className="text-lg font-semibold">Bring your core team</h3>
  <p className="text-sm text-gray-600 mt-1 mb-4">
    Invite your teammates and current collaborators
  </p>

  <div className="flex flex-col sm:flex-row gap-3">
    <button
      onClick={handleInviteClick}
      className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
    >
      ✈️ Invite teammates
    </button>
    <button
      className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition"
    >
      👥 Add contractor
    </button>
  </div>
</div>

{showInviteOptions && (
  <div className="mt-4 p-4 bg-gray-100 rounded-xl">
    <h3 className="text-md font-semibold mb-4">Select a Team Member to Invite as Founder</h3>
    <div className="flex flex-wrap gap-4">
      {teamMembers.map((member, idx) => (
        <div
          key={idx}
          className="w-64 p-4 bg-white rounded-lg shadow flex flex-col items-center"
        >
          <div className="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium">
            Photo
          </div>
          <div className="text-center mt-2">
            <p className="font-semibold">{member.name}</p>
            <p className="text-sm text-gray-600">{member.role}</p>
            <p className="text-sm mt-1 text-gray-600">{member.about}</p>
          </div>
          <button
            onClick={() => handleAddFounder(member)}
            className="mt-2 bg-green-500 text-white text-sm px-4 py-1 rounded-full hover:bg-green-600"
          >
            Add to Founders
          </button>
        </div>
      ))}
    </div>
  </div>
)}

      </div>
    </div>
  );
}
