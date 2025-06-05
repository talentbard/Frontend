// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import lottie from "lottie-web";

// const FETCH_QUESTIONS_API_URL = "https://backend.talentbard.com/talent/interview_get_questions_view/";
// const SUBMIT_ANSWERS_API_URL = "https://backend.talentbard.com/talent/interview_evaluation_view/";

// export default function InterviewPage() {
//   const router = useRouter();
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isWebcamOn, setIsWebcamOn] = useState(false);
//   const [interviewStarted, setInterviewStarted] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 minutes in seconds
//   const [suspiciousActivity, setSuspiciousActivity] = useState([]);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [availableVoices, setAvailableVoices] = useState([]);
//   const videoRef = useRef(null);
//   const streamRef = useRef(null);
//   const openCVRef = useRef(null);
//   const canvasRef = useRef(null);
//   const lottieRef = useRef(null);
//   const animationContainerRef = useRef(null);
//   const raviVoiceRef = useRef(null);

//   // Sanitize input for JSON payload while preserving spaces and punctuation
//   const sanitizeInput = (input) => {
//     if (input === null || input === undefined || typeof input !== "string") {
//       return "";
//     }
//     try {
//       return input
//         .replace(/[\r\n\t]+/g, " ") // Replace newlines and tabs with space
//         .replace(/"/g, '\\"') // Escape double quotes
//         .replace(/[\\]/g, "\\\\") // Escape backslashes
//         .replace(/[\u0000-\u001F\u007F-\u009F]/g, "") // Remove control characters
//         .trim(); // Remove leading/trailing whitespace
//     } catch (e) {
//       console.error("Sanitization error:", e.message, input);
//       return "";
//     }
//   };

//   // Prevent paste in textarea and log as suspicious activity
//   const handlePaste = (e) => {
//   //    if (e.key === " " && document.activeElement.tagName !== "TEXTAREA") {
//   //   e.preventDefault(); // only prevent if not in a textarea
//   // }
//    if (
//     e.key === " " &&
//     document.activeElement.tagName !== "TEXTAREA" &&
//     document.activeElement.tagName !== "INPUT"
//   ) {
//     e.preventDefault(); // only block outside of inputs
//   }
//   e.preventDefault(); // remove if not absolutely required
// const text = (e.clipboardData || window.clipboardData).getData("text");
// const sanitizedText = text.replace(/[^a-zA-Z0-9.,?'"!\n]/g, ""); // allow spaces
// document.execCommand("insertText", false, sanitizedText);
// setMessage("❌ Pasting is not allowed. Please type your answer.");
// if (interviewStarted) {
//   setSuspiciousActivity((prev) => [
//     ...prev,
//     `Paste attempt detected at ${new Date().toLocaleTimeString()}`,
//   ]);
// }
// setTimeout(() => setMessage(""), 3000);

//   };

//   // Load available voices for TTS with retry mechanism
//   useEffect(() => {
//     const loadVoices = () => {
//       const voices = window.speechSynthesis.getVoices();
//       if (voices.length > 0) {
//         setAvailableVoices(voices);
//         console.log("Available voices:", voices.map((v) => `${v.name} (${v.lang})`));
//         // Automatically select Microsoft Ravi
//         const raviVoiceIndex = voices.findIndex((voice) =>
//           voice.name.includes("Microsoft Ravi")
//         );
//         if (raviVoiceIndex !== -1) {
//           raviVoiceRef.current = voices[raviVoiceIndex];
//           console.log("Automatically selected voice: Microsoft Ravi");
//         } else {
//           const defaultVoiceIndex = voices.findIndex((v) => v.lang === "en-US");
//           if (defaultVoiceIndex !== -1) {
//             raviVoiceRef.current = voices[defaultVoiceIndex];
//             console.log(
//               "Microsoft Ravi not found; defaulting to:",
//               voices[defaultVoiceIndex].name
//             );
//           }
//         }
//       }
//     };

//     // Voices may not be available immediately; listen for changes
//     window.speechSynthesis.onvoiceschanged = loadVoices;
//     loadVoices(); // Initial call

//     // Retry if voices aren't loaded
//     const retryInterval = setInterval(() => {
//       if (availableVoices.length === 0) {
//         console.log("Retrying to load voices...");
//         loadVoices();
//       } else {
//         clearInterval(retryInterval);
//       }
//     }, 1000);

//     return () => clearInterval(retryInterval);
//   }, []);

//   // Load Lottie animation
//   useEffect(() => {
//     if (animationContainerRef.current) {
//       try {
//         lottieRef.current = lottie.loadAnimation({
//           container: animationContainerRef.current,
//           renderer: "svg",
//           loop: true,
//           autoplay: false,
//           path: "/animations/avatar.json",
//         });
//         console.log("Lottie animation loaded successfully");
//       } catch (err) {
//         console.error("Failed to load Lottie animation:", err.message);
//         setMessage("⚠️ Failed to load avatar animation. TTS will still work.");
//         setTimeout(() => setMessage(""), 3000);
//       }
//       return () => {
//         lottieRef.current?.destroy();
//       };
//     }
//   }, []);

//   // Test voice function
//   const testVoice = () => {
//     if (!window.SpeechSynthesis || isSpeaking) {
//       console.log("TTS test skipped:", { isSpeaking });
//       return;
//     }

//     const utterance = new SpeechSynthesisUtterance(
//       "This is a test of the metallic voice."
//     );
//     utterance.lang = "en-IN"; // Match Ravi's language
//     utterance.volume = 1.0;

//     if (raviVoiceRef.current) {
//       utterance.voice = raviVoiceRef.current;
//       utterance.pitch = 2.0; // Max pitch for a tinny, metallic tone
//       utterance.rate = 0.6; // Slower rate for robotic feel
//       console.log("Testing voice:", raviVoiceRef.current.name);
//     } else {
//       utterance.pitch = 2.0;
//       utterance.rate = 0.6;
//       console.log("Testing default voice with metallic adjustments");
//       setMessage(
//         "⚠️ Microsoft Ravi not found. Using default voice with metallic adjustments."
//       );
//       setTimeout(() => setMessage(""), 5000);
//     }

