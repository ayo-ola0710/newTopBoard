"use client";

import QuickStats from "@/components/shared/Stats";
import { assessments } from "@/data/data";
import { BsThreeDotsVertical } from "react-icons/bs";

const StudentAssesment = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex-1 pr-10">
          <h2 className="text-xl font-semibold ">Welcome, John Doe</h2>
          <p className="text-[#8E91A1]">
            Manage your classes and activities smoothly
          </p>
          <div className="pt-10">
            <div className="flex items-center justify-between border-b  pb-2">
              <h3 className="text-4xl font-medium">Assesments</h3>
              <span className="bg-gray-200 px-4 py-1 rounded-md">filter</span>
            </div>
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {assessments.length === 0 ? (
                <p className="mt-10 text-[#5C5E65]">No assessments available</p>
              ) : (
                assessments.map((assessment) => (
                  <article
                    key={assessment.id}
                    className="space-y-8 bg-[#F4F4F4] w-[90%] rounded-3xl p-8 mt-10"
                  >
                    <div className="flex justify-between">
                      <span>
                        <h2 className="text-[#5C5E65] text-lg font-semibold">
                          {assessment.title}
                        </h2>
                        <p className="text-[#8E91A1]">
                          | {assessment.issueDate} {assessment.issueTime}
                        </p>
                      </span>
                      <BsThreeDotsVertical className="text-gray-500" />
                    </div>

                    <div className="space-y-5">
                      <p className="text-[#666979]">{assessment.details}</p>
                      <p className="text-[#8E91A1]">
                        Due {assessment.dueDate} {assessment.dueTime}
                      </p>
                      <span className="flex space-x-3">
                        <p className="bg-blue-100 text-blue-500 py-2 px-4 rounded-lg">
                          {assessment.tags}
                        </p>
                        <p className="bg-[#FF0C0C14] text-[#FF0C0C] py-2 px-4 rounded-lg">
                          {assessment.duration}
                        </p>
                        <p className="bg-[#FF0C0C14] text-[#FF0C0C] py-2 px-4 rounded-lg">
                          {assessment.points}
                        </p>
                      </span>
                    </div>
                    <button className="bg-[#1E1F27] text-white p-3 h-14 rounded-3xl w-full">
                      View Submissions{" "}
                      <span className="text-xs ml-2">
                        ({assessments.length} new submissions)
                      </span>
                    </button>
                  </article>
                ))
              )}
            </section>
          </div>
        </div>
        <div>
          <QuickStats />
        </div>
      </div>
    </>
  );
};

export default StudentAssesment;
