"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets, AlertTriangle, HeartPulse, Recycle, CloudSun, GraduationCap,
  Gauge, Car, Wind, Radio, Building2, Accessibility, Bell, TrafficCone,
  Wifi, Cloud, type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PROBLEM_STATEMENTS, type Track } from "@/lib/problemStatements";

const ICONS: Record<string, LucideIcon> = {
  "HW-01": Droplets, "HW-02": AlertTriangle, "HW-03": HeartPulse, "HW-04": Recycle,
  "HW-05": CloudSun, "HW-06": GraduationCap, "HW-07": Gauge, "HW-08": Car,
  "HW-09": Wind, "HW-10": Radio,
  "SW-01": HeartPulse, "SW-02": GraduationCap, "SW-03": Building2, "SW-04": Accessibility,
  "SW-05": Recycle, "SW-06": Bell, "SW-07": TrafficCone, "SW-08": Wifi,
  "SW-09": Cloud, "SW-10": Radio, "SW-15": Radio, "SW-16": Wifi, "SW-17": Gauge,
};

export default function ProblemStatements() {
  const [group, setGroup] = useState<Track>("Hardware");
  const items = PROBLEM_STATEMENTS.filter((p) => p.track === group);
  const [active, setActive] = useState(0);
  const p = items[Math.min(active, items.length - 1)];
  const switchGroup = (g: Track) => { setGroup(g); setActive(0); };

  return (
    <section id="problems" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Problem Statements" title="SDG-aligned challenges. Build solutions that matter." />
      <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-6 text-white/55">Explore SDG-aligned challenges across our Hardware and Software tracks, and engineer a meaningful real-world solution.</p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-8 flex justify-center gap-3"
      >
        <button onClick={() => switchGroup("Hardware")} className={`rounded-full border px-5 py-2 text-sm transition-all ${group === "Hardware" ? "glow-border border-cyan bg-cyan/10 text-cyan" : "border-white/10 text-white/60 hover:border-white/25"}`}>Hardware Track</button>
        <button onClick={() => switchGroup("Software")} className={`rounded-full border px-5 py-2 text-sm transition-all ${group === "Software" ? "glow-border border-cyan bg-cyan/10 text-cyan" : "border-white/10 text-white/60 hover:border-white/25"}`}>Software Track</button>
      </motion.div>
      <div className="perspective-wrap mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item, i) => {
          const Icon = ICONS[item.id] ?? Radio;
          return (
            <motion.button
              key={item.id}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className={`tilt-card chip-card rounded-xl border p-4 text-left transition-colors ${active === i ? "border-cyan bg-cyan/10" : "glass-panel hover:border-white/25"}`}
            >
              <div className="flex items-center justify-between">
                <Icon className={active === i ? "text-cyan" : "text-white/60"} size={20} />
                <span className="font-mono text-[9px] text-amber/70">{item.id}</span>
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-cyan/80">{item.sdg}</p>
              <p className="mt-2 font-display text-xs font-medium leading-tight sm:text-sm">{item.title}</p>
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={group + p.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glow-border glass-panel scan-sheen mt-6 rounded-xl border border-cyan/20 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">{p.track} Track</span>
            <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/60">{p.sdg}</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber/70">{p.id}</span>
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