//     utterance.onstart = () => {
//       setIsSpeaking(true);
//       lottieRef.current?.play();
//     };
//     utterance.onend = () => {
//       setIsSpeaking(false);
//       lottieRef.current?.pause();
//     };
//     utterance.onerror = (event) => {
//       console.error("TTS test error:", event.error);
//       setMessage("❌ Error testing voice. Please try again.");
//       setIsSpeaking(false);
//       lottieRef.current?.pause();
//       setTimeout(() => setMessage(""), 3000);
//     };
//     window.speechSynthesis.cancel();
//     window.speechSynthesis.speak(utterance);
//   };

//   // Read question using TTS with selected voice
//   const readQuestion = () => {
//     if (
//       !window.SpeechSynthesis ||
//       isSpeaking ||
//       !questions[currentQuestionIndex]
//     ) {
//       console.log("TTS skipped:", {
//         isSpeaking,
//         question: questions[currentQuestionIndex],
//       });
//       return;
//     }

//     if (availableVoices.length === 0) {
//       console.log("Voices not yet loaded; delaying TTS");
//       setMessage("⚠️ Voices not loaded yet. Please wait or test the voice manually.");
//       setTimeout(() => setMessage(""), 3000);
//       return;
//     }

//     const utterance = new SpeechSynthesisUtterance(
//       questions[currentQuestionIndex]
//     );
//     utterance.lang = "en-IN"; // Match Ravi's language
//     utterance.volume = 1.0;

//     if (raviVoiceRef.current) {
//       utterance.voice = raviVoiceRef.current;
//       utterance.pitch = 2.0; // Max pitch for a tinny, metallic tone
//       utterance.rate = 0.6; // Slower rate for robotic feel
//       console.log("Using voice:", raviVoiceRef.current.name);
//     } else {
//       utterance.pitch = 2.0;
//       utterance.rate = 0.6;
//       console.log("Using default voice with metallic adjustments");
//       setMessage(
//         "⚠️ Microsoft Ravi not found. Using default voice with metallic adjustments."
//       );
//       setTimeout(() => setMessage(""), 5000);
//     }

//     utterance.onstart = () => {
//       console.log("TTS started for question:", questions[currentQuestionIndex]);
//       setIsSpeaking(true);
//       lottieRef.current?.play();
//     };
//     utterance.onend = () => {
//       console.log("TTS ended");
//       setIsSpeaking(false);
//       lottieRef.current?.pause();
//     };
//     utterance.onerror = (event) => {
//       console.error("TTS error:", event.error);
//       setMessage("❌ Error reading question. Please read it manually.");
//       setIsSpeaking(false);
//       lottieRef.current?.pause();
//       setTimeout(() => setMessage(""), 3000);
//     };
//     window.speechSynthesis.cancel();
//     window.speechSynthesis.speak(utterance);
//   };

//   // Load OpenCV.js
//   useEffect(() => {
//     const loadOpenCV = async () => {
//       try {
//         const script = document.createElement("script");
//         script.src = "/js/opencv.js";
//         script.async = true;
//         document.head.appendChild(script);
//         script.onload = () => {
//           console.log("OpenCV.js loaded successfully");
//           if (window.cv) {
//             window.cv.onRuntimeInitialized = () => {
//               openCVRef.current = window.cv;
//               console.log("OpenCV.js runtime initialized");
//             };
//           } else {
//             throw new Error("window.cv not defined");
//           }
//         };
//         script.onerror = () => {
//           throw new Error("Failed to load OpenCV.js");
//         };
//       } catch (err) {
//         console.error("Error loading OpenCV.js:", err.message);
//         setMessage("❌ Failed to load face detection. Please try again or contact support.");
//       }
//     };
//     loadOpenCV();
//   }, []);

//   // Initialize webcam
//   const initWebcam = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       streamRef.current = stream;
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         setIsWebcamOn(true);
//         console.log("Webcam initialized successfully");
//       }
//     } catch (err) {
//       console.error("Error accessing webcam:", err.message);
//       setMessage("❌ Please allow webcam access to start the interview.");
//     }
//   };

//   // Cleanup webcam
//   useEffect(() => {
//     initWebcam();
//     return () => {
//       if (streamRef.current) {
//         streamRef.current.getTracks().forEach((track) => track.stop());
//         streamRef.current = null;
//       }
//     };
//   }, []);

//   // Face and eye detection (OpenCV.js)
//   const detectFacesAndEyesOpenCV = async () => {
//     if (
//       videoRef.current &&
//       interviewStarted &&
//       openCVRef.current &&
//       canvasRef.current
//     ) {
//       try {
//         const cv = openCVRef.current;
//         const video = videoRef.current;
//         canvasRef.current.width = video.videoWidth;
//         canvasRef.current.height = video.videoHeight;
//         const ctx = canvasRef.current.getContext("2d");
//         ctx.drawImage(video, 0, 0, canvasRef.current.width, canvasRef.current.height);
//         const src = cv.imread(canvasRef.current);
//         const gray = new cv.Mat();
//         cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);

//         const faceCascade = new cv.CascadeClassifier();
//         const eyeCascade = new cv.CascadeClassifier();
//         const faceCascadeFile = "/models/haarcascade_frontalface_default.xml";
//         const eyeCascadeFile = "/models/haarcascade_eye.xml";

//         const faceResponse = await fetch(faceCascadeFile);
//         const eyeResponse = await fetch(eyeCascadeFile);
//         if (!faceResponse.ok || !eyeResponse.ok) {
//           throw new Error("Failed to load Haar Cascade files");
//         }
//         const faceData = await faceResponse.arrayBuffer();
//         const eyeData = await eyeResponse.arrayBuffer();
//         cv.FS_createDataFile("/", "face.xml", new Uint8Array(faceData), true, false, false);
//         cv.FS_createDataFile("/", "eye.xml", new Uint8Array(eyeData), true, false, false);
//         faceCascade.load("face.xml");
//         eyeCascade.load("eye.xml");

//         let faces = new cv.RectVector();
//         faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0);

