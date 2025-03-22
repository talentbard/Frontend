// "use client";
// import React from "react";

// const FreelanceExperience = () => {
//   return (
//     <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r bg-aqua px-4 sm:px-6 py-12">
//       <div className="w-full max-w-screen-xl bg-white rounded-2xl p-6 sm:p-12 shadow-lg">
//         {/* Heading */}
//         <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-900">
//           Freelancing Experience is <span className="text-blue-600">Broken</span>
//         </h2>
//         <p className="text-gray-700 text-center mt-4 text-lg sm:text-xl">
//           What if freelancing was as stable and rewarding as a full-time job?
//         </p>

//         {/* Issues List */}
//         <div className="mt-12 flex flex-col space-y-6 w-full">
//           {issues.map((issue, index) => (
//             <div key={index} className="flex flex-col sm:flex-row items-center bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition w-full min-h-[140px]">
//               <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl w-72 text-center text-lg flex items-center justify-center min-h-[80px]">
//                 {issue.title}
//               </span>
//               <p className="mt-4 sm:mt-0 sm:ml-6 text-gray-800 text-lg text-center sm:text-left w-full flex items-center min-h-[80px]" dangerouslySetInnerHTML={{ __html: issue.description }}></p>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <p className="text-center text-gray-800 mt-12 text-lg sm:text-2xl font-medium">
//           Why settle for this when you can hire skilled, reliable, in-budget freelancers on demand?
//         </p>
//         <div className="flex justify-center mt-8"></div>
//       </div>
//     </section>
//   );
// };

// // Issue List Data
// const issues = [
//   {
//     title: "Time Consuming",
//     description: "Founders spend <span class='text-blue-600'> 40+ </span> hours per month manually sourcing candidates, delaying product growth.",
//   },
//   {
//     title: "Expensive",
//     description: "Hiring costs range from <span class='text-blue-600'> ₹50,000 to ₹2,00,000 </span> per hire, with increasing costs by <span class='text-blue-600'> 20% </span> due to lost productivity.",
//   },
//   {
//     title: "High Failure Rate",
//     description: "<span class='text-blue-600'> 50% </span> of manual hires turn out to be a bad fit, costing startups <span class='text-blue-600'> 30% </span> of the employee’s first-year salary.",
//   },
//   {
//     title: "Founder Burnout",
//     description: "<span class='text-blue-600'> 72% </span> of entrepreneurs report hiring stress as a major contributor to burnout and decision fatigue.",
//   },
//   {
//     title: "Hard to Find the Right Talent",
//     description: "The ideal <span class='text-blue-600'> 'triple-threat' </span> hire (skilled, reliable, in-budget) is difficult to find, especially for remote teams.",
//   },
//   {
//     title: "Inefficient Talent Vetting",
//     description: "Screening, testing, and verifying candidates requires significant <span class='text-blue-600'> time, money, and effort </span>.",
//   },
//   {
//     title: "Collaboration & Management",
//     description: "Managing remote, distributed teams lacks work transparency, requires <span class='text-blue-600'> coordination across time zones </span>, and complicates performance tracking.",
//   },
// ];

// export default FreelanceExperience;

"use client";
import React from "react";

const FreelanceExperience = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-purple-100 px-4 sm:px-6 py-12">
      <div className="w-full max-w-screen-xl bg-white rounded-2xl p-6 sm:p-12 shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-900">
          Freelancing & Hiring Experience is <span className="text-blue-600">Broken</span>
        </h2>
        <p className="text-gray-700 text-center mt-4 text-lg sm:text-xl">
          What if freelancing was as stable and rewarding as a full-time job?
        </p>

        {/* Issues List */}
        <div className="mt-12 flex flex-col space-y-6 w-full">
          {[
            { title: "Time Consuming", text: "Founders spend 40+ hours per month manually sourcing candidates, delaying product growth." },
            { title: "Expensive", text: "Hiring costs range from ₹50,000 to ₹2,00,000 per hire, with increasing costs by 20% due to lost productivity." },
            { title: "High Failure Rate", text: "50% of manual hires turn out to be a bad fit, costing startups 30% of the employee’s first-year salary." },
            { title: "Founder Burnout", text: "A significant number of entrepreneurs report hiring stress as a major contributor to burnout and decision fatigue." },
          ].map((issue, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition w-full min-h-[140px]">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-2xl w-full sm:w-72 text-center text-lg flex items-center justify-center min-h-[80px]">
                {issue.title}
              </span>
              <p className="mt-4 sm:mt-0 sm:ml-6 text-gray-800 text-lg text-center sm:text-left w-full flex items-center min-h-[80px]">
                {issue.text}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <p className="text-center text-gray-800 mt-12 text-lg sm:text-2xl font-medium">
          Why settle for this when you can hire skilled, reliable, in-budget freelancers on demand?
        </p>
      </div>
    </section>
  );
};

export default FreelanceExperience;
