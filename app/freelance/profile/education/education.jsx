"use client";
import { useState } from "react";
import Image from "next/image";
import { Globe, Mail, Phone, Plus, X } from "lucide-react";

export default function About() {
  const [education, setEducation] = useState([
    {
      school: "BNM Institute Of Technology",
      degree: "Bachelor of Engineering - BE",
      field: "Computer Science",
      start: "Nov 2022",
      end: "Jul 2026",
      skills: ["C (Programming Language)", "HTML"],
    },
    {
      school: "BNM Institute Of Technology",
      degree: "Bachelor of Engineering - BE",
      field: "Computer Science",
      start: "2022",
      end: "",
      skills: ["Web Development", "Python (Programming Language)", "+1 skill"],
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    school: "",
    degree: "",
    field: "",
    start: "",
    end: "",
    skills: "",
  });

  const handleAdd = () => {
    if (!form.school || !form.degree || !form.start) return;
    setEducation([
      ...education,
      {
        ...form,
        skills: form.skills ? form.skills.split(",").map((s) => s.trim()) : [],
      },
    ]);
    setForm({ school: "", degree: "", field: "", start: "", end: "", skills: "" });
    setShowForm(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 mb-10 p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-1 text-blue-600 hover:underline"
        >
          <Plus className="w-4 h-4" /> <span>Add</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-50 border p-4 rounded-lg mb-6 space-y-2">
          <div className="flex justify-between">
            <h3 className="font-semibold">New Education</h3>
            <button onClick={() => setShowForm(false)}>
              <X className="h-4 w-4 text-gray-600" />
            </button>
          </div>
          {[
            { label: "School", name: "school" },
            { label: "Degree", name: "degree" },
            { label: "Field of Study", name: "field" },
            { label: "Start Date", name: "start" },
            { label: "End Date (or expected)", name: "end" },
            { label: "Skills (comma separated)", name: "skills" },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block text-xs text-gray-600 mb-1">{label}</label>
              <input
                className="w-full border px-3 py-1 rounded text-sm"
                value={form[name]}
                onChange={(e) => setForm({ ...form, [name]: e.target.value })}
              />
            </div>
          ))}
          <button
            onClick={handleAdd}
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded"
          >
            Save
          </button>
        </div>
      )}

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="font-semibold text-lg">{edu.school}</h3>
            <p className="text-gray-700 text-sm">{edu.degree}, {edu.field}</p>
            <p className="text-gray-500 text-sm">{edu.start} - {edu.end}</p>
            {edu.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {edu.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
