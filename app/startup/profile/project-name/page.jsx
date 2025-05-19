"use client"
import React from "react";

export default function ProjectDashboard() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-100 min-h-screen text-gray-800">
      {/* Left Section */}
      <div className="flex-1 bg-white shadow-md rounded-2xl p-6 space-y-6">
        <h2 className="text-2xl font-bold">Project Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Project Name</label>
            <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Enter project name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Project Type</label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500">
              <option>Website</option>
              <option>Mobile App</option>
              <option>API</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Deliverable Type</label>
            <p className="text-sm">Website code, Source code</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <p>📍 Hyderabad</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Project Duration</label>
            <p>⏱ 70–90 Days</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Team Type</label>
            <p>👤 Individual</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Scope</label>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Landing Page</li>
            <li>Admin Panel</li>
            <li>Chat Integration</li>
            <li>Authentication</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-96 bg-white shadow-md rounded-2xl p-6 space-y-6">
        <h2 className="text-2xl font-bold">Pricing & Timeline</h2>

        <div className="space-y-2">
          <p><span className="font-medium">Base Price:</span> ₹1,00,000</p>
          <p><span className="font-medium">Duration:</span> 05/11/2024 → 10/01/2025</p>
          <p className="text-lg font-semibold text-green-600">Total: ₹1,00,000</p>
        </div>

        <div className="pt-4 border-t border-gray-200 space-y-2">
          <p>📍 <span className="font-medium">1st Milestone:</span> ₹10,000</p>
          <p>📍 <span className="font-medium">2nd Milestone:</span> ₹40,000</p>
          <p>📍 <span className="font-medium">3rd Milestone:</span> ₹50,000</p>
        </div>
      </div>
    </div>
  );
}
