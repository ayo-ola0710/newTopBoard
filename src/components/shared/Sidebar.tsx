"use client";

import { Home, BookOpen, FileText, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineLeaderboard } from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
  const pathName = usePathname();

  const tabClasses = (route: string) =>
    `flex items-center gap-2 rounded-l-full px-4 py-2 transition-colors ${
      pathName === route
        ? "bg-white text-gray-900"
        : "bg-[#1E1F27] hover:bg-gray-800 text-gray-300"
    }`;

  return (
    <div className="h-[753px] sticky top-0 left-0 pl-5 w-60 bg-[#1E1F27] text-gray-200 rounded-br-4xl">
      {/* Logo */}
      <div className="flex items-center gap-2 p-4 border-b border-gray-800">
        <img src="/icons/logo.png" alt="Logo" className="w-8 h-8" />
        <span className="font-semibold">TopBoard</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col mt-4 space-y-6 text-lg">
        <Link
          href={pathName.startsWith("/tutor") ? "/tutor" : "/student"}
          className={tabClasses(
            pathName.startsWith("/tutor") ? "/tutor" : "/student"
          )}
        >
          <Home size={18} />
          <span>Home</span>
        </Link>

        <Link
          href={
            pathName.startsWith("/tutor")
              ? "/tutor/myClasses"
              : "/student/myClasses"
          }
          className={tabClasses(
            pathName.startsWith("/tutor")
              ? "/tutor/myClasses"
              : "/student/myClasses"
          )}
        >
          <BookOpen size={18} />
          <span>My Classes</span>
        </Link>

        <Link
          href={
            pathName.startsWith("/tutor")
              ? "/tutor/assessments"
              : "/student/assessments"
          }
          className={tabClasses(
            pathName.startsWith("/tutor")
              ? "/tutor/assessments"
              : "/student/assessments"
          )}
        >
          <FileText size={18} />
          <span>Assessments</span>
        </Link>

        <Link
          href={
            pathName.startsWith("/tutor")
              ? "/tutor/leaderboard"
              : "/student/leaderboard"
          }
          className={tabClasses(
            pathName.startsWith("/tutor")
              ? "/tutor/leaderboard"
              : "/student/leaderboard"
          )}
        >
          <MdOutlineLeaderboard size={18} />
          <span>Leaderboard</span>
        </Link>

        <button
          className="flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-l-full"
          onClick={() => console.log("logout")}
        >
          <LogOut size={18} />
          <span>Log Out</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
