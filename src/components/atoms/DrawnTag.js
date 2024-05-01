import React from "react";
import { state } from "../../utils";

export function DrawnTag({ stateValue }) {
  const isWin = stateValue === state.Win;
  const bgColor = isWin ? "bg-primary" : "bg-secondary";
  const textColor = isWin ? "text-white" : "text-primary";

  return (
    <div className={`flex px-4 py-1 rounded-full ${bgColor} w-fit`}>
      <p className={`mx-0 font-mono text-lg font-bold ${textColor}`}>2.99x</p>
    </div>
  );
}
