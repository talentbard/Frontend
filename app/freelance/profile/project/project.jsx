"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([
    {
      title: "Portfolio Website",
      date: "2024-10-01",
      technologies: "Next.js, Tailwind CSS",
      description: "A personal portfolio website showcasing my work and resume.",
      github: "https://github.com/yourusername/portfolio",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [form, setForm] = useState({
    title: "",
    date: "",
    technologies: "",
    description: "",
    github: "",
  });

  const handleAddProject = () => {
    if (!form.title || !form.date || !form.technologies || !form.description) return;
    setProjects([...projects, form]);
    setForm({
      title: "",
      date: "",
      technologies: "",
      description: "",
      github: "",
    });
    setShowForm(false);
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div className="max-w-2xl mx-auto mb-10 p-6 rounded-xl shadow-lg space-y-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-1 text-blue-600 hover:underline"
        >
          <Plus className="w-4 h-4" />
          <span>Add Project</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-50 border p-4 rounded-lg mb-6 space-y-2">
          <div className="flex justify-between">
            <h3 className="font-semibold">Add New Project</h3>
            <button onClick={() => setShowForm(false)}>
              <X className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          {[
            { label: "Project Title", name: "title", type: "text" },
            { label: "Project Create Date", name: "date", type: "date" },
            { label: "Technologies Used (comma separated)", name: "technologies", type: "text" },
            { label: "Description", name: "description", type: "textarea" },
            { label: "GitHub URL", name: "github", type: "url" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-xs text-gray-600 mb-1">{label}</label>
              {type === "textarea" ? (
                <textarea
                  rows={3}
                  className="w-full border px-3 py-2 rounded text-sm"
                  value={form[name]}
                  onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                />
              ) : (
                <input
                  type={type}
                  className="w-full border px-3 py-2 rounded text-sm"
                  value={form[name]}
                  onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                />
              )}
            </div>
          ))}

          <button
            onClick={handleAddProject}
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded"
          >
            Save Project
          </button>
        </div>
      )}

      <div className="space-y-6">
        {visibleProjects.map((proj, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold">{proj.title}</h3>
            <p className="text-sm text-gray-500">{new Date(proj.date).toDateString()}</p>
            <p className="text-sm mt-2">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.technologies.split(",").map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                className="block mt-2 text-blue-600 hover:underline text-sm"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>

      {projects.length > 2 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 text-blue-600 hover:underline text-sm block"
        >
          Show all {projects.length} projects →
        </button>
      )}
    </div>
  );
}
