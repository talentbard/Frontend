"use client";  // This makes sure that this component is treated as a client component

import React from "react";
import { MessageCircle, FileText, CreditCard, Mail, Folder, User, FileTerminalIcon } from "lucide-react";  // Importing the icons
import NavItem from "./NavItemProfile";  // Import the NavItem component

export default function Navbar() {
  return (
    <div className="p-4 flex flex-col justify-between h-full">
      <div className="space-y-1">
        <h1 className="text-lg font-bold mb-4">Company</h1>
        
        {/* Pass the route prop to NavItem for navigation */}
        <NavItem icon={User} label="Talent Pool" route="/startup/profile/about" />
        <NavItem icon={MessageCircle} label="Chat" route="/startup/profile/chat" />
        <NavItem icon={FileText} label="Scope" route="/startup/profile/scope" />
        <NavItem icon={CreditCard} label="Payments" route="/startup/profile/payment" />
        <NavItem icon={Mail} label="Invites" route="/startup/profile/invites" />
        

        <div className="mt-4">
          <p className="text-xs font-semibold text-gray-500 pl-1">Projects</p>
          <NavItem icon={Folder} label="Project Name" route="/startup/profile/project-name" />
          <NavItem icon={Folder} label="All Projects" route="/startup/profile/all-projects" />
          <NavItem icon={FileTerminalIcon} label="Project Status" route="/startup/profile/project-status" />
        </div>
      </div>

      <div className="pt-4">
        <NavItem icon={User} label="Account" route="/startup/profile/account" />
      </div>
    </div>
  );
}