//         if (faces.size() === 0) {
//           setSuspiciousActivity((prev) => [
//             ...prev,
//             `No face detected at ${new Date().toLocaleTimeString()}`,
//           ]);
//         } else if (faces.size() > 1) {
//           setSuspiciousActivity((prev) => [
//             ...prev,
//             `Multiple faces detected at ${new Date().toLocaleTimeString()}`,
//           ]);
//         } else {
//           const face = faces.get(0);
//           const faceRegion = gray.roi(face);
//           let eyes = new cv.RectVector();
//           eyeCascade.detectMultiScale(faceRegion, eyes, 1.1, 3, 0);

//           if (eyes.size() < 2) {
//             setSuspiciousActivity((prev) => [
//               ...prev,
//               `Eyes not detected at ${new Date().toLocaleTimeString()}`,
//             ]);
//           } else {
//             const eye1 = eyes.get(0);
//             const eye2 = eyes.get(1);
//             const eyeCenterX = (eye1.x + eye2.x + eye1.width / 2 + eye2.width / 2) / 2;
//             const faceCenterX = face.width / 2;
//             if (Math.abs(eyeCenterX - faceCenterX) > face.width * 0.3) {
//               setSuspiciousActivity((prev) => [
//                 ...prev,
//                 `Gaze off-center at ${new Date().toLocaleTimeString()}`,
//               ]);
//             }
//           }
//           faceRegion.delete();
//           eyes.delete();
//         }

//         src.delete();
//         gray.delete();
//         faces.delete();
//         faceCascade.delete();
//         eyeCascade.delete();
//       } catch (err) {
//         console.error("Error during OpenCV detection:", err.message);
//       }
//     }
//   };

//   // Detection interval and auto-submit on suspicious activity
//   // useEffect(() => {
//   //   if (interviewStarted) {
//   //     const detectionInterval = setInterval(detectFacesAndEyesOpenCV, 5000);
//   //     if (suspiciousActivity.length > 2) {
//   //       handleAutoSubmit(
//   //         "❌ Interview terminated due to multiple suspicious activities.",
//   //         true
//   //       );
//   //     }
//   //     return () => clearInterval(detectionInterval);
//   //   }
//   // }, [interviewStarted, suspiciousActivity]);
// useEffect(() => {
//   if (interviewStarted) {
//     const detectionInterval = setInterval(detectFacesAndEyesOpenCV, 5000);
//     if (suspiciousActivity.length > 2) {
//       handleAutoSubmit(
//         "❌ Interview terminated due to multiple suspicious activities.",
//         true
//       );
//     }
//     return () => clearInterval(detectionInterval);
//   }
// }, [interviewStarted, suspiciousActivity]);

//   // Fetch questions
//   const fetchQuestions = async () => {
//     const userId = localStorage.getItem("user_id");
//     const accessToken = localStorage.getItem("access_token");
//     const refreshToken = localStorage.getItem("refresh_token");

//     if (!userId || !accessToken || !refreshToken) {
//       setMessage("❌ Authentication details missing. Please log in again.");
//       router.push("/login");
//       return;
//     }

//     try {
//       const response = await fetch(FETCH_QUESTIONS_API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           accesstoken: accessToken,
//         },
//         body: JSON.stringify({
//           auth_params: { user_id: userId, refresh_token: refreshToken },
//           payload: { user_id: userId },
//         }),
//       });

//       const data = await response.json();
//       if (!response.ok || !data.payload || !data.payload.questions) {
//         throw new Error(data.error || "Failed to fetch questions");
//       }

//       const fetchedQuestions = data.payload.questions;
//       if (!Array.isArray(fetchedQuestions) || fetchedQuestions.length !== 10) {
//         throw new Error(
//           `Expected exactly 10 questions, got ${fetchedQuestions.length}`
//         );
//       }

//       // Store raw questions for display
//       setQuestions(fetchedQuestions);
//       setError(null);
//     } catch (err) {
//       console.error("Error fetching questions:", err.message);
//       setError(err.message);
//       setMessage(
//         "❌ Failed to load interview questions. Please try again or contact support."
//       );
//     }
//   };

//   // Read question when index changes
//   useEffect(() => {
//     if (interviewStarted && questions[currentQuestionIndex]) {
//       readQuestion();
//     }
//   }, [currentQuestionIndex, questions, interviewStarted]);

//   // Tab switching detection
//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (document.hidden && interviewStarted) {
//         setSuspiciousActivity((prev) => [
//           ...prev,
//           `Tab switch detected at ${new Date().toLocaleTimeString()}`,
//         ]);
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);
//     return () =>
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//   }, [interviewStarted]);

//   // Timer logic
//   useEffect(() => {
//     if (interviewStarted && timeLeft > 0) {
//       const timer = setInterval(() => {
//         setTimeLeft((prev) => {
//           if (prev <= 1) {
//             clearInterval(timer);
//             handleAutoSubmit("⏰ Time's up! Submitting your answers...", false);
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [interviewStarted, timeLeft]);

//   // Initialize questions
//   useEffect(() => {
//     fetchQuestions();
//   }, [router]);

//   const handleAnswerChange = (index, value) => {
//     setAnswers((prev) => ({
//       ...prev,
//       [index]: sanitizeInput(value),
//     }));
//   };

//   const handleAutoSubmit = async (message, isCheating = false) => {
//     setMessage(message);
//     setLoading(true);

//     const userId = localStorage.getItem("user_id");
//     const accessToken = localStorage.getItem("access_token");
//     const refreshToken = localStorage.getItem("refresh_token");

//     if (!userId || !accessToken || !refreshToken) {
//       setMessage("❌ Authentication details missing. Please log in again.");
//       setLoading(false);
//       router.push("/login");
//       return;
//     }

//     const payload = {
//       auth_params: {
//         user_id: userId,
//         refresh_token: refreshToken,
//       },
//       payload: {
//         user_id: userId,
//         answers: questions.map((question, index) => ({
//           question: sanitizeInput(question),
//           answer: isCheating
//             ? `Cheating detected: ${sanitizeInput(answers[index] || "")}`
//             : sanitizeInput(answers[index] || ""),
//         })),
//         cheating_suspected: suspiciousActivity.length > 0 || isCheating,
//       },
//     };

