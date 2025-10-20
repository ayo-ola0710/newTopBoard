"use client";
import React from "react";
import { useState } from "react";
import StudentTab from "@/components/tutor/StudentTab";
import TutorAssessments from "@/components/tutor/Assesment";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
// import TutorAssessments from "./Assessments";
import { VscSettings } from "react-icons/vsc";
// import { AddStudentModal } from "./AddStudentModal";

type TabType = "tab1" | "tab2" | "tab3";
type Student = {
  id: string;
  name: string;
  email: string;
  grade: string;
  status: string;
};

const TutorMyClasses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("tab1");

  const tabClasses = (tab: TabType) =>
    `px-4 py-2 transition-colors ${
      activeTab === tab
        ? "text-blue-500 border-b border-b-blue-500"
        : "text-gray-800 hover:text-blue-400"
    }`;

  return (
    <>
      <div className="flex gap-9">
        <Sidebar />
        <div className="flex-1">
          <Navbar isTutor={true} />

          <div className="w-full mt-8">
            {/* Tabs */}
            <div className="flex justify-between border-b border-gray-300">
              <span className="flex space-x-2">
                <button
                  onClick={() => setActiveTab("tab1")}
                  className={tabClasses("tab1")}
                >
                  Students
                </button>
                <button
                  onClick={() => setActiveTab("tab2")}
                  className={tabClasses("tab2")}
                >
                  Assesments
                </button>
                <button
                  onClick={() => setActiveTab("tab3")}
                  className={tabClasses("tab3")}
                >
                  Leaderboard
                </button>
              </span>

              {activeTab === "tab1" && (
                <span className="flex">
                  <p className="text-gray-500">class ||</p>
                  <p>React Fundamentals</p>
                </span>
              )}
              {activeTab === "tab2" && (
                <span className="flex gap-8">
                  <button className="flex justify-center items-center gap-2 cursor-pointer mb-2">
                    <VscSettings />
                    Filter
                  </button>
                  <button className="bg-[#029BD9] text-white py-2 px-4 rounded-3xl cursor-pointer mb-2">
                    Create New Assesment
                  </button>
                </span>
              )}
            </div>

            {/* Tab Content */}
            <div className="">
              {activeTab === "tab1" && <StudentTab students={[]} />}
              {activeTab === "tab2" && (
                <section>
                  <TutorAssessments assessments={[]} />
                </section>
              )}
              {activeTab === "tab3" && (
                <section>This is content for Tab 3.</section>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorMyClasses;
