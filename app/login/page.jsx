"use client";
import axios from "axios";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFreelancer, setIsFreelancer] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const router = useRouter();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous error
  
    console.log("🔍 Form Data Before API Call:", formData); // Debugging
  
    if (!formData.email || !formData.password) {
      console.error("❌ Missing Email or Password!");
      setError("Both email and password are required.");
      return;
    }
  
    try {
      const requestData = {
        auth_params: {
          user_id: "your_user_id", // Replace with actual user_id if required
          refresh_token: "your_refresh_token", // Replace if necessary
        },
        payload: {
          email: formData.email,
          role: isFreelancer ? "talent" : "company",
          password: formData.password,
        },
      };
  
      const response = await axios.post(
        "http://127.0.0.1:8000/user/login/",
        requestData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
  
      console.log("🔹 API Response:", response.data);
  
      if (response.data.access_token) {
        // ✅ Store tokens
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        localStorage.setItem("user_id", response.data.user_id);
        console.log("✅ Tokens stored in Local Storage");
  
        // ✅ Redirect to Profile
        router.push("/");
      } else {
        console.error("❌ Login failed: No token received");
        setError("Login failed. No token received.");
      }
    } catch (err) {
      console.error("❌ Login Error:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Login failed. Please try again.");
    }
  };
  
  return (
    <div className={`flex justify-center items-center min-h-screen ${isFreelancer ? "bg-gradient-to-r from-purple-200 to-blue-400 p-4" : "bg-gradient-to-r from-blue-400 to-purple-200 p-4"}`}>
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
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

        <h2 className="text-3xl font-extrabold text-gray-800 mb-3">{isFreelancer ? "Freelancer Login" : "Company Login"}</h2>
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
          <button
            type="button"
            className="absolute top-2.5 right-4 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-indigo-700 transition-all"
        >
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
