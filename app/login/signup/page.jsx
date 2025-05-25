
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isFreelancer, setIsFreelancer] = useState(true);
  const [formData, setFormData] = useState({
    full_name: "",
    email_id: "",
    phone_no: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  // Password validation function
  const validatePassword = (password) => {
    return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  };

  // Handle OTP generation or resend
  const handleGenerateOtp = async (isResend = false) => {
    const email_id = formData.email_id.trim();
    if (!email_id) {
      alert("Please enter a valid email address!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://backend.talentbard.com/user/google-login/send-otp/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payload: { email: email_id } }),
      });

      const data = await response.json();
      if (response.ok) {
        setOtpSent(true);
        alert(isResend ? "OTP resent to your email!" : "OTP sent to your email!");
      } else {
        alert(data.error || `Failed to ${isResend ? "resend" : "send"} OTP. Please try again.`);
      }
    } catch (error) {
      console.error("OTP Generation Error:", error);
      alert(`Error ${isResend ? "resending" : "sending"} OTP. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = async () => {
    const email_id = formData.email_id.trim();
    const otp = formData.otp.trim();
    if (!email_id || !otp) {
      alert("Please enter both email and OTP!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://backend.talentbard.com/user/google-login/verify-otp/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payload: { email: email_id, otp } }),
      });

      const data = await response.json();
      if (response.ok) {
        setOtpVerified(true);
        alert("OTP verified successfully!");
      } else {
        alert(data.error || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP Verification Error:", error);
      alert("Error verifying OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpVerified) {
      alert("Please verify your email with OTP before signing up!");
      return;
    }

    // Trim and validate input values
    const full_name = formData.full_name.trim();
    const email_id = formData.email_id.trim();
    const password = formData.password.trim();

    if (!full_name || !email_id || !password) {
      alert("Full name, Email, and Password are required!");
      return;
    }
    if (!validatePassword(password)) {
      alert("Password must be at least 8 characters long, contain at least one uppercase letter, and one number.");
      return;
    }
    if (password !== formData.confirmPassword.trim()) {
      alert("Passwords do not match!");
      return;
    }

    // API request body
    const requestData = {
      auth_params: {
        user_id: localStorage.getItem("user_id") || "temp_id",
        other_param: "string",
      },
      payload: {
        full_name: full_name,
        email_id: email_id,
        phone_no: formData.phone_no.trim(),
        role: isFreelancer ? "talent" : "company",
        password: password,
        admin_key: "demo",
      },
    };

    try {
      const response = await fetch("https://backend.talentbard.com/user/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        alert("Signup successful! Redirecting to login...");
        router.push("/login");
      } else {
        // Check for email already exists error
        let errorMessage = "Signup failed. Please try again.";
        if (data.error && data.error.toLowerCase().includes("email")) {
          errorMessage = "Email already exists";
        } else if (data.email_id && Array.isArray(data.email_id) && data.email_id[0].toLowerCase().includes("already exists")) {
          errorMessage = "Email already exists";
        }
        alert(errorMessage);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error signing up. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 transition-all duration-500 bg-gradient-to-r from-purple-200 to-blue-400">
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full text-center">
        {/* Toggle Freelancer / Company */}
        <div className="flex justify-center mb-5">
          <button
            className={`px-4 py-2 rounded-l-xl text-xl font-semibold transition-all ${
              isFreelancer ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsFreelancer(true)}
          >
            Freelancer
          </button>
          <button
            className={`px-4 py-2 rounded-r-xl text-xl font-semibold transition-all ${
              !isFreelancer ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsFreelancer(false)}
          >
            Company
          </button>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
          {isFreelancer ? "Freelancer Signup" : "Company Signup"}
        </h2>
        <p className="text-gray-500 mb-5">Create Your {isFreelancer ? "Freelancer" : "Company"} Account</p>

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          <input
            name="full_name"
            type="text"
            placeholder={isFreelancer ? "Full Name" : "Company Name"}
            value={formData.full_name}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 border rounded-xl"
            required
          />

          {/* Email Input with Generate OTP Button */}
          <div className="mb-3 flex items-center gap-2">
            <input
              name="email_id"
              type="email"
              placeholder="Email Address"
              value={formData.email_id}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl"
              required
              disabled={otpVerified}
            />
            <button
              type="button"
              onClick={() => handleGenerateOtp(false)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-50"
              disabled={loading || otpVerified}
            >
              {loading ? "Sending..." : "Generate OTP"}
            </button>
          </div>

          {/* OTP Input, Verify, and Resend Buttons */}
          {otpSent && !otpVerified && (
            <div className="mb-3">
              <div className="flex items-center gap-2">
                <input
                  name="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-xl"
                  required
                />
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-50"
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

          {otpVerified && (
            <p className="mb-3 text-green-600">Email verified successfully!</p>
          )}

          <input
            name="phone_no"
            type="text"
            placeholder="Phone Number"
            value={formData.phone_no}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 border rounded-xl"
            required
          />

          {/* Password Field */}
          <div className="mb-3 relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl"
              required
            />
            <button
              type="button"
              className="absolute top-2 right-4 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 border rounded-xl"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl text-lg font-semibold shadow-md hover:bg-indigo-700 transition-all disabled:opacity-50"
            disabled={loading || !otpVerified}
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 mt-3">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-500 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
