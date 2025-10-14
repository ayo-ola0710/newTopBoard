import { ChevronDown } from "lucide-react";

const stats = [
  { label: "Classes Enrolled", value: "2" },
  { label: "Submitted Assessment", value: "7" },
  { label: "My Rank", value: "2nd" },
  { label: "Average grade", value: "87%", highlight: true },
];

const QuickStats = () => {
  return (
    <div className="grid space-y-3 justify-center ">
      <div className="flex justify-between  items-center border-b px-[12px] border-[#F4F4F4] py-[12px]">
        <span className="text-[#8E91A1] text-[14px] font-medium">
          Quick Stats
        </span>
        <button className="text-sm text-gray-500">
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`bg-[#F4F4F4] h-[110px] w-[160px] rounded-[24px] flex flex-col items-center justify-center text-center gap-2 ${
            stat.highlight
              ? "text-[#059669] font-bold leading-[100%] text-[32px]"
              : "text-[#303240] font-medium"
          }`}
        >
          <div className="font-bold text-[32px] leading-[100%]">
            {stat.value}
          </div>
          <div className="text-sm font-normal leading-[100%] text-[#666979]">
            {stat.label}
          </div>
        </div>
      ))}
      <div className="bg-[#F4F4F4] mt-17 py-[8px] px-[20px] h-[50px] w-[160px] rounded-[24px] border border-[#D9D9D9]">
        <div className="flex justify-between items-center mt-1">
          <span className="text-gray-800 font-medium text-sm pt-1">
            Recent Grades
          </span>
          <button className="text-sm text-gray-500">
            {/* <img src="/CaretDown.png" alt="Recent Grades Icon" /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
