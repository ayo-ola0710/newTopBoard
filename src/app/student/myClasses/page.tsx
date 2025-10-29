"use client";

import QuickStats from "@/components/shared/Stats";
import ClassCard from "@/components/student/ClassCard";

const StudentMyclasses = () => {
  const classes = [
    {
      title: "React 101",
      students: 25,
      assessments: 5,
      hasOutstanding: true,
      borderColor: "border-blue-500",
      buttonColor: "bg-blue-600",
    },
    {
      title: "Into to Nodejs",
      students: 30,
      assessments: 3,
      hasOutstanding: false,
      borderColor: "border-green-500",
      buttonColor: "bg-green-600",
    },
    {
      title: "Mongodb and it works",
      students: 20,
      assessments: 4,
      hasOutstanding: true,
      borderColor: "border-purple-500",
      buttonColor: "bg-purple-600",
    },
    {
      title: "Intro to tailwindcss",
      students: 28,
      assessments: 6,
      hasOutstanding: false,
      borderColor: "border-red-500",
      buttonColor: "bg-red-600",
    },
  ];

  return (
    <>
      <div className="flex justify-between">
        <div className="flex-1 pr-10">
          <h2 className="text-xl font-semibold ">Welcome, John Doe</h2>
          <p className="text-[#8E91A1]">
            Manage your classes and activities smoothly
          </p>
          <div className="mt-6 mb-6">
            <div className="bg-white p-2">
              <h3 className="text-4xl font-medium mb-4 border-b  pb-2">
                My Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {classes.map((classItem, index) => (
                  <ClassCard
                    key={index}
                    title={classItem.title}
                    students={classItem.students}
                    assessments={classItem.assessments}
                    hasOutstanding={classItem.hasOutstanding}
                    borderColor={classItem.borderColor}
                    buttonColor={classItem.buttonColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <QuickStats />
        </div>
      </div>
    </>
  );
};

export default StudentMyclasses;
