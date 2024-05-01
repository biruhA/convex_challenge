import React from "react";
import { state } from "../../utils";

export function DrawnTag({ drawnvalue, stateValue }) {
  const bgColor = stateValue ? "bg-primary" : "bg-secondary";
  const textColor = stateValue ? "text-white" : "text-primary";

  return (
    <div className={`flex px-4 py-1 rounded-full ${bgColor} w-fit`}>
      <p className={`mx-0 font-mono text-lg font-bold ${textColor}`}>
        {parseFloat(drawnvalue)}x
      </p>
    </div>
  );
}
