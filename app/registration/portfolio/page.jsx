"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const PortfolioReferences = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [authParams, setAuthParams] = useState({
    user_id: "",
    refresh_token: "",
    access_token: "",
  });

  const [portfolio, setPortfolio] = useState({
    resume: null,
    projectLinks: [""],
    references: [""],
  });

  // Fetch authentication details from localStorage
  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const refresh_token = localStorage.getItem("refresh_token");
    const access_token = localStorage.getItem("access_token");

    if (user_id && refresh_token && access_token) {
      setAuthParams({ user_id, refresh_token, access_token });
    }
  }, []);

  const handleFileChange = (e) => {
    setPortfolio({ ...portfolio, resume: e.target.files[0] });
  };

  const handleChange = (index, type, value) => {
    setPortfolio((prev) => {
      const updatedList = [...prev[type]];
      updatedList[index] = value;
      return { ...prev, [type]: updatedList };
    });
  };

  const addField = (type) => {
    setPortfolio((prev) => ({
      ...prev,
      [type]: [...prev[type], ""],
    }));
  };

  const removeField = (index, type) => {
    setPortfolio((prev) => {
      const updatedList = [...prev[type]];
      updatedList.splice(index, 1);
      return { ...prev, [type]: updatedList };
    });
  };

  const handleBack = () => {
    router.push("/registration/work-experience");
  };

  const handleNext = async () => {
    const apiUrl = "https://backend.talentbard.com/talent/portfolio/";
    setLoading(true);

    try {
      let resumeBase64 = "";

      if (portfolio.resume) {
        resumeBase64 = await convertFileToBase64(portfolio.resume);
      }

      const requestBody = {
        auth_params: {
          user_id: authParams.user_id,
          refresh_token: authParams.refresh_token,
        },
        payload: {
          resume: resumeBase64,
          project_links: portfolio.projectLinks,
          references: portfolio.references,
          user_id: authParams.user_id,
        },
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accesstoken: authParams.access_token, // Fixed header case
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to submit portfolio. Status: ${response.status}, Error: ${errorText}`);
      }

      alert("Portfolio submitted successfully! 🎉");
      router.push("/registration/work-terms");

    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to submit portfolio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Convert file to Base64
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]); // Removes "data:application/pdf;base64,"
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Portfolio & References</h2>

      {/* Resume Upload */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Upload Resume</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="border p-2 rounded-md w-full"
        />
        {portfolio.resume && (
          <p className="mt-2 text-green-600">{portfolio.resume.name} uploaded</p>
        )}
      </div>

      {/* Project Links */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Project Links</label>
        {portfolio.projectLinks.map((link, index) => (
          <div key={index} className="flex items-center gap-2 mt-2">
            <input
              type="url"
              placeholder="Enter project link"
              value={link}
              onChange={(e) => handleChange(index, "projectLinks", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            {index > 0 && (
              <button
                onClick={() => removeField(index, "projectLinks")}
                className="text-red-600 font-bold"
              >
                ✖
              </button>
            )}
          </div>
        ))}
        <button
          onClick={() => addField("projectLinks")}
          className="mt-2 text-blue-600 font-bold"
        >
          + Add More
        </button>
      </div>

      {/* References */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">References</label>
        {portfolio.references.map((ref, index) => (
          <div key={index} className="flex items-center gap-2 mt-2">
            <input
              type="text"
              placeholder="Enter reference name & contact"
              value={ref}
              onChange={(e) => handleChange(index, "references", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            {index > 0 && (
              <button
                onClick={() => removeField(index, "references")}
                className="text-red-600 font-bold"
              >
                ✖
              </button>
            )}
          </div>
        ))}
        <button
          onClick={() => addField("references")}
          className="mt-2 text-blue-600 font-bold"
        >
          + Add More
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 border rounded-md hover:bg-gray-100" onClick={handleBack}>
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

export default PortfolioReferences;
