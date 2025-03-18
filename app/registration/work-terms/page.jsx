"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const WorkTerms = () => {
  const router = useRouter();
  const [workTerms, setWorkTerms] = useState({
    workType: "",
    weeklyAvailability: 20, // Default set to 20 hours
    salaryExpectation: "",
    additionalNotes: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setWorkTerms({ ...workTerms, [e.target.name]: e.target.value });
  };

  const handleSliderChange = (e) => {
    setWorkTerms({ ...workTerms, weeklyAvailability: e.target.value });
  };

  const handleBack = () => {
    router.push("/registration/portfolio");
  };

  const handleNext = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    const user_id = localStorage.getItem("user_id");
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    if (!user_id || !access_token || !refresh_token) {
      setError("Authentication error. Please log in again.");
      setLoading(false);
      return;
    }

    const requestBody = {
      auth_params: {
        user_id: user_id,
        refresh_token: refresh_token,
      },
      payload: {
        work_type: workTerms.workType,
        availability: workTerms.weeklyAvailability.toString(),
        salary_expectation: workTerms.salaryExpectation,
        additional_notes: workTerms.additionalNotes,
        user_id: user_id,
      },
    };

    try {
      const response = await fetch("https://backend.talentbard.com/talent/work-terms/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accesstoken": access_token,
        },
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit work terms.");
      }

      setSuccessMessage("Work terms submitted successfully!");
      setTimeout(() => router.push("/registration/language"), 1500);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Preferred Work Terms</h2>

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

      <div className="mb-4">
        <label className="block font-medium text-gray-700">Weekly Availability</label>
        <div className="flex items-center gap-3">
          <span className="text-gray-600 font-medium">0 hrs</span>
          <input
            type="range"
            name="weeklyAvailability"
            min="0"
            max="60"
            value={workTerms.weeklyAvailability}
            onChange={handleSliderChange}
            className="w-3/5 h-2 bg-green-300 rounded-lg appearance-none cursor-pointer 
                       transition-all duration-300 hover:bg-green-400 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
            style={{ WebkitAppearance: "none" }}
          />
          <span className="text-gray-600 font-medium">
            {workTerms.weeklyAvailability} {workTerms.weeklyAvailability >= 60 ? "+" : ""} hrs
          </span>
        </div>
      </div>

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

      {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 border rounded-md hover:bg-gray-100" onClick={handleBack}>
          Back
        </button>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={handleNext}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Next"}
        </button>
      </div>
    </div>
  );
};

export default WorkTerms;
