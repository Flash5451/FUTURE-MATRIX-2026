"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "₹32.5K", label: "Prize Pool", span: "sm:col-span-2" },
  { value: "Open", label: "Team Slots", span: "" },
  { value: "24", label: "Hours", span: "" },
  { value: "10", label: "Mentors", span: "" },
  { value: "1", label: "Industry Expert", span: "" },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-white/10 bg-panel/40">
      <div className="perspective-wrap mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-none bg-white/5 sm:grid-cols-6">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`tilt-card relative flex flex-col items-center justify-center gap-1 bg-bg px-4 py-8 text-center ${s.span}`}
          >
            <span className="absolute left-3 top-3 font-mono text-[10px] text-white/25">{String(i + 1).padStart(2, "0")}</span>
            <div className="font-display text-3xl font-semibold text-cyan glow-text sm:text-4xl">{s.value}</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-white/50">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
