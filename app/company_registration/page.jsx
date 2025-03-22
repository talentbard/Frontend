// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const Signup = () => {
//   const router = useRouter();
//   const [accessToken, setAccessToken] = useState("");
//   const [userId, setUserId] = useState("");
//   const [refreshToken, setRefreshToken] = useState("");
  
//   useEffect(() => {
//     const storedAccessToken = localStorage.getItem("access_token");
//     const storedUserId = localStorage.getItem("user_id");
//     const storedRefreshToken =  localStorage.getItem("refresh_token");

//     if (storedAccessToken) setAccessToken(storedAccessToken);
//     if (storedUserId) setUserId(storedUserId);
//     if (storedRefreshToken) setRefreshToken(storedRefreshToken);
//   }, []);

//   const [formData, setFormData] = useState({
//     company_name: "",
//     company_phone: "",
//     about_company: "",
//     company_website: "",
//     company_linkedin: "",
//     project_description: "",
//     total_funding_raised: "",
//     designation: "",
//     personal_contact: "",
//     personal_linkedin: "",
//     company_work_email: "",
//     company_size: "",
//     industry: "",
//     sector: "",
//     primary_business_model: "",
//     funding_raised: "",
//     funding_rounds: "",
//     latest_rounds: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!accessToken) {
//       alert("Access token is missing. Please log in again.");
//       return;
//     }

//     const requestData = {
//         auth_params: {
//           user_id: userId,
//           refresh_token: refreshToken,
//         },
//         payload: {
//           company_name: formData.company_name,
//           company_phone: formData.company_phone,
//           about_company: formData.about_company,
//           company_website: formData.company_website,
//           company_linkedin: formData.company_linkedin,
//           project_description: formData.project_description,
//           total_funding_raised: Number(formData.total_funding_raised) || 0,
//           designation: formData.designation,
//           personal_contact: formData.personal_contact,
//           personal_linkedin: formData.personal_linkedin,
//           company_work_email: formData.company_work_email,
//           company_size: formData.company_size,
//           industry: formData.industry,
//           sector: formData.sector,
//           primary_business_model: formData.primary_business_model,
//           funding_raised: formData.funding_raised,
//           funding_rounds: Number(formData.funding_rounds) || 0,
//           latest_rounds: formData.latest_rounds,
//           user_id: userId,
//         },
//       };
      

//     try {
//       const response = await fetch("https://backend.talentbard.com/company/company_register/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accesstoken": accessToken, 
//         },
//         body: JSON.stringify(requestData),
//       });

//       const data = await response.json();
//       console.log("Response:", data);

//       if (response.ok) {
//         alert("Signup successful! Redirecting to login...");
//         router.push("/login");
//       } else {
//         alert(data.error || "Signup failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//       alert("Error signing up. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-r from-purple-200 to-blue-400">
//       <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full text-center">
//         <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Company Signup</h2>
//         <p className="text-gray-500 mb-5">Create Your Company Account</p>

//         <form onSubmit={handleSubmit} className="space-y-3">
//           {Object.keys(formData).map((key) => (
//             ["industry", "sector", "primary_business_model", "funding_raised", "latest_rounds"].includes(key) ? (
//               <select
//                 key={key}
//                 name={key}
//                 value={formData[key]}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-xl"
//                 required
//               >
//                 <option value="">Select {key.replace("_", " ").toUpperCase()}</option>
//                 {key === "industry" && ["Technology", "Sports", "Healthcare", "Finance", "Other"].map((option) => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//                 {key === "sector" && ["Edtech", "Fintech", "Healthtech", "E-commerce", "Other"].map((option) => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//                 {key === "primary_business_model" && ["B2C", "B2B", "B2G", "Other"].map((option) => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//                 {key === "funding_raised" && ["Yes", "No"].map((option) => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//                 {key === "latest_rounds" && ["Pre-seed", "Seed", "Series A", "Series B"].map((option) => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//               </select>
//             ) : (
//               <input
//                 key={key}
//                 name={key}
//                 type="text"
//                 placeholder={key.replace("_", " ").toUpperCase()}
//                 value={formData[key]}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-xl"
//                 required
//               />
//             )
//           ))}

//           <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-xl text-lg font-semibold shadow-md hover:bg-indigo-700">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;


// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const Signup = () => {
//   const router = useRouter();
//   const [accessToken, setAccessToken] = useState("");
//   const [userId, setUserId] = useState("");
//   const [refreshToken, setRefreshToken] = useState("");

