"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const STEPS = [
  { title: "Registration Opens", note: "Team formation begins" },
  { title: "Registration Closes", note: "Final headcount locked — 22 August 2026" },
  { title: "Shortlisting", note: "Abstracts reviewed" },
  { title: "Confirmation", note: "Confirmation mail sent — 27 August 2026" },
  { title: "Hackathon Day", note: "24 hours, one prototype" },
  { title: "Evaluation", note: "Judged on the working build" },
  { title: "Winners Announced", note: "Awards & closing ceremony" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Timeline" title="How the next few weeks go" />
      <p className="mt-4 max-w-xl text-sm text-white/50">
        A log of every checkpoint between now and the closing ceremony — scroll to trace the sequence.
      </p>

      <div className="relative mt-12 -mx-6 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]">
        <div className="relative flex min-w-max gap-0">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative w-64 shrink-0 px-4 first:pl-0 last:pr-0"
            >
              {/* connecting rail */}
              <div className="relative flex items-center">
                <span
                  className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan bg-bg font-mono text-[11px] text-cyan"
                  style={{ boxShadow: "0 0 12px var(--cyan)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="h-px flex-1"
                    style={{ background: "linear-gradient(90deg, var(--cyan), var(--amber))" }}
                  />
                )}
              </div>

              <div className="chip-card glass-panel mt-4 rounded-xl px-4 py-4">
                <p className="font-display text-sm font-semibold leading-snug sm:text-base">{s.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/50">{s.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
