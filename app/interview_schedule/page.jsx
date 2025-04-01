// "use client"
// import { useState } from "react";

// const InterviewScheduler = () => {
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");

//   const getDayOfWeek = (dateString) => {
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const date = new Date(dateString);
//     return days[date.getDay()];
//   };

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };

//   const handleTimeChange = (event) => {
//     setSelectedTime(event.target.value);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-6">
//       <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl text-center max-w-md w-full">
//         <h1 className="text-3xl font-bold text-white">📅 Book Your Interview</h1>
//         <p className="text-gray-300 mt-2">Choose a date and time for your interview.</p>

//         <div className="mt-6 flex flex-col gap-4">
//           <input
//             type="date"
//             className="w-full p-3 text-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={handleDateChange}
//           />

//           <select
//             className="w-full p-3 text-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={handleTimeChange}
//           >
//             <option value="">Select a time</option>
//             {[...Array(10)].map((_, index) => {
//               const time = `${10 + index}:00 AM`;
//               return <option key={index} value={time}>{time}</option>;
//             })}
//             {[...Array(10)].map((_, index) => {
//               const time = `${10 + index}:00 PM`;
//               return <option key={index} value={time}>{time}</option>;
//             })}
//           </select>
//         </div>

//         {selectedDate && selectedTime && (
//           <div className="mt-6 p-4 bg-white/10 border border-white/20 rounded-lg text-white">
//             <h2 className="text-2xl font-semibold">✅ Booking Confirmed</h2>
//             <p className="mt-2 text-lg">📆 {getDayOfWeek(selectedDate)}, {selectedDate}</p>
//             <p className="text-lg">⏰ {selectedTime}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InterviewScheduler;

"use client";
import { useState } from "react";

const InterviewScheduler = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to format date-time as "YYYY-MM-DD HH:MM:SS"
  const formatDateTime = (date, time) => {
    const [hour, period] = time.split(" ");
    let [hh, mm] = hour.split(":").map(Number);

    if (period === "PM" && hh !== 12) hh += 12;
    if (period === "AM" && hh === 12) hh = 0;

    return `${date} ${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:00`;
  };

  // Function to get the day of the week
  const getDayOfWeek = (dateString) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[new Date(dateString).getDay()];
  };

  // Handle Date & Time Selection
  const handleDateChange = (event) => setSelectedDate(event.target.value);
  const handleTimeChange = (event) => setSelectedTime(event.target.value);

  // API Call to Schedule Interview
  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime) {
      setMessage("❌ Please select both date and time.");
      return;
    }

    setLoading(true);
    setMessage("");

    const userId = localStorage.getItem("user_id");
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");

    if (!userId || !accessToken || !refreshToken) {
      setMessage("❌ Authentication details missing.");
      setLoading(false);
      return;
    }

    const interviewScheduled = formatDateTime(selectedDate, selectedTime);

    try {
      const response = await fetch("https://backend.talentbard.com/talent/talent_interview_scheduling_views/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accesstoken": accessToken,
        },
        body: JSON.stringify({
          auth_params: { user_id: userId, refresh_token: refreshToken },
          payload: { interview_scheduled: interviewScheduled, user_id: userId },
        }),
      });

      console.log("Sent Data:", interviewScheduled);

      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Interview successfully scheduled!");
      } else {
        setMessage(`❌ Failed: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      setMessage("❌ Error scheduling interview.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-6">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-white">📅 Book Your Interview</h1>
        <p className="text-gray-300 mt-2">Choose a date and time for your interview.</p>

        <div className="mt-6 flex flex-col gap-4">
          <input
            type="date"
            className="w-full p-3 text-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleDateChange}
          />

          <select
            className="w-full p-3 text-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleTimeChange}
          >
            <option value="">Select a time</option>
            {[...Array(10)].map((_, index) => {
              const time = `${10 + index}:00 AM`;
              return <option key={time} value={time}>{time}</option>;
            })}
            {[...Array(10)].map((_, index) => {
              const time = `${10 + index}:00 PM`;
              return <option key={time} value={time}>{time}</option>;
            })}
          </select>
        </div>

        {selectedDate && selectedTime && (
          <div className="mt-6 p-4 bg-white/10 border border-white/20 rounded-lg text-white">
            <h2 className="text-2xl font-semibold">✅ Booking Confirmed</h2>
            <p className="mt-2 text-lg">📆 {getDayOfWeek(selectedDate)}, {selectedDate}</p>
            <p className="text-lg">⏰ {selectedTime}</p>
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="mt-6 px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Scheduling..." : "📌 Confirm Interview"}
        </button>

        {message && <p className="mt-4 text-lg font-bold text-white">{message}</p>}
      </div>
    </div>
  );
};

export default InterviewScheduler;