//   useEffect(() => {
//     const storedAccessToken = localStorage.getItem("access_token");
//     const storedUserId = localStorage.getItem("user_id");
//     const storedRefreshToken = localStorage.getItem("refresh_token");

//     if (storedAccessToken) setAccessToken(storedAccessToken);
//     if (storedUserId) setUserId(storedUserId);
//     if (storedRefreshToken) setRefreshToken(storedRefreshToken);
//   }, []);

//   const [formData, setFormData] = useState({
//     company_name: "",
//     company_phone: "",
//     industry: "",
//     sector: "",
//     company_size: "",
//     about_company: "",
//     company_work_email: "",
//     company_website: "",
//     company_linkedin: "",
//     project_description: "",
//     total_funding_raised: "",
//     designation: "",
//     personal_contact: "",
//     personal_linkedin: "",
//     funding_raised: "",
//     funding_rounds: "",
//     latest_rounds: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!accessToken) {
//       alert("Access token is missing. Please log in again.");
//       return;
//     }

//     const requestData = {
//       auth_params: {
//         user_id: userId,
//         refresh_token: refreshToken,
//       },
//       payload: {
//         ...formData,
//         total_funding_raised: Number(formData.total_funding_raised) || 0,
//         funding_rounds: Number(formData.funding_rounds) || 0,
//         user_id: userId,
//       },
//     };

//     try {
//       const response = await fetch("https://backend.talentbard.com/company/company_register/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accesstoken: accessToken,
//         },
//         body: JSON.stringify(requestData),
//       });

//       const data = await response.json();
//       console.log("Response:", data);

//       if (response.ok) {
//         alert("Signup successful! Redirecting to login...");
//         router.push("/login");
//       } else {
//         alert(data.error || "Signup failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//       alert("Error signing up. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-r from-purple-200 to-blue-400">
//       <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full text-center">
//         {/* Label above the heading */}
//         <label className="text-sm font-semibold text-gray-600">Startup Registration</label>
//         <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Company Signup</h2>
//         <p className="text-gray-500 mb-5">Create Your Company Account</p>

//         <form onSubmit={handleSubmit} className="space-y-3">
//           {Object.keys(formData).map((key) =>
//             ["industry", "sector", "primary_business_model", "funding_raised", "latest_rounds"].includes(key) ? (
//               <div key={key} className="text-left">
//                 <label className="block font-medium text-gray-700 mb-1">
//                   {key.replace("_", " ").toUpperCase()}
//                 </label>
//                 <input
//                   name={key}
//                   list={key + "-options"} // Connects to the datalist
//                   value={formData[key]}
//                   onChange={handleChange}
//                   placeholder={`Select or type ${key.replace("_", " ")}`}
//                   className="w-full px-4 py-2 border rounded-xl"
//                   required
//                 />
//                 <datalist id={key + "-options"}>
//                   {key === "industry" &&
//                     ["Technology", "Sports", "Healthcare", "Finance"].map((option) => (
//                       <option key={option} value={option} />
//                     ))}
//                   {key === "sector" &&
//                     ["Edtech", "Fintech", "Healthtech", "E-commerce"].map((option) => (
//                       <option key={option} value={option} />
//                     ))}
//                   {key === "primary_business_model" &&
//                     ["B2C", "B2B", "B2G"].map((option) => (
//                       <option key={option} value={option} />
//                     ))}
//                   {key === "funding_raised" &&
//                     ["Yes", "No"].map((option) => (
//                       <option key={option} value={option} />
//                     ))}
//                   {key === "latest_rounds" &&
//                     ["Pre-seed", "Seed", "Series A", "Series B"].map((option) => (
//                       <option key={option} value={option} />
//                     ))}
//                 </datalist>
//               </div>
//             ) : (
//               <div key={key} className="text-left">
//                 <label className="block font-medium text-gray-700 mb-1">
//                   {key.replace("_", " ").toUpperCase()}
//                 </label>
//                 <input
//                   name={key}
//                   type="text"
//                   placeholder={key.replace("_", " ").toUpperCase()}
//                   value={formData[key]}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border rounded-xl"
//                   required
//                 />
//               </div>
//             )
//           )}

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-xl text-lg font-semibold shadow-md hover:bg-indigo-700"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const Signup = () => {
//   const router = useRouter();
//   const [accessToken, setAccessToken] = useState("");
//   const [userId, setUserId] = useState("");
//   const [refreshToken, setRefreshToken] = useState("");

