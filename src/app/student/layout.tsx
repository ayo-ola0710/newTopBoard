import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import QuickStats from "@/components/shared/Stats";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar isTutor={false} />
        <div className="px-6 pt-2">{children}</div>
      </div>
    </div>
  );
}
