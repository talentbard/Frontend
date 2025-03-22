"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiLogOut, FiMenu, FiX } from "react-icons/fi"; // Icons

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    setIsLoggedIn(!!user_id);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white shadow-md z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">TalentBard</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li>
          <Link href="/freelance">
            <span className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white rounded-md cursor-pointer">
              Why TalentBard?
            </span>
          </Link>
        </li>
        <li>
          <Link href="/startup">
            <span className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white rounded-md cursor-pointer">
              For Startups
            </span>
          </Link>
        </li>
        <li>
          <Link href="/freelance">
            <span className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white rounded-md cursor-pointer">
              For Talent
            </span>
          </Link>
        </li>
      </ul>

      {/* Right Side Buttons (Ensure Proper Visibility) */}
      <div className="hidden md:flex space-x-4">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-black border border-gray-700 rounded-md hover:text-white hover:bg-red-600"
          >
            <FiLogOut size={20} />
            Sign Out
          </button>
        ) : (
          <>
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
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link href="/freelance" onClick={() => setMenuOpen(false)}>
            <span className="text-black hover:text-blue-600">Why TalentBard?</span>
          </Link>
          <Link href="/startup" onClick={() => setMenuOpen(false)}>
            <span className="text-black hover:text-blue-600">For Startups</span>
          </Link>
          <Link href="/freelance" onClick={() => setMenuOpen(false)}>
            <span className="text-black hover:text-blue-600">For Talent</span>
          </Link>
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 text-black border border-gray-700 px-4 py-2 rounded-md hover:text-white hover:bg-red-600"
            >
              <FiLogOut size={20} />
              Sign Out
            </button>
          ) : (
            <>
              <Link href="/signup" onClick={() => setMenuOpen(false)}>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Join Now
                </button>
              </Link>
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                <button className="px-4 py-2 text-black border border-gray-700 rounded-md hover:text-white hover:bg-blue-600">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
