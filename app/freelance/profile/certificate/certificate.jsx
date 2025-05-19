"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function Certificates() {
  const [certificates, setCertificates] = useState([
    {
      name: "React js crash course",
      org: "Udemy",
      issueDate: "2024-09-01",
      expiryDate: "",
      id: "UC-f143d978-3e6b-4e6f-b7a6-895ac12e596a",
      url: "https://example.com",
      skills: ["HTML5", "React.js"],
    },
    {
      name: "certificate of SQL",
      org: "Udemy",
      issueDate: "2024-08-01",
      expiryDate: "",
      id: "UC-060d4c8c-f986-454e-8ecf-549447432a71",
      url: "https://example.com",
      skills: ["SQL"],
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    org: "",
    issueDate: "",
    expiryDate: "",
    id: "",
    url: "",
    skills: "",
  });

  const [showAll, setShowAll] = useState(false);

  const handleAdd = () => {
    if (!form.name || !form.org || !form.issueDate) return;
    const newCert = {
      ...form,
      skills: form.skills ? form.skills.split(",").map((s) => s.trim()) : [],
    };
    setCertificates([...certificates, newCert]);
    setForm({
      name: "",
      org: "",
      issueDate: "",
      expiryDate: "",
      id: "",
      url: "",
      skills: "",
    });
    setShowForm(false);
  };

  const certsToShow = showAll ? certificates : certificates.slice(0, 2);

  return (
    <div className="max-w-2xl mx-auto mb-10 p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Licenses & Certifications</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-1 text-blue-600 hover:underline"
        >
          <Plus className="w-4 h-4" />
          <span>Add</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-50 border p-4 rounded-lg mb-6 space-y-2">
          <div className="flex justify-between">
            <h3 className="font-semibold">New Certificate</h3>
            <button onClick={() => setShowForm(false)}>
              <X className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          {[
            { label: "Name*", name: "name", placeholder: "Ex: Microsoft certified network associate security" },
            { label: "Issuing organization*", name: "org", placeholder: "Ex: Microsoft" },
            { label: "Credential ID", name: "id", placeholder: "" },
            { label: "Credential URL", name: "url", placeholder: "" },
            { label: "Skills (comma separated)", name: "skills", placeholder: "" },
          ].map(({ label, name, placeholder }) => (
            <div key={name}>
              <label className="block text-xs text-gray-600 mb-1">{label}</label>
              <input
                className="w-full border px-3 py-1 rounded text-sm"
                placeholder={placeholder}
                value={form[name]}
                onChange={(e) => setForm({ ...form, [name]: e.target.value })}
              />
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Issue Date</label>
              <input
                type="date"
                className="w-full border px-3 py-1 rounded text-sm"
                value={form.issueDate}
                onChange={(e) => setForm({ ...form, issueDate: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Expiration Date</label>
              <input
                type="date"
                className="w-full border px-3 py-1 rounded text-sm"
                value={form.expiryDate}
                onChange={(e) => setForm({ ...form, expiryDate: e.target.value })}
              />
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded"
          >
            Save
          </button>
        </div>
      )}

      <div className="space-y-6">
        {certsToShow.map((cert, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="font-semibold text-lg">{cert.name}</h3>
            <p className="text-gray-700 text-sm">{cert.org}</p>
            <p className="text-gray-500 text-sm">
              Issued {new Date(cert.issueDate).toLocaleDateString(undefined, { month: "short", year: "numeric" })}
              {cert.expiryDate && ` • Expires ${new Date(cert.expiryDate).toLocaleDateString(undefined, { month: "short", year: "numeric" })}`}
            </p>
            <p className="text-gray-500 text-sm">Credential ID: {cert.id}</p>
            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 underline flex items-center gap-1 mt-1"
              >
                Show credential ↗
              </a>
            )}
            {cert.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {certificates.length > 2 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 text-blue-600 hover:underline text-sm"
        >
          Show all {certificates.length} licenses & certifications →
        </button>
      )}
    </div>
  );
}
