"use client";
import NavBar from "./Navbar"; // Left Sidebar
import Navbar from "../components/Navbar"; // Top Navbar

export default function Layout({ children }) {
  return (
    <div className="flex mt-3">
      {/* Left Sidebar */}
      <NavBar />

      {/* Main Content Area */}
      <div className="ml-[25%] w-full bg">
        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="mt-16 p-8">{children}</main>
      </div>
    </div>
  );
}