//   useEffect(() => {
//     const storedAccessToken = localStorage.getItem("access_token");
//     const storedUserId = localStorage.getItem("user_id");
//     const storedRefreshToken = localStorage.getItem("refresh_token");

//     if (storedAccessToken) setAccessToken(storedAccessToken);
//     if (storedUserId) setUserId(storedUserId);
//     if (storedRefreshToken) setRefreshToken(storedRefreshToken);
//   }, []);

//   const [formData, setFormData] = useState({
//     company_name: "",
//     company_phone: "",
//     industry: "",
//     sector: "",
//     company_size: "",
//     about_company: "",
//     company_work_email: "",
//     company_website: "",
//     company_linkedin: "",
//     project_description: "",
//     total_funding_raised: "",
//     designation: "",
//     personal_contact: "",
//     personal_linkedin: "",
//     funding_raised: "",
//     funding_rounds: "",
//     latest_rounds: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Debugging: Check if tokens exist
//     console.log("Stored Access Token:", localStorage.getItem("access_token"));
//     console.log("Stored User ID:", localStorage.getItem("user_id"));
//     console.log("Stored Refresh Token:", localStorage.getItem("refresh_token"));
  
//     if (!accessToken) {
//       alert("Access token is missing. Please log in again.");
//       return;
//     }
  
//     const requestData = {
//       auth_params: {
//         user_id: userId,
//         refresh_token: refreshToken,
//       },
//       payload: {
//         ...formData,
//         total_funding_raised: Number(formData.total_funding_raised) || 0,
//         funding_rounds: Number(formData.funding_rounds) || 0,
//         user_id: userId,
//       },
//     };
  
//     try {
//       console.log("Sending Request with Token:", accessToken);
      
//       const response = await fetch("https://backend.talentbard.com/company/company_register/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`, // Correct format
//         },
//         body: JSON.stringify(requestData),
//       });
  
//       const data = await response.json();
//       console.log("Response:", data);
  
//       if (response.ok) {
//         alert("Signup successful! Redirecting to login...");
//         router.push("/login");
//       } else {
//         alert(data.error || "Signup failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//       alert("Error signing up. Please try again.");
//     }
//   };
  
//   return (
//     <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-r from-purple-200 to-blue-400">
//       <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full text-center">
//         {/* Label above the heading */}
//         <label className="text-sm font-semibold text-gray-600">Startup Registration</label>
//         <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Company Signup</h2>
//         <p className="text-gray-500 mb-5">Create Your Company Account</p>

