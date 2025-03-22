import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-700 pb-6">
        
        <div>
          <h2 className="text-lg font-bold">TalentBard</h2>
          <p className="text-gray-400 text-sm mt-2">
            Building the future of freelance work
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li><Link href="/" className="hover:text-gray-200">About</Link></li>
            <li><a href="mailto:akshay@talentbard.com" className="hover:text-gray-200">Contact</a></li>

            <li><Link href="/privacy-policy" className="hover:text-gray-200">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gray-200">Terms</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Connect</h3>
          <div className="flex space-x-4 mt-2 text-gray-400">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaLinkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaTwitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <p className="text-gray-400 text-sm mt-2">akshay@talentbard.com</p>
          <p className="text-gray-400 text-sm">+91 7981347373</p>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="text-center text-gray-500 text-xs mt-4">
        © 2025 TalentBard. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
