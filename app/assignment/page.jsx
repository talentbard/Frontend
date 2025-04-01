
// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function AssignmentSubmission() {
//   const [githubLink, setGithubLink] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [assignment, setAssignment] = useState(null);

//   useEffect(() => {
//     const fetchAssignment = async () => {
//       const userId = localStorage.getItem("user_id");
//       const accessToken = localStorage.getItem("access_token");
//       const refreshToken = localStorage.getItem("refresh_token");

//       if (!userId || !accessToken || !refreshToken) {
//         setMessage("❌ Authentication details missing.");
//         return;
//       }

//       try {
//         const response = await fetch(
//           "https://backend.talentbard.com/talent/talent_make_assignment_views/",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               "Accesstoken": accessToken,
//             },
//             body: JSON.stringify({
//               auth_params: { user_id: userId, refresh_token: refreshToken },
//               payload: { user_id: userId },
//             }),
//           }
//         );

//         const data = await response.json();
//         if (data.status === 200) {
//           setAssignment(data.payload);
//         } else {
//           setMessage("❌ Failed to fetch assignment.");
//         }
//       } catch (error) {
//         setMessage("❌ Error fetching assignment.");
//       }
//     };

//     fetchAssignment();
//   }, []);

//   const isValidGithubLink = (url) => {
//     return /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/.test(url);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     if (!isValidGithubLink(githubLink)) {
//       setMessage("❌ Please enter a valid GitHub repository link.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       setMessage("✅ Assignment submitted successfully!");
//     } catch (error) {
//       setMessage("❌ Failed to submit. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-6">
//       <motion.div
//         className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl text-center max-w-xl w-full"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-4xl font-bold text-white">📌 Assignment Submission</h1>
//         <p className="text-gray-300 mt-2">Submit your completed assignment by sharing your GitHub repo link.</p>

//         {assignment ? (
//           <div className="mt-6 p-6 bg-white/10 border border-white/20 rounded-lg text-left text-white">
//             <h2 className="text-2xl font-semibold">📝 {assignment.task_title}</h2>
//             <p className="mt-2 text-gray-300">{assignment.task_description}</p>
//             <ul className="mt-2 text-gray-300 list-disc list-inside">
//               {assignment.expected_deliverables.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//             <p className="mt-4 text-gray-400 text-sm">⚡ Difficulty: {assignment.difficulty_level}</p>
//           </div>
//         ) : (
//           <p className="text-gray-300 mt-4">Loading assignment...</p>
//         )}

//         <form onSubmit={handleSubmit} className="mt-6 w-full">
//           <input
//             type="text"
//             placeholder="Enter GitHub repo link..."
//             className="w-full p-3 text-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={githubLink}
//             onChange={(e) => setGithubLink(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="w-full mt-4 px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
//             disabled={loading}
//           >
//             {loading ? "Submitting..." : "Submit Assignment"}
//           </button>
//         </form>

//         {message && (
//           <motion.p
//             className="mt-4 text-lg font-bold"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             {message}
//           </motion.p>
//         )}
//       </motion.div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AssignmentSubmission() {
  const [githubLink, setGithubLink] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [assignment, setAssignment] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchAssignment = async () => {
      const userId = localStorage.getItem("user_id");
      const accessToken = localStorage.getItem("access_token");
      const refreshToken = localStorage.getItem("refresh_token");

      if (!userId || !accessToken || !refreshToken) {
        setMessage("❌ Authentication details missing.");
        return;
      }

      try {
        const response = await fetch(
          "https://backend.talentbard.com/talent/talent_make_assignment_views/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accesstoken": accessToken,
            },
            body: JSON.stringify({
              auth_params: { user_id: userId, refresh_token: refreshToken },
              payload: { user_id: userId },
            }),
          }
        );

        const data = await response.json();
        if (response.ok) {
          setAssignment(data.payload);
        } else {
          console.error("Assignment Fetch Error:", data);
          setMessage("❌ Failed to fetch assignment.");
        }
      } catch (error) {
        console.error("Error fetching assignment:", error);
        setMessage("❌ Error fetching assignment.");
      }
    };

    fetchAssignment();
  }, []);

  const isValidGithubLink = (url) => {
    return /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!isValidGithubLink(githubLink)) {
      setMessage("❌ Please enter a valid GitHub repository link.");
      return;
    }

    setLoading(true);
    const userId = localStorage.getItem("user_id");
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");

    if (!assignment || !userId || !accessToken || !refreshToken) {
      setMessage("❌ Authentication or assignment details missing.");
      setLoading(false);
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

    console.log("Submitting Assignment with payload:", JSON.stringify(payload, null, 2));

    try {
      const response = await fetch(
        "https://backend.talentbard.com/talent/talent_assignment_result_views/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
           "Accesstoken": accessToken,
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      console.log("Server Response:", result);

      if (response.ok && result.message === "Quiz Result added successfully") {
        setMessage("✅ Assignment submitted successfully! Score: " + result.user_data.assignment_score);
        setScore(result.user_data.assignment_score);
      } else {
        console.error("Submission Error:", result);
        setMessage("❌ Failed to submit assignment.");
      }
    } catch (error) {
      console.error("Error submitting assignment:", error);
      setMessage("❌ Error submitting assignment.");
    } finally {
      setLoading(false);
    }
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
        <p className="text-gray-300 mt-2">Submit your completed assignment by sharing your GitHub repo link.</p>

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
          <p className="text-gray-300 mt-4">Loading assignment...</p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 w-full">
          <input
            type="text"
            placeholder="Enter GitHub repo link..."
            className="w-full p-3 text-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Assignment"}
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
      </motion.div>
    </div>
  );
}