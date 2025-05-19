"use client";

import { useEffect, useState } from "react";

const InterviewSessionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [timer, setTimer] = useState(3600); // 1 hour in seconds
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const accessToken = localStorage.getItem("access_token");
      try {
        const response = await fetch("https://backend.talentbard.com/interview/questions/", {
          headers: {
            "Accesstoken": accessToken,
          },
        });
        const data = await response.json();
        setQuestions(data.questions || []);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

//   useEffect(() => {
//     const handleBlur = () => {
//       setTabSwitchCount((prev) => {
//         const newCount = prev + 1;
//         if (newCount === 1) {
//           alert("⚠ You left the tab. This is your only warning. Do not switch tabs again.");
//         } else if (newCount > 1) {
//           alert("❌ You left the tab again. Interview will now be submitted.");
//           handleSubmit();
//         }
//         return newCount;
//       });
//     };

//     const goFullScreen = () => {
//       const el = document.documentElement;
//       if (el.requestFullscreen) el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
//       else if (el.msRequestFullscreen) el.msRequestFullscreen();
//     };

//     goFullScreen();
//     window.addEventListener("blur", handleBlur);

//     return () => {
//       window.removeEventListener("blur", handleBlur);
//     };
//   }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleAnswerChange = (e) => {
    setAnswers({ ...answers, [currentIndex]: e.target.value });
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const userId = localStorage.getItem("user_id");
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");
    try {
      await fetch("https://backend.talentbard.com/interview/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accesstoken": accessToken,
        },
        body: JSON.stringify({
          auth_params: { user_id: userId, refresh_token: refreshToken },
          payload: {
            responses: questions.map((q, i) => ({ question: q, answer: answers[i] || "" })),
          },
        }),
      });
      alert("✅ Interview session submitted.");
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  if (!questions.length) {
    return <div className="text-white p-6">Loading questions...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <div className="text-2xl font-bold mb-4">🧠 AI Interview Session</div>
      <div className="mb-2">⏱ Time Remaining: {formatTime(timer)}</div>
      <div className="mb-4 text-lg">Question {currentIndex + 1} of {questions.length}</div>
      <div className="bg-white/10 border border-white/20 p-6 rounded-xl max-w-2xl w-full">
        <p className="text-xl font-semibold mb-4">{questions[currentIndex]}</p>
        <textarea
          className="w-full h-40 p-4 text-black rounded-lg border-2 border-gray-400"
          value={answers[currentIndex] || ""}
          onChange={handleAnswerChange}
          placeholder="Type your answer here..."
        ></textarea>
      </div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={prevQuestion}
          disabled={currentIndex === 0}
          className="bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-600 disabled:opacity-50"
        >
          ⬅ Previous
        </button>
        <button
          onClick={nextQuestion}
          disabled={currentIndex === questions.length - 1}
          className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          Next ➡
        </button>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 bg-green-500 px-6 py-3 rounded-full hover:bg-green-600 text-lg"
        disabled={loading}
      >
        {loading ? "Submitting..." : "✅ Submit Interview"}
      </button>
    </div>
  );
};

export default InterviewSessionPage;
