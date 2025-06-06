// "use client";
// import { useEffect, useState } from "react";
// import { Plus, X } from "lucide-react";

// export default function SkillsAndLanguages() {
//   // -------------------- Skills --------------------
//   const [skills, setSkills] = useState(["React.js", "HTML5", "SQL", "JavaScript", "Tailwind CSS"]);
//   const [newSkill, setNewSkill] = useState("");
//   const [showSkillForm, setShowSkillForm] = useState(false);
//   const [showAllSkills, setShowAllSkills] = useState(false);

//   const handleAddSkill = () => {
//     const trimmed = newSkill.trim();
//     if (trimmed && !skills.includes(trimmed)) {
//       setSkills([...skills, trimmed]);
//       setNewSkill("");
//       setShowSkillForm(false);
//     }
//   };

//   const skillsToShow = showAllSkills ? skills : skills.slice(0, 5);

//   // -------------------- Languages --------------------
//   const [languages, setLanguages] = useState([
//     { name: "English", level: "Fluent" },
//     { name: "Hindi", level: "Fluent" },
//   ]);
//   const [newLanguage, setNewLanguage] = useState({ name: "", level: "" });
//   const [showLangForm, setShowLangForm] = useState(false);
//   const [showAllLangs, setShowAllLangs] = useState(false);

//   const handleAddLanguage = () => {
//     const trimmed = newLanguage.name.trim();
//     if (trimmed && !languages.find((l) => l.name.toLowerCase() === trimmed.toLowerCase())) {
//       setLanguages([...languages, newLanguage]);
//       setNewLanguage({ name: "", level: "" });
//       setShowLangForm(false);
//     }
//   };
//   useEffect(()=>{

//   },[])

//   const langsToShow = showAllLangs ? languages : languages.slice(0, 3);

//   return (
//     <div className="max-w-2xl mx-auto mb-10 p-6 rounded-xl shadow-lg space-y-10">
//       {/* Skills Section */}
//       <div>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-semibold">Skills</h2>
//           <button
//             onClick={() => setShowSkillForm(true)}
//             className="flex items-center space-x-1 text-blue-600 hover:underline"
//           >
//             <Plus className="w-4 h-4" />
//             <span>Add skill</span>
//           </button>
//         </div>

//         {showSkillForm && (
//           <div className="bg-gray-50 border p-4 rounded-lg mb-6 space-y-2">
//             <div className="flex justify-between">
//               <h3 className="font-semibold">Add New Skill</h3>
//               <button onClick={() => setShowSkillForm(false)}>
//                 <X className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//             <input
//               type="text"
//               className="w-full border px-3 py-2 rounded text-sm"
//               placeholder="Ex: JavaScript, TypeScript..."
//               value={newSkill}
//               onChange={(e) => setNewSkill(e.target.value)}
//             />
//             <button
//               onClick={handleAddSkill}
//               className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded"
//             >
//               Add
//             </button>
//           </div>
//         )}

//         <div className="flex flex-wrap gap-3">
//           {skillsToShow.map((skill, index) => (
//             <span key={index} className="bg-gray-200 px-3 py-1 text-sm rounded-full">
//               {skill}
//             </span>
//           ))}
//         </div>

//         {skills.length > 5 && !showAllSkills && (
//           <button
//             onClick={() => setShowAllSkills(true)}
//             className="mt-4 text-blue-600 hover:underline text-sm block"
//           >
//             Show all {skills.length} skills →
//           </button>
//         )}
//       </div>

//       {/* Languages Section */}
//       <div>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-semibold">Languages</h2>
//           <button
//             onClick={() => setShowLangForm(true)}
//             className="flex items-center space-x-1 text-blue-600 hover:underline"
//           >
//             <Plus className="w-4 h-4" />
//             <span>Add language</span>
//           </button>
//         </div>

//         {showLangForm && (
//           <div className="bg-gray-50 border p-4 rounded-lg mb-6 space-y-2">
//             <div className="flex justify-between">
//               <h3 className="font-semibold">Add New Language</h3>
//               <button onClick={() => setShowLangForm(false)}>
//                 <X className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//             <input
//               type="text"
//               className="w-full border px-3 py-2 rounded text-sm"
//               placeholder="Language name"
//               value={newLanguage.name}
//               onChange={(e) => setNewLanguage({ ...newLanguage, name: e.target.value })}
//             />
//             <select
//               className="w-full border px-3 py-2 rounded text-sm"
//               value={newLanguage.level}
//               onChange={(e) => setNewLanguage({ ...newLanguage, level: e.target.value })}
//             >
//               <option value="">Select proficiency</option>
//               <option value="Native">Native</option>
//               <option value="Fluent">Fluent</option>
//               <option value="Professional">Professional</option>
//               <option value="Intermediate">Intermediate</option>
//               <option value="Beginner">Beginner</option>
//             </select>
//             <button
//               onClick={handleAddLanguage}
//               className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded"
//             >
//               Add
//             </button>
//           </div>
//         )}

//         <div className="space-y-2">
//           {langsToShow.map((lang, index) => (
//             <div key={index} className="text-sm text-gray-800 flex items-center gap-2">
//               <span className="font-medium">{lang.name}</span>
//               <span className="text-gray-500">({lang.level})</span>
//             </div>
//           ))}
//         </div>

//         {languages.length > 3 && !showAllLangs && (
//           <button
//             onClick={() => setShowAllLangs(true)}
//             className="mt-4 text-blue-600 hover:underline text-sm block"
//           >
//             Show all {languages.length} languages →
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";

