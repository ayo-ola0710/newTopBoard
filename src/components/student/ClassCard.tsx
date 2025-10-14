import React from "react";
import classNames from "classnames";

interface ClassCardProps {
  title: string;
  students: number;
  assessments: number;
  hasOutstanding?: boolean;
  borderColor?: string;
  buttonColor?: string;
}

const ClassCard: React.FC<ClassCardProps> = ({
  title,
  students,
  assessments,
  hasOutstanding = false,
  borderColor = "border-gray-300",
  buttonColor = "bg-black",
}) => {
  return (
    <div
      className={classNames(
        "p-[32px] gap-[24px] rounded-[24px] bg-[#F4F4F4] flex justify-between items-center",
        borderColor,
        "border-l-8"
      )}
    >
      <div className="flex flex-col gap-1.5">
        <h2 className="font-semibold text-[20px] text-[#303240] ">{title}</h2>
        <p className="text-sm text-gray-500">{students} students</p>
        <p className="text-sm text-gray-500">{assessments} assessments</p>
        <button
          className={classNames(
            "text-white text-sm px-[24px] py-[12px] rounded-[24px]",
            buttonColor || "bg-black"
          )}
        >
          View Class
        </button>
      </div>
      <div className="flex flex-col items-end gap-2 mt-[-4.5rem] ">
        {hasOutstanding && (
          <span className="text-[12px] text-[#059669] bg-[#CEF6DF] border border-[#CBEED9] px-2 py-1 rounded-full">
            1 Outstanding Submission
          </span>
        )}
      </div>
    </div>
  );
};

export default ClassCard;
