"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Personal Information", path: "/registration/personal-info" },
    { name: "Skills & Expertise", path: "/registration/skills" },
    { name: "Education", path: "/registration/education" },
    { name: "Work Experience", path: "/registration/work-experience" },
    { name: "Portfolio & References", path: "/registration/portfolio" },
    { name: "Preferred Work Terms", path: "/registration/work-terms" },
    { name: "Language Proficiency", path: "/registration/language" },
    { name: "Job Preferences", path: "/registration/job-preferences" },
  ];

  return (
    <aside className="w-1/4 bg-blue-600 text-white p-6 space-y-4 fixed h-full">
      <h2 className="text-2xl font-bold">TalentBard</h2>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md transition ${
              pathname === item.path
                ? "bg-white text-blue-600 font-bold"
                : "hover:bg-blue-500"
            }`}
          >
            <span className="text-lg">✔</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default NavBar;
