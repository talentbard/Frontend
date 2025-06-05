// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const SkillsPage = () => {
//   const router = useRouter();
//   const [skills, setSkills] = useState([{ skill_name: "", skill_level: "Beginner", experience_years: 0 }]);
//   const [secondarySkills, setSecondarySkills] = useState([{ skill_name: "", skill_level: "Beginner", experience_years: 0 }]);
//   const [certificates, setCertificates] = useState([]);
//   const [submissionSuccess, setSubmissionSuccess] = useState(false);
  
//   const [userId, setUserId] = useState(null);
//   const [refreshToken, setRefreshToken] = useState(null);
//   const [accessToken, setAccessToken] = useState(null);
  
//   useEffect(() => {
//     setUserId(localStorage.getItem("user_id"));
//     setRefreshToken(localStorage.getItem("refresh_token"));
//     setAccessToken(localStorage.getItem("access_token"));
//   }, []);
//   const handleSkillChange = (index, field, value) => {
//     const updatedSkills = [...skills];
//     updatedSkills[index][field] = value;
//     setSkills(updatedSkills);
//   };

//   const handleSecondarySkillChange = (index, field, value) => {
//     const updatedSecondarySkills = [...secondarySkills];
//     updatedSecondarySkills[index][field] = value;
//     setSecondarySkills(updatedSecondarySkills);
//   };

//   const addSkill = () => {
//     setSkills([...skills, { skill_name: "", skill_level: "Beginner", experience_years: 0 }]);
//   };

//   const addSecondarySkill = () => {
//     setSecondarySkills([...secondarySkills, { skill_name: "", skill_level: "Beginner", experience_years: 0 }]);
//   };

//   const handleFileChange = async (event) => {
//     const files = event.target.files;
//     const newCertificates = [];

//     for (let file of files) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         newCertificates.push({ name: file.name, data: reader.result.split(",")[1] });
//         setCertificates([...certificates, ...newCertificates]);
//       };
//     }
//   };

//   const addCertificate = () => {
//     document.getElementById("certificateInput").click();
//   };

//   const submitSkills = async () => {
//     try {
//       for (let skill of skills) {
//         await fetch("https://backend.talentbard.com/talent/skills/", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Accesstoken": accessToken,
//           },
//           body: JSON.stringify({
//             auth_params: { user_id: userId, refresh_token: refreshToken },
//             payload: {
//               primary_skill: skill.skill_name,
//               skill_level: skill.skill_level,
//               experience_years: skill.experience_years,
//               secondary_skills: secondarySkills.map(s => s.skill_name).join(", "),
//               certificate_image: certificates.map(cert => cert.data).join(", "),
//               user_id: userId,
//             },
//           }),
//         });
//       }
//       setSubmissionSuccess(true);
//     } catch (error) {
//       console.error("Error submitting data:", error);
//     }
//   };

//   const handleNext = async () => {
//     try {
//       await submitSkills();
//       setSubmissionSuccess(true);
//       setTimeout(() => {
//         router.push("/registration/education");
//       }, 1000);
//     } catch (error) {
//       console.error("Error during submission:", error);
//     }
//   };

//   const handleBack = () => {
//     router.push("/registration/personal-info");
//   };
//   return (
//     <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>

//       {/* Primary Skills */}
//       {skills.map((skill, index) => (
//         <div key={index} className="mb-4 grid grid-cols-3 gap-4">
//           <input
//             type="text"
//             placeholder="Primary Skill"
//             value={skill.skill_name}
//             onChange={(e) => handleSkillChange(index, "skill_name", e.target.value)}
//             className="border p-2 rounded-md w-full"
//           />
//           <select
//             value={skill.skill_level}
//             onChange={(e) => handleSkillChange(index, "skill_level", e.target.value)}
//             className="border p-2 rounded-md w-full"
//           >
//             <option>Beginner</option>
//             <option>Intermediate</option>
//             <option>Expert</option>
//           </select>
//           <input
//             type="number"
//             placeholder="Experience (years)"
//             value={skill.experience_years}
//             onChange={(e) => handleSkillChange(index, "experience_years", e.target.value)}
//             className="border p-2 rounded-md w-full"
//           />
//         </div>
//       ))}

//       <button
//         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//         onClick={addSkill}
//       >
//         + Add Another Skill
//       </button>

