"use client";

import { motion } from "framer-motion";

// Traces drawn as right-angle PCB paths; nodes mark solder/via points.
const TRACES = [
  "M -40 120 H 220 V 40 H 520",
  "M -40 260 H 140 V 340 H 460 V 220 H 760",
  "M 900 80 H 640 V 200 H 380",
  "M 900 320 H 700 V 200",
];

const NODES = [
  [220, 120], [520, 40], [140, 260], [460, 340], [760, 220],
  [640, 80], [380, 200], [700, 320],
];

export default function CircuitTrace() {
  return (
    <svg
      viewBox="0 0 900 400"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden
    >
      {TRACES.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="var(--cyan)"
          strokeWidth={1.25}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: 1.8, delay: 0.2 + i * 0.25, ease: "easeInOut" }}
        />
      ))}
      {NODES.map(([cx, cy], i) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={3}
          fill="var(--cyan)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0.6], scale: 1 }}
          transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
          style={{ filter: "drop-shadow(0 0 6px var(--cyan))" }}
        />
      ))}
    </svg>
  );
}