//         <form onSubmit={handleSubmit} className="space-y-3">
//           {Object.keys(formData).map((key) =>
//             ["industry", "sector", "primary_business_model", "funding_raised", "latest_rounds", "designation"].includes(key) ? (
//               <div key={key} className="text-left">
//                 <label className="block font-medium text-gray-700 mb-1">
//                   {key.replace("_", " ").toUpperCase()}
//                 </label>
//                 <input
//                   name={key}
//                   list={key + "-options"} // Connects to the datalist
//                   value={formData[key]}
//                   onChange={handleChange}
//                   placeholder={
//                     key === "industry"
//                       ? "Technology, Finance, Healthcare, Sports"
//                       : key === "sector"
//                       ? "Edtech, Fintech, Healthtech, E-commerce"
//                       : key === "funding_raised"
//                       ? "Yes or No"
//                       : key === "latest_rounds"
//                       ? "Pre-seed, Seed, Series A, Series B"
//                       : key === "designation"
//                       ? "Your designation in the company: HR, CEO, Other"
//                       : `Select or type ${key.replace("_", " ")}`
//                   }
//                   className="w-full px-4 py-2 border rounded-xl"
//                   required
//                 />
//                 <datalist id={key + "-options"}>
//                   {key === "industry" &&
//                     [ "Technology", "Finance", "Healthcare", "Sports", "Retail",
//                       "Food and Agriculture", "Politics", "Arts and Entertainment",
//                       "Biotechnology", "Media and Communication", "Manufacturing",
//                       "Construction", "Consumer Goods", "Ecommerce", "Education",
//                       "Energy"].map((option) => (
//                       <option key={option} value={option} />
//                     ))}
//                   {key === "sector" &&
//                     ["Edtech", "Fintech", "Healthtech", "E-commerce"].map((option) => (
//                       <option key={option} value={option} />
//                     ))}
//                   {key === "primary_business_model" &&
//                     ["B2C", "B2B", "B2G"].map((option) => (
//                       <option key={option} value={option} />
//                     ))}
//                   {key === "funding_raised" &&
//                     ["Yes", "No"].map((option) => (
//                       <option key={option} value={option} />
//                     ))}
//                   {key === "latest_rounds" &&
//                     ["Pre-seed", "Seed", "Series A", "Series B"].map((option) => (
//                       <option key={option} value={option} />
//                     ))}
//                   {key === "designation" &&
//                     ["HR", "CEO", "Other"].map((option) => (
//                       <option key={option} value={option} />
//                     ))}
//                 </datalist>
//               </div>
//             ) : (
//               <div key={key} className="text-left">
//                 <label className="block font-medium text-gray-700 mb-1">
//                   {key.replace("_", " ").toUpperCase()}
//                 </label>
//                 <input
//                   name={key}
//                   type="text"
//                   placeholder={key.replace("_", " ").toUpperCase()}
//                   value={formData[key]}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border rounded-xl"
//                   required
//                 />
//               </div>
//             )
//           )}

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-xl text-lg font-semibold shadow-md hover:bg-indigo-700"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState("");
  const [userId, setUserId] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("access_token");
    const storedUserId = localStorage.getItem("user_id");
    const storedRefreshToken = localStorage.getItem("refresh_token");

    if (storedAccessToken) setAccessToken(storedAccessToken);
    if (storedUserId) setUserId(storedUserId);
    if (storedRefreshToken) setRefreshToken(storedRefreshToken);
  }, []);

  const [formData, setFormData] = useState({
    company_name: "",
    company_phone: "",
    industry: "",
    sector: "",
    company_size: "",
    about_company: "",
    company_work_email: "",
    company_website: "",
    company_linkedin: "",
    project_description: "",
    total_funding_raised: "",
    designation: "",
    personal_contact: "",
    personal_linkedin: "",
    funding_raised: "",
    funding_rounds: "",
    latest_rounds: "",
    primary_business_model: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accessToken) {
      alert("Access token is missing. Please log in again.");
      return;
    }

    const requestData = {
      auth_params: {
        user_id: userId,
        refresh_token: refreshToken,
      },
      payload: {
        ...formData,
        total_funding_raised: Number(formData.total_funding_raised) || 0,
        funding_rounds: Number(formData.funding_rounds) || 0,
        user_id: userId,
      },
    };

    try {
      const response = await fetch("https://backend.talentbard.com/company/company_register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accesstoken": accessToken,
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful! Redirecting to Landing Page");
        router.push("/");
      } else {
        alert(data.error || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error signing up. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-r from-purple-200 to-blue-400">
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <label className="text-sm font-semibold text-gray-600">Startup Registration</label>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Company Signup</h2>
        <p className="text-gray-500 mb-5">Create Your Company Account</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          {Object.keys(formData).map((key) => (
            <div key={key} className="text-left">
              <label className="block font-medium text-gray-700 mb-1">
                {key.replace("_", " ").toUpperCase()}
              </label>
              <input
                name={key}
                list={key + "-options"}
                value={formData[key]}
                onChange={handleChange}
                placeholder={`Enter ${key.replace("_", " ")}`}
                className="w-full px-4 py-2 border rounded-xl"
                required
              />
              <datalist id={key + "-options"}>
                {key === "industry" &&
                  ["Technology", "Finance", "Healthcare", "Sports", "Retail", "Food and Agriculture", "Politics", "Arts and Entertainment", "Biotechnology", "Media and Communication", "Manufacturing", "Construction", "Consumer Goods", "Ecommerce", "Education", "Energy"].map((option) => (
                    <option key={option} value={option} />
                  ))}
                {key === "sector" &&
                  ["Edtech", "Fintech", "Healthtech", "E-commerce"].map((option) => (
                    <option key={option} value={option} />
                  ))}
                {key === "primary_business_model" &&
                  ["B2C", "B2B", "B2G"].map((option) => (
                    <option key={option} value={option} />
                  ))}
                {key === "funding_raised" && ["Yes", "No"].map((option) => <option key={option} value={option} />)}
                {key === "latest_rounds" &&
                  ["Pre-seed", "Seed", "Series A", "Series B"].map((option) => (
                    <option key={option} value={option} />
                  ))}
                {key === "designation" && ["HR", "CEO", "Other"].map((option) => <option key={option} value={option} />)}
              </datalist>
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl text-lg font-semibold shadow-md hover:bg-indigo-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;