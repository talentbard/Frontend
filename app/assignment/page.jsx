"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const FETCH_ASSIGNMENT_API_URL = "https://backend.talentbard.com/talent/talent_fetch_assignment_views/";
const RESULT_API_URL = "https://backend.talentbard.com/talent/talent_assignment_result_views/";
const GENERATE_QUESTIONS_API_URL = "https://backend.talentbard.com/talent/interview_questions_generate/";

export default function AssignmentSubmission() {
  const router = useRouter();
  const [githubLink, setGithubLink] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [assignment, setAssignment] = useState(null);
  const [score, setScore] = useState(null);

  const fetchAssignment = async () => {
    const userId = localStorage.getItem("user_id");
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");

    if (!userId || !accessToken || !refreshToken) {
      setMessage("❌ Authentication details missing. Please log in again.");
      router.push("/login");
      return;
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(userId)) {
      setMessage("❌ Invalid user_id format. Please log in again.");
      router.push("/login");
      return;
    }

    console.log("Fetching assignment with user_id:", userId);

    try {
      const response = await fetch(FETCH_ASSIGNMENT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accesstoken": accessToken,
        },
        body: JSON.stringify({
          auth_params: { user_id: userId, refresh_token: refreshToken },
          payload: { user_id: userId },
        }),
      });

      const data = await response.json();
      console.log("Fetch assignment response:", JSON.stringify(data, null, 2));

      if (response.ok && data.payload) {
        setAssignment(data.payload);
      } else if (response.status === 404) {
        setMessage("❌ Assignment endpoint not found. Please check backend configuration or complete the quiz.");
      } else {
        setMessage(data.message || "❌ Failed to fetch assignment. Please complete the quiz first.");
      }
    } catch (error) {
      console.error("Error fetching assignment:", error);
      setMessage("❌ Error fetching assignment. Please try again or contact support.");
    }
  };

  useEffect(() => {
    fetchAssignment();
  }, [router]);

  const isValidGithubLink = (url) => {
    const isValid = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+(\.git)?[\/]?$/i.test(url);
    if (!isValid) {
      console.log("Invalid GitHub URL:", url);
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!isValidGithubLink(githubLink)) {
      setMessage("❌ Please enter a valid GitHub repository link (e.g., https://github.com/username/repo or .git).");
      return;
    }

    if (!assignment) {
      setMessage("❌ Assignment details missing. Please complete the quiz first.");
      return;
    }

    setLoading(true);
    const userId = localStorage.getItem("user_id");
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");

    if (!userId || !accessToken || !refreshToken) {
      setMessage("❌ Authentication details missing. Please log in again.");
      setLoading(false);
      router.push("/login");
      return;
    }

    const payload = {
      auth_params: { user_id: userId, refresh_token: refreshToken },
      payload: {
        assignment_task: assignment.task_title,
        assignment_submission: githubLink,
        user_id: userId,
      },
    };

    console.log("Submitting assignment with payload:", JSON.stringify(payload, null, 2));

    try {
      // Step 1: Submit the assignment
      const submissionResponse = await fetch(RESULT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accesstoken": accessToken,
        },
        body: JSON.stringify(payload),
      });

      // Log raw response if not JSON
      if (!submissionResponse.ok) {
        const rawText = await submissionResponse.text();
        console.error("Raw submission response (not JSON):", rawText);
        throw new Error(`Assignment submission failed with status ${submissionResponse.status}`);
      }

      const submissionResult = await submissionResponse.json();
      console.log("Assignment submission response:", JSON.stringify(submissionResult, null, 2));

      if (submissionResult.message !== "Assignment Result added successfully") {
        setMessage(`❌ Failed to submit assignment: ${submissionResult.error || "Unknown error"}`);
        setLoading(false);
        return;
      }

      setMessage(`✅ Assignment submitted successfully! Score: ${submissionResult.user_data.assignment_score}`);
      setScore(submissionResult.user_data.assignment_score);

      // Step 2: Generate interview questions
      const questionsPayload = {
        auth_params: { user_id: userId, refresh_token: refreshToken },
        payload: { user_id: userId },
      };

      console.log("Generating interview questions with payload:", JSON.stringify(questionsPayload, null, 2));

      const questionsResponse = await fetch(GENERATE_QUESTIONS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accesstoken": accessToken,
        },
        body: JSON.stringify(questionsPayload),
      });

      // Log raw response if not JSON
      if (!questionsResponse.ok) {
        const rawText = await questionsResponse.text();
        console.error("Raw questions response (not JSON):", rawText);
        throw new Error(`Question generation failed with status ${questionsResponse.status}`);
      }

      const questionsResult = await questionsResponse.json();
      console.log("Interview questions generation response:", JSON.stringify(questionsResult, null, 2));

      if (questionsResult.status !== 200) {
        setMessage(`❌ Failed to generate interview questions: ${questionsResult.error || "Unknown error"}`);
        setLoading(false);
        return;
      }

      // Step 3: Redirect to interview
      setMessage("✅ Interview questions generated successfully! Redirecting to interview...");
      setTimeout(() => router.push("/interview"), 2000);

    } catch (error) {
      console.error("Error during assignment submission or question generation:", error);
      setMessage(`❌ Error processing submission: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    router.push("/quiz");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-6">
      <motion.div
        className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl text-center max-w-xl w-full"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white">📌 Assignment Submission</h1>
        <p className="text-gray-300 mt-2">
          Submit your completed assignment by sharing your GitHub repo link. This contributes to your talent evaluation.
        </p>

        {assignment ? (
          <div className="mt-6 p-6 bg-white/10 border border-white/20 rounded-lg text-left text-white">
            <h2 className="text-2xl font-semibold">📝 {assignment.task_title}</h2>
            <p className="mt-2 text-gray-300">{assignment.task_description}</p>
            <ul className="mt-2 text-gray-300 list-disc list-inside">
              {assignment.expected_deliverables.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-gray-400 text-sm">⚡ Difficulty: {assignment.difficulty_level}</p>
          </div>
        ) : (
          <p className="text-gray-300 mt-4">{message || "Loading assignment..."}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 w-full">
          <input
            type="text"
            placeholder="Enter GitHub repo link (e.g., https://github.com/username/repo or .git)"
            className="w-full p-3 text-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            disabled={loading || !assignment}
          />
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
            disabled={loading || !assignment}
          >
            {loading ? "Submitting..." : "Submit Assignment and Start Interview"}
          </button>
        </form>

        {message && (
          <motion.p
            className="mt-4 text-lg font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {message}
          </motion.p>
        )}
        {message.includes("❌") && (
          <motion.button
            onClick={fetchAssignment}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all"
          >
            Retry Fetching Assignment
          </motion.button>
        )}

        <div className="flex justify-center mt-6">
          <motion.button
            onClick={handleBack}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-gray-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all"
          >
            Back
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}