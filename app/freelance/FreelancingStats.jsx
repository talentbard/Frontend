import React from "react";

const FreelancingStats = () => {
  const stats = [
    {
      percentage: "61%",
      title: "Freelancers time is devalued & taken advantage of",
      description: (
        <>
          <span className="text-blue-600 font-extrabold">61%</span> of total project time is spent on mundane admin. Hours of unpaid time spent on project admin

        </>
      ),
    },
    {
      percentage: "65%",
      title: "Contracts & payments are poorly enforced",
      description: (
        <>
          <span className="text-blue-600 font-extrabold">65%</span> of freelance
          projects fail & <span className="text-blue-600 font-extrabold">60%</span> of
          freelancers face payment issues.
        </>
      ),
    },
    {
      percentage: "10%",
      title: "Cross-border payments are a costly barrier",
      description: (
        <>
          Freelancers lose up to{" "}
          <span className="text-blue-600 font-extrabold">10%</span> in fees on
          international payments, hurting their income.
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 text-center">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
        Freelancing Experience is{" "}
        <span className="text-blue-600">Broken</span>
      </h2>
      <p className="mt-3 text-xl md:text-2xl text-gray-700 font-medium">
        What if freelancing was as stable & rewarding as a full-time job?
      </p>

      {/* Stats Section */}
      <div className="mt-16 flex flex-col md:flex-row justify-center gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center max-w-[350px]">
            {/* Circular Progress (Static) */}
            <div className="relative w-36 h-36">
              <svg className="w-full h-full transform -rotate-90">
                {/* Background Circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#E5E7EB"
                  strokeWidth="10"
                  fill="transparent"
                />
                {/* Progress Circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#2563EB"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray="283"
                  strokeDashoffset={`calc(283 - (283 * ${parseInt(
                    stat.percentage
                  )}) / 100)`}
                  strokeLinecap="round"
                />
              </svg>
              {/* Percentage Text (Inside Circle) */}
              <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-blue-700">
                {stat.percentage}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-5 text-lg md:text-xl font-bold text-gray-900">
              {stat.title}
            </h3>
            {/* Description with Red Percentage */}
            <p className="mt-2 text-gray-600 text-base font-semibold md:text-lg leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreelancingStats;
