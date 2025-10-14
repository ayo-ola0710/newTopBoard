"use client";

import { useState } from "react";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import QuickStats from "@/components/shared/Stats";
import Leaderboard from "@/components/shared/LeaderBoard";

const StudentPage = () => {
  const [activeTab, setActiveTab] = useState("My Classes");

  const changeActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "My Classes":
        return (
          <div className="mt-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">My Classes</h3>
              <p className="text-gray-600">
                Your enrolled classes will appear here.
              </p>
              {/* Add classes content here */}
            </div>
          </div>
        );
      case "Assessments":
        return (
          <div className="mt-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Assessments</h3>
              <p className="text-gray-600">
                Your assessments will appear here.
              </p>
              {/* Add assessments content here */}
            </div>
          </div>
        );
      case "Leaderboard":
        return (
          <div className="mt-6">
            <div className="bg-white rounded-lg shadow p-6">
              <Leaderboard />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-55">
        <Navbar isTutor={false} />
        <div className="px-6 pt-2 flex justify-between">
          <div className="flex-1 pr-10">
            <h2 className="text-xl font-semibold ">Welcome, John Doe</h2>
            <p className="text-[#8E91A1]">
              Manage your classes and activities smoothly
            </p>
            <div>
              <div
                className="flex items-center justify-between w-full border-b border-[#F4F4F4] pb-2 mt-4 "
                id="nav"
              >
                <div className="flex gap-8 mt-1">
                  <button
                    onClick={() => changeActiveTab("My Classes")}
                    className={
                      activeTab === "My Classes"
                        ? "text-[#029BD9] border-b-[2px] border-[#029BD9] text-[14px] pb-2 px-1"
                        : "text-[#666979] text-[14px] pb-2 px-1 hover:text-[#029BD9] transition-colors"
                    }
                  >
                    My Classes
                  </button>
                  <button
                    onClick={() => changeActiveTab("Assessments")}
                    className={
                      activeTab === "Assessments"
                        ? "text-[#029BD9] border-b-[2px] border-[#029BD9] text-[14px] pb-2 px-1"
                        : "text-[#666979] text-[14px] pb-2 px-1 hover:text-[#029BD9] transition-colors"
                    }
                  >
                    Assessments (1)
                  </button>
                  <button
                    onClick={() => changeActiveTab("Leaderboard")}
                    className={
                      activeTab === "Leaderboard"
                        ? "text-[#029BD9] border-b-[2px] border-[#029BD9] text-[14px] pb-2 px-1"
                        : "text-[#666979] text-[14px] pb-2 px-1 hover:text-[#029BD9] transition-colors"
                    }
                  >
                    Leaderboard
                  </button>
                </div>

                <div className="flex items-center gap-3 text-[#848797] text-sm">
                  <span>Class</span>
                  <div className="px-0.5 py-2 rounded-full bg-gray-400"></div>
                  <span className="text-[#666979] font-medium">
                    React Fundamentals
                  </span>
                </div>
              </div>
              <div>{renderTabContent()}</div>
            </div>
          </div>
          <div>
            <QuickStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
