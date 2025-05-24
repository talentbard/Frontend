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
  const [formData, setFormData] = useState({ email: "", password: "", otp: "" });
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
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

  // Handle OTP generation or resend
  const handleGenerateOtp = async (isResend = false) => {
    const email = formData.email.trim();
    if (!email) {
      setError("Please enter a valid email address!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend.talentbard.com/user/google-login/send-otp/",
        { payload: { email } },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        setOtpSent(true);
        alert(isResend ? "OTP resent to your email!" : "OTP sent to your email!");
      } else {
        setError(response.data.error || `Failed to ${isResend ? "resend" : "send"} OTP. Please try again.`);
      }
    } catch (error) {
      console.error("OTP Generation Error:", error);
      setError(`Error ${isResend ? "resending" : "sending"} OTP. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = async () => {
    const email = formData.email.trim();
    const otp = formData.otp.trim();
    if (!email || !otp) {
      setError("Please enter both email and OTP!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend.talentbard.com/user/google-login/verify-otp/",
        { payload: { email, otp } },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        setOtpVerified(true);
        alert("OTP verified successfully!");
      } else {
        setError(response.data.error || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP Verification Error:", error);
      setError("Error verifying OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    if (!otpVerified) {
      setError("Please verify your email with OTP before logging in!");
      return;
    }

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
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Login Response:", response.data);

      const { access_token, refresh_token, user_id } = response.data;

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
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        isFreelancer
          ? "bg-gradient-to-r from-purple-200 to-blue-400 p-4"
          : "bg-gradient-to-r from-blue-400 to-purple-200 p-4"
      }`}
    >
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
        {/* Role Toggle Buttons */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-5 py-3 rounded-l-lg font-semibold transition-all ${
              isFreelancer ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsFreelancer(true)}
          >
            Talent
          </button>
          <button
            className={`px-5 py-3 rounded-r-lg font-semibold transition-all ${
              !isFreelancer ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsFreelancer(false)}
          >
            Company
          </button>
        </div>

        {/* Login Form */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
          {isFreelancer ? "Talent Login" : "Company Login"}
        </h2>
        <p className="text-gray-500 mb-6">Sign in to your {isFreelancer ? "talent" : "company"} account</p>

        <div className="mb-4 flex items-center gap-2">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm"
            disabled={otpVerified}
          />
          <button
            type="button"
            onClick={() => handleGenerateOtp(false)}
            className="px-4 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-50"
            disabled={loading || otpVerified}
          >
            {loading ? "Sending..." : "Generate OTP"}
          </button>
        </div>

        {otpSent && !otpVerified && (
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter OTP"
                className="w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm"
              />
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="px-4 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
            <button
              type="button"
              onClick={() => handleGenerateOtp(true)}
              className="mt-2 text-indigo-600 font-semibold hover:underline disabled:opacity-50"
              disabled={loading}
            >
              Resend OTP
            </button>
          </div>
        )}

        {otpVerified && <p className="mb-4 text-green-600">Email verified successfully!</p>}

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
          className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-indigo-700 transition-all disabled:opacity-50"
          disabled={loading || !otpVerified}
        >
          Log In
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