//       {/* Secondary Skills */}
//       <div className="mt-6">
//         <label className="block font-semibold">Secondary Skills</label>
//         {secondarySkills.map((skill, index) => (
//           <div key={index} className="mb-4 grid grid-cols-3 gap-4">
//             <input
//               type="text"
//               placeholder="Secondary Skill"
//               value={skill.skill_name}
//               onChange={(e) => handleSecondarySkillChange(index, "skill_name", e.target.value)}
//               className="border p-2 rounded-md w-full"
//             />
//             <select
//               value={skill.skill_level}
//               onChange={(e) => handleSecondarySkillChange(index, "skill_level", e.target.value)}
//               className="border p-2 rounded-md w-full"
//             >
//               <option>Beginner</option>
//               <option>Intermediate</option>
//               <option>Expert</option>
//             </select>
//             <input
//               type="number"
//               placeholder="Experience (years)"
//               value={skill.experience_years}
//               onChange={(e) => handleSecondarySkillChange(index, "experience_years", e.target.value)}
//               className="border p-2 rounded-md w-full"
//             />
//           </div>
//         ))}
//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//           onClick={addSecondarySkill}
//         >
//           + Add Another Secondary Skill
//         </button>
//       </div>

//       {/* Uploaded Certifications */}
//       <div className="mt-6 border-dashed border-2 border-gray-300 p-4 text-center rounded-lg">
//         <p className="text-gray-600">Upload Certifications</p>
//         <input type="file" id="certificateInput" multiple className="hidden" onChange={handleFileChange} />
//         <button
//           className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//           onClick={addCertificate}
//         >
//           + Add Certificate
//         </button>
//         <ul className="mt-2 text-left">
//           {certificates.map((cert, index) => (
//             <li key={index} className="text-gray-800">{cert.name}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Submission Success Message */}
//       {submissionSuccess && (
//         <p className="mt-4 text-green-600 font-semibold">Form submitted successfully!</p>
//       )}

//       {/* Navigation Buttons */}
//       <div className="flex justify-between mt-6">
//         <button className="px-6 py-2 border rounded-md hover:bg-gray-100" onClick={handleBack}>
//           Back
//         </button>
//         <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={handleNext}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SkillsPage;

// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const SkillsPage = () => {
//   const router = useRouter();
//   const [skills, setSkills] = useState([{ skill_name: "", skill_level: "Beginner", experience_years: 0 }]);
//   const [secondarySkills, setSecondarySkills] = useState([{ skill_name: "", skill_level: "Beginner", experience_years: 0 }]);
//   const [certificates, setCertificates] = useState([]);
//   const [submissionSuccess, setSubmissionSuccess] = useState(false);

//   const [userId, setUserId] = useState(null);
//   const [refreshToken, setRefreshToken] = useState(null);
//   const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     setUserId(localStorage.getItem("user_id"));
//     setRefreshToken(localStorage.getItem("refresh_token"));
//     setAccessToken(localStorage.getItem("access_token"));
//   }, []);

//   const handleSkillChange = (index, field, value) => {
//     const updatedSkills = [...skills];
//     updatedSkills[index][field] = value;
//     setSkills(updatedSkills);
//   };

//   const handleSecondarySkillChange = (index, field, value) => {
//     const updatedSecondarySkills = [...secondarySkills];
//     updatedSecondarySkills[index][field] = value;
//     setSecondarySkills(updatedSecondarySkills);
//   };

//   const addSkill = () => {
//     setSkills([...skills, { skill_name: "", skill_level: "Beginner", experience_years: 0 }]);
//   };

//   const addSecondarySkill = () => {
//     setSecondarySkills([...secondarySkills, { skill_name: "", skill_level: "Beginner", experience_years: 0 }]);
//   };

//   const handleFileChange = async (event) => {
//     const files = event.target.files;
//     if (!files.length) return;

//     const newCertificates = await Promise.all(
//       [...files].map(file => 
//         new Promise(resolve => {
//           const reader = new FileReader();
//           reader.onload = () => resolve(reader.result.split(",")[1]); // Convert to base64
//           reader.readAsDataURL(file);
//         })
//       )
//     );

//     setCertificates(prev => [...prev, ...newCertificates]);
//   };

//   const addCertificate = () => {
//     document.getElementById("certificateInput").click();
//   };

//   const submitSkills = async () => {
//     if (!userId || !refreshToken || !accessToken) {
//       console.error("Missing authentication details");
//       return;
//     }

