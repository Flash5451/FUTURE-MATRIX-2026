"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse, GraduationCap, Venus, Droplets, Accessibility, Building2,
  Recycle, CloudSun, ShieldCheck, Handshake, Radio, type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PROBLEM_STATEMENTS, type Chapter } from "@/lib/problemStatements";

const ICONS: Record<string, LucideIcon> = {
  "SSIT-01": HeartPulse, "SSIT-02": GraduationCap, "SSIT-03": Venus, "SSIT-04": Droplets,
  "SSIT-05": Accessibility, "SSIT-06": Building2, "SSIT-07": Recycle, "SSIT-08": CloudSun,
  "SSIT-09": ShieldCheck, "SSIT-10": Handshake,
};

export default function ProblemStatements() {
  const [group, setGroup] = useState<Chapter>("IEEE SSIT");
  const items = PROBLEM_STATEMENTS.filter((p) => p.chapter === group);
  const [active, setActive] = useState(0);
  const p = items[Math.min(active, items.length - 1)];
  const switchGroup = (g: Chapter) => { setGroup(g); setActive(0); };

  return (
    <section id="problems" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Problem Statements" title="SDG-aligned challenges. Build solutions that matter." />
      <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-6 text-white/55">Explore SDG-aligned challenges from IEEE SSIT and IEEE ComSoc. Choose Hardware or Software and engineer a meaningful real-world solution.</p>
      <div className="mt-8 flex justify-center gap-3">
        <button onClick={() => switchGroup("IEEE SSIT")} className={`rounded-full border px-5 py-2 text-sm ${group === "IEEE SSIT" ? "border-cyan bg-cyan/10 text-cyan" : "border-white/10 text-white/60"}`}>IEEE SSIT</button>
        <button onClick={() => switchGroup("IEEE ComSoc")} className={`rounded-full border px-5 py-2 text-sm ${group === "IEEE ComSoc" ? "border-cyan bg-cyan/10 text-cyan" : "border-white/10 text-white/60"}`}>IEEE ComSoc</button>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item, i) => {
          const Icon = ICONS[item.id] ?? Radio;
          return (
            <button key={item.id} onClick={() => setActive(i)} className={`rounded-xl border p-4 text-left transition-colors ${active === i ? "border-cyan bg-cyan/10" : "border-white/10 bg-panel/50 hover:border-white/25"}`}>
              <Icon className={active === i ? "text-cyan" : "text-white/60"} size={20} />
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-cyan/80">{item.sdg}</p>
              <p className="mt-2 font-display text-xs font-medium leading-tight sm:text-sm">{item.title}</p>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={group + p.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glow-border mt-6 rounded-xl border border-cyan/20 bg-panel/60 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">{p.chapter}</span>
            <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/60">{p.sdg}</span>
          </div>
          <h3 className="mt-4 font-display text-xl font-semibold text-cyan">{p.title}</h3>
          <div className="mt-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">Challenge Statement</p>
            <p className="mt-2 text-sm leading-7 text-white/75">{p.problem}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
