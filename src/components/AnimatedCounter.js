import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useSelector } from "react-redux";

export default function AnimatedCounter() {
  const { drawn } = useSelector((state) => state.bet);
  // Step 3: Create a motion value for the count
  const count = useMotionValue(0);

  // Step 4: Transform the motion value to ensure it's an integer
  const rounded = useTransform(count, Math.round);

  // Step 5: Animate the motion value from 0 to 100 over 2 seconds
  useEffect(() => {
    const animation = animate(count, drawn, { duration: 10 });
    return animation.stop; // Ensure the animation stops when the component unmounts
  }, [drawn]);

  // Step 6: Display the animated value
  return <motion.h1 className="text-white">{rounded}</motion.h1>;
}
