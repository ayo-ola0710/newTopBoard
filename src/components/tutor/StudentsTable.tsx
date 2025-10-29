import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface StudentsTableProps {
  students: {
    id: string;
    name: string;
    email: string;
    grade: string;
    status: string;
  }[];
}

const StudentsTable: React.FC<StudentsTableProps> = ({ students }) => {
  return (
    <table className="w-full text-gray-500 border border-solid border-transparent rounded-xl">
      <thead className="bg-[#F4F4F4]">
        <tr>
          <th className="p-4">Student ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Grade</th>
          <th>Submission Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan={6} className="text-center py-4">
              No students yet
            </td>
          </tr>
        ) : (
          students.map((student, index) => (
            <tr key={index} className="border-t">
              <td className="p-4">{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td className="text-[#059669]">{student.grade}</td>
              <td>{student.status}</td>
              <td>
                <button className="text-gray-500">
                  <BsThreeDotsVertical />
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default StudentsTable;
