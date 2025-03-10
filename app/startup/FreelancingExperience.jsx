import React from "react";

const FreelanceExperience = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-white px-6">
      <div className="w-full max-w-screen-xl bg-white rounded-2xl p-12">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-center">
          Freelancing Experience is <span className="text-blue-600">Broken</span>
        </h2>
        <p className="text-gray-600 text-center mt-4 text-xl">
          What if freelancing was as stable and rewarding as a full-time job?
        </p>

        {/* Issues List */}
        <div className="mt-12 flex flex-col space-y-8">
          {issues.map((issue, index) => (
            <div key={index} className="flex items-center bg-white p-6">
              <span className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-2xl w-72 text-center text-lg">
                {issue.title}
              </span>
              <p className="ml-8 text-gray-800 text-lg">{issue.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <p className="text-center text-gray-700 mt-12 text-2xl">
          Why settle for this when you can hire skilled, reliable, in-budget freelancers on demand?
        </p>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 text-white text-xl font-semibold px-10 py-5 rounded-xl hover:bg-blue-700 transition">
            Find Talent Now
          </button>
        </div>
      </div>
    </section>
  );
};

// Issue List Data
const issues = [
  {
    title: "Time Consuming",
    description: "Founders spend 40+ hours per month manually sourcing candidates, delaying product growth.",
  },
  {
    title: "Expensive",
    description: "Hiring costs range from ₹50,000 to ₹2,00,000 per hire, with increasing costs by 20% due to lost productivity.",
  },
  {
    title: "High Failure Rate",
    description: "50% of manual hires turn out to be a bad fit, costing startups 30% of the employee’s first-year salary.",
  },
  {
    title: "Founder Burnout",
    description: "72% of entrepreneurs report hiring stress as a major contributor to burnout and decision fatigue.",
  },
  {
    title: "Hard to Find the Right Talent",
    description: "The ideal 'triple-threat' hire (skilled, reliable, in-budget) is difficult to find, especially for remote teams.",
  },
  {
    title: "Inefficient Talent Vetting",
    description: "Screening, testing, and verifying candidates requires significant time, money, and effort.",
  },
  {
    title: "Collaboration & Management",
    description: "Managing remote, distributed teams lacks work transparency, requires coordination across time zones, and complicates performance tracking.",
  },
];

export default FreelanceExperience;
