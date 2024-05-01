import React from "react";
import { state } from "../../utils";

export const RecentBetCard = ({
  drawnStatus,
  betAmount,
  profitOnWin,
  targetMultiplier,
  winChance,
}) => {
  const borderColor = drawnStatus ? "border-primary25" : "border-error";
  const betVale = drawnStatus ? "text-primary" : "text-error";

  return (
    <div
      className={`flex flex-row w-full justify-between items-center italic border-2 rounded-2xl px-5 py-1.5 bg-card ${borderColor}`}
    >
      <div className="flex flex-row justify-between w-2/5 items-center">
        <RecentItem label="Bet Amount" />
        <Dot />
        <RecentItem label="Won Amount" />
        <Dot />
        <RecentItem label="Target Multiplier" isETB={false} />
      </div>
      <p className={`${betVale} font-mono font-bold text-xl`}>
        {drawnStatus ? "WIN" : "LOSE"}
      </p>
    </div>
  );
};

function RecentItem({ label, isETB = true }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-white50 font-mono font-medium text-xs h-2">{label}</p>
      <div className="flex flex-row items-center gap-1">
        {isETB && (
          <p className="text-white font-mono font-medium text-xs mt-1">ETB</p>
        )}
        <p className="text-white font-mono font-bold text-xl">100</p>
      </div>
    </div>
  );
}

function Dot() {
  return <p className="text-white50 font-mono text-2xl">.</p>;
}
