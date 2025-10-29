import React from "react";
import { FaTrophy } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";

type Student = {
  id: string;
  name: string;
  code: string; // e.g., PRAC-02-01
  scorePercent: number; // 0-100
};

type StudentListItemProps = {
  student: Student;
  rank: number;
};

const rankIconByPosition = (position: number) => {
  if (position > 3) return null;
  const colors = ["#F6C453", "#9CA3AF", "#D97706"]; // gold, silver-ish, bronze
  return (
    <div
      className="w-[28px] h-[28px] rounded-full flex items-center justify-center"
      style={{ backgroundColor: "#FFF8E6", border: "1px solid #FFE7A3" }}
      aria-label={`Rank ${position}`}
    >
      <FaTrophy size={14} color={colors[position - 1]} />
    </div>
  );
};

const StudentListItem: React.FC<StudentListItemProps> = ({ student, rank }) => {
  return (
    <tr className="hover:bg-[#F9FAFB]">
      <td className="px-4 py-3 text-center">
        {rankIconByPosition(rank) || (
          <div className="w-[28px] h-[28px] rounded-full border border-[#E5E7EB] mx-auto flex items-center justify-center text-[#8E91A1] text-[12px] font-medium">
            {rank}
          </div>
        )}
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-[28px] h-[28px] rounded-full bg-[#E5E7EB]" />
          <span className="text-[#303240] text-[14px] font-medium leading-[100%]">
            {student.name}
          </span>
        </div>
      </td>
      <td className="px-4 py-3 text-[#8E91A1] text-[12px]">{student.code}</td>
      <td className="px-4 py-3 text-[#059669] font-semibold text-[12px]">
        {student.scorePercent.toFixed(1)}%
      </td>
      <td className="px-4 py-3 text-center">
        <HiOutlineDotsVertical className="text-[#8E91A1] mx-auto" />
      </td>
    </tr>
  );
};

type StudentListProps = {
  students: Student[];
  onAdd?: (student: Omit<Student, "id">) => void;
};

export const StudentList: React.FC<StudentListProps> = ({
  students,
  onAdd,
}) => {
  const sorted = React.useMemo(
    () => [...students].sort((a, b) => b.scorePercent - a.scorePercent),
    [students]
  );

  const [isAdding, setIsAdding] = React.useState(false);
  const [name, setName] = React.useState("");
  const [code, setCode] = React.useState("");
  const [score, setScore] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onAdd) return;
    const parsed = parseFloat(score);
    if (!name || !code || Number.isNaN(parsed)) return;
    const bounded = Math.max(0, Math.min(100, parsed));
    onAdd({ name, code, scorePercent: bounded });
    setName("");
    setCode("");
    setScore("");
    setIsAdding(false);
  };

  return (
    <div className="bg-white rounded-[16px] border border-[#F3F4F6] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#F3F4F6]">
        <span className="text-[#8E91A1] text-[12px] font-medium">
          Student List
        </span>
        {onAdd && (
          <button
            type="button"
            className="text-[12px] px-3 py-1 rounded-full border border-[#E5E7EB]"
            onClick={() => setIsAdding((v) => !v)}
          >
            {isAdding ? "Cancel" : "+ Add Student"}
          </button>
        )}
      </div>
      {isAdding && (
        <form
          onSubmit={handleSubmit}
          className="px-4 py-3 border-b border-[#F3F4F6] grid grid-cols-1 sm:grid-cols-4 gap-2"
        >
          <input
            className="border border-[#E5E7EB] rounded px-3 py-2 text-sm"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border border-[#E5E7EB] rounded px-3 py-2 text-sm"
            placeholder="Student code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <input
            className="border border-[#E5E7EB] rounded px-3 py-2 text-sm"
            placeholder="Score %"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            inputMode="decimal"
          />
          <button
            type="submit"
            className="bg-[#1E1F27] text-white rounded px-3 py-2 text-sm"
          >
            Add
          </button>
        </form>
      )}
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#F3F4F6]">
            <th className="px-4 py-3 text-left text-[#8E91A1] text-[12px] font-medium">
              Rank
            </th>
            <th className="px-4 py-3 text-left text-[#8E91A1] text-[12px] font-medium">
              Name
            </th>
            <th className="px-4 py-3 text-left text-[#8E91A1] text-[12px] font-medium">
              Code
            </th>
            <th className="px-4 py-3 text-left text-[#8E91A1] text-[12px] font-medium">
              Score
            </th>
            <th className="px-4 py-3 text-center text-[#8E91A1] text-[12px] font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((student, idx) => (
            <StudentListItem
              key={student.id}
              student={student}
              rank={idx + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const initialStudents: Student[] = [
  { id: "1", name: "Alex Benjamin", code: "PRAC-02-01", scorePercent: 89.7 },
  {
    id: "2",
    name: "Emmanuel Senior Dev.",
    code: "PRAC-02-02",
    scorePercent: 92.1,
  },
  { id: "3", name: "Murna Smith", code: "PRAC-02-03", scorePercent: 86.2 },
  { id: "4", name: "Ade Nikky", code: "PRAC-02-04", scorePercent: 88.3 },
  {
    id: "5",
    name: "Adeswalla Chelsea",
    code: "PRAC-02-05",
    scorePercent: 84.9,
  },
  { id: "6", name: "Israel Attacker", code: "PRAC-02-06", scorePercent: 90.4 },
  { id: "7", name: "Emjay Abdul", code: "PRAC-02-07", scorePercent: 93.7 },
  { id: "8", name: "Eniola Abdul", code: "PRAC-02-08", scorePercent: 85.6 },
];

const Leaderboard: React.FC = () => {
  const [students, setStudents] = React.useState<Student[]>(initialStudents);
  const handleAdd = (payload: Omit<Student, "id">) => {
    const newStudent: Student = {
      id: `${Date.now()}`,
      ...payload,
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  return <StudentList students={students} onAdd={handleAdd} />;
};

export default Leaderboard;
