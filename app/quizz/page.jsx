"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is 10 + 5?",
    options: ["10", "12", "15", "20"],
    answer: "15",
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null); // "correct" | "wrong"

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setAnswerStatus("correct");
    } else {
      setAnswerStatus("wrong");
    }

    // Delay before moving to the next question
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setAnswerStatus(null);
      } else {
        setQuizFinished(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setSelectedOption(null);
    setAnswerStatus(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-6">
      <motion.div
        className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl text-center max-w-lg w-full"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {quizFinished ? (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-white">Quiz Completed!</h2>
            <p className="text-lg mt-4 text-gray-300">
              Your Score:{" "}
              <span className="text-green-400 font-bold">
                {score} / {questions.length}
              </span>
            </p>
            <motion.button
              onClick={restartQuiz}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all"
            >
              Restart Quiz
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white">{questions[currentQuestion].question}</h2>

            <div className="mt-6 flex flex-col gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: selectedOption ? 1 : 1.05 }}
                  whileTap={{ scale: selectedOption ? 1 : 0.95 }}
                  className={`px-6 py-3 text-white rounded-full border transition-all
                    ${
                      selectedOption
                        ? option === questions[currentQuestion].answer
                          ? "bg-green-500 border-green-600" // Correct
                          : option === selectedOption
                          ? "bg-red-500 border-red-600" // Wrong
                          : "bg-white/10 border-white/30"
                        : "bg-white/10 border-white/30 hover:bg-blue-500"
                    }
                  `}
                  onClick={() => !selectedOption && handleAnswer(option)}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            {/* Custom Progress Bar */}
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
