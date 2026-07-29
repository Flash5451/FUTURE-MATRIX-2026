"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "₹32.5K", label: "Prize Pool" },
  { value: "Open", label: "Team Slots" },
  { value: "24", label: "Hours" },
  { value: "10", label: "Mentors" },
  { value: "1", label: "Industry Expert" },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-white/10 bg-panel/40">
      <div className="perspective-wrap mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-5">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="tilt-card rounded-xl p-4 text-center"
          >
            <div className="font-display text-2xl font-semibold text-cyan sm:text-3xl">{s.value}</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-white/50">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
