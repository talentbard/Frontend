
// "use client";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// const NavBar = () => {
//   const pathname = usePathname();

//   const menuItems = [
//     { name: "Personal Information", path: "/registration/personal-info" },
//     { name: "Skills & Expertise", path: "/registration/skills" },
//     { name: "Education", path: "/registration/education" },
//     { name: "Work Experience", path: "/registration/work-experience" },
//     { name: "Portfolio & References", path: "/registration/portfolio" },
//     { name: "Preferred Work Terms", path: "/registration/work-terms" },
//     { name: "Language Proficiency", path: "/registration/language" },
//     { name: "Job Preferences", path: "/registration/job-preferences" },
//   ];

//   return (
//     <aside className="w-1/4 bg-blue-600 text-white p-6 space-y-4 fixed h-full">
//       <h2 className="text-2xl font-bold">TalentBard</h2>
//       <nav className="space-y-4">
//         {menuItems.map((item) => (
//           <Link
//             key={item.path}
//             href={item.path}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md transition ${
//               pathname === item.path
//                 ? "bg-white text-blue-600 font-bold"
//                 : "hover:bg-blue-500"
//             }`}
//           >
//             <span className="text-lg">✔</span>
//             <span>{item.name}</span>
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default NavBar;



"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

const NavBar = ({ userId, accessToken, refreshToken, isFreelancer }) => {
  const pathname = usePathname();
  const router = useRouter();
  
  const [statusId, setStatusId] = useState(null);

  const menuItems = [
    { name: "Personal Information", path: "/registration/personal-info" },
    { name: "Skills & Expertise", path: "/registration/skills" },
    { name: "Education", path: "/registration/education" },
    { name: "Work Experience", path: "/registration/work-experience" },
    { name: "Portfolio & References", path: "/registration/portfolio" },
    { name: "Preferred Work Terms", path: "/registration/work-terms" },
    { name: "Language Proficiency", path: "/registration/language" },
    { name: "Job Preferences", path: "/registration/job-preferences" },
    { name: "Quiz", path: "/quizz" },
    { name: "Assignment", path: "/assignment" },
    { name: "Interview Schedule", path: "/interview_schedule" },
    { name: "Status", path: "/registration/status" },
  ];

  // Fetch the user's registration status from the API
  useEffect(() => {
    const fetchStatus = async () => {
      if (!accessToken) return;
      
      try {
        const response = await axios.post(
          "https://backend.talentbard.com/talent/talent_registration_status/",
          {
            auth_params: { user_id: userId, refresh_token: refreshToken },
            payload: { user_id: userId },
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Accesstoken": accessToken,
            },
          }
        );

        const data = response.data;

        if (data.payload && Array.isArray(data.payload) && data.payload.length > 0) {
          setStatusId(data.payload[0].status_id);
        }
      } catch (err) {
        console.error("❌ Error fetching registration status:", err);
      }
    };

    fetchStatus();
  }, [userId, accessToken, refreshToken]);

  // Redirect if the user tries to access a step they haven't reached
  useEffect(() => {
    if (statusId !== null) {
      const currentIndex = menuItems.findIndex((item) => item.path === pathname);
      if (currentIndex > statusId) {
        router.push(menuItems[statusId].path);
      }
    }
  }, [pathname, statusId]);

  return (
    <aside className="w-1/4 bg-blue-600 text-white p-6 space-y-4 fixed h-full">
      <h2 className="text-2xl font-bold">TalentBard</h2>
      <nav className="space-y-4">
        {menuItems.map((item, index) => (
          <button
            key={item.path}
            onClick={() => {
              if (index <= statusId) router.push(item.path);
            }}
            disabled={index > statusId}
            className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md transition ${
              pathname === item.path
                ? "bg-white text-blue-600 font-bold"
                : index > statusId
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-500"
            }`}
          >
            <span className="text-lg">{index < statusId ? "✔" : "➤"}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default NavBar;
