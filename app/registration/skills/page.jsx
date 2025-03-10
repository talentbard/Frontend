"use client";
import { useState } from "react";

const SkillsPage = () => {
  const [skills, setSkills] = useState([{ primary: "", level: "Beginner", experience: "" }]);
  const [secondarySkills, setSecondarySkills] = useState([{ skill: "", level: "Beginner", experience: "" }]);

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  const handleSecondarySkillChange = (index, field, value) => {
    const updatedSecondarySkills = [...secondarySkills];
    updatedSecondarySkills[index][field] = value;
    setSecondarySkills(updatedSecondarySkills);
  };

  const addSkill = () => {
    setSkills([...skills, { primary: "", level: "Beginner", experience: "" }]);
  };

  const addSecondarySkill = () => {
    setSecondarySkills([...secondarySkills, { skill: "", level: "Beginner", experience: "" }]);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>

      {/* Primary Skills */}
      {skills.map((skill, index) => (
        <div key={index} className="mb-4 grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Primary Skill"
            value={skill.primary}
            onChange={(e) => handleSkillChange(index, "primary", e.target.value)}
            className="border p-2 rounded-md w-full"
          />
          <select
            value={skill.level}
            onChange={(e) => handleSkillChange(index, "level", e.target.value)}
            className="border p-2 rounded-md w-full"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
          <input
            type="number"
            placeholder="Experience (years)"
            value={skill.experience}
            onChange={(e) => handleSkillChange(index, "experience", e.target.value)}
            className="border p-2 rounded-md w-full"
          />
        </div>
      ))}

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={addSkill}
      >
        + Add Another Skill
      </button>

      {/* Secondary Skills */}
      <div className="mt-6">
        <label className="block font-semibold">Secondary Skills</label>
        {secondarySkills.map((skill, index) => (
          <div key={index} className="mb-4 grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Secondary Skill"
              value={skill.skill}
              onChange={(e) => handleSecondarySkillChange(index, "skill", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <select
              value={skill.level}
              onChange={(e) => handleSecondarySkillChange(index, "level", e.target.value)}
              className="border p-2 rounded-md w-full"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
            <input
              type="number"
              placeholder="Experience (years)"
              value={skill.experience}
              onChange={(e) => handleSecondarySkillChange(index, "experience", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>
        ))}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={addSecondarySkill}
        >
          + Add Another Secondary Skill
        </button>
      </div>

      {/* Upload Certifications */}
      <div className="mt-6 border-dashed border-2 border-gray-300 p-4 text-center rounded-lg">
        <p className="text-gray-600">Upload Certifications</p>
        <input type="file" className="mt-2" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 border rounded-md hover:bg-gray-100">Back</button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Next</button>
      </div>
    </div>
  );
};

export default SkillsPage;
