"use client";  // ✅ Add this at the top

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-white shadow-md z-50">
      <h1 className="text-2xl font-bold text-blue-600">TalentBard</h1>
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li>
          <Link href="/why-talentbard">
            <span className="px-4 py-2 text-black hover:border-gray-700 rounded-md hover:text-white hover:bg-blue-600 cursor-pointer">
              Why TalentBard?
            </span>
          </Link>
        </li>
        <li>
          <Link href="/startup">
            <span className="px-4 py-2 text-black hover:border-gray-700 rounded-md hover:text-white hover:bg-blue-600 cursor-pointer">
              For Startups
            </span>
          </Link>
        </li>
        <li>
          <Link href="/for-talent">
            <span className="px-4 py-2 text-black hover:border-gray-700 rounded-md hover:text-white hover:bg-blue-600 cursor-pointer">
              For Talent
            </span>
          </Link>
        </li>
      </ul>
      <div className="space-x-4">
        <Link href="/signup">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Join Now
          </button>
        </Link>
        <Link href="/login">
          <button className="px-4 py-2 text-black border border-gray-700 rounded-md hover:text-white hover:bg-blue-600">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