//     const payload = {
//       auth_params: { user_id: userId, refresh_token: refreshToken },
//       payload: {
//         primary_skills: skills,
//         secondary_skills: secondarySkills,
//         certificate_images: certificates,
//         user_id: userId,
//       },
//     };

//     console.log("Submitting:", JSON.stringify(payload, null, 2));

//     try {
//       const response = await fetch("https://backend.talentbard.com/talent/skills/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//             "Accesstoken": accessToken,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Error Response:", errorData);
//         return;
//       }

//       setSubmissionSuccess(true);
//     } catch (error) {
//       console.error("Error submitting data:", error);
//     }
//   };

//   const handleNext = async () => {
//     await submitSkills();
//     setTimeout(() => {
//       router.push("/registration/education");
//     }, 1000);
//   };

//   const handleBack = () => {
//     router.push("/registration/personal-info");
//   };

//   return (
//     <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>

//       {/* Primary Skills */}
//       {skills.map((skill, index) => (
//         <div key={index} className="mb-4 grid grid-cols-3 gap-4">
//           <input
//             type="text"
//             placeholder="Primary Skill"
//             value={skill.skill_name}
//             onChange={(e) => handleSkillChange(index, "skill_name", e.target.value)}
//             className="border p-2 rounded-md w-full"
//           />
//           <select
//             value={skill.skill_level}
//             onChange={(e) => handleSkillChange(index, "skill_level", e.target.value)}
//             className="border p-2 rounded-md w-full"
//           >
//             <option>Beginner</option>
//             <option>Intermediate</option>
//             <option>Expert</option>
//           </select>
//           <input
//             type="number"
//             placeholder="Experience (years)"
//             value={skill.experience_years}
//             onChange={(e) => handleSkillChange(index, "experience_years", e.target.value)}
//             className="border p-2 rounded-md w-full"
//           />
//         </div>
//       ))}
//       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={addSkill}>
//         + Add Another Skill
//       </button>

//       {/* Secondary Skills */}
//       <div className="mt-6">
//         <label className="block font-semibold">Secondary Skills</label>
//         {secondarySkills.map((skill, index) => (
//           <div key={index} className="mb-4 grid grid-cols-3 gap-4">
//             <input
//               type="text"
//               placeholder="Secondary Skill"
//               value={skill.skill_name}
//               onChange={(e) => handleSecondarySkillChange(index, "skill_name", e.target.value)}
//               className="border p-2 rounded-md w-full"
//             />
//             <select
//               value={skill.skill_level}
//               onChange={(e) => handleSecondarySkillChange(index, "skill_level", e.target.value)}
//               className="border p-2 rounded-md w-full"
//             >
//               <option>Beginner</option>
//               <option>Intermediate</option>
//               <option>Expert</option>
//             </select>
//             <input
//               type="number"
//               placeholder="Experience (years)"
//               value={skill.experience_years}
//               onChange={(e) => handleSecondarySkillChange(index, "experience_years", e.target.value)}
//               className="border p-2 rounded-md w-full"
//             />
//           </div>
//         ))}
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={addSecondarySkill}>
//           + Add Another Secondary Skill
//         </button>
//       </div>

//       {/* Certificates */}
//       <div className="mt-6 border-dashed border-2 border-gray-300 p-4 text-center rounded-lg">
//         <p className="text-gray-600">Upload Certifications</p>
//         <input type="file" id="certificateInput" multiple className="hidden" onChange={handleFileChange} />
//         <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={addCertificate}>
//           + Add Certificate
//         </button>
//         <ul className="mt-2 text-left">
//           {certificates.map((cert, index) => <li key={index} className="text-gray-800">Certificate {index + 1}</li>)}
//         </ul>
//       </div>

//       {/* Navigation */}
//       <div className="flex justify-between mt-6">
//         <button className="px-6 py-2 border rounded-md hover:bg-gray-100" onClick={handleBack}>Back</button>
//         <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default SkillsPage;


