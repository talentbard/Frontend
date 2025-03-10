"use client";

import NavBar from "./Navbar";  // ✅ Ensure the import path is correct

export default function RegistrationLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navbar */}
      <NavBar />

      {/* Main Content - Adjusted for Sidebar */}
      <div className="flex-1 p-10 ml-64">{children}</div> 
    </div>
  );
}
