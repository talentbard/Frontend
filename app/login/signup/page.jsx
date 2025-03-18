"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    company_name: "",
    linked_in: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Password validation function
  const validatePassword = (password) => {
    return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.full_name || !formData.email_id || !formData.password) {
      alert("Full Name, Email, and Password are required!");
      return;
    }
    if (!validatePassword(formData.password)) {
      alert("Password must be at least 8 characters long, contain at least one uppercase letter, and one number.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // API request body
    const requestData = {
      auth_params: {
        user_id: localStorage.getItem("user_id") || "temp_id", // Use stored user_id or temp
        other_param: "string", 
      },
      payload: {
        full_name: formData.full_name,
        email_id: formData.email_id,
        phone_no: formData.phone_no,
        role: isFreelancer ? "talent" : "company",
        password: formData.password,
        admin_key: "demo",
        ...(isFreelancer ? {} : { company_name: formData.company_name, linked_in: formData.linked_in }),
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
        router.push("/login"); // Redirect to login page
      } else {
        alert(data.error || "Signup failed. Please try again.");
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
          <button className={`px-4 py-2 rounded-l-xl text-xl font-semibold transition-all ${isFreelancer ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setIsFreelancer(true)}>
            Freelancer
          </button>
          <button className={`px-4 py-2 rounded-r-xl text-xl font-semibold transition-all ${!isFreelancer ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setIsFreelancer(false)}>
            Company
          </button>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">{isFreelancer ? "Freelancer Signup" : "Company Signup"}</h2>
        <p className="text-gray-500 mb-5">Create Your {isFreelancer ? "Freelancer" : "Company"} Account</p>

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          {isFreelancer && (
            <input name="full_name" type="text" placeholder="Full Name" value={formData.full_name} onChange={handleChange} className="w-full px-4 py-2 mb-3 border rounded-xl" required />
          )}
          {!isFreelancer && (
            <>
              <input name="company_name" type="text" placeholder="Company Name" value={formData.company_name} onChange={handleChange} className="w-full px-4 py-2 mb-3 border rounded-xl" required />
              <input name="linked_in" type="text" placeholder="LinkedIn ID" value={formData.linked_in} onChange={handleChange} className="w-full px-4 py-2 mb-3 border rounded-xl" required />
            </>
          )}

          <input name="email_id" type="email" placeholder="Email Address" value={formData.email_id} onChange={handleChange} className="w-full px-4 py-2 mb-3 border rounded-xl" required />

          <input name="phone_no" type="text" placeholder="Phone Number" value={formData.phone_no} onChange={handleChange} className="w-full px-4 py-2 mb-3 border rounded-xl" required />

          {/* Password Field */}
          <div className="mb-3 relative">
            <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-xl" required />
            <button type="button" className="absolute top-2 right-4 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 mb-3 border rounded-xl" required />

          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-xl text-lg font-semibold shadow-md hover:bg-indigo-700 transition-all">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;