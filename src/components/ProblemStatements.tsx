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
  "SW-09": Cloud, "SW-10": Radio,
};

export default function ProblemStatements() {
  const [group, setGroup] = useState<Track>("Hardware");
  const items = PROBLEM_STATEMENTS.filter((p) => p.track === group);
  const [active, setActive] = useState(0);
  const p = items[Math.min(active, items.length - 1)];
  const switchGroup = (g: Track) => { setGroup(g); setActive(0); };
  const Icon = ICONS[p.id] ?? Radio;

  return (
    <section id="problems" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Problem Statements" title="SDG-aligned challenges. Build solutions that matter." />
      <p className="mt-4 max-w-3xl text-sm leading-6 text-white/55">Explore SDG-aligned challenges across our Hardware and Software tracks, and engineer a meaningful real-world solution.</p>

      <div className="chip-card glass-panel mt-8 overflow-hidden rounded-2xl lg:grid lg:grid-cols-[320px_1fr]">
        {/* left: scrollable directory list */}
        <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
          <div className="flex border-b border-white/10 font-mono text-xs">
            <button
              onClick={() => switchGroup("Hardware")}
              className={`flex-1 px-4 py-3 transition-colors ${group === "Hardware" ? "bg-cyan/10 text-cyan" : "text-white/50 hover:text-white/75"}`}
            >
              Hardware Track
            </button>
            <button
              onClick={() => switchGroup("Software")}
              className={`flex-1 px-4 py-3 transition-colors ${group === "Software" ? "bg-cyan/10 text-cyan" : "text-white/50 hover:text-white/75"}`}
            >
              Software Track
            </button>
          </div>

          <div className="max-h-[420px] overflow-y-auto lg:max-h-[520px] [scrollbar-width:thin]">
            {items.map((item, i) => {
              const RowIcon = ICONS[item.id] ?? Radio;
              const isActive = active === i;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className={`flex w-full items-center gap-3 border-b border-white/5 px-4 py-3 text-left transition-colors ${
                    isActive ? "bg-cyan/10" : "hover:bg-white/[0.03]"
                  }`}
                >
                  <RowIcon className={isActive ? "text-cyan" : "text-white/40"} size={16} strokeWidth={1.5} />
                  <span className="min-w-0 flex-1">
                    <span className={`block truncate font-display text-xs font-medium sm:text-sm ${isActive ? "text-cyan" : "text-white/75"}`}>
                      {item.title}
                    </span>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-white/35">{item.id} · {item.sdg}</span>
                  </span>
                  {isActive && <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]" />}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* right: sticky detail readout */}
        <div className="scan-sheen relative p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div key={group + p.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10">
                  <Icon className="text-cyan" size={20} strokeWidth={1.5} />
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">{p.track} Track</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/60">{p.sdg}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-amber/70">{p.id}</span>
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-cyan">{p.title}</h3>
              <div className="mt-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">Challenge Statement</p>
                <p className="mt-2 text-sm leading-7 text-white/75">{p.problem}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
