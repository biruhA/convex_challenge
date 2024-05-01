import React, { useEffect } from "react";
import { DrawnTag } from "../atoms/DrawnTag";
import { state } from "../../utils";
import { useSelector } from "react-redux";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

export const TopSection = () => {
  const { drawn, drawnList, drawnStatus } = useSelector((state) => state.bet);
  const textColorClass = drawnStatus ? "text-primary" : "text-error";
  const count = useMotionValue(0);
  const rounded = useTransform(count, drawn);

  useEffect(() => {
    const animation = animate(count, drawn, { duration: 10 });
    return animation.stop;
  }, [drawn]);

  return (
    <div className="flex flex-col h-full rounded-2xl p-11 bg-background2">
      <div className="flex flex-row justify-end gap-2">
        {drawnList.map((stateValue, index) => (
          <DrawnTag
            key={index}
            drawnvalue={stateValue?.drawn}
            stateValue={stateValue?.drawnStatus}
          />
        ))}
      </div>
      <div className="flex items-center justify-center h-full">
        <motion.p
          className={`font-mono font-semibold text-9xl ${textColorClass}`}
        >
          {parseFloat(rounded)}X
        </motion.p>
      </div>
    </div>
  );
};
