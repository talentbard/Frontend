"use client"
import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 md:px-10 lg:px-24 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold">TalentBard</h2>
          <p className="text-gray-400 text-sm mt-2">
            Experience the Future of Startup Work
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li>
              <Link href="/" className="hover:text-gray-200">About</Link>
            </li>
            <li>
              <Link href="/terms_condition/privacy_policy" className="hover:text-gray-200">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms_condition/terms_and_conditions" className="hover:text-gray-200">Site TOS</Link>
            </li>
            <li>
              <Link href="/terms_condition/client_terms" className="hover:text-gray-200">Client TOS</Link>
            </li>
            <li>
              <Link href="/terms_condition/talent_terms" className="hover:text-gray-200">Talent TOS</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-sm font-semibold">Connect</h3>
          <div className="flex space-x-4 mt-3 text-gray-400">
            <a
              href="https://www.linkedin.com/company/talentbard/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <p className="text-gray-400 text-sm mt-2">akshay@talentbard.com</p>
          <p className="text-gray-400 text-sm">+91 7981347373</p>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} TalentBard. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