//     try {
//       // Log payload for debugging
//       const payloadString = JSON.stringify(payload, null, 2);
//       console.log("Submitting payload:", payloadString);

//       // Validate JSON
//       JSON.stringify(payload);

//       const response = await fetch(SUBMIT_ANSWERS_API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           accesstoken: accessToken,
//         },
//         body: payloadString,
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || `Submission failed with status ${response.status}`);
//       }

//       if (!data.payload || !data.payload.interview_answer_id) {
//         throw new Error("Invalid response structure from server");
//       }

//       setMessage("✅ Interview answers submitted successfully! Redirecting...");
//       setTimeout(() => router.push("/submission_status"), 2000);
//     } catch (error) {
//       console.error("Error submitting answers:", error.message, error.stack);
//       setMessage(`❌ Error submitting answers: ${error.message}`);

//       // Fallback submission with minimal payload
//       if (error.message.includes("Expecting ',' delimiter")) {
//         console.log("Attempting fallback submission...");
//         const fallbackPayload = {
//           auth_params: {
//             user_id: userId,
//             refresh_token: refreshToken,
//           },
//           payload: {
//             user_id: userId,
//             answers: questions.map((question) => ({
//               question: sanitizeInput(question),
//               answer: isCheating ? "Cheating detected" : "",
//             })),
//             cheating_suspected: isCheating || suspiciousActivity.length > 0,
//           },
//         };

//         try {
//           const fallbackString = JSON.stringify(fallbackPayload);
//           console.log("Fallback payload:", fallbackString);
//           const fallbackResponse = await fetch(SUBMIT_ANSWERS_API_URL, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               accesstoken: accessToken,
//             },
//             body: fallbackString,
//           });

//           const fallbackData = await fallbackResponse.json();
//           if (!fallbackResponse.ok) {
//             throw new Error(
//               fallbackData.error || `Fallback submission failed with status ${fallbackResponse.status}`
//             );
//           }

//           setMessage("✅ Fallback submission successful! Redirecting...");
//           setTimeout(() => router.push("/submission_status"), 2000);
//         } catch (fallbackError) {
//           console.error("Fallback submission failed:", fallbackError.message);
//           setMessage(`❌ Fallback submission failed: ${fallbackError.message}`);
//           if (fallbackError.message.includes("401")) {
//             setMessage("❌ Unauthorized: Please log in again.");
//             router.push("/login");
//           }
//         }
//       } else if (error.message.includes("401")) {
//         setMessage("❌ Unauthorized: Please log in again.");
//         router.push("/login");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!answers[currentQuestionIndex]?.trim()) {
//       setMessage("❌ Please provide an answer for the current question.");
//       return;
//     }
//     await handleAutoSubmit(
//       "✅ Interview answers submitted successfully! Redirecting...",
//       false
//     );
//   };

//   const handleStartInterview = () => {
//     if (isWebcamOn) {
//       setInterviewStarted(true);
//     } else {
//       setMessage("❌ Please enable your webcam to start the interview.");
//     }
//   };

//   const handleNextQuestion = () => {
//     if (answers[currentQuestionIndex]?.trim()) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//       setMessage("");
//     } else {
//       setMessage("❌ Please provide an answer before proceeding.");
//     }
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-6">
//       <motion.div
//         className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl text-center max-w-3xl w-full"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         {!interviewStarted ? (
//           <>
//             <h1 className="text-4xl font-bold text-white mb-6">🎤 Interview Instructions</h1>
//             <p className="text-gray-300 mb-4">
//               Welcome to the Technical Interview. Please read the following instructions carefully:
//             </p>
//             <ul className="text-gray-300 mb-6 text-left list-disc pl-6">
//               <li>This interview is recorded via your webcam. Ensure your webcam is on.</li>
//               <li>You have 40 minutes to complete the interview.</li>
//               <li>
//                 More than two suspicious activities (e.g., looking away, leaving the frame,
//                 switching tabs, pasting) will result in automatic submission.
//               </li>
//               <li>
//                 Questions will be read aloud by an animated avatar. Type your answers in the
//                 provided text box.
//               </li>
//               <li>Pasting answers is not allowed; please type your responses.</li>
//             </ul>
//             <div className="flex flex-col items-center gap-6">
//               <div
//                 ref={animationContainerRef}
//                 className="w-64 h-64 bg-white/5 rounded-full p-2"
//               />
//               <video
//                 ref={videoRef}
//                 autoPlay
//                 muted
//                 className="w-64 h-48 rounded-lg shadow-lg"
//               />
//               <canvas ref={canvasRef} style={{ display: "none" }} />
//             </div>
//             <button
//               onClick={handleStartInterview}
//               className="mt-6 px-8 py-4 text-lg bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 shadow-lg"
//               disabled={loading || !isWebcamOn}
//             >
//               {isWebcamOn ? "Start Interview" : "Waiting for Webcam..."}
//             </button>
//           </>
//         ) : (
//           <>
//             <h1 className="text-4xl font-bold text-white mb-4">🎤 Technical Interview</h1>
//             <p className="text-gray-300 mb-2">
//               Time remaining: <span className="font-bold">{formatTime(timeLeft)}</span> |
//               Suspicious activities: {suspiciousActivity.length}/2
//             </p>
//             {suspiciousActivity.length > 0 && (
//               <p className="text-yellow-400 mb-4">
//                 Suspicious activity detected: {suspiciousActivity.join(", ")}
//               </p>
//             )}
//             {error ? (
//               <p className="text-red-400 mt-4">{error}</p>
//             ) : questions.length === 0 ? (
//               <p className="text-gray-300 mt-4">{message || "Loading questions..."}</p>
//             ) : (
//               <div className="w-full flex flex-col items-center gap-6">
//                 <div className="flex justify-center">
//                   <div
//                     ref={animationContainerRef}
//                     className="w-32 h-32 bg-white/5 rounded-full p-2"
//                   />
//                 </div>
//                 <h2 className="text-2xl font-semibold text-white">
//                   Question {currentQuestionIndex + 1} of {questions.length}
//                 </h2>
//                 <p className="text-xl text-white max-w-2xl text-center">
//                   {questions[currentQuestionIndex]}
//                 </p>
//                 <div className="flex flex-col items-center gap-2">
//                   <div className="flex gap-2">
//                     <button
//                       onClick={readQuestion}
//                       className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-all duration-300"
//                       disabled={isSpeaking}
//                     >
//                       {isSpeaking ? "Reading..." : "Read Question Aloud"}
//                     </button>
//                     {/* <button
//                       onClick={testVoice}
//                       className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-all duration-300"
//                       disabled={isSpeaking}
//                     >
//                       Test Voice
//                     </button> */}
//                   </div>
//                 </div>
//                <textarea
//   className="..."
//   placeholder="Type your answer here..."
//   value={answers[currentQuestionIndex] || ""}
//   onChange={(e) => handleAnswerChange(currentQuestionIndex, e.target.value)}
//   onPaste={handlePaste}
//    onKeyDown={(e) => console.log("Key:", e.key)}
//   disabled={loading}
 
