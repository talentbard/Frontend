import Navbar from "./navbar/page";
import About from "./about/page";

export default function Page() {
  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <div className="w-64 bg-gray-800 text-white fixed h-full">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-4">
        <About />
      </div>
    </div>
  );
}
