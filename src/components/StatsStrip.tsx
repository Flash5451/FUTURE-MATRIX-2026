"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type NumericStat = { kind: "number"; value: number; prefix?: string; suffix?: string; decimals?: number; label: string };
type TextStat = { kind: "text"; value: string; label: string };
type Stat = NumericStat | TextStat;

const STATS: Stat[] = [
  { kind: "number", prefix: "₹", value: 32.5, decimals: 1, suffix: "K", label: "Prize Pool" },
  { kind: "text", value: "Open", label: "Team Slots" },
  { kind: "number", value: 24, label: "Hours" },
  { kind: "number", value: 10, label: "Mentors" },
  { kind: "number", value: 1, label: "Industry Expert" },
];

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return display;
}

function StatValue({ stat, active }: { stat: Stat; active: boolean }) {
  const target = stat.kind === "number" ? stat.value : 0;
  const n = useCountUp(target, active && stat.kind === "number");
  if (stat.kind === "text") return <>{stat.value}</>;
  return (
    <>
      {stat.prefix ?? ""}
      {n.toFixed(stat.decimals ?? 0)}
      {stat.suffix ?? ""}
    </>
  );
}

export default function StatsStrip() {
  const [active, setActive] = useState(false);

  return (
    <section className="border-y border-white/10 bg-panel/40">
      <div className="perspective-wrap mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-5">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => setActive(true)}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="tilt-card rounded-xl p-4 text-center"
          >
            <div className="font-display text-2xl font-semibold text-cyan sm:text-3xl">
              <StatValue stat={s} active={active} />
            </div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-white/50">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
