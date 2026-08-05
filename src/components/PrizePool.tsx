"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const PODIUM = [
  { medal: "🥈", place: "Second Prize", amount: "₹10,000", rank: 2, height: "sm:pb-8", order: "sm:order-1" },
  { medal: "🥇", place: "First Prize", amount: "₹15,000", rank: 1, height: "sm:pb-16", order: "sm:order-2" },
  { medal: "🥉", place: "Third Prize", amount: "₹7,500", rank: 3, height: "sm:pb-4", order: "sm:order-3" },
];

const SPECIAL = ["Best Innovation Award", "Best Prototype Award", "Best Social Impact Award"];

export default function PrizePool() {
  return (
    <section id="prizes" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Prize Pool" title="₹32,500 Prize Pool" align="center" />

      <div className="perspective-wrap mt-12 grid items-end gap-6 sm:grid-cols-3">
        {PODIUM.map((p, i) => (
          <motion.div
            key={p.place}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className={`tilt-card glow-border rounded-2xl border p-8 text-center ${p.order} ${p.height} ${
              p.rank === 1 ? "border-cyan/40 bg-cyan/5" : "glass-panel"
            }`}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Rank {p.rank}</span>
            <div className="mt-2 text-4xl">{p.medal}</div>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-white/50">{p.place}</p>
            <p className="mt-2 font-display text-3xl font-semibold text-cyan glow-text">{p.amount}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        {SPECIAL.map((s) => (
          <span key={s} className="rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-white/60">
            {s}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
