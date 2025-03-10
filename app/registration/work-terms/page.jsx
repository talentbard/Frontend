"use client";
import { useState } from "react";

const WorkTerms = () => {
  const [workTerms, setWorkTerms] = useState({
    workType: "",
    availability: "",
    salaryExpectation: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    setWorkTerms({ ...workTerms, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Preferred Work Terms</h2>

      {/* Work Type */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Work Type</label>
        <select
          name="workType"
          value={workTerms.workType}
          onChange={handleChange}
          className="border p-2 rounded-md w-full"
        >
          <option value="">Select work type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Freelance">Freelance</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      {/* Availability */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Availability</label>
        <input
          type="text"
          name="availability"
          placeholder="E.g., Immediate, 1 month notice"
          value={workTerms.availability}
          onChange={handleChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      {/* Salary Expectation */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Salary Expectation</label>
        <input
          type="text"
          name="salaryExpectation"
          placeholder="Enter expected salary (e.g., $5000/month)"
          value={workTerms.salaryExpectation}
          onChange={handleChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      {/* Additional Notes */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Additional Notes</label>
        <textarea
          name="additionalNotes"
          placeholder="Any other work preferences or details"
          value={workTerms.additionalNotes}
          onChange={handleChange}
          className="border p-2 rounded-md w-full"
          rows="3"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 border rounded-md hover:bg-gray-100">Back</button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default WorkTerms;
