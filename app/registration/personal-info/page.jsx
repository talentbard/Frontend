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
     
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900">Talent Registration</h2>
        <p className="text-gray-600 text-center mb-6">Please fill in your details to register as a Talent</p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <p className="text-gray-700 font-semibold">Full Name</p>
            <input type="text" name="fullName" placeholder="Enter your full name" onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          </div>
          <div>
            <p className="text-gray-700 font-semibold">Email Address</p>
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-4 text-gray-500 text-lg" />
              <input type="email" name="email" placeholder="xyz@mail.com" onChange={handleChange} className="w-full px-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
            </div>
          </div>
          <div>
            <p className="text-gray-700 font-semibold">Phone Number (WhatsApp Preferred)</p>
            <div className="relative flex items-center">
              <FaPhone className="absolute left-4 text-gray-500 text-lg" />
              <input type="text" name="phone" placeholder="Enter your phone number" onChange={handleChange} className="w-full px-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
            </div>
          </div>
          <div>
            <p className="text-gray-700 font-semibold">LinkedIn Profile</p>
            <div className="relative flex items-center">
              <FaLinkedin className="absolute left-4 text-blue-600 text-lg" />
              <input type="text" name="linkedIn" placeholder="Paste your LinkedIn profile link" onChange={handleChange} className="w-full px-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700 font-semibold">Current Location</p>
              <input type="text" name="location" placeholder="Enter your current location" onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Preferred Work Location</p>
              <input type="text" name="preferredLocation" placeholder="Enter your preferred location" onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
            </div>
          </div>
          <fieldset className="border p-4 rounded-lg">
            <legend className="font-semibold text-gray-800">Talent or Studio Status</legend>
            {['Part-time Talent', 'Full-time Talent', 'Small studio', 'Other'].map(option => (
              <label key={option} className="flex items-center gap-2">
                <input type="radio" name="freelancerStatus" value={option} onChange={handleChange} className="accent-blue-600" />
                {option}
              </label>
            ))}
          </fieldset>
          <div>
            <p className="text-gray-700 font-semibold">Availability</p>
            <select name="availability" onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
              <option>Full-time</option>
              <option>Part-time</option>
            </select>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
            {loading ? "Submitting..." : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
