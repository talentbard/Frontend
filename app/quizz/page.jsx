"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const API_URL = "https://backend.talentbard.com/talent/talent_make_quiz_views/";
const RESULT_API_URL = "https://backend.talentbard.com/talent/talent_quiz_result_views/";
const ASSIGNMENT_API_URL = "https://backend.talentbard.com/talent/talent_make_assignment_views/";

export default function QuizPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes for entire quiz
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // Track submission status

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const access_token = localStorage.getItem("access_token");
        const user_id = localStorage.getItem("user_id");
        const refresh_token = localStorage.getItem("refresh_token");
        console.log(access_token);

        if (!access_token || !user_id || !refresh_token) {
          throw new Error("Authentication tokens are missing. Please log in again.");
        }

        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (!uuidRegex.test(user_id)) {
          throw new Error("Invalid user_id format. Please log in again.");
        }

        console.log("Fetching questions with user_id:", user_id); // Debugging

        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "accesstoken": access_token,
          },
          body: JSON.stringify({
            auth_params: { user_id, refresh_token },
            payload: { user_id },
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Failed to fetch questions: ${response.statusText}`);
        }

        const data = await response.json();
        if (!data.payload || !Array.isArray(data.payload) || data.payload.length === 0) {
          throw new Error("No questions available.");
        }

        setQuestions(data.payload);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching questions:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (!quizStarted || quizFinished || loading) return;

    if (timeLeft === 0) {
      setQuizFinished(true);
      sendQuizResult();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizStarted, quizFinished, loading]);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    const correctOptionKey = `option_${questions[currentQuestion].correct_option.split(" ")[1]}`;
    const correctAnswerText = questions[currentQuestion][correctOptionKey];

    if (option === correctAnswerText) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        setQuizFinished(true);
        sendQuizResult();
      }
    }, 800);
  };

  const sendQuizResult = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const user_id = localStorage.getItem("user_id");
      const refresh_token = localStorage.getItem("refresh_token");

      if (!access_token || !user_id || !refresh_token) {
        throw new Error("Authentication tokens are missing. Please log in again.");
      }

      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      if (!uuidRegex.test(user_id)) {
        throw new Error("Invalid user_id format. Please log in again.");
      }

      if (typeof score !== "number" || isNaN(score) || score < 0) {
        throw new Error("Invalid quiz score.");
      }

      const payload = {
        auth_params: { user_id, refresh_token },
        payload: { quiz_score: Number(score), user_id },
      };

      console.log("Sending quiz result payload:", JSON.stringify(payload, null, 2)); // Debugging

      const response = await fetch(RESULT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accesstoken": access_token,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("Quiz result response:", JSON.stringify(result, null, 2)); // Debugging

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error(result.error || "Invalid quiz data provided.");
        } else if (response.status === 401) {
          throw new Error("Unauthorized. Please log in again.");
        } else if (response.status === 404) {
          throw new Error("User not found.");
        } else {
          throw new Error(result.message || `Failed to send quiz result: ${response.statusText}`);
        }
      }

      setMessage(result.message || "✅ Quiz result sent successfully!");
      setSubmissionSuccess(true); // Mark submission as successful
    } catch (error) {
      setMessage(`❌ ${error.message}`);
      setSubmissionSuccess(false);
      console.error("Error sending quiz result:", error.message);
    }
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleNext = async () => {
    if (!submissionSuccess) {
      setMessage("❌ Please wait for quiz result submission or retry.");
      return;
    }

    setMessage(""); // Clear previous messages
    try {
      const access_token = localStorage.getItem("access_token");
      const user_id = localStorage.getItem("user_id");
      const refresh_token = localStorage.getItem("refresh_token");

      if (!access_token || !user_id || !refresh_token) {
        throw new Error("Authentication tokens are missing. Please log in again.");
      }

      console.log("Generating assignment with user_id:", user_id); // Debugging

      const response = await fetch(ASSIGNMENT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accesstoken": access_token,
        },
        body: JSON.stringify({
          auth_params: { user_id, refresh_token },
          payload: { user_id },
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || `Failed to generate assignment: ${response.statusText}`);
      }

      if (data.status !== 200 || !data.payload) {
        throw new Error("Invalid assignment data received.");
      }

      console.log("Assignment response:", data); // Debugging

      router.push("/assignment"); // Navigate to correct route
    } catch (error) {
      setMessage(`❌ ${error.message}`);
      console.error("Error generating assignment:", error.message);
    }
  };

  const handleBack = () => {
    router.push("/job-preferences");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p>Loading Questions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-red-400">{error}</p>
        <motion.button
          onClick={handleBack}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-gray-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all"
        >
          Back
        </motion.button>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-6">
        <motion.div
          className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl text-center max-w-lg w-full"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Start Quiz</h2>
          <p className="text-gray-300 mb-4">
            Your quiz score will contribute to your talent evaluation, alongside your job preferences.
          </p>
          <p className="text-gray-300 mb-6">
            This quiz consists of 10 questions, with <b>2 minutes total</b>. Be quick and accurate!
          </p>
          <motion.button
            onClick={handleStartQuiz}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all"
          >
            Start Quiz
          </motion.button>
          <motion.button
            onClick={handleBack}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 px-6 py-3 bg-gray-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all"
          >
            Back
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-6">
      <motion.div
        className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl text-center max-w-lg w-full"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-300 mb-4">
          Your quiz score will contribute to your talent evaluation, alongside your job preferences.
        </p>
        {quizFinished ? (
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }}>
            <h2 className="text-4xl font-bold text-white">Quiz Completed!</h2>
            <p className="text-lg mt-4 text-gray-300">
              Your Score:{" "}
              <span className="text-green-400 font-bold">
                {score} / {questions.length}
              </span>
            </p>
            {message && (
              <p className="mt-4 text-lg font-bold text-white">{message}</p>
            )}
            {message.includes("❌") && (
              <motion.button
                onClick={sendQuizResult}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all"
              >
                Retry Quiz Submission
              </motion.button>
            )}
            <div className="flex justify-center mt-6">
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all"
                disabled={!submissionSuccess} // Disable until submission succeeds
              >
                Next
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div key={currentQuestion} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-white">{questions[currentQuestion].question}</h2>

            <div className="text-white text-lg font-bold mt-4">
              ⏳ Time Left:{" "}
              <span className={timeLeft <= 30 ? "text-red-400" : "text-green-400"}>
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {["option_1", "option_2", "option_3", "option_4"].map((key, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: selectedOption ? 1 : 1.05 }}
                  whileTap={{ scale: selectedOption ? 1 : 0.95 }}
                  className={`px-6 py-3 text-white rounded-full border transition-all
                    ${
                      selectedOption
                        ? questions[currentQuestion][key] === questions[currentQuestion][`option_${questions[currentQuestion].correct_option.split(" ")[1]}`]
                          ? "bg-green-500 border-green-600"
                          : questions[currentQuestion][key] === selectedOption
                          ? "bg-red-500 border-red-600"
                          : "bg-white/10 border-white/30"
                        : "bg-white/10 border-white/30 hover:bg-blue-500"
                    }
                  `}
                  onClick={() => !selectedOption && handleAnswer(questions[currentQuestion][key])}
                >
                  {questions[currentQuestion][key]}
                </motion.button>
              ))}
            </div>

            <div className="w-full bg-white/20 rounded-full h-4 mt-6 overflow-hidden">
              <motion.div
                className="h-4 bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
            <p className="text-gray-300 mt-2 text-sm">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}