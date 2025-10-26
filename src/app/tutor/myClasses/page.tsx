"use client";
import React from "react";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import Link from "next/link";

type TabType = "tab1" | "tab2" | "tab3";
type Student = {
  id: string;
  name: string;
  email: string;
  grade: string;
  status: string;
};

const page = () => {
  const [activeTab, setActiveTab] = useState<TabType>("tab1");

  const tabClasses = (tab: TabType) =>
    `px-4 py-2 transition-colors ${
      activeTab === tab
        ? "text-blue-500 border-b border-b-blue-500"
        : "text-gray-800 hover:text-blue-400"
    }`;

  const pathName = usePathname();

  return (
    <div className="flex gap-9">
      <Sidebar />
      <div className="flex-1">
        <Navbar isTutor={true} />
        <main>
          <div className="w-full mt-8 pr-10">
            {/* Tabs */}
            <div className="flex justify-between border-b border-gray-300">
              <span className="flex space-x-2">
                <Link
                  href={"/tutor/students"}
                  className={
                    pathName === "/tutor/students"
                      ? "text-[#029BD9] border-b border-b-[#029BD9]"
                      : "text-[#666979]"
                  }
                >
                  Students
                </Link>
                <Link href={"/tutor/assesment"}>Assesments</Link>
                <Link href={"/tutor/leaderboard"}>Leaderboard</Link>
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
              {activeTab === "tab1" && <div></div>}
              {activeTab === "tab2" && (
                <section>this is content for tab 2</section>
              )}
              {activeTab === "tab3" && (
                <section>This is content for Tab 3.</section>
              )}
            </div>

            <section>
              <span className="flex flex-col flex-1/5 gap-6">
                <span className="w-[10%] flex flex-col gap-3">
                  <h2 className="text-[#666979] text-lg">My Classes</h2>
                  <hr />
                </span>
                <div className="h-52 bg-[#F4F4F4] w-full rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <h2 className="text-[#303240] font-semibold text-xl">
                      React fundamentals
                    </h2>
                    <p className="bg-[#CEF6DF] border-[#CBEED9] text-[#059669] text-xs px-4 py-2 rounded-2xl">
                      1 new submission
                    </p>
                  </div>
                  <ul>
                    <li className="text-[#666979] text-sm list-disc ml-8">
                      15 students
                    </li>
                    <li className="text-[#666979] text-sm list-disc ml-8">
                      3 assesments
                    </li>
                  </ul>
                  <button className="cursor-pointer w-36 bg-[#1E1F27] text-white rounded-3xl py-3 px-6">
                    View Class
                  </button>
                </div>
                <div className="h-52 bg-[#F4F4F4] w-full rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <h2 className="text-[#303240] font-semibold text-xl">
                      React fundamentals
                    </h2>
                    <p className="bg-[#CEF6DF] border-[#CBEED9] text-[#059669] text-xs px-4 py-2 rounded-2xl">
                      1 new submission
                    </p>
                  </div>
                  <ul>
                    <li className="text-[#666979] text-sm list-disc ml-8">
                      15 students
                    </li>
                    <li className="text-[#666979] text-sm list-disc ml-8">
                      3 assesments
                    </li>
                  </ul>
                  <button className="cursor-pointer w-36 bg-[#1E1F27] text-white rounded-3xl py-3 px-6">
                    View Class
                  </button>
                </div>
                <div className="h-52 bg-[#F4F4F4] w-full rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <h2 className="text-[#303240] font-semibold text-xl">
                      React fundamentals
                    </h2>
                    <p className="bg-[#CEF6DF] border-[#CBEED9] text-[#059669] text-xs px-4 py-2 rounded-2xl">
                      1 new submission
                    </p>
                  </div>
                  <ul>
                    <li className="text-[#666979] text-sm list-disc ml-8">
                      15 students
                    </li>
                    <li className="text-[#666979] text-sm list-disc ml-8">
                      3 assesments
                    </li>
                  </ul>
                  <button className="cursor-pointer w-36 bg-[#1E1F27] text-white rounded-3xl py-3 px-6">
                    View Class
                  </button>
                </div>
              </span>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
