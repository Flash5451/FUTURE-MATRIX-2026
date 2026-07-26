"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const STEPS = [
  { title: "Registration Opens", note: "Team formation begins" },
  { title: "Registration Closes", note: "Final headcount locked" },
  { title: "Shortlisting", note: "Abstracts reviewed" },
  { title: "Confirmation", note: "Shortlisted teams confirmed" },
  { title: "Hackathon Day", note: "24 hours, one prototype" },
  { title: "Evaluation", note: "Judged on the working build" },
  { title: "Winners Announced", note: "Awards & closing ceremony" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Timeline" title="How the next few weeks go" />

      <div className="relative mt-12 border-l border-cyan/25 pl-8">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="relative pb-10 last:pb-0"
          >
            <span
              className="absolute -left-[41px] top-1 h-3 w-3 rounded-full bg-cyan"
              style={{ boxShadow: "0 0 10px var(--cyan)" }}
            />
            <p className="font-display text-lg font-medium">{s.title}</p>
            <p className="mt-1 text-sm text-white/50">{s.note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
