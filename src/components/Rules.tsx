"use client";

import { motion } from "framer-motion";
import { Users, Laptop, Wrench, Zap, FileCheck, ShieldAlert, FileDown, IndianRupee } from "lucide-react";
import SectionHeading from "./SectionHeading";

const RULES = [
  { icon: Users, title: "Team Size", body: "Exactly 3 members per team (1 Team Leader + 2 Team Members)." },
  { icon: Laptop, title: "Laptop Mandatory", body: "Each team brings at least one laptop." },
  { icon: Wrench, title: "Track Requirements", body: "Hardware teams bring required components; software teams bring the tools and resources needed for development." },
  { icon: Zap, title: "Power Provided", body: "Power supply is arranged at every table." },
  { icon: FileCheck, title: "Functional Outcome", body: "Hardware teams must demonstrate a functional prototype; software teams must demonstrate a working software solution." },
  { icon: ShieldAlert, title: "Original Work Only", body: "Plagiarism or pre-built solutions submitted as new work lead to disqualification." },
  { icon: IndianRupee, title: "Selection Fee", body: "Shortlisted teams pay ₹200 per member (₹600 per team of 3) to confirm their slot after selection." },
];

export default function Rules() {
  return (
    <section id="rules" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Rules" title="Keep it fair, keep it working" />

      <div className="perspective-wrap mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RULES.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="tilt-card glass-panel rounded-xl p-5"
          >
            <r.icon className="text-cyan" size={20} strokeWidth={1.5} />
            <h3 className="mt-3 font-display text-sm font-semibold">{r.title}</h3>
            <p className="mt-1 text-sm text-white/60">{r.body}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="/future-matrix-rulebook.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-border inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-6 py-3 font-display text-sm font-semibold text-cyan transition hover:bg-cyan hover:text-slate-950"
        >
          <FileDown size={18} /> Download Official Rulebook
        </a>
      </div>
    </section>
  );
}
