"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const PersonalInfo = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    location: "",
    preferredLocation: "",
    freelancerStatus: "",
    availability: "Full-time",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    const userId = localStorage.getItem("user_id");
    const refreshToken = localStorage.getItem("refresh_token");
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken || !userId || !refreshToken) {
      setError("Authentication error. Please log in again.");
      setLoading(false);
      return;
    }
    
    const requestBody = {
      auth_params: {
        user_id: userId,
        refresh_token: refreshToken,
      },
      payload: {
        full_name: formData.fullName,
        email_id: formData.email,
        phone_no: formData.phone,
        linkedin: formData.linkedIn,
        current_location: formData.location,
        preferred_location: formData.preferredLocation,
        freelancer_status: formData.freelancerStatus,
        availability: formData.availability,
        user_id: userId,
      },
    };
    
    try {
      const response = await axios.post("https://backend.talentbard.com/talent/register/", requestBody, {
        headers: {
        "Accesstoken": accessToken,
          "Content-Type": "application/json",
        },
      });
      console.log("Registration Success:", response.data);
      router.push("/registration/skills");
    } catch (err) {
      console.error("Registration Error:", err);
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900">Talent Registration</h2>
        <p className="text-gray-600 text-center mb-6">Please fill in your details to register as a freelancer</p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          <div className="relative flex items-center">
            <FaEnvelope className="absolute left-4 text-gray-500 text-lg" />
            <input type="email" name="email" placeholder="xyz@mail.com" onChange={handleChange} className="w-full px-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          </div>
          <div className="relative flex items-center">
            <FaPhone className="absolute left-4 text-gray-500 text-lg" />
            <input type="text" name="phone" placeholder="Phone Number (WhatsApp Preferred)" onChange={handleChange} className="w-full px-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          </div>
          <div className="relative flex items-center">
            <FaLinkedin className="absolute left-4 text-blue-600 text-lg" />
            <input type="text" name="linkedIn" placeholder="LinkedIn Profile Link" onChange={handleChange} className="w-full px-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="location" placeholder="Current Location" onChange={handleChange} className="w-full px-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
            <input type="text" name="preferredLocation" placeholder="Preferred Work Location" onChange={handleChange} className="w-full px-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          </div>
          <fieldset className="border p-4 rounded-lg">
            <legend className="font-semibold text-gray-800">Freelancer or Studio Status</legend>
            {['Part-time freelancer', 'Full-time freelancer', 'Small studio', 'Other'].map(option => (
              <label key={option} className="flex items-center gap-2">
                <input type="radio" name="freelancerStatus" value={option} onChange={handleChange} className="accent-blue-600" />
                {option}
              </label>
            ))}
          </fieldset>
          <label className="block">
            <span className="font-semibold text-gray-800">Availability</span>
            <select name="availability" onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
              <option>Full-time</option>
              <option>Part-time</option>
            </select>
          </label>
          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
            {loading ? "Submitting..." : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
