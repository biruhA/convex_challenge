import React from "react";
import { state } from "../../utils";

export const RecentBetCard = ({ betStatus }) => {
  const borderColor =
    betStatus === state.Win ? "border-primary25" : "border-error";
  const betVale = betStatus === state.Win ? "text-primary" : "text-error";

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
        {betStatus === state.Win ? "WIN" : "LOSE"}
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
