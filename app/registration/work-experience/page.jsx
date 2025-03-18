"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const WorkExperience = () => {
  const router = useRouter();

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

  const [loading, setLoading] = useState(false);
  const [authParams, setAuthParams] = useState({ user_id: "", refresh_token: "", access_token: "" });

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    if (user_id && refresh_token && access_token) {
      setAuthParams({ user_id, refresh_token, access_token });
    }
  }, []);

  const handleChange = (index, field, value) => {
    setWorkExperiences((prev) =>
      prev.map((exp, i) => (i === index ? { ...exp, [field]: value } : exp))
    );
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

  const removeExperience = (index) => {
    setWorkExperiences((prev) => prev.filter((_, i) => i !== index));
  };

  const handleNext = async () => {
    const apiUrl = "https://backend.talentbard.com/talent/work-experience/";
    setLoading(true);

    try {
      for (const exp of workExperiences) {
        if (
          !exp.jobTitle ||
          !exp.company ||
          !exp.industry ||
          !exp.startDate ||
          !exp.responsibilities ||
          !exp.achievements ||
          !exp.techUsed ||
          !exp.projects
        ) {
          alert("Please fill all required fields before submitting.");
          setLoading(false);
          return;
        }

        const payload = {
          auth_params: {
            user_id: authParams.user_id,
            refresh_token: authParams.refresh_token,
          },
          payload: {
            job_title: exp.jobTitle,
            company: exp.company,
            industry: exp.industry,
            start_date: exp.startDate,
            end_date: exp.endDate || null,
            responsibilities: exp.responsibilities,
            achievements: exp.achievements,
            technologies_used: exp.techUsed,
            projects: exp.projects,
            user_id: authParams.user_id,
          },
        };

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accesstoken": authParams.access_token,
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to submit work experience. Status: ${response.status}, Error: ${errorText}`);
        }
      }

      alert("All work experiences submitted successfully!");
      router.push("/registration/portfolio");
    } catch (error) {
      console.error("Error submitting work experience:", error);
      alert("Failed to submit work experience. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    router.push("/registration/skills");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h2>

      {workExperiences.map((experience, index) => (
        <div key={index} className="mb-6 border-b pb-6 relative">
          {workExperiences.length > 1 && (
            <button
              onClick={() => removeExperience(index)}
              className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-md text-sm"
            >
              Remove
            </button>
          )}

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

          <div className="mb-4">
            <label className="block font-medium text-gray-700">Responsibilities</label>
            <textarea
              placeholder="List key responsibilities"
              value={experience.responsibilities}
              onChange={(e) => handleChange(index, "responsibilities", e.target.value)}
              className="border p-2 rounded-md w-full h-20"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">Achievements</label>
            <textarea
              placeholder="Mention notable achievements"
              value={experience.achievements}
              onChange={(e) => handleChange(index, "achievements", e.target.value)}
              className="border p-2 rounded-md w-full h-20"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">Technologies Used</label>
            <input
              type="text"
              placeholder="List technologies (comma separated)"
              value={experience.techUsed}
              onChange={(e) => handleChange(index, "techUsed", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">Projects</label>
            <textarea
              placeholder="Describe key projects"
              value={experience.projects}
              onChange={(e) => handleChange(index, "projects", e.target.value)}
              className="border p-2 rounded-md w-full h-20"
            />
          </div>
        </div>
      ))}

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={addExperience}>
        + Add Another Experience
      </button>

      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 border rounded-md hover:bg-gray-100" onClick={handleBack}>Back</button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={handleNext} disabled={loading}>
          {loading ? "Submitting..." : "Next"}
        </button>
      </div>
    </div>
  );
};

export default WorkExperience;
