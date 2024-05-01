import React, { useEffect, useRef } from "react";
import { DrawnTag } from "../atoms/DrawnTag";
import { useSelector } from "react-redux";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";

export const TopSection = () => {
  const { drawn, drawnList, drawnStatus } = useSelector((state) => state.bet);
  const textColorClass = drawnStatus ? "text-primary" : "text-error";
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(1, drawn, {
      duration: 1.5,
      onUpdate(value) {
        node.textContent = value.toFixed(2);
      },
    });

    return () => controls.stop();
  }, [drawn]);

  return (
    <div className="flex flex-col h-full rounded-2xl p-11 bg-background2 lg:overflow-hidden">
      <div className="flex flex-row justify-center lg:justify-end gap-2">
        {drawnList.map((stateValue, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <DrawnTag
              key={index}
              drawnvalue={stateValue?.drawn}
              stateValue={stateValue?.drawnStatus}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center h-full">
        <p
          ref={nodeRef}
          className={`font-mono font-semibold text-6xl lg:text-9xl ${textColorClass}`}
        />
      </div>
    </div>
  );
};
