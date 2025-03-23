"use client";
import Navbar from "../components/Navbar"; // Top Navbar
import Footer from "../components/Footer";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8">{children}</main>
      <Footer></Footer>
    </div>
  );
}
