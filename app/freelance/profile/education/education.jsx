// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Globe, Mail, Phone, Plus, X } from "lucide-react";

// export default function About() {
//   const [education, setEducation] = useState([
//     {
//       school: "BNM Institute Of Technology",
//       degree: "Bachelor of Engineering - BE",
//       field: "Computer Science",
//       start: "Nov 2022",
//       end: "Jul 2026",
//       skills: ["C (Programming Language)", "HTML"],
//     },
//     {
//       school: "BNM Institute Of Technology",
//       degree: "Bachelor of Engineering - BE",
//       field: "Computer Science",
//       start: "2022",
//       end: "",
//       skills: ["Web Development", "Python (Programming Language)", "+1 skill"],
//     },
//   ]);

//   const [showForm, setShowForm] = useState(false);
//   const [form, setForm] = useState({
//     school: "",
//     degree: "",
//     field: "",
//     start: "",
//     end: "",
//     skills: "",
//   });

//   const handleAdd = () => {
//     if (!form.school || !form.degree || !form.start) return;
//     setEducation([
//       ...education,
//       {
//         ...form,
//         skills: form.skills ? form.skills.split(",").map((s) => s.trim()) : [],
//       },
//     ]);
//     setForm({ school: "", degree: "", field: "", start: "", end: "", skills: "" });
//     setShowForm(false);
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 mb-10 p-6 rounded-xl shadow-lg">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-semibold">Education</h2>
//         <button
//           onClick={() => setShowForm(true)}
//           className="flex items-center space-x-1 text-blue-600 hover:underline"
//         >
//           <Plus className="w-4 h-4" /> <span>Add</span>
//         </button>
//       </div>

//       {showForm && (
//         <div className="bg-gray-50 border p-4 rounded-lg mb-6 space-y-2">
//           <div className="flex justify-between">
//             <h3 className="font-semibold">New Education</h3>
//             <button onClick={() => setShowForm(false)}>
//               <X className="h-4 w-4 text-gray-600" />
//             </button>
//           </div>
//           {[
//             { label: "School", name: "school" },
//             { label: "Degree", name: "degree" },
//             { label: "Field of Study", name: "field" },
//             { label: "Start Date", name: "start" },
//             { label: "End Date (or expected)", name: "end" },
//             { label: "Skills (comma separated)", name: "skills" },
//           ].map(({ label, name }) => (
//             <div key={name}>
//               <label className="block text-xs text-gray-600 mb-1">{label}</label>
//               <input
//                 className="w-full border px-3 py-1 rounded text-sm"
//                 value={form[name]}
//                 onChange={(e) => setForm({ ...form, [name]: e.target.value })}
//               />
//             </div>
//           ))}
//           <button
//             onClick={handleAdd}
//             className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded"
//           >
//             Save
//           </button>
//         </div>
//       )}

//       <div className="space-y-6">
//         {education.map((edu, index) => (
//           <div key={index} className="border-b pb-4">
//             <h3 className="font-semibold text-lg">{edu.school}</h3>
//             <p className="text-gray-700 text-sm">{edu.degree}, {edu.field}</p>
//             <p className="text-gray-500 text-sm">{edu.start} - {edu.end}</p>
//             {edu.skills.length > 0 && (
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {edu.skills.map((skill, i) => (
//                   <span
//                     key={i}
//                     className="text-xs bg-gray-200 px-2 py-1 rounded-full"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// // }
// "use client";
// import { useState, useEffect } from "react";

// export default function About() {
//   const [education, setEducation] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const access_token = localStorage.getItem("access_token");
//     const refresh_token = localStorage.getItem("refresh_token");
//     const user_id = localStorage.getItem("user_id");

//     async function fetchProfile() {
//       if (!user_id || !access_token) {
//         setError("Missing user credentials");
//         return;
//       }

//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(
//           "https://backend.talentbard.com/talent/talent_profile_views/",
//           {
//             method: "POST",
//            method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         accesstoken: access_token,
//       },
//       body: JSON.stringify({
//         auth_params: {
//           user_id,
//           refresh_token,
//         },
//         payload: {
//           user_id,
//         },
//       }),
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         const data = await response.json();

//         if (data.profile && data.profile.education) {
//           const mappedEducation = data.profile.education.map((edu) => ({
//             school: edu.university,
//             degree: edu.college_degree,
//             field: edu.field_of_study,
//             start: "", // No start date available
//             end: edu.graduation_date,
//             skills: [],
//             currently_pursuing: edu.currently_pursuing,
//             gpa: edu.gpa,
//             id: edu.id,
//           }));
//           setEducation(mappedEducation);
//         } else {
//           setEducation([]);
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProfile();
//   }, []);

//   if (loading) return <p>Loading education data...</p>;
//   if (error) return <p>Error loading education: {error}</p>;

//   return (
//     <div className="max-w-2xl mx-auto mt-10 mb-10 p-6 rounded-xl shadow-lg">
//       <h2 className="text-xl font-semibold mb-4">Education</h2>

//       {education.length === 0 && <p>No education details available.</p>}

//       <div className="space-y-6">
//         {education.map((edu) => (
//           <div key={edu.id} className="border-b pb-4">
//             <h3 className="font-semibold text-lg">{edu.school}</h3>
//             <p className="text-gray-700 text-sm">
//               {edu.degree}, {edu.field}
//             </p>
//             <p className="text-gray-500 text-sm">
//               {edu.currently_pursuing
//                 ? "Currently Pursuing"
//                 : `Graduated: ${new Date(edu.end).toLocaleDateString()}`}
//             </p>
//             {edu.gpa && (
//               <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";

// export default function Education() {
//   const [education, setEducation] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const access_token = localStorage.getItem("access_token");
//     const refresh_token = localStorage.getItem("refresh_token");
//     const user_id = localStorage.getItem("user_id");

//     async function fetchProfile() {
//       if (!user_id || !access_token) {
//         setError("Missing user credentials");
//         return;
//       }

//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(
//           "https://backend.talentbard.com/talent/talent_profile_views/",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               accesstoken: access_token,
//             },
//             body: JSON.stringify({
//               auth_params: {
//                 user_id,
//                 refresh_token,
//               },
//               payload: {
//                 user_id,
//               },
//             }),
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         const data = await response.json();
//         const skillSet = data.profile?.skills_expertise || [];

//         let primarySkills = [];
//         let secondarySkills = [];

//         skillSet.forEach((entry) => {
//           primarySkills.push(...(entry.primary_skills || []).map((s) => s.skill_name));
//           secondarySkills.push(...(entry.secondary_skills || []).map((s) => s.skill_name));
//         });

//         const allSkills = [...new Set([...primarySkills, ...secondarySkills])];
//         const fallbackSkills = ["Communication", "Problem Solving", "Teamwork"];

//         if (data.profile && data.profile.education) {
//           const mappedEducation = data.profile.education.map((edu) => ({
//             school: edu.university,
//             degree: edu.college_degree,
//             field: edu.field_of_study,
//             start: "",
//             end: edu.graduation_date,
//             skills: allSkills.length > 0 ? allSkills : fallbackSkills,
//             currently_pursuing: edu.currently_pursuing,
//             gpa: edu.gpa,
//             id: edu.id,
//           }));
//           setEducation(mappedEducation);
//         } else {
//           setEducation([]);
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProfile();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading education data...</p>;
//   if (error) return <p className="text-center mt-10 text-red-600">Error loading education: {error}</p>;

//   return (
//     <div className="max-w-2xl mx-auto mt-10 mb-10 p-6 rounded-xl shadow-lg">
//       <h2 className="text-xl font-semibold mb-4">Education</h2>
//       {education.length === 0 && <p>No education details available.</p>}
//       <div className="space-y-6">
//         {education.map((edu) => (
//           <div key={edu.id} className="border-b pb-4">
//             <h3 className="font-semibold text-lg">{edu.school}</h3>
//             <p className="text-gray-700 text-sm">
//               {edu.degree}, {edu.field}
//             </p>
//             <p className="text-gray-500 text-sm">
//               {edu.currently_pursuing
//                 ? "Currently Pursuing"
//                 : `Graduated: ${new Date(edu.end).toLocaleDateString()}`}
//             </p>
//             {edu.gpa && <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>}
//             {edu.skills && edu.skills.length > 0 && (
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {edu.skills.map((skill, i) => (
//                   <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";

export default function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [newEdu, setNewEdu] = useState({
    university: "",
    degree: "",
    fieldOfStudy: "",
    graduationDate: "",
    gpa: "",
    currentlyPursuing: false,
  });

  const [authParams, setAuthParams] = useState({
    user_id: "",
    access_token: "",
    refresh_token: "",
  });

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    setAuthParams({ user_id, access_token, refresh_token });

    if (!user_id || !access_token) {
      setError("Missing user credentials");
      return;
    }

    async function fetchProfile() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://backend.talentbard.com/talent/talent_profile_views/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              accesstoken: access_token,
            },
            body: JSON.stringify({
              auth_params: { user_id, refresh_token },
              payload: { user_id },
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
         

        const data = await response.json();
        console.log(data)
        const eduList = data.profile?.education || [];
        const mapped = eduList.map((edu) => ({
          id: edu.id,
          university: edu.university,
          degree: edu.college_degree,
          fieldOfStudy: edu.field_of_study,
          graduationDate: edu.graduation_date,
          gpa: edu.gpa,
          currentlyPursuing: edu.currently_pursuing,
        }));

        setEducation(mapped);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  const handleFormChange = (field, value) => {
    setNewEdu((prev) => ({ ...prev, [field]: value }));
  };

  const submitNewEducation = async () => {
    const {
      university,
      degree,
      fieldOfStudy,
      graduationDate,
      gpa,
      currentlyPursuing,
    } = newEdu;

    if (!university || !degree || !fieldOfStudy) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        university_name: university,
        college_degree: degree,
        field_of_study: fieldOfStudy,
        graduation_date: graduationDate,
        currently_pursuing: currentlyPursuing,
        gpa: parseFloat(gpa) || 0,
        user_id: authParams.user_id,
      };

      const requestBody = {
        auth_params: {
          user_id: authParams.user_id,
          refresh_token: authParams.refresh_token,
        },
        payload,
      };

      const response = await fetch(
        "https://backend.talentbard.com/talent/education/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accesstoken: authParams.access_token,
          },
          body: JSON.stringify(requestBody),
        }
      );
     

      const text = await response.text();
      if (!response.ok) {
        throw new Error(`Failed to add education. ${text}`);
      }

      alert("Education added successfully.");
      setShowForm(false);
      setNewEdu({
        university: "",
        degree: "",
        fieldOfStudy: "",
        graduationDate: "",
        gpa: "",
        currentlyPursuing: false,
      });

      // Refresh education list
      setEducation((prev) => [
        ...prev,
        {
          university,
          degree,
          fieldOfStudy,
          graduationDate,
          gpa,
          currentlyPursuing,
          id: Date.now(), // Temporary ID
        },
      ]);
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 mb-10 p-6 rounded-xl shadow-lg border bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <button onClick={() => setShowForm((prev) => !prev)}>
          <FaPlusCircle className="text-blue-600 text-2xl hover:scale-110 transition-transform" />
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {education.length === 0 && <p>No education data found.</p>}

      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="border-b pb-4">
            <h3 className="font-semibold">{edu.university}</h3>
            <p className="text-sm text-gray-700">
              {edu.degree}, {edu.fieldOfStudy}
            </p>
            <p className="text-sm text-gray-500">
              {edu.currentlyPursuing
                ? "Currently Pursuing"
                : `Graduated: ${new Date(edu.graduationDate).toLocaleDateString()}`}
            </p>
            {edu.gpa && (
              <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
            )}
          </div>
        ))}
      </div>

      {showForm && (
        <div className="mt-6 p-4 border border-blue-300 rounded-lg bg-blue-50">
          <h3 className="text-lg font-semibold mb-3">Add New Education</h3>
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="University"
              className="border p-2 rounded"
              value={newEdu.university}
              onChange={(e) => handleFormChange("university", e.target.value)}
            />
            <input
              type="text"
              placeholder="Degree"
              className="border p-2 rounded"
              value={newEdu.degree}
              onChange={(e) => handleFormChange("degree", e.target.value)}
            />
            <input
              type="text"
              placeholder="Field of Study"
              className="border p-2 rounded"
              value={newEdu.fieldOfStudy}
              onChange={(e) =>
                handleFormChange("fieldOfStudy", e.target.value)
              }
            />
            <input
              type="date"
              className="border p-2 rounded"
              value={newEdu.graduationDate}
              onChange={(e) =>
                handleFormChange("graduationDate", e.target.value)
              }
            />
            <input
              type="number"
              placeholder="GPA"
              className="border p-2 rounded"
              value={newEdu.gpa}
              onChange={(e) => handleFormChange("gpa", e.target.value)}
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={newEdu.currentlyPursuing}
                onChange={(e) =>
                  handleFormChange("currentlyPursuing", e.target.checked)
                }
              />
              <span>Currently Pursuing</span>
            </label>

            <button
              onClick={submitNewEducation}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
