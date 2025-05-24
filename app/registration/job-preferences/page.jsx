"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const API_URL = "https://backend.talentbard.com/talent/job-preferences/";

export default function JobPreferences() {
  const router = useRouter();
  const [preferences, setPreferences] = useState({
    jobTitle: "",
    industry: "",
    frameworks: "", // Store frameworks as comma-separated string
    frameworkOptions: [], // Store entered frameworks as options
  });
  const [authParams, setAuthParams] = useState({
    user_id: "",
    refresh_token: "",
    access_token: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load authentication data
  useEffect(() => {
    try {
      const user_id = localStorage.getItem("user_id");
      const refresh_token = localStorage.getItem("refresh_token");
      const access_token = localStorage.getItem("access_token");

      console.log("Retrieved user_id:", user_id); // Debugging

      if (user_id && refresh_token && access_token) {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (!uuidRegex.test(user_id)) {
          console.error("Invalid UUID format for user_id:", user_id);
          alert("Invalid user ID format. Please log in again.");
          router.push("/login");
          return;
        }
        setAuthParams({ user_id, refresh_token, access_token });
      } else {
        console.error("Missing auth parameters:", { user_id, refresh_token, access_token });
        alert("Authentication details missing. Please log in.");
        router.push("/login");
      }
    } catch (error) {
      console.error("Error loading authentication data:", error);
      alert("Failed to load authentication data. Please log in again.");
      router.push("/login");
    }
  }, [router]);

  const handleChange = (field, value) => {
    setPreferences({ ...preferences, [field]: value });

    // If user is entering frameworks, split and store them as options
    if (field === "frameworks") {
      const frameworkList = value.split(",").map((fw) => fw.trim()).filter((fw) => fw); // Remove empty strings
      setPreferences((prev) => ({
        ...prev,
        frameworkOptions: frameworkList,
      }));
    }
  };

  const handleNext = async () => {
    if (!authParams.user_id || !authParams.access_token || !authParams.refresh_token) {
      setError("Authentication error. Please log in again.");
      alert("Authentication error. Please log in again.");
      router.push("/login");
      return;
    }

    if (!preferences.jobTitle || !preferences.industry) {
      setError("Job title and industry are required.");
      alert("Please fill in job title and industry.");
      return;
    }

    setLoading(true);
    setError("");

    const requestBody = {
      auth_params: {
        user_id: authParams.user_id,
        refresh_token: authParams.refresh_token,
      },
      payload: {
        job_title: preferences.jobTitle,
        industry: preferences.industry,
        frameworks: preferences.frameworkOptions,
        user_id: authParams.user_id,
      },
    };

    console.log("Sending job preferences payload:", JSON.stringify(requestBody, null, 2)); // Debugging

    try {
      const response = await axios.post(API_URL, requestBody, {
        headers: {
          "accesstoken": authParams.access_token,
          "Content-Type": "application/json",
        },
      });

      console.log("Job Preferences Submission Success:", response.data);
      alert("Job preferences submitted successfully! 🎉");
      router.push("/quizz");
    } catch (err) {
      console.error("Job Preferences Submission Error:", err);
      const errorMessage = err.response?.data?.error || err.message;
      setError(`Failed to submit job preferences: ${errorMessage}`);
      alert(`Failed to submit job preferences: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    router.push("/registration/language");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Preferences</h2>
      <p className="text-gray-600 mb-4">
        <b>Your talent will be evaluated based on the job title, industry, and frameworks you provide below.</b>
      </p>
      {error && (
        <p className="text-red-600 mb-4">{error}</p>
      )}
      {loading && (
        <p className="text-yellow-600 mb-4">Submitting preferences, please wait...</p>
      )}

      {/* Job Title Input */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Job Title</label>
        <input
          type="text"
          placeholder="Enter job title (e.g., Full Stack Developer)"
          value={preferences.jobTitle}
          onChange={(e) => handleChange("jobTitle", e.target.value)}
          className="border p-2 rounded-md w-full"
          disabled={loading}
        />
      </div>

      {/* Industry Selection */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Industry</label>
        <select
          value={preferences.industry}
          onChange={(e) => handleChange("industry", e.target.value)}
          className="border p-2 rounded-md w-full"
          disabled={loading}
        >
          <option value="">Select Industry</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Education">Education</option>
          <option value="Sports">Sports</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Frameworks Input */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Frameworks</label>
        <input
          type="text"
          placeholder="Enter frameworks (comma-separated, e.g., React, Node.js, Django)"
          value={preferences.frameworks}
          onChange={(e) => handleChange("frameworks", e.target.value)}
          className="border p-2 rounded-md w-full"
          disabled={loading}
        />
        <p className="text-sm text-gray-500 mt-1">
          Enter frameworks you are proficient in, separated by commas.
        </p>
        {preferences.frameworkOptions.length > 0 && (
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-700">Selected Frameworks:</p>
            <ul className="list-disc pl-5">
              {preferences.frameworkOptions.map((fw, index) => (
                <li key={index} className="text-gray-600">{fw}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          className="px-6 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50"
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
}