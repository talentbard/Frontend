"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const JobPreferences = () => {
  const router = useRouter();

  const [preferences, setPreferences] = useState({
    jobTitle: "",
    workType1: "",
    workType2: "",
    workType3: "",
    industry1: "",
    industry2: "",
    industry3: "",
    desiredRole: "",
    careerObjective: "",
  });

  const handleChange = (field, value) => {
    setPreferences({ ...preferences, [field]: value });
  };
  const handleNext = () => {
    router.push("/registration/status"); // Navigate to Work Experience page
  };

  const handleBack = () => {
    router.push("/registration/language"); // Navigate back to Skills page
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Preferences</h2>

      {/* Job Title */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Job Title</label>
        <input
          type="text"
          placeholder="Enter job title (e.g., Software Engineer)"
          value={preferences.jobTitle}
          onChange={(e) => handleChange("jobTitle", e.target.value)}
          className="border p-2 rounded-md w-full"
        />
      </div>

      {/* Preferred Job Types */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Preferred Job Type (Select Top 3)</label>
        <select
          value={preferences.workType1}
          onChange={(e) => handleChange("workType1", e.target.value)}
          className="border p-2 rounded-md w-full"
        >
          <option value="">Top Preference</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Freelance">Freelance</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>

        <select
          value={preferences.workType2}
          onChange={(e) => handleChange("workType2", e.target.value)}
          className="border p-2 rounded-md w-full mt-2"
        >
          <option value="">Second Preference</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Freelance">Freelance</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>

        <select
          value={preferences.workType3}
          onChange={(e) => handleChange("workType3", e.target.value)}
          className="border p-2 rounded-md w-full mt-2"
        >
          <option value="">Third Preference</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Freelance">Freelance</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      {/* Preferred Industries */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Preferred Industries (Select Top 3)</label>
        <select
          value={preferences.industry1}
          onChange={(e) => handleChange("industry1", e.target.value)}
          className="border p-2 rounded-md w-full"
        >
          <option value="">Top Preference</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Education">Education</option>
          <option value="Sports">Sports</option>
          <option value="Other">Other</option>
        </select>

        <select
          value={preferences.industry2}
          onChange={(e) => handleChange("industry2", e.target.value)}
          className="border p-2 rounded-md w-full mt-2"
        >
          <option value="">Second Preference</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Education">Education</option>
          <option value="Sports">Sports</option>
          <option value="Other">Other</option>
        </select>

        <select
          value={preferences.industry3}
          onChange={(e) => handleChange("industry3", e.target.value)}
          className="border p-2 rounded-md w-full mt-2"
        >
          <option value="">Third Preference</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Education">Education</option>
          <option value="Sports">Sports</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Desired Role */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Desired Role</label>
        <input
          type="text"
          placeholder="Enter desired role (e.g., Web Designer, Full Stack Developer)"
          value={preferences.desiredRole}
          onChange={(e) => handleChange("desiredRole", e.target.value)}
          className="border p-2 rounded-md w-full"
        />
      </div>

      {/* Career Objective */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Career Objective</label>
        <textarea
          placeholder="Write your career objective..."
          value={preferences.careerObjective}
          onChange={(e) => handleChange("careerObjective", e.target.value)}
          className="border p-2 rounded-md w-full h-24 resize-none"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 border rounded-md hover:bg-gray-100" onClick={handleBack}>Back</button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default JobPreferences;
