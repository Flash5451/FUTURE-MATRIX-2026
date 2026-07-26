"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const SCHEDULE = [
  ["09:00 AM", "Registration & Check-in"],
  ["10:00 AM", "Opening Ceremony"],
  ["10:30 AM", "Problem Statement Briefing"],
  ["11:00 AM", "Project Development Begins"],
  ["01:00 PM", "Lunch"],
  ["04:00 PM", "Mentor Session — Round 1"],
  ["08:00 PM", "Dinner"],
  ["12:00 AM", "Midnight Checkpoint"],
  ["06:00 AM", "Prototype Testing"],
  ["09:00 AM", "Final Demonstration"],
  ["11:00 AM", "Valedictory & Prize Distribution"],
];

export default function Schedule() {
  return (
    <section id="schedule" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Schedule" title="24 hours, hour by hour" />

      <div className="mt-10 divide-y divide-white/10 rounded-xl border border-white/10 bg-panel/40">
        {SCHEDULE.map(([time, label], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="flex items-center gap-6 px-5 py-3.5"
          >
            <span className="w-20 shrink-0 font-mono text-xs text-cyan">{time}</span>
            <span className="text-sm text-white/75">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
