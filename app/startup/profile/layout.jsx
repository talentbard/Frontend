import Navbar from "./navbar/page"; // Adjust if your path differs

export default function ProfileLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <div className="w-64 bg-gray-800 text-white fixed h-full">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-4 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
