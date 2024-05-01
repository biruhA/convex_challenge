import React from "react";

export const TextField = (props) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <label className="flex font-mono text-base font-normal text-white">
        {props.label}
      </label>
      <input
        type="text"
        {...props}
        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-secondary text-white placeholder-primary50 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />

      {props.errors && (
        <p className="text-xs text-red-500">{props.errors.message}</p>
      )}
    </div>
  );
};