"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SkillsPage = () => {
  const router = useRouter();
  const [skills, setSkills] = useState([{ skill_name: "", skill_level: "Beginner", experience_years: 0 }]);
  const [secondarySkills, setSecondarySkills] = useState([{ skill_name: "", skill_level: "Beginner", experience_years: 0 }]);
  const [certificates, setCertificates] = useState([]);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const [userId, setUserId] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    setUserId(localStorage.getItem("user_id"));
    setRefreshToken(localStorage.getItem("refresh_token"));
    setAccessToken(localStorage.getItem("access_token"));
  }, []);

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  const handleSecondarySkillChange = (index, field, value) => {
    const updatedSecondarySkills = [...secondarySkills];
    updatedSecondarySkills[index][field] = value;
    setSecondarySkills(updatedSecondarySkills);
  };

  const addSkill = () => {
    setSkills([...skills, { skill_name: "", skill_level: "Beginner", experience_years: 0 }]);
  };

  const addSecondarySkill = () => {
    setSecondarySkills([...secondarySkills, { skill_name: "", skill_level: "Beginner", experience_years: 0 }]);
  };

  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (!files.length) return;

    const newCertificates = await Promise.all(
      [...files].map(file => 
        new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result.split(",")[1]); // Convert to base64
          reader.readAsDataURL(file);
        })
      )
    );

    setCertificates(prev => [...prev, ...newCertificates]);
  };

  const addCertificate = () => {
    document.getElementById("certificateInput").click();
  };

  const submitSkills = async () => {
    if (!userId || !refreshToken || !accessToken) {
      console.error("Missing authentication details");
      return false;
    }

    const payload = {
      auth_params: { user_id: userId, refresh_token: refreshToken },
      payload: {
        primary_skills: skills,
        secondary_skills: secondarySkills,
        certificate_images: certificates,
        user_id: userId,
      },
    };
console.log("certificate",certificates);
    try {
      const response = await fetch("https://backend.talentbard.com/talent/skills/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accesstoken": accessToken,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error("Error Response:", await response.json());
        return false;
      }

      return true; // Indicating success
    } catch (error) {
      console.error("Error submitting data:", error);
      return false;
    }
  };

  const handleNext = async () => {
    const success = await submitSkills();
    if (success) {
      setSubmissionSuccess(true);
      setTimeout(() => {
        router.push("/registration/education");
      }, 1500); // Show success message for 1.5 seconds before redirecting
    }
  };

  const handleBack = () => {
    router.push("/registration/personal-info");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>

      {/* Primary Skills */}
      {skills.map((skill, index) => (
        <div key={index} className="mb-4 grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Primary Skill"
            value={skill.skill_name}
            onChange={(e) => handleSkillChange(index, "skill_name", e.target.value)}
            className="border p-2 rounded-md w-full"
          />
          <select
            value={skill.skill_level}
            onChange={(e) => handleSkillChange(index, "skill_level", e.target.value)}
            className="border p-2 rounded-md w-full"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
          <input
  type="number"
  placeholder="Experience (years)"
  value={skill.experience_years !== 0 ? skill.experience_years : ""}
  onChange={(e) => handleSkillChange(index, "experience_years", e.target.value)}
  className="border p-2 rounded-md w-full"
/>

        </div>
      ))}
  
      {/* Secondary Skills */}
      <div className="mt-6">
        <label className="block font-semibold">Secondary Skills</label>
        {secondarySkills.map((skill, index) => (
          <div key={index} className="mb-4 grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Secondary Skill"
              value={skill.skill_name}
              onChange={(e) => handleSecondarySkillChange(index, "skill_name", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <select
              value={skill.skill_level}
              onChange={(e) => handleSecondarySkillChange(index, "skill_level", e.target.value)}
              className="border p-2 rounded-md w-full"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
            <input
              type="number"
              placeholder="Experience (years)"
              value={skill.experience_years}
              onChange={(e) => handleSecondarySkillChange(index, "experience_years", e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>
        ))}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={addSecondarySkill}>
          + Add Another Secondary Skill
        </button>
      </div>

      {/* Certificates */}
      <div className="mt-6 border-dashed border-2 border-gray-300 p-4 text-center rounded-lg">
        <p className="text-gray-600">Upload Certifications</p>
        <input type="file" id="certificateInput" multiple className="hidden" onChange={handleFileChange} />
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={addCertificate}>
          + Add Certificate
        </button>
        <ul className="mt-2 text-left">
          {certificates.map((cert, index) => <li key={index} className="text-gray-800">Certificate {index + 1}</li>)}
        </ul>
      </div>

      {/* Success Message */}
      {submissionSuccess && (
        <div className="text-green-600 text-center mt-4">
          Skills submitted successfully! Redirecting...
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 border rounded-md hover:bg-gray-100" onClick={handleBack}>Back</button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default SkillsPage;
