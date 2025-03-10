"use client";
import { useState } from "react";

const WorkExperience = () => {
  const [workExperiences, setWorkExperiences] = useState([
    { jobTitle: "", company: "", startDate: "", endDate: "", responsibilities: "", techUsed: "", projects: "" }
  ]);

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][field] = value;
    setWorkExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { jobTitle: "", company: "", startDate: "", endDate: "", responsibilities: "", techUsed: "", projects: "" }
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h2>

      {workExperiences.map((experience, index) => (
        <div key={index} className="mb-6 border-b pb-6">
          {/* Job Title & Company */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Job Title"
              value={experience.jobTitle}
              onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Company & Industry"
              value={experience.company}
              onChange={(e) => handleChange(index, "company", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>

          {/* Start Date & End Date */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="date"
              value={experience.startDate}
              onChange={(e) => handleChange(index, "startDate", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="date"
              value={experience.endDate}
              onChange={(e) => handleChange(index, "endDate", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>

          {/* Responsibilities */}
          <textarea
            placeholder="Responsibilities & Achievements"
            value={experience.responsibilities}
            onChange={(e) => handleChange(index, "responsibilities", e.target.value)}
            className="border p-2 rounded-md w-full h-20 mb-4"
          />

          {/* Technologies Used */}
          <select
            value={experience.techUsed}
            onChange={(e) => handleChange(index, "techUsed", e.target.value)}
            className="border p-2 rounded-md w-full mb-4"
          >
            <option value="">Select Technology Used</option>
            <option value="Git">Git</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
          </select>

          {/* Projects */}
          <textarea
            placeholder="Projects"
            value={experience.projects}
            onChange={(e) => handleChange(index, "projects", e.target.value)}
            className="border p-2 rounded-md w-full h-20"
          />
        </div>
      ))}

      {/* Add Experience Button */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={addExperience}
      >
        + Add Another Experience
      </button>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 border rounded-md hover:bg-gray-100">Back</button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Next</button>
      </div>
    </div>
  );
};

export default WorkExperience;
