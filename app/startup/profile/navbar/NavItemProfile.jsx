"use client"; // Make this a client component to allow passing icons
import { useRouter } from "next/navigation"; // Importing useRouter from Next.js

const NavItem = ({ icon: Icon, label, route }) => {
  const router = useRouter();  // Initialize useRouter to handle routing

  const handleClick = () => {
    router.push(route);  // Navigate to the specified route when a NavItem is clicked
  };

  return (
    <div
      className="flex items-center gap-2 p-3 hover:bg-gray-100 hover:text-black rounded cursor-pointer"
      onClick={handleClick}  // Add the onClick handler for navigation
    >
      <Icon size={18} />  {/* Render the passed icon */}
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default NavItem;
