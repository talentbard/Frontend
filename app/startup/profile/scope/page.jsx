"use client"
import React, { useState } from "react";

const initialSteps = [
  {
    title: "STEP 1",
    content: "The Basics (Project type, Deliverables, Expediting)",
  },
  {
    title: "STEP 2",
    content: "Scope (Title, Scope Details, Sample Work, Terms)",
  },
  {
    title: "STEP 3",
    content: "Get ready for work (Service settings, Calendar, Payments, Price)",
  },
];

export default function ScopeCreation() {
  const [steps, setSteps] = useState(initialSteps);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditChange = (index, field, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index][field] = value;
    setSteps(updatedSteps);
  };

  const handleAddStep = () => {
    const newStep = {
      title: `STEP ${steps.length + 1}`,
      content: "Describe this step...",
    };
    setSteps([...steps, newStep]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">+ New Scope</h1>
        <div className="flex flex-col items-end gap-2">
          <p className="text-lg font-semibold">Name of the Project</p>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-500 underline text-sm"
          >
            {isEditing ? "✅ Finish Editing" : "✏️ Edit Steps"}
          </button>
        </div>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
          >
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={step.title}
                  onChange={(e) => handleEditChange(i, "title", e.target.value)}
                  className="font-bold text-blue-600 mb-2 p-2 border rounded-md w-full"
                  placeholder="Step Title"
                />
                <textarea
                  value={step.content}
                  onChange={(e) => handleEditChange(i, "content", e.target.value)}
                  className="text-gray-700 flex-1 p-2 border rounded-md w-full"
                  rows={4}
                  placeholder="Step Content"
                />
              </>
            ) : (
              <>
                <h2 className="font-bold text-blue-600 mb-2">{step.title}</h2>
                <p className="text-gray-700 flex-1">{step.content}</p>
                <button className="mt-4 text-blue-500 underline">✏️ Edit</button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Add New Step Button */}
      {isEditing && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleAddStep}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm shadow-md transition"
          >
            ➕ Add New Step
          </button>
        </div>
      )}

      {/* Scope Visibility & Options */}
      <div className="mt-10 p-4 bg-white rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-semibold">
            Your scope is currently: <span className="text-red-600">Private</span>
          </p>
          <button className="mt-2 text-blue-500 underline">Edit scope visibility</button>
        </div>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Preview & Share
          </button>
          <button className="border border-gray-400 px-4 py-2 rounded-md">
            Private Proposal ✏️
          </button>
        </div>
      </div>
    </div>
  );
}
