
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
//     primary_business_model: "",
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
//           "Accesstoken": accessToken,
//         },
//         body: JSON.stringify(requestData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Signup successful! Redirecting to Landing Page");
//         router.push("/");
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
//         <label className="text-sm font-semibold text-gray-600">Startup Registration</label>
//         <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Company Signup</h2>
//         <p className="text-gray-500 mb-5">Create Your Company Account</p>

//         <form onSubmit={handleSubmit} className="space-y-3">
//           {Object.keys(formData).map((key) => (
//             <div key={key} className="text-left">
//               <label className="block font-medium text-gray-700 mb-1">
//                 {key.replace("_", " ").toUpperCase()}
//               </label>
//               <input
//                 name={key}
//                 list={key + "-options"}
//                 value={formData[key]}
//                 onChange={handleChange}
//                 placeholder={`Enter ${key.replace("_", " ")}`}
//                 className="w-full px-4 py-2 border rounded-xl"
//                 required
//               />
//               <datalist id={key + "-options"}>
//                 {key === "industry" &&
//                   ["Technology", "Finance", "Healthcare", "Sports", "Retail", "Food and Agriculture", "Politics", "Arts and Entertainment", "Biotechnology", "Media and Communication", "Manufacturing", "Construction", "Consumer Goods", "Ecommerce", "Education", "Energy"].map((option) => (
//                     <option key={option} value={option} />
//                   ))}
//                 {key === "sector" &&
//                   ["Edtech", "Fintech", "Healthtech", "E-commerce"].map((option) => (
//                     <option key={option} value={option} />
//                   ))}
//                 {key === "primary_business_model" &&
//                   ["B2C", "B2B", "B2G"].map((option) => (
//                     <option key={option} value={option} />
//                   ))}
//                 {key === "funding_raised" && ["Yes", "No"].map((option) => <option key={option} value={option} />)}
//                 {key === "latest_rounds" &&
//                   ["Pre-seed", "Seed", "Series A", "Series B"].map((option) => (
//                     <option key={option} value={option} />
//                   ))}
//                 {key === "designation" && ["HR", "CEO", "Other"].map((option) => <option key={option} value={option} />)}
//               </datalist>
//             </div>
//           ))}

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

//above working correct



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
    funding_raised: "", // Changed to string for radio buttons
    funding_rounds: "",
    latest_rounds: "",
    primary_business_model: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, funding_raised: e.target.value });
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
        alert("Register successful! Redirecting to Landing Page");
        router.push("/registration/status");
      } else {
        alert(data.error || "Register failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error signing up. Please try again.");
    }
  };

  const placeholders = {
    company_name: "Ex: ABC",
    company_phone: "Ex: +91 98765 43210",
    industry: "Select an industry Ex: Technology,Sports,etc",
    sector: "Select a sector Ex: E-commerce,Health-Tech,etc",
    company_size: "Ex: 50-100 employees",
    about_company: "Ex: We specialize in AI-driven solutions.",
    company_work_email: "Ex: contact@company.com",
    company_website: "Ex: https://www.company.com",
    company_linkedin: "Ex: https://linkedin.com/company/abc-corp",
    project_description: "Ex: AI-powered hiring platform",
    total_funding_raised: "Ex: 1000000 (if applicable)",
    designation: "Select your designation",
    personal_contact: "Ex: +91 99887 77665",
    personal_linkedin: "Ex: https://linkedin.com/in/johndoe",
    funding_rounds: "Ex: 2 (if applicable)",
    latest_rounds: "Select latest funding round",
    primary_business_model: "Select a business model",
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-r from-purple-200 to-blue-400">
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <label className="text-sm font-semibold text-gray-600">Startup Registration</label>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Company Signup</h2>
        <p className="text-gray-500 mb-5">Create Your Company Account</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          {Object.keys(formData).map((key) => {
            if (key === "funding_raised") {
              return (
                <div key={key} className="text-left">
                  <label className="block font-medium text-gray-700 mb-1">
                    Have you raised any funding?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="funding_raised"
                        value="Yes"
                        checked={formData.funding_raised === "Yes"}
                        onChange={handleRadioChange}
                        className="form-radio text-indigo-600"
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="funding_raised"
                        value="No"
                        checked={formData.funding_raised === "No"}
                        onChange={handleRadioChange}
                        className="form-radio text-indigo-600"
                      />
                      No
                    </label>
                  </div>
                </div>
              );
            }

            return (
              <div key={key} className="text-left">
                <label className="block font-medium text-gray-700 mb-1">
                  {key.replace("_", " ").toUpperCase()}
                </label>
                <input
                  name={key}
                  list={key + "-options"}
                  value={formData[key]}
                  onChange={handleChange}
                  placeholder={placeholders[key] || `Enter ${key.replace("_", " ")}`}
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
                  {key === "latest_rounds" &&
                    ["Pre-seed", "Seed", "Series A", "Series B"].map((option) => (
                      <option key={option} value={option} />
                    ))}
                  {key === "designation" && ["HR", "CEO", "Other"].map((option) => <option key={option} value={option} />)}
                </datalist>
              </div>
            );
          })}

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
