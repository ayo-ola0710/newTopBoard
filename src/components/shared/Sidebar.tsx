import { Home, BookOpen, FileText, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen fixed pl-5  w-55 bg-[#1E1F27] text-gray-200 rounded-br-4xl">
      {/* Logo */}
      <div className="flex items-center gap-2 p-4 border-b border-gray-800">
        <img src="/icons/logo.png" alt="Logo" className="w-8 h-8" />
        <span className="font-semibold">TopBoard</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col mt-4 gap-1 space-y-10 text-lg">
        <div className="flex items-center gap-2 bg-white text-gray-900 rounded-l-full px-4 py-2">
          <Home size={18} />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded-l-full">
          <BookOpen size={18} />
          <span>My Classes</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded-l-full">
          <FileText size={18} />
          <span>Assessments</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 mt-auto hover:bg-gray-800 rounded-l-full">
          <LogOut size={18} />
          <span>Log Out</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
