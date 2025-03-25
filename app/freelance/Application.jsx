"use client";
import { useRouter } from "next/navigation";

const applicationSteps = [
  { step: "1", title: "Profile Evaluation", desc: "Our team reviews your skills, experience, and potential." },
  { step: "2", title: "MCQ Test", desc: "A 2-minute multiple-choice questions test." },
  { step: "3", title: "Assignment", desc: "A small assignment based on your skills to assess your level." },
  { step: "4", title: "Discovery Call", desc: "A 20-minute virtual chat to showcase your expertise." },
  { step: "5", title: "Final Selection", desc: "Successful applicants gain exclusive access to our Elite Talent League." },
];

const Application = () => {
  const router = useRouter();

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-blue-300">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-screen bg-gradient-to-b from-white to-blue-600 z-[-1]"></div>

      <div className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Application Process Header */}
        <h3 className="text-4xl font-bold text-center mb-12">Application Process</h3>

        {/* Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {applicationSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Step Number Circle */}
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-2xl">
                {step.step}
              </div>
              {/* Step Title */}
              <h4 className="font-semibold text-lg text-blue-700 mt-3">{step.title}</h4>
              {/* Step Description */}
              <p className="text-black text-md">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Apply Now Button */}
        <div className="text-center mt-16">
          <button
            className="px-12 py-4 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={() => router.push("/login")}
          >
            Apply Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Application;
