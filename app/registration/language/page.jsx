"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LanguageProficiency = () => {
  const router = useRouter();
  
  const [languages, setLanguages] = useState([{ name: "", proficiency: "", certification: "" }]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (index, field, value) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index][field] = value;
    setLanguages(updatedLanguages);
  };

  const addLanguage = () => {
    setLanguages([...languages, { name: "", proficiency: "", certification: "" }]);
  };

  const removeLanguage = (index) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  const submitLanguageData = async () => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    const user_id = localStorage.getItem("user_id");

    if (!access_token || !user_id || !refresh_token) {
      console.error("Missing authentication tokens or user ID");
      return;
    }

    setIsSubmitting(true);

    try {
      for (const lang of languages) {
        const requestBody = {
          auth_params: { user_id, refresh_token },
          payload: {
            language: lang.name,
            proficiency_level: lang.proficiency,
            certification: lang.certification,
            user_id,
          },
        };

        const response = await fetch("https://backend.talentbard.com/talent/languages/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accesstoken: access_token,
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `Error: ${response.status}`);
        }
      }

      console.log("All languages submitted successfully!");
      router.push("/registration/job-preferences");
    } catch (error) {
      console.error("API Error:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Language Proficiency</h2>

      {languages.map((language, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          <div className="mb-2">
            <label className="block font-medium text-gray-700">Language</label>
            <input
              type="text"
              placeholder="Enter language (e.g., English)"
              value={language.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>

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

      <button onClick={addLanguage} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
        + Add Language
      </button>

      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 border rounded-md hover:bg-gray-100" onClick={() => router.push("/registration/language")}>
          Back
        </button>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          onClick={submitLanguageData}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Next"}
        </button>
      </div>
    </div>
  );
};

export default LanguageProficiency;
