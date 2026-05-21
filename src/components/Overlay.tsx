"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";

export default function Overlay({ containerRef }: { containerRef: RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% to 25%
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2: 30% to 55%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.25, 0.55], [50, -50]);

  // Section 3: 60% to 90%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.95], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.55, 0.95], [-50, 50]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col justify-center overflow-hidden">
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute w-full flex justify-center items-center text-center px-4"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-lg">
          Saurab Sen.<br />
          <span className="text-gray-400">Senior Software Developer.</span>
        </h1>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, x: x2 }}
        className="absolute w-full flex justify-start items-center px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-white max-w-2xl drop-shadow-xl text-balance">
          6+ years building scalable web & mobile applications.
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, x: x3 }}
        className="absolute w-full flex justify-end items-center px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-white max-w-2xl text-right drop-shadow-xl text-balance">
          Specializing in React, Angular, Node.js & MongoDB.
        </h2>
      </motion.div>
    </div>
  );
}