//   required
// />
//                 <div className="flex justify-center gap-4 mt-4">
//                   {currentQuestionIndex < questions.length - 1 ? (
//                     <motion.button
//                       onClick={handleNextQuestion}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
//                       disabled={loading || !answers[currentQuestionIndex]?.trim()}
//                     >
//                       Next
//                     </motion.button>
//                   ) : (
//                     <motion.button
//                       onClick={handleSubmit}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
//                       disabled={loading || !answers[currentQuestionIndex]?.trim()}
//                     >
//                       {loading ? "Submitting..." : "Submit Answers"}
//                     </motion.button>
//                   )}
//                 </div>
//               </div>
//             )}
//             {message && (
//               <motion.p
//                 className="mt-4 text-lg font-bold text-red-400"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//               >
//                 {message}
//               </motion.p>
//             )}
//             <div className="flex justify-center mt-8">
//               <motion.button
//                 onClick={() => router.push("/assignment")}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="px-6 py-3 bg-gray-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all"
//               >
//                 Back
//               </motion.button>
//             </div>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import lottie from "lottie-web";

const FETCH_QUESTIONS_API_URL = "https://backend.talentbard.com/talent/interview_get_questions_view/";
const SUBMIT_ANSWERS_API_URL = "https://backend.talentbard.com/talent/interview_evaluation_view/";

export default function InterviewPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 minutes in seconds
  const [suspiciousActivity, setSuspiciousActivity] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [availableVoices, setAvailableVoices] = useState([]);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const openCVRef = useRef(null);
  const canvasRef = useRef(null);
  const lottieRef = useRef(null);
  const animationContainerRef = useRef(null);
  const raviVoiceRef = useRef(null);

  // Sanitize input for JSON payload while preserving spaces and punctuation
  const sanitizeInput = (input) => {
    // For debugging, just return the input as is for now.
    // We want to see if the raw space character is being passed.
    if (input === null || input === undefined) {
        return "";
    }
    return String(input); // Ensure it's a string
};

  // Prevent paste in textarea and log as suspicious activity
 // Prevent paste in textarea and log as suspicious activity
