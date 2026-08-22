"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const STEPS = [
  { title: "Registration Opens", note: "Team formation begins" },
  { title: "Registration Closes", note: "Final headcount locked — 24 August 2026" },
  { title: "Shortlisting", note: "Abstracts reviewed" },
  { title: "Confirmation", note: "Confirmation mail sent — 27 August 2026" },
  { title: "Hackathon Day", note: "24 hours, one prototype" },
  { title: "Evaluation", note: "Judged by the working model" },
  { title: "Winners Announced", note: "Awards & closing ceremony" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Timeline" title="How the next few weeks go" />

      <div
        className="relative mt-12 pl-8"
        style={{
          borderLeft: "1px solid transparent",
          borderImage: "linear-gradient(180deg, var(--cyan), var(--amber), var(--green)) 1",
        }}
      >
        {STEPS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass-panel relative mb-4 rounded-xl px-5 py-4 last:mb-0"
          >
            <span
              className="absolute -left-[42px] top-5 h-3 w-3 rounded-full bg-cyan"
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
