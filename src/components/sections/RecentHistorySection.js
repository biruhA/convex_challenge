import React from "react";
import { DrawnTag } from "../atoms/DrawnTag";
import { state } from "../../utils";
import { RecentBetCard } from "../card";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export const RecentHistorySection = () => {
  const { betList } = useSelector((state) => state.bet);

  return (
    <div className="flex flex-col  border-2 rounded-2xl p-5 items-center bg-background border-primary25 w-full lg:w-4/6">
      <p className="flex font-mono text-lg font-semibold text-white">
        Recent History
      </p>
      <div className="flex flex-col mt-5 gap-1 w-full overflow-y-auto no-scrollbar">
        {betList?.map((bet, index) => {
          return (
            <motion.div
              key={index}
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <RecentBetCard
                drawnStatus={bet.drawnStatus}
                betAmount={bet.betAmount}
                profitOnWin={bet.profitOnWin}
                targetMultiplier={bet.targetMultiplier}
                winChance={bet.winChance}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
