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
  const [noWorkExperience, setNoWorkExperience] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authParams, setAuthParams] = useState({ user_id: "", refresh_token: "", access_token: "" });

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const refresh_token = localStorage.getItem("refresh_token");
    const access_token = localStorage.getItem("access_token");

    console.log("User ID:", user_id);
    console.log("Refresh Token:", refresh_token);
    console.log("Access Token:", access_token);

    if (user_id && refresh_token && access_token) {
      setAuthParams({ user_id, refresh_token, access_token });
    } else {
      console.error("Auth parameters missing in localStorage");
      alert("Session expired. Please log in again.");
      localStorage.clear();
      router.push("/login");
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
    if (!authParams.user_id || authParams.user_id.length !== 36) {
      alert("Invalid user ID. Please log in again.");
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      let payloads = [];

      if (noWorkExperience) {
        // Send a placeholder payload for "No Work Experience"
        const today = new Date().toISOString().split("T")[0]; // Current date in YYYY-MM-DD
        payloads = [
          {
            auth_params: {
              user_id: String(authParams.user_id),
              refresh_token: authParams.refresh_token,
            },
            payload: {
              job_title: "None",
              company: "None",
              industry: "None",
              start_date: today,
              end_date: null,
              responsibilities: "None",
              achievements: "None",
              technologies_used: "None",
              projects: "None",
              user_id: authParams.user_id,
            },
          },
        ];
      } else {
        // Validate and prepare payloads for multiple experiences
        payloads = workExperiences.map((exp, index) => {
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
            throw new Error(`Please fill all required fields for experience #${index + 1}.`);
          }

          return {
            auth_params: {
              user_id: String(authParams.user_id),
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
        });
      }

      console.log("Submitting payloads:", JSON.stringify(payloads, null, 2));

      // Send all API requests concurrently
      const responses = await Promise.all(
        payloads.map(async (payload, index) => {
          const response = await fetch("https://backend.talentbard.com/talent/work-experience/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accesstoken: authParams.access_token,
            },
            body: JSON.stringify(payload),
          });
          return { response, index, payload };
        })
      );

      // Check for failed responses and collect error details
      const errors = [];
      const results = await Promise.all(
        responses.map(async ({ response, index, payload }) => {
          let result;
          try {
            result = await response.json();
          } catch (jsonError) {
            const text = await response.text();
            result = { error: `Failed to parse response: ${text}` };
          }
          if (!response.ok) {
            errors.push({
              index: index + 1,
              status: response.status,
              error: result.error || result.message || `Unknown error (Status ${response.status})`,
              payload,
            });
          }
          return result;
        })
      );

      console.log("Server Responses:", results);

      if (errors.length > 0) {
        const errorMessages = errors.map(
          (err) =>
            `Experience #${err.index} failed (Status ${err.status}): ${err.error}. Payload: ${JSON.stringify(
              err.payload.payload,
              null,
              2
            )}`
        );
        throw new Error(`Failed to submit some work experiences:\n${errorMessages.join("\n")}`);
      }

      alert("Work experience submitted successfully!");
      router.push("/registration/portfolio");
    } catch (error) {
      console.error("Error submitting work experience:", error);
      alert(`Failed to submit work experience: ${error.message}`);
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

      {/* No Work Experience Checkbox */}
      <div className="mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={noWorkExperience}
            onChange={(e) => setNoWorkExperience(e.target.checked)}
            className="h-5 w-5"
          />
          <span className="text-gray-700 font-medium">I have no work experience</span>
        </label>
      </div>

      {/* Work Experience Form */}
      {workExperiences.map((experience, index) => (
        <div key={index} className="mb-6 border-b pb-6 relative">
          {workExperiences.length > 1 && !noWorkExperience && (
            <button
              onClick={() => removeExperience(index)}
              className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-md text-sm"
              disabled={noWorkExperience}
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
              disabled={noWorkExperience}
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
                disabled={noWorkExperience}
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
                disabled={noWorkExperience}
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
                disabled={noWorkExperience}
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">End Date</label>
              <input
                type="date"
                value={experience.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
                className="border p-2 rounded-md w-full"
                disabled={noWorkExperience}
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
              disabled={noWorkExperience}
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">Achievements</label>
            <textarea
              placeholder="Mention notable achievements"
              value={experience.achievements}
              onChange={(e) => handleChange(index, "achievements", e.target.value)}
              className="border p-2 rounded-md w-full h-20"
              disabled={noWorkExperience}
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
              disabled={noWorkExperience}
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">Projects</label>
            <textarea
              placeholder="Describe key projects"
              value={experience.projects}
              onChange={(e) => handleChange(index, "projects", e.target.value)}
              className="border p-2 rounded-md w-full h-20"
              disabled={noWorkExperience}
            />
          </div>
        </div>
      ))}

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={addExperience}
        disabled={noWorkExperience}
      >
        + Add Another Experience
      </button>

      <div className="flex justify-between mt-6">
        <button
          className="px-6 py-2 border rounded-md hover:bg-gray-100"
          onClick={handleBack}
          disabled={loading}
        >
          Back
        </button>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          onClick={handleNext}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Next"}
        </button>
      </div>
    </div>
  );
};

export default WorkExperience;