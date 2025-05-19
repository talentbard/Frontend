// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Globe, Mail, Phone, Plus, X } from "lucide-react";

// export default function About() {
//   const [experiences, setExperiences] = useState([
//     {
//       title: "Founder",
//       company: "Founders Gurukul",
//       type: "Full-time",
//       time: "Mar 2024 – Present · 1 yr 1 mo",
//       location: "India",
//       desc: "We are Revolutionizing How Startups are Build...",
//       skills: [],
//     },
//     {
//       title: "Chief Executive Officer",
//       company: "Menteor",
//       type: "Full-time",
//       time: "Jul 2024 – Oct 2024 · 4 mos",
//       location: "India · Remote",
//       desc:
//         "We see the world differently where mentorship empowers everyone to unlock their tr...",
//       skills: [],
//     },
//     {
//       title: "Data Science",
//       company: "T-Hub",
//       type: "Internship",
//       time: "Jul 2023 – Aug 2023 · 2 mos",
//       location: "Hyderabad, Telangana, India · On-site",
//       desc: "",
//       skills: [
//         "Data Science",
//         "Artificial Intelligence (AI)",
//         "+3 skills",
//       ],
//     },
//     {
//       title: "Data Scientist",
//       company: "BEPEC Solutions",
//       type: "Internship",
//       time: "Jan 2022 – Jan 2023 · 1 yr 1 mo",
//       location: "Remote",
//       desc: "Data Science Intern",
//       skills: [
//         "Critical Thinking",
//         "R (Programming Language)",
//         "+18 skills",
//       ],
//     },
//   ]);

//   const [showForm, setShowForm] = useState(false);
//   const [form, setForm] = useState({
//     title: "",
//     company: "",
//     type: "",
//     time: "",
//     location: "",
//     desc: "",
//     skills: "",
//   });

//   const handleAdd = () => {
//     if (!form.title || !form.company || !form.time) return;
//     setExperiences([
//       ...experiences,
//       {
//         ...form,
//         skills: form.skills
//           ? form.skills.split(",").map((s) => s.trim())
//           : [],
//       },
//     ]);
//     setForm({
//       title: "",
//       company: "",
//       type: "",
//       time: "",
//       location: "",
//       desc: "",
//       skills: "",
//     });
//     setShowForm(false);
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 rounded-xl shadow-lg">
//       <div className="h-24 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500" />

//       <div className="bg-black text-white p-6 relative">
//         <div className="absolute -top-14 left-6 flex items-center space-x-2">
//           <div className="relative w-28 h-28">
//             <Image
//               src="/Images/Akshay-Narvate.jpg"
//               alt="Profile"
//               fill
//               className="rounded-full border-4 border-black object-cover"
//             />
//             <div className="absolute bottom-1 right-1 w-6 h-6 bg-blue-500 border-2 border-black rounded-full flex items-center justify-center text-xs font-bold">
//               ✓
//             </div>
//           </div>
//         </div>

//         <div className="absolute top-4 right-4 flex space-x-3">
//           <Globe className="text-gray-300 hover:text-white cursor-pointer" />
//           <Mail className="text-gray-300 hover:text-white cursor-pointer" />
//           <Phone className="text-gray-300 hover:text-white cursor-pointer" />
//         </div>

//         <div className="ml-36 mt-2">
//           <h1 className="text-xl font-bold flex items-center gap-2">
//             Rahul Kumar <span className="text-green-400 text-sm">●</span>
//           </h1>
//           <p className="text-gray-300 text-sm mt-1">rahulkumar88@gmail.com</p>

//           <div className="flex gap-2 mt-3 flex-wrap">
//             {["UX Design", "Product Design", "Critical Thinking", "Problem Solving", "Webflow"].map(
//               (tag) => (
//                 <span
//                   key={tag}
//                   className="bg-gray-800 text-sm px-3 py-1 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               )
//             )}
//           </div>
//         </div>

//         <button className="mt-4 absolute right-6 top-28 bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded-lg font-semibold">
//           Resume
//         </button>

//         <div className="mt-6 ml-2">
//           <h2 className="text-sm text-gray-400 mb-1">About</h2>
//           <p className="text-gray-200 text-sm leading-relaxed">
//             I'm a Product Designer based in Mumbai, Navi. I specialise in UX/UI
//             design, brand strategy, and Webflow development.
//           </p>
//         </div>
//       </div>

//       <div className="bg-white text-black p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-semibold">Experience</h2>
//           <button
//             onClick={() => setShowForm(true)}
//             className="flex items-center space-x-1 text-blue-600 hover:underline"
//           >
//             <Plus className="w-4 h-4" /> <span>Add</span>
//           </button>
//         </div>

//         {showForm && (
//           <div className="bg-gray-50 border p-4 rounded-lg mb-6 space-y-2">
//             <div className="flex justify-between">
//               <h3 className="font-semibold">New Experience</h3>
//               <button onClick={() => setShowForm(false)}>
//                 <X className="h-4 w-4 text-gray-600" />
//               </button>
//             </div>
//             {[
//               { label: "Title", name: "title" },
//               { label: "Employment Type", name: "type" },
//               { label: "Company", name: "company" },
//               { label: "Duration", name: "time" },
//               { label: "Location", name: "location" },
//               { label: "Description", name: "desc" },
//               { label: "Skills (comma separated)", name: "skills" },
//             ].map(({ label, name }) => (
//               <div key={name}>
//                 <label className="block text-xs text-gray-600 mb-1">{label}</label>
//                 <input
//                   className="w-full border px-3 py-1 rounded text-sm"
//                   value={form[name]}
//                   onChange={(e) => setForm({ ...form, [name]: e.target.value })}
//                 />
//               </div>
//             ))}
//             <button
//               onClick={handleAdd}
//               className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded"
//             >
//               Save
//             </button>
//           </div>
//         )}

//         <div className="space-y-6">
//           {experiences.map((exp, index) => (
//             <div key={index} className="border-b pb-4">
//               <h3 className="font-semibold text-lg">{exp.title}</h3>
//               <p className="text-gray-700 text-sm">
//                 {exp.company} · {exp.type}
//               </p>
//               <p className="text-gray-500 text-sm">{exp.time}</p>
//               <p className="text-gray-500 text-sm">{exp.location}</p>
//               {exp.desc && (
//                 <p className="text-gray-800 text-sm mt-1">{exp.desc}</p>
//               )}
//               {exp.skills.length > 0 && (
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {exp.skills.map((skill, i) => (
//                     <span
//                       key={i}
//                       className="text-xs bg-gray-200 px-2 py-1 rounded-full"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import Image from "next/image";
import { Linkedin,Globe, Mail, Phone, Plus, X } from "lucide-react";


export default function About() {
  const [experiences, setExperiences] = useState([
    {
      title: "Founder",
      company: "Founders Gurukul",
      type: "Full-time",
      time: "Mar 2024 – Present · 1 yr 1 mo",
      location: "India",
      desc: "We are Revolutionizing How Startups are Build...",
      skills: [],
    },
    {
      title: "Chief Executive Officer",
      company: "Menteor",
      type: "Full-time",
      time: "Jul 2024 – Oct 2024 · 4 mos",
      location: "India · Remote",
      desc:
        "We see the world differently where mentorship empowers everyone to unlock their tr...",
      skills: [],
    },
    {
      title: "Data Science",
      company: "T-Hub",
      type: "Internship",
      time: "Jul 2023 – Aug 2023 · 2 mos",
      location: "Hyderabad, Telangana, India · On-site",
      desc: "",
      skills: [
        "Data Science",
        "Artificial Intelligence (AI)",
        "+3 skills",
      ],
    },
    {
      title: "Data Scientist",
      company: "BEPEC Solutions",
      type: "Internship",
      time: "Jan 2022 – Jan 2023 · 1 yr 1 mo",
      location: "Remote",
      desc: "Data Science Intern",
      skills: [
        "Critical Thinking",
        "R (Programming Language)",
        "+18 skills",
      ],
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    company: "",
    type: "",
    time: "",
    location: "",
    desc: "",
    skills: "",
  });

  const handleAdd = () => {
    if (!form.title || !form.company || !form.time) return;
    setExperiences([
      ...experiences,
      {
        ...form,
        skills: form.skills
          ? form.skills.split(",").map((s) => s.trim())
          : [],
      },
    ]);
    setForm({
      title: "",
      company: "",
      type: "",
      time: "",
      location: "",
      desc: "",
      skills: "",
    });
    setShowForm(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 rounded-xl shadow-lg">
      <div className="h-24 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500" />

      <div className="bg-black text-white p-6 relative">
        <div className="absolute -top-14 left-6 flex flex-col items-center space-y-2">
          <div className="relative w-28 h-28">
            <Image
              src="/Images/Akshay-Narvate.jpg"
              alt="Profile"
              fill
              className="rounded-full border-4 border-black object-cover"
            />
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-blue-500 border-2 border-black rounded-full flex items-center justify-center text-xs font-bold">
              ✓
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">Rahul Kumar</h1>
            <p className="text-gray-300 text-sm">rahulkumar88@gmail.com</p>
          </div>
        </div>

        <div className="absolute top-4 right-4 flex space-x-3">
  <a
    href="https://www.linkedin.com/in/your-linkedin-id"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-1.5 rounded-full hover:bg-blue-600 transition-colors"
  >
    <Linkedin className="text-black w-5 h-5" />
  </a>
  <Mail className="text-gray-300 hover:text-white cursor-pointer" />
  <Phone className="text-gray-300 hover:text-white cursor-pointer" />
</div>

        <button className="mt-4 absolute right-6 top-28 bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded-lg font-semibold">
          Resume
        </button>

        <div className="mt-40 ml-2">
          <h2 className="text-sm text-gray-400 mb-1">About</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            I'm a Product Designer based in Mumbai, Navi. I specialise in UX/UI
            design, brand strategy, and Webflow development.
          </p>

          <div className="mt-3">
            <h3 className="text-sm text-gray-400 mb-1">Skills</h3>
            <p className="text-sm text-gray-200">
              UX Design, Product Design, Critical Thinking, Problem Solving, Webflow
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white text-black p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Experience</h2>
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
              <h3 className="font-semibold">New Experience</h3>
              <button onClick={() => setShowForm(false)}>
                <X className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            {[
              { label: "Title", name: "title" },
              { label: "Employment Type", name: "type" },
              { label: "Company", name: "company" },
              { label: "Duration", name: "time" },
              { label: "Location", name: "location" },
              { label: "Description", name: "desc" },
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
          {experiences.map((exp, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-semibold text-lg">{exp.title}</h3>
              <p className="text-gray-700 text-sm">
                {exp.company} · {exp.type}
              </p>
              <p className="text-gray-500 text-sm">{exp.time}</p>
              <p className="text-gray-500 text-sm">{exp.location}</p>
              {exp.desc && (
                <p className="text-gray-800 text-sm mt-1">{exp.desc}</p>
              )}
              {exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill, i) => (
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
    </div>
  );
}
