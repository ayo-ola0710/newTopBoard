import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { assessments } from "@/data/data";

interface StudentsTableProps {
  assessments: {
    id: string;
    title: string;
    issueDate: string;
    issueTime: string;
    details: string;
    dueDate: string;
    dueTime: string;
    tags: string;
    duration: string;
    points: string;
  }[];
}

const TutorAssessments = () => {
  return (
    <div className="flex gap-9">
      <Sidebar />
      <div className="flex-1">
        <Navbar isTutor={true} />

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
  );
};

export default TutorAssessments;
