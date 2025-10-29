import React from "react";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { tutorData } from "@/data/data";
import { IoIosAddCircleOutline } from "react-icons/io";

const page = () => {
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
              <button className="text-[#5C5E65] text-sm border border-[#D9D9D9] py-2 px-6 rounded-3xl flex justify-center items-center gap-1 cursor-pointer">
                <IoIosAddCircleOutline size={25} /> Add student
              </button>
            </span>
            {tutorData.length === 0 ? (
              <p className="mt-10 text-[#5C5E65]">No assessments available</p>
            ) : (
              tutorData.map((data) => (
                <table key={data.id} className="w-full">
                  <tbody>
                    <tr className="border-b-4 border-[#F4F4F4]  h-28">
                      <td>
                        <span className="flex items-center gap-5">
                          <img src="#" alt="cup" className="ml-10" />
                          <div>
                            <h3 className="text-[#666979] text-lg">
                              {data.name}
                            </h3>
                            <p className="text-[#8E91A1] text-sm">
                              {data.course}
                            </p>
                          </div>
                        </span>
                      </td>
                      <td className="text-right">
                        <span className="flex justify-end gap-14">
                          <p className="text-[#059669] text-base">
                            {data.grade}
                          </p>
                          <button className="mr-10">:</button>
                        </span>
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
