import React from "react";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { CiSliderHorizontal } from "react-icons/ci";

const page = () => {
  return (
    <div className="flex gap-9">
      <Sidebar />
      <div className="flex-1">
        <Navbar isTutor={true} />
        <main className="p-6 max-w-8xl mr-9">
          <section>
            <article className="flex gap-5 flex-col mb-20 max-w-8xl">
              <div>
                <h2 className="text-lg font-medium mb-4">Welcome, User</h2>
                <p className="text-sm text-[#8E91A1]">
                  Manage your students assesments and activities smoothly.
                </p>
              </div>
              <span className="flex justify-between gap-4 max-w-8xl">
                <div className="flex-1 bg-[#F4F4F4] h-[115px] rounded-3xl flex flex-col justify-center items-center p-6">
                  <h2 className="text-[#303240] text-3xl font-bold">3</h2>
                  <p className="text-[#666979] text-sm">Active Classes</p>
                </div>
                <div className="flex-1 bg-[#F4F4F4] h-[115px] rounded-3xl flex flex-col justify-center items-center p-6">
                  <h2 className="text-[#303240] text-3xl font-bold">47</h2>
                  <p className="text-[#666979] text-sm">Total Students</p>
                </div>
                <div className="flex-1 bg-[#F4F4F4] h-[115px] rounded-3xl flex flex-col justify-center items-center p-6">
                  <h2 className="text-[#303240] text-3xl font-bold">12</h2>
                  <p className="text-[#666979] text-sm">Active Assessments</p>
                </div>
                <div className="flex-1 bg-[#F4F4F4] h-[115px] rounded-3xl flex flex-col justify-center items-center p-6">
                  <h2 className="text-[#303240] text-3xl font-bold">89</h2>
                  <p className="text-[#666979] text-sm">Pending Grades</p>
                </div>
              </span>
              <span className="flex justify-between items-center gap-2 max-w-8xl text-white">
                <p className="text-black">Quick Action:</p>
                <button className="cursor-pointer flex-1 h-16 rounded-4xl px-4 py-5 bg-[#029BD9]">
                  Create new class
                </button>
                <button className="cursor-pointer flex-1 h-16 rounded-4xl px-4 py-5 bg-[#1E1F27]">
                  Create new class
                </button>
                <button className="cursor-pointer flex-1 h-16 rounded-4xl px-4 py-5 bg-[#1E1F27]">
                  Create new class
                </button>
              </span>
            </article>
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
          </section>
        </main>
      </div>
    </div>
  );
};

export default page;
