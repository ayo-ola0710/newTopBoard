"use client";
import React from "react";
import { useState } from "react";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import GradingOverlay from "@/components/tutor/GradingOverlay";
import AddStudent from "@/components/tutor/AddStudent";
import { submissionData } from "@/data/data";
import { CiSliderHorizontal } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar isTutor={true} />
        <section className="mx-10 flex flex-col gap-14">
          <article className="flex justify-between my-5 gap-4">
            <div className="bg-[#F4F4F4] space-y-8 rounded-3xl w-72 h-36 flex flex-1 flex-col justify-center items-center">
              <h2 className="text-4xl font-bold">React 101</h2>
              <p className="text-gray-500">Class code</p>
            </div>
            <div className="bg-[#F4F4F4] space-y-8 rounded-3xl w-72 h-36 flex flex-1 flex-col justify-center items-center">
              <h2 className="text-4xl font-bold">0</h2>
              <p className="text-gray-500">Total Number of students</p>
            </div>
            <div className="bg-[#F4F4F4] space-y-8 rounded-3xl w-72 h-36 flex flex-1 flex-col justify-center items-center">
              <h2 className="text-4xl font-bold">0</h2>
              <p className="text-gray-500">Classes created</p>
            </div>
            <div className="bg-[#F4F4F4] space-y-8 rounded-3xl w-72 h-36 flex flex-1 flex-col justify-center items-center">
              <h2 className="text-4xl font-bold">0</h2>
              <p className="text-gray-500">Classes created</p>
            </div>
          </article>
          <article className="rounded-b-3xl shadow-[0px_6px_12px_0px_#BDBDBD1A,0px_23px_23px_0px_#BDBDBD17,0px_142px_40px_0px_#BDBDBD00] w-[80%]">
            <span className="w-full px-10 flex justify-between">
              <h2 className="text-[#8E91A1] text-lg">Students list</h2>
              <button
                className="text-[#5C5E65] text-sm border border-[#D9D9D9] py-2 px-6 rounded-3xl flex justify-center items-center gap-1 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <CiSliderHorizontal size={25} /> Add student
              </button>
              {isOpen && (
                <AddStudent
                  isModalOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              )}
            </span>
            {submissionData.length === 0 ? (
              <p>No submissions yet</p>
            ) : (
              submissionData.map((data) => (
                <table key={data.id} className="w-full">
                  <tbody>
                    <tr className="border-b-4 border-[#F4F4F4] h-28 flex justify-between items-center">
                      <td>
                        <span className="flex items-center gap-5 ml-10">
                          <p className="border-8 border-[#F4F4F4] rounded-full w-14 h-14 flex justify-center items-center">
                            {data.id}
                          </p>
                          <div>
                            <h3 className="text-[#666979] text-lg">
                              {data.name}
                            </h3>
                            <span className="text-[#666979] text-sm flex gap-2">
                              <p className="border-r-4 border-[#F4F4F4] text-[#848797] w-fit pr-1">
                                class
                              </p>
                              <p>
                                {data.date} {data.time}
                              </p>
                            </span>
                          </div>
                        </span>
                      </td>
                      <td className="text-right flex justify-end">
                        {data.hasGraded === true ? (
                          <span className="flex flex-row justify-center items-center text-right h-11 mr-5 bg-[#1E1F27] text-white w-40 py-3 rounded-3xl">
                            <p className="text-white text-base">
                              Graded: {data.grade}
                            </p>
                          </span>
                        ) : (
                          <span className="mr-5">
                            <button
                              className="w-40 h-11 bg-[#029BD9] text-white rounded-3xl"
                              onClick={() => setIsOpen(true)}
                            >
                              Grade Now
                            </button>{" "}
                            {isOpen && (
                              <GradingOverlay
                                isOpen={isOpen}
                                onClose={() => setIsOpen(false)}
                              />
                            )}
                          </span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))
            )}
          </article>
        </section>
      </div>
    </div>
  );
};

export default page;
