import React from "react";
import { DrawnTag } from "../atoms/DrawnTag";
import { state } from "../../utils";
import { RecentBetCard } from "../card";
import { useSelector } from "react-redux";

export const RecentHistorySection = () => {
  const { betList } = useSelector((state) => state.bet);
  console.log("🚀 ~ RecentHistorySection ~ betList:", betList);

  return (
    <div className="flex flex-col w-4/6 border-2 rounded-2xl p-5 items-center bg-background border-primary25">
      <p className="flex font-mono text-lg font-semibold text-white">
        Recent History
      </p>
      <div className="flex flex-col mt-5 gap-1 w-full overflow-y-auto no-scrollbar">
        {betList?.map((bet, index) => {
          return (
            <RecentBetCard
              drawnStatus={bet.drawnStatus}
              betAmount={bet.betAmount}
              profitOnWin={bet.profitOnWin}
              targetMultiplier={bet.targetMultiplier}
              winChance={bet.winChance}
            />
          );
        })}
      </div>
    </div>
  );
};
