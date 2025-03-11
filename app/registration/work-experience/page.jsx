"use client";
import { useState } from "react";

const WorkExperience = () => {
  const [workExperiences, setWorkExperiences] = useState([
    {
      jobTitle: "",
      company: "",
      industry: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
      achievements: "",
      techUsed: "",
      projects: "",
    },
  ]);

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][field] = value;
    setWorkExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      {
        jobTitle: "",
        company: "",
        industry: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
        achievements: "",
        techUsed: "",
        projects: "",
      },
    ]);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h2>

      {workExperiences.map((experience, index) => (
        <div key={index} className="mb-6 border-b pb-6">
          {/* Job Title */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              placeholder="Enter job title"
              value={experience.jobTitle}
              onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>

          {/* Company & Industry */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium text-gray-700">Company</label>
              <input
                type="text"
                placeholder="Enter company name"
                value={experience.company}
                onChange={(e) => handleChange(index, "company", e.target.value)}
                className="border p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Industry</label>
              <input
                type="text"
                placeholder="Enter industry"
                value={experience.industry}
                onChange={(e) => handleChange(index, "industry", e.target.value)}
                className="border p-2 rounded-md w-full"
              />
            </div>
          </div>

          {/* Start & End Date */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                value={experience.startDate}
                onChange={(e) => handleChange(index, "startDate", e.target.value)}
                className="border p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">End Date</label>
              <input
                type="date"
                value={experience.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
                className="border p-2 rounded-md w-full"
              />
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Responsibilities</label>
            <textarea
              placeholder="List key responsibilities"
              value={experience.responsibilities}
              onChange={(e) => handleChange(index, "responsibilities", e.target.value)}
              className="border p-2 rounded-md w-full h-20"
            />
          </div>

          {/* Achievements */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Achievements</label>
            <textarea
              placeholder="Mention notable achievements"
              value={experience.achievements}
              onChange={(e) => handleChange(index, "achievements", e.target.value)}
              className="border p-2 rounded-md w-full h-20"
            />
          </div>

          {/* Technologies Used */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Technologies Used</label>
            <select
              value={experience.techUsed}
              onChange={(e) => handleChange(index, "techUsed", e.target.value)}
              className="border p-2 rounded-md w-full"
            >
              <option value="">Select Technology Used</option>
              <option value="Git">Git</option>
              <option value="React">React</option>
              <option value="JavaScript">JavaScript</option>
            </select>
          </div>

          {/* Projects */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Projects</label>
            <textarea
              placeholder="Describe projects worked on"
              value={experience.projects}
              onChange={(e) => handleChange(index, "projects", e.target.value)}
              className="border p-2 rounded-md w-full h-20"
            />
          </div>
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
