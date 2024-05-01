import React from "react";
import { DrawnTag } from "../atoms/DrawnTag";
import { state } from "../../utils";

export const TopSection = () => {
  const isError = false;
  const textColorClass = isError ? "text-error" : "text-primary";

  return (
    <div className="flex flex-col h-full rounded-2xl p-11 bg-background2">
      <div className="flex flex-row justify-end gap-2">
        {[state.Lost, state.Lost, state.Win, state.Win, state.Win].map(
          (stateValue, index) => (
            <DrawnTag key={index} stateValue={stateValue} />
          )
        )}
      </div>
      <div className="flex items-center justify-center h-full">
        <p className={`font-mono font-semibold text-9xl ${textColorClass}`}>
          2.59X
        </p>
      </div>
    </div>
  );
};
