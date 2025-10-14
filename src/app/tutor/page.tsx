import React from "react";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-55">
        <Navbar isTutor={true} />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Tutor Dashboard</h2>
          {/* Add tutor-specific content here */}
        </div>
      </div>
    </div>
  );
};

export default page;
