"use client";

import QuickStats from "@/components/shared/Stats";
import Leaderboard from "@/components/shared/LeaderBoard";

const StudentLeaderboard = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex-1 pr-10">
          <h2 className="text-xl font-semibold ">Welcome, John Doe</h2>
          <p className="text-[#8E91A1]">
            Manage your classes and activities smoothly
          </p>
          <div className="mt-6">
            <div className="">
              <Leaderboard />
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

export default StudentLeaderboard;
