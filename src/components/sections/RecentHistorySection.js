import React from "react";
import { DrawnTag } from "../atoms/DrawnTag";
import { state } from "../../utils";

export const RecentHistorySection = () => {
  return (
    <div className="flex flex-col w-1/2 border-2 rounded-2xl p-11 bg-background border-primary50">
      <div className="flex flex-row justify-end gap-2">
        {[state.Lost, state.Lost, state.Win, state.Win, state.Win].map(
          (stateValue, index) => (
            <DrawnTag key={index} stateValue={stateValue} />
          )
        )}
      </div>
      <div className="flex items-center justify-center h-full">
        <p className={`font-mono font-semibold text-9xl text-primary`}>2.59X</p>
      </div>
    </div>
  );
};