export default function SkillsAndLanguages() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const [languages, setLanguages] = useState([]);
  const [newLanguage, setNewLanguage] = useState({ name: "", level: "" });
  const [showLangForm, setShowLangForm] = useState(false);
  const [showAllLangs, setShowAllLangs] = useState(false);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    const user_id = localStorage.getItem("user_id");

    if (!access_token || !refresh_token || !user_id) return;

    const API_URL = "https://backend.talentbard.com/talent/talent_profile_views/";

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accesstoken: access_token,
      },
      body: JSON.stringify({
        auth_params: {
          user_id,
          refresh_token,
        },
        payload: {
          user_id,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const profile = data.profile;

        // Extract skills
        const skillSet = new Set();
        profile.skills_expertise?.forEach((entry) => {
          entry.primary_skills?.forEach((s) => skillSet.add(s.skill_name));
          entry.secondary_skills?.forEach((s) => skillSet.add(s.skill_name));
        });
        setSkills([...skillSet]);

        // Extract languages
        const langs = profile.languages?.map((lang) => ({
          name: lang.language,
          level: lang.proficiency_level,
        })) || [];
        setLanguages(langs);
      })
      .catch((err) => console.error("Failed to fetch profile data:", err));
  }, []);

  const submitSkillData = async (skill) => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    const user_id = localStorage.getItem("user_id");

    if (!access_token || !user_id || !refresh_token) {
      console.error("Missing authentication tokens or user ID");
      return;
    }

    const requestBody = {
      auth_params: { user_id, refresh_token },
      payload: {
        primary_skills: [skill],
        user_id,
      },
    };

    try {
      const response = await fetch("https://backend.talentbard.com/talent/skills/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accesstoken: access_token,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error: ${response.status}`);
      }

      console.log("Skill added successfully");
    } catch (error) {
      console.error("Skill API Error:", error.message);
    }
  };

  const handleAddSkill = () => {
    const trimmed = newSkill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setNewSkill("");
      setShowSkillForm(false);
      submitSkillData(trimmed); // <-- Call API here
    }
  };

  const handleAddLanguage = () => {
    const trimmed = newLanguage.name.trim();
    if (trimmed && !languages.find((l) => l.name.toLowerCase() === trimmed.toLowerCase())) {
      setLanguages([...languages, newLanguage]);
      setNewLanguage({ name: "", level: "" });
      setShowLangForm(false);
      // You can also implement submitLanguageData() if needed
    }
  };

  const skillsToShow = showAllSkills ? skills : skills.slice(0, 5);
  const langsToShow = showAllLangs ? languages : languages.slice(0, 3);

  return (
    <div className="max-w-2xl mx-auto mb-10 p-6 rounded-xl shadow-lg space-y-10">
      {/* Skills Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <button
            onClick={() => setShowSkillForm(true)}
            className="flex items-center space-x-1 text-blue-600 hover:underline"
          >
            <Plus className="w-4 h-4" />
            <span>Add skill</span>
          </button>
        </div>

        {showSkillForm && (
          <div className="bg-gray-50 border p-4 rounded-lg mb-6 space-y-2">
            <div className="flex justify-between">
              <h3 className="font-semibold">Add New Skill</h3>
              <button onClick={() => setShowSkillForm(false)}>
                <X className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded text-sm"
              placeholder="Ex: JavaScript, TypeScript..."
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button
              onClick={handleAddSkill}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded"
            >
              Add
            </button>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {skillsToShow.map((skill, index) => (
            <span key={index} className="bg-gray-200 px-3 py-1 text-sm rounded-full">
              {skill}
            </span>
          ))}
        </div>

        {skills.length > 5 && !showAllSkills && (
          <button
            onClick={() => setShowAllSkills(true)}
            className="mt-4 text-blue-600 hover:underline text-sm block"
          >
            Show all {skills.length} skills →
          </button>
        )}
      </div>

      {/* Languages Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Languages</h2>
          <button
            onClick={() => setShowLangForm(true)}
            className="flex items-center space-x-1 text-blue-600 hover:underline"
          >
            <Plus className="w-4 h-4" />
            <span>Add language</span>
          </button>
        </div>

        {showLangForm && (
          <div className="bg-gray-50 border p-4 rounded-lg mb-6 space-y-2">
            <div className="flex justify-between">
              <h3 className="font-semibold">Add New Language</h3>
              <button onClick={() => setShowLangForm(false)}>
                <X className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded text-sm"
              placeholder="Language name"
              value={newLanguage.name}
              onChange={(e) => setNewLanguage({ ...newLanguage, name: e.target.value })}
            />
            <select
              className="w-full border px-3 py-2 rounded text-sm"
              value={newLanguage.level}
              onChange={(e) => setNewLanguage({ ...newLanguage, level: e.target.value })}
            >
              <option value="">Select proficiency</option>
              <option value="Native">Native</option>
              <option value="Fluent">Fluent</option>
              <option value="Professional">Professional</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Beginner">Beginner</option>
            </select>
            <button
              onClick={handleAddLanguage}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded"
            >
              Add
            </button>
          </div>
        )}

        <div className="space-y-2">
          {langsToShow.map((lang, index) => (
            <div key={index} className="text-sm text-gray-800 flex items-center gap-2">
              <span className="font-medium">{lang.name}</span>
              <span className="text-gray-500">({lang.level})</span>
            </div>
          ))}
        </div>

        {languages.length > 3 && !showAllLangs && (
          <button
            onClick={() => setShowAllLangs(true)}
            className="mt-4 text-blue-600 hover:underline text-sm block"
          >
            Show all {languages.length} languages →
          </button>
        )}
      </div>
    </div>
  );
}
