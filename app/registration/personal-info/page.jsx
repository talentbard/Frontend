"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const PersonalInfo = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900">Talent Registration</h2>
        <p className="text-gray-600 text-center mb-6">Please fill in your details to register as a freelancer</p>

        <form className="space-y-5">
          <div className="relative">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Example: xyz@mail_provider.com"
              onChange={handleChange}
              className="input-field pl-10"
            />
          </div>

          <div className="relative">
            <FaPhone className="icon" />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number (Preferably WhatsApp)"
              onChange={handleChange}
              className="input-field pl-10"
            />
          </div>

          <div className="relative">
            <FaLinkedin className="icon text-blue-600" />
            <input
              type="text"
              name="linkedIn"
              placeholder="LinkedIn Profile Link"
              onChange={handleChange}
              className="input-field pl-10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <FaMapMarkerAlt className="icon text-red-500" />
              <input
                type="text"
                name="location"
                placeholder="Current Location"
                onChange={handleChange}
                className="input-field pl-10"
              />
            </div>
            <div className="relative">
              <FaMapMarkerAlt className="icon text-blue-500" />
              <input
                type="text"
                name="preferredLocation"
                placeholder="Preferred Work Location"
                onChange={handleChange}
                className="input-field pl-10"
              />
            </div>
          </div>

          <fieldset className="border p-4 rounded-md">
            <legend className="font-semibold text-gray-800">Freelancer or Studio Status</legend>
            <div className="space-y-2 mt-2">
              {["Part-time freelancer", "Full-time freelancer", "Small studio", "Other"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="freelancerStatus" value={option} onChange={handleChange} className="accent-blue-600" />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block">
            <span className="font-semibold text-gray-800">Availability</span>
            <select name="availability" onChange={handleChange} className="input-field">
              <option>Full-time</option>
              <option>Part-time</option>
            </select>
          </label>

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
