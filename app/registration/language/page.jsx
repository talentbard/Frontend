"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const LanguageProficiency = () => {
  const router = useRouter();

  const [languages, setLanguages] = useState([
    { name: "", proficiency: "", certification: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index][field] = value;
    setLanguages(updatedLanguages);
  };

  const addLanguage = () => {
    setLanguages([...languages, { name: "", proficiency: "", certification: "" }]);
  };

  const removeLanguage = (index) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
  };

  const handleNext = () => {
    router.push("/registration/job-preferences"); // Navigate to Work Experience page
  };

  const handleBack = () => {
    router.push("/registration/language"); // Navigate back to Skills page
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Language Proficiency</h2>

      {languages.map((language, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          {/* Language Name */}
          <div className="mb-2">
            <label className="block font-medium text-gray-700">Language</label>
            <input
              type="text"
              placeholder="Enter language (e.g., English, Spanish)"
              value={language.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>

          {/* Proficiency Level */}
          <div className="mb-2">
            <label className="block font-medium text-gray-700">Proficiency Level</label>
            <select
              value={language.proficiency}
              onChange={(e) => handleChange(index, "proficiency", e.target.value)}
              className="border p-2 rounded-md w-full"
            >
              <option value="">Select level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Fluent">Fluent</option>
              <option value="Native">Native</option>
            </select>
          </div>

          {/* Certification */}
          <div className="mb-2">
            <label className="block font-medium text-gray-700">Certification (if any)</label>
            <input
              type="text"
              placeholder="Enter certification (e.g., TOEFL, IELTS)"
              value={language.certification}
              onChange={(e) => handleChange(index, "certification", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>

          {/* Remove Language Button */}
          {languages.length > 1 && (
            <button
              onClick={() => removeLanguage(index)}
              className="text-red-600 text-sm hover:underline"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      {/* Add Language Button */}
      <button
        onClick={addLanguage}
        className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
      >
        + Add Language
      </button>

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

export default LanguageProficiency;