const handlePaste = (e) => {
  e.preventDefault(); // Prevent the default paste behavior

  const text = (e.clipboardData || window.clipboardData).getData("text");
  // Refined regex to allow letters, numbers, common punctuation, and spaces
  const sanitizedText = text.replace(/[^a-zA-Z0-9.,?'"!\n ]/g, "");

  // Get the textarea element
  const textarea = e.target;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  // Manually construct the new value with the sanitized text inserted
  const newValue = textarea.value.substring(0, start) + sanitizedText + textarea.value.substring(end);

  // Update the state with the new value.
  // We call handleAnswerChange to keep consistency with normal typing
  // and apply overall sanitization and state update.
  handleAnswerChange(currentQuestionIndex, newValue);

  // After updating the state, ensure the cursor position is correctly set
  // This needs to happen after React has potentially re-rendered the textarea
  requestAnimationFrame(() => {
    textarea.selectionStart = textarea.selectionEnd = start + sanitizedText.length;
  });

  setMessage("❌ Pasting is not allowed. Please type your answer.");
  if (interviewStarted) {
    setSuspiciousActivity((prev) => [
      ...prev,
      `Paste attempt detected at ${new Date().toLocaleTimeString()}`,
    ]);
  }
  setTimeout(() => setMessage(""), 3000);
};

  // Load available voices for TTS with retry mechanism
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        setAvailableVoices(voices);
        console.log("Available voices:", voices.map((v) => `${v.name} (${v.lang})`));
        // Automatically select Microsoft Ravi
        const raviVoiceIndex = voices.findIndex((voice) =>
          voice.name.includes("Microsoft Ravi")
        );
        if (raviVoiceIndex !== -1) {
          raviVoiceRef.current = voices[raviVoiceIndex];
          console.log("Automatically selected voice: Microsoft Ravi");
        } else {
          const defaultVoiceIndex = voices.findIndex((v) => v.lang === "en-US");
          if (defaultVoiceIndex !== -1) {
            raviVoiceRef.current = voices[defaultVoiceIndex];
            console.log(
              "Microsoft Ravi not found; defaulting to:",
              voices[defaultVoiceIndex].name
            );
          }
        }
      }
    };

    // Voices may not be available immediately; listen for changes
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices(); // Initial call

    // Retry if voices aren't loaded
    const retryInterval = setInterval(() => {
      if (availableVoices.length === 0) {
        console.log("Retrying to load voices...");
        loadVoices();
      } else {
        clearInterval(retryInterval);
      }
    }, 1000);

    return () => clearInterval(retryInterval);
  }, []);

  // Load Lottie animation
  useEffect(() => {
    if (animationContainerRef.current) {
      try {
        lottieRef.current = lottie.loadAnimation({
          container: animationContainerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: false,
          path: "/animations/avatar.json",
        });
        console.log("Lottie animation loaded successfully");
      } catch (err) {
        console.error("Failed to load Lottie animation:", err.message);
        setMessage("⚠️ Failed to load avatar animation. TTS will still work.");
        setTimeout(() => setMessage(""), 3000);
      }
      return () => {
        lottieRef.current?.destroy();
      };
    }
  }, []);

  // Test voice function
  const testVoice = () => {
    if (!window.SpeechSynthesis || isSpeaking) {
      console.log("TTS test skipped:", { isSpeaking });
      return;
    }

    const utterance = new SpeechSynthesisUtterance(
      "This is a test of the metallic voice."
    );
    utterance.lang = "en-IN"; // Match Ravi's language
    utterance.volume = 1.0;

    if (raviVoiceRef.current) {
      utterance.voice = raviVoiceRef.current;
      utterance.pitch = 2.0; // Max pitch for a tinny, metallic tone
      utterance.rate = 0.6; // Slower rate for robotic feel
      console.log("Testing voice:", raviVoiceRef.current.name);
    } else {
      utterance.pitch = 2.0;
      utterance.rate = 0.6;
      console.log("Testing default voice with metallic adjustments");
      setMessage(
        "⚠️ Microsoft Ravi not found. Using default voice with metallic adjustments."
      );
      setTimeout(() => setMessage(""), 5000);
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      lottieRef.current?.play();
    };
    utterance.onend = () => {
      setIsSpeaking(false);
      lottieRef.current?.pause();
    };
    utterance.onerror = (event) => {
      console.error("TTS test error:", event.error);
      setMessage("❌ Error testing voice. Please try again.");
      setIsSpeaking(false);
      lottieRef.current?.pause();
      setTimeout(() => setMessage(""), 3000);
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // Read question using TTS with selected voice
  const readQuestion = () => {
    if (
      !window.SpeechSynthesis ||
      isSpeaking ||
      !questions[currentQuestionIndex]
    ) {
      console.log("TTS skipped:", {
        isSpeaking,
        question: questions[currentQuestionIndex],
      });
      return;
    }

    if (availableVoices.length === 0) {
      console.log("Voices not yet loaded; delaying TTS");
      setMessage("⚠️ Voices not loaded yet. Please wait or test the voice manually.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(
      questions[currentQuestionIndex]
    );
    utterance.lang = "en-IN"; // Match Ravi's language
    utterance.volume = 1.0;

    if (raviVoiceRef.current) {
      utterance.voice = raviVoiceRef.current;
      utterance.pitch = 2.0; // Max pitch for a tinny, metallic tone
      utterance.rate = 0.6; // Slower rate for robotic feel
      console.log("Using voice:", raviVoiceRef.current.name);
    } else {
      utterance.pitch = 2.0;
      utterance.rate = 0.6;
      console.log("Using default voice with metallic adjustments");
      setMessage(
        "⚠️ Microsoft Ravi not found. Using default voice with metallic adjustments."
      );
      setTimeout(() => setMessage(""), 5000);
    }

    utterance.onstart = () => {
      console.log("TTS started for question:", questions[currentQuestionIndex]);
      setIsSpeaking(true);
      lottieRef.current?.play();
    };
    utterance.onend = () => {
      console.log("TTS ended");
      setIsSpeaking(false);
      lottieRef.current?.pause();
    };
    utterance.onerror = (event) => {
      console.error("TTS error:", event.error);
      setMessage("❌ Error reading question. Please read it manually.");
      setIsSpeaking(false);
      lottieRef.current?.pause();
      setTimeout(() => setMessage(""), 3000);
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // Load OpenCV.js
  useEffect(() => {
    const loadOpenCV = async () => {
      try {
        const script = document.createElement("script");
        script.src = "/js/opencv.js";
        script.async = true;
        document.head.appendChild(script);
        script.onload = () => {
          console.log("OpenCV.js loaded successfully");
          if (window.cv) {
            window.cv.onRuntimeInitialized = () => {
              openCVRef.current = window.cv;
              console.log("OpenCV.js runtime initialized");
            };
          } else {
            throw new Error("window.cv not defined");
          }
        };
        script.onerror = () => {
          throw new Error("Failed to load OpenCV.js");
        };
      } catch (err) {
        console.error("Error loading OpenCV.js:", err.message);
        setMessage("❌ Failed to load face detection. Please try again or contact support.");
      }
    };
    loadOpenCV();
  }, []);

  // Initialize webcam
  const initWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsWebcamOn(true);
        console.log("Webcam initialized successfully");
      }
    } catch (err) {
      console.error("Error accessing webcam:", err.message);
      setMessage("❌ Please allow webcam access to start the interview.");
    }
  };

  // Cleanup webcam
  useEffect(() => {
    initWebcam();
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    };
  }, []);

  // Face and eye detection (OpenCV.js)
  const detectFacesAndEyesOpenCV = async () => {
    if (
      videoRef.current &&
      interviewStarted &&
      openCVRef.current &&
      canvasRef.current
    ) {
      try {
        const cv = openCVRef.current;
        const video = videoRef.current;
        canvasRef.current.width = video.videoWidth;
        canvasRef.current.height = video.videoHeight;
        const ctx = canvasRef.current.getContext("2d");
        ctx.drawImage(video, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const src = cv.imread(canvasRef.current);
        const gray = new cv.Mat();
        cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);

        const faceCascade = new cv.CascadeClassifier();
        const eyeCascade = new cv.CascadeClassifier();
        const faceCascadeFile = "/models/haarcascade_frontalface_default.xml";
        const eyeCascadeFile = "/models/haarcascade_eye.xml";

        const faceResponse = await fetch(faceCascadeFile);
        const eyeResponse = await fetch(eyeCascadeFile);
        if (!faceResponse.ok || !eyeResponse.ok) {
          throw new Error("Failed to load Haar Cascade files");
        }
        const faceData = await faceResponse.arrayBuffer();
        const eyeData = await eyeResponse.arrayBuffer();
        cv.FS_createDataFile("/", "face.xml", new Uint8Array(faceData), true, false, false);
        cv.FS_createDataFile("/", "eye.xml", new Uint8Array(eyeData), true, false, false);
        faceCascade.load("face.xml");
        eyeCascade.load("eye.xml");

        let faces = new cv.RectVector();
        faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0);

        if (faces.size() === 0) {
          setSuspiciousActivity((prev) => [
            ...prev,
            `No face detected at ${new Date().toLocaleTimeString()}`,
          ]);
        } else if (faces.size() > 1) {
          setSuspiciousActivity((prev) => [
            ...prev,
            `Multiple faces detected at ${new Date().toLocaleTimeString()}`,
          ]);
        } else {
          const face = faces.get(0);
          const faceRegion = gray.roi(face);
          let eyes = new cv.RectVector();
          eyeCascade.detectMultiScale(faceRegion, eyes, 1.1, 3, 0);

          if (eyes.size() < 2) {
            setSuspiciousActivity((prev) => [
              ...prev,
              `Eyes not detected at ${new Date().toLocaleTimeString()}`,
            ]);
          } else {
            const eye1 = eyes.get(0);
            const eye2 = eyes.get(1);
            const eyeCenterX = (eye1.x + eye2.x + eye1.width / 2 + eye2.width / 2) / 2;
            const faceCenterX = face.width / 2;
            if (Math.abs(eyeCenterX - faceCenterX) > face.width * 0.3) {
              setSuspiciousActivity((prev) => [
                ...prev,
                `Gaze off-center at ${new Date().toLocaleTimeString()}`,
              ]);
            }
          }
          faceRegion.delete();
          eyes.delete();
        }

        src.delete();
        gray.delete();
        faces.delete();
        faceCascade.delete();
        eyeCascade.delete();
      } catch (err) {
        console.error("Error during OpenCV detection:", err.message);
      }
    }
  };

  // Detection interval and auto-submit on suspicious activity
  useEffect(() => {
    if (interviewStarted) {
      const detectionInterval = setInterval(detectFacesAndEyesOpenCV, 5000);
      if (suspiciousActivity.length > 2) {
        handleAutoSubmit(
          "❌ Interview terminated due to multiple suspicious activities.",
          true
        );
      }
      return () => clearInterval(detectionInterval);
    }
  }, [interviewStarted, suspiciousActivity]);

  // Fetch questions
  const fetchQuestions = async () => {
    const userId = localStorage.getItem("user_id");
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");

    if (!userId || !accessToken || !refreshToken) {
      setMessage("❌ Authentication details missing. Please log in again.");
      router.push("/login");
      return;
    }

    try {
      const response = await fetch(FETCH_QUESTIONS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accesstoken: accessToken,
        },
        body: JSON.stringify({
          auth_params: { user_id: userId, refresh_token: refreshToken },
          payload: { user_id: userId },
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.payload || !data.payload.questions) {
        throw new Error(data.error || "Failed to fetch questions");
      }

      const fetchedQuestions = data.payload.questions;
      if (!Array.isArray(fetchedQuestions) || fetchedQuestions.length !== 10) {
        throw new Error(
          `Expected exactly 10 questions, got ${fetchedQuestions.length}`
        );
      }

      // Store raw questions for display
      setQuestions(fetchedQuestions);
      setError(null);
    } catch (err) {
      console.error("Error fetching questions:", err.message);
      setError(err.message);
      setMessage(
        "❌ Failed to load interview questions. Please try again or contact support."
      );
    }
  };

  // Read question when index changes
  useEffect(() => {
    if (interviewStarted && questions[currentQuestionIndex]) {
      readQuestion();
    }
  }, [currentQuestionIndex, questions, interviewStarted]);

  // Tab switching detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && interviewStarted) {
        setSuspiciousActivity((prev) => [
          ...prev,
          `Tab switch detected at ${new Date().toLocaleTimeString()}`,
        ]);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [interviewStarted]);

  // Timer logic
  useEffect(() => {
    if (interviewStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleAutoSubmit("⏰ Time's up! Submitting your answers...", false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [interviewStarted, timeLeft]);

  // Initialize questions
  useEffect(() => {
    fetchQuestions();
  }, [router]);

 const handleAnswerChange = (index, value) => {
    // REMOVE debugger; from here for THIS test
    console.log("handleAnswerChange - Index:", index, "Value:", value, "Sanitized Value:", sanitizeInput(value));
    setAnswers((prev) => ({
        ...prev,
        [index]: sanitizeInput(value)
    }));
};

  const handleAutoSubmit = async (message, isCheating = false) => {
    setMessage(message);
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
      auth_params: {
        user_id: userId,
        refresh_token: refreshToken,
      },
      payload: {
        user_id: userId,
        answers: questions.map((question, index) => ({
          question: sanitizeInput(question),
          answer: isCheating
            ? `Cheating detected: ${sanitizeInput(answers[index] || "")}`
            : sanitizeInput(answers[index] || ""),
        })),
        cheating_suspected: suspiciousActivity.length > 0 || isCheating,
      },
    };

    try {
      // Log payload for debugging
      const payloadString = JSON.stringify(payload, null, 2);
      console.log("Submitting payload:", payloadString);

      // Validate JSON
      JSON.stringify(payload);

      const response = await fetch(SUBMIT_ANSWERS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accesstoken: accessToken,
        },
        body: payloadString,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || `Submission failed with status ${response.status}`);
      }

      if (!data.payload || !data.payload.interview_answer_id) {
        throw new Error("Invalid response structure from server");
      }

      setMessage("✅ Interview answers submitted successfully! Redirecting...");
      setTimeout(() => router.push("/interview_schedule"), 2000);
    } catch (error) {
      console.error("Error submitting answers:", error.message, error.stack);
      setMessage(`❌ Error submitting answers: ${error.message}`);

      // Fallback submission with minimal payload
      if (error.message.includes("Expecting ',' delimiter")) {
        console.log("Attempting fallback submission...");
        const fallbackPayload = {
          auth_params: {
            user_id: userId,
            refresh_token: refreshToken,
          },
          payload: {
            user_id: userId,
            answers: questions.map((question) => ({
              question: sanitizeInput(question),
              answer: isCheating ? "Cheating detected" : "",
            })),
            cheating_suspected: isCheating || suspiciousActivity.length > 0,
          },
        };

        try {
          const fallbackString = JSON.stringify(fallbackPayload);
          console.log("Fallback payload:", fallbackString);
          const fallbackResponse = await fetch(SUBMIT_ANSWERS_API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              accesstoken: accessToken,
            },
            body: fallbackString,
          });

          const fallbackData = await fallbackResponse.json();
          if (!fallbackResponse.ok) {
            throw new Error(
              fallbackData.error || `Fallback submission failed with status ${fallbackResponse.status}`
            );
          }

          setMessage("✅ Fallback submission successful! Redirecting...");
          setTimeout(() => router.push("/submission_status"), 2000);
        } catch (fallbackError) {
          console.error("Fallback submission failed:", fallbackError.message);
          setMessage(`❌ Fallback submission failed: ${fallbackError.message}`);
          if (fallbackError.message.includes("401")) {
            setMessage("❌ Unauthorized: Please log in again.");
            router.push("/login");
          }
        }
      } else if (error.message.includes("401")) {
        setMessage("❌ Unauthorized: Please log in again.");
        router.push("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    // Remove the spacebar prevention logic from here
    if (!answers[currentQuestionIndex]) {
      setMessage("❌ Please provide an answer for the current question.");
      return;
    }
    await handleAutoSubmit(
      "✅ Interview answers submitted successfully! Redirecting...",
      false
    );
  };

  const handleStartInterview = () => {
    if (isWebcamOn) {
      setInterviewStarted(true);
    } else {
      setMessage("❌ Please enable your webcam to start the interview.");
    }
  };

  const handleNextQuestion = () => {
    if (answers[currentQuestionIndex]) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setMessage("");
    } else {
      setMessage("❌ Please provide an answer before proceeding.");
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-6">
      <motion.div
        className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl text-center max-w-3xl w-full"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {!interviewStarted ? (
          <>
            <h1 className="text-4xl font-bold text-white mb-6">🎤 Interview Instructions</h1>
            <p className="text-gray-300 mb-4">
              Welcome to the Technical Interview. Please read the following instructions carefully:
            </p>
            <ul className="text-gray-300 mb-6 text-left list-disc pl-6">
              <li>This interview is recorded via your webcam. Ensure your webcam is on.</li>
              <li>You have 40 minutes to complete the interview.</li>
              <li>
                More than two suspicious activities (e.g., looking away, leaving the frame,
                switching tabs, pasting) will result in automatic submission.
              </li>
              <li>
                Questions will be read aloud by an animated avatar. Type your answers in the
                provided text box.
              </li>
              <li>Pasting answers is not allowed; please type your responses.</li>
            </ul>
            <div className="flex flex-col items-center gap-6">
              <div
                ref={animationContainerRef}
                className="w-64 h-64 bg-white/5 rounded-full p-2"
              />
              <video
                ref={videoRef}
                autoPlay
                muted
                className="w-64 h-48 rounded-lg shadow-lg"
              />
              <canvas ref={canvasRef} style={{ display: "none" }} />
            </div>
            <button
              onClick={handleStartInterview}
              className="mt-6 px-8 py-4 text-lg bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 shadow-lg"
              disabled={loading || !isWebcamOn}
            >
              {isWebcamOn ? "Start Interview" : "Waiting for Webcam..."}
            </button>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-white mb-4">🎤 Technical Interview</h1>
            <p className="text-gray-300 mb-2">
              Time remaining: <span className="font-bold">{formatTime(timeLeft)}</span> |
              Suspicious activities: {suspiciousActivity.length}/2
            </p>
            {suspiciousActivity.length > 0 && (
              <p className="text-yellow-400 mb-4">
                Suspicious activity detected: {suspiciousActivity.join(", ")}
              </p>
            )}
            {error ? (
              <p className="text-red-400 mt-4">{error}</p>
            ) : questions.length === 0 ? (
              <p className="text-gray-300 mt-4">{message || "Loading questions..."}</p>
            ) : (
              <div className="w-full flex flex-col items-center gap-6">
                <div className="flex justify-center">
                  <div
                    ref={animationContainerRef}
                    className="w-32 h-32 bg-white/5 rounded-full p-2"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </h2>
                <p className="text-xl text-white max-w-2xl text-center">
                  {questions[currentQuestionIndex]}
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-2">
                    <button
                      onClick={readQuestion}
                      className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-all duration-300"
                      disabled={isSpeaking}
                    >
                      {isSpeaking ? "Reading..." : "Read Question Aloud"}
                    </button>
                    {/* <button
                      onClick={testVoice}
                      className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-all duration-300"
                      disabled={isSpeaking}
                    >
                      Test Voice
                    </button> */}
                  </div>
                </div>
            

<textarea
  className="mt-4 p-4 w-full h-40 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
  placeholder="Type your answer here..."
  value={answers[currentQuestionIndex] || ""}
  onChange={(e) => handleAnswerChange(currentQuestionIndex, e.target.value)}
  onPaste={handlePaste}
  onKeyDown={(e) => { // This is the block we're focusing on now
    debugger; // THIS WILL PAUSE EXECUTION HERE
    console.log("Key Down Event:", e.key, e.code, e.defaultPrevented, e.target.tagName);
  }}
  disabled={loading}
  required
/>

                <div className="flex justify-center gap-4 mt-4">
                  {currentQuestionIndex < questions.length - 1 ? (
                    <motion.button
                      onClick={handleNextQuestion}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
                      disabled={loading || !answers[currentQuestionIndex]?.trim()}
                    >
                      Next
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={handleSubmit}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
                      disabled={loading || !answers[currentQuestionIndex]?.trim()}
                    >
                      {loading ? "Submitting..." : "Submit Answers"}
                    </motion.button>
                  )}
                </div>
              </div>
            )}
            {message && (
              <motion.p
                className="mt-4 text-lg font-bold text-red-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {message}
              </motion.p>
            )}
            <div className="flex justify-center mt-8">
              <motion.button
                onClick={() => router.push("/assignment")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-gray-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all"
              >
                Back
              </motion.button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}