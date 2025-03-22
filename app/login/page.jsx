"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import checkRegistrationStatus from "./checkRegistrationStatus";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFreelancer, setIsFreelancer] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Ensure values are fresh when component mounts
    setFormData((prev) => ({
      ...prev,
      userId: localStorage.getItem("user_id") || null,
    }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
  
    if (!formData.email || !formData.password) {
      setError("Both email and password are required.");
      return;
    }
  
    const userId = localStorage.getItem("user_id");
    const refreshToken = localStorage.getItem("refresh_token");
    const accessToken = localStorage.getItem("access_token");
  
    try {
      const response = await axios.post(
        "https://backend.talentbard.com/user/login/",
        {
          auth_params: {
            user_id: userId || "your_user_id",
            refresh_token: refreshToken || "your_refresh_token",
          },
          payload: {
            email: formData.email,
            role: isFreelancer ? "talent" : "company",
            password: formData.password,
          },
        },
      );
  
      console.log("Login Response:", response.data); // Check response data
  
      const { access_token, refresh_token, user_id} = response.data;
  
      if (access_token) {
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
        localStorage.setItem("user_id", user_id);
  
        console.log("Stored Tokens:", {
          access_token: localStorage.getItem("access_token"),
          refresh_token: localStorage.getItem("refresh_token"),
          user_id: localStorage.getItem("user_id"),
        });
  
        await checkRegistrationStatus(user_id, access_token, refresh_token, isFreelancer, router);

      } else {
        setError("Login failed. No token received.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      console.log("Error Response:", err.response?.data); // Log error response
      setError(err.response?.data?.error || "Login failed. Please try again.");
    }
  };
  

  return (
    <div className={`flex justify-center items-center min-h-screen ${isFreelancer ? "bg-gradient-to-r from-purple-200 to-blue-400 p-4" : "bg-gradient-to-r from-blue-400 to-purple-200 p-4"}`}>
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
        {/* Role Toggle Buttons */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-5 py-3 rounded-l-lg font-semibold transition-all ${isFreelancer ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setIsFreelancer(true)}
          >
            Talent
          </button>
          <button
            className={`px-5 py-3 rounded-r-lg font-semibold transition-all ${!isFreelancer ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setIsFreelancer(false)}
          >
            Company
          </button>
        </div>

        {/* Login Form */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
          {isFreelancer ? "Freelancer Login" : "Company Login"}
        </h2>
        <p className="text-gray-500 mb-6">Sign in to your {isFreelancer ? "freelancer" : "company"} account</p>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm"
          />
        </div>

        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm"
          />
          <button type="button" className="absolute top-2.5 right-4 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button onClick={handleLogin} className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-indigo-700 transition-all">
          Sign In
        </button>

        <p className="text-gray-600 mt-3">
          Don't have an account?{" "}
          <Link href="/login/signup" className="text-indigo-500 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

// "use client";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isFreelancer, setIsFreelancer] = useState(true);
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState(null);
//   const [accessToken, setAccessToken] = useState(null);
//   const [userId, setUserId] = useState(null);
//   const router = useRouter();

//   // Retrieve tokens on mount
//   useEffect(() => {
//     const storedAccessToken = localStorage.getItem("access_token");
//     const storedUserId = localStorage.getItem("user_id");

//     if (storedAccessToken) {
//       setAccessToken(storedAccessToken);
//     }
//     if (storedUserId) {
//       setUserId(storedUserId);
//     }
//   }, []);

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(null);

//     if (!formData.email || !formData.password) {
//       setError("Both email and password are required.");
//       return;
//     }

//     try {
//       const requestData = {
//         auth_params: {
//           user_id: userId || "your_user_id", // Use stored user_id if available
//           refresh_token: localStorage.getItem("refresh_token") || "your_refresh_token",
//         },
//         payload: {
//           email: formData.email,
//           role: isFreelancer ? "talent" : "company",
//           password: formData.password,
//         },
//       };

//       console.log("🚀 Sending Login Request:", requestData);

//       const response = await axios.post(
//         "http://13.201.78.9/user/login/",
//         JSON.stringify(requestData),
//         {
//           headers: { 
//             "Content-Type": "application/json",
            
//           },
//         }
//       );

//       console.log("✅ Login Response:", response.data);

//       if (response.data.access_token) {
//         // ✅ Store tokens
//         localStorage.setItem("access_token", response.data.access_token);
//         localStorage.setItem("refresh_token", response.data.refresh_token);
//         localStorage.setItem("user_id", response.data.user_id);

//         // ✅ Update state
//         setAccessToken(response.data.access_token);
//         setUserId(response.data.user_id);

//         // ✅ Redirect to Registration Personal Info
//         router.push("/profile");
//       } else {
//         setError("Login failed. No token received.");
//       }
//     } catch (err) {
//       console.error("❌ Login Error:", err.response?.data);
//       setError(err.response?.data?.error || "Login failed. Please try again.");
//     }
//   };

//   return (
//     <div className={`flex justify-center items-center min-h-screen ${isFreelancer ? "bg-gradient-to-r from-purple-200 to-blue-400 p-4" : "bg-gradient-to-r from-blue-400 to-purple-200 p-4"}`}>
//       <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
//         <div className="flex justify-center mb-6">
//           <button
//             className={`px-5 py-3 rounded-l-lg font-semibold transition-all ${isFreelancer ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`}
//             onClick={() => setIsFreelancer(true)}
//           >
//             Talent
//           </button>
//           <button
//             className={`px-5 py-3 rounded-r-lg font-semibold transition-all ${!isFreelancer ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`}
//             onClick={() => setIsFreelancer(false)}
//           >
//             Company
//           </button>
//         </div>

//         <h2 className="text-3xl font-extrabold text-gray-800 mb-3">{isFreelancer ? "Freelancer Login" : "Company Login"}</h2>
//         <p className="text-gray-500 mb-6">Sign in to your {isFreelancer ? "freelancer" : "company"} account</p>

//         <div className="mb-4">
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm"
//           />
//         </div>

//         <div className="mb-4 relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//             className="w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm"
//           />
//           <button
//             type="button"
//             className="absolute top-2.5 right-4 text-gray-500"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
//           </button>
//         </div>

//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         <button
//           onClick={handleLogin}
//           className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-indigo-700 transition-all"
//         >
//           Sign In
//         </button>

//         <p className="text-gray-600 mt-3">
//           Don't have an account?{" "}
//           <Link href="/login/signup" className="text-indigo-500 font-semibold hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
