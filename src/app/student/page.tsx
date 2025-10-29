"use client";

import { useState } from "react";
import QuickStats from "@/components/shared/Stats";
import { CiSliderHorizontal } from "react-icons/ci";

const StudentPage = () => {
  const [activeTab, setActiveTab] = useState("My Classes");

  const changeActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex-1 pr-10 mt-3">
          <h2 className="text-xl font-semibold ">Welcome, John Doe</h2>
          <p className="text-[#8E91A1]">
            Manage your classes and activities smoothly
          </p>
          <div className="mt-15">
            <article className="max-w-8xl flex gap-11">
              <span className="flex flex-1 flex-col gap-3 h-fit rounded-b-3xl shadow-[0px_6px_12px_0px_#BDBDBD1A,0px_23px_23px_0px_#BDBDBD17,0px_142px_40px_0px_#BDBDBD00]">
                <div className="bg-[#F4F4F4] flex justify-between items-center py-2 px-6 h-14 rounded-t-3xl">
                  <h2>Recent Activity</h2>
                  <CiSliderHorizontal size={25} className="cursor-pointer" />
                </div>
                <div className="py-4 flex flex-col gap-3 px-5 pb-5">
                  <h3 className="text-base text-[#666979]">
                    React Fundamentals
                  </h3>
                  <span className="flex justify-between">
                    <p className="text-sm text-[#8E91A1]">
                      from REACT 001 in "React project"
                    </p>
                    <p className="text-xs text-[#8E91A1]">2 minutes ago</p>
                  </span>
                  <hr />
                </div>
                <div className="py-4 flex flex-col gap-3 px-5 pb-5">
                  <h3 className="text-base text-[#666979]">
                    React Fundamentals
                  </h3>
                  <span className="flex justify-between">
                    <p className="text-sm text-[#8E91A1]">
                      from REACT 001 in "React project"
                    </p>
                    <p className="text-xs text-[#8E91A1]">2 minutes ago</p>
                  </span>
                  <hr />
                </div>
                <div className="py-4 flex flex-col gap-3 px-5 pb-5">
                  <h3 className="text-base text-[#666979]">
                    React Fundamentals
                  </h3>
                  <span className="flex justify-between">
                    <p className="text-sm text-[#8E91A1]">
                      from REACT 001 in "React project"
                    </p>
                    <p className="text-xs text-[#8E91A1]">2 minutes ago</p>
                  </span>
                  <hr />
                </div>
                <div className="py-4 flex flex-col gap-3 px-5 pb-5">
                  <h3 className="text-base text-[#666979]">
                    React Fundamentals
                  </h3>
                  <span className="flex justify-between">
                    <p className="text-sm text-[#8E91A1]">
                      from REACT 001 in "React project"
                    </p>
                    <p className="text-xs text-[#8E91A1]">2 minutes ago</p>
                  </span>
                  <hr />
                </div>
              </span>
            </article>
          </div>
        </div>
        <div>
          <QuickStats />
        </div>
      </div>
    </>
  );
};

export default StudentPage;
