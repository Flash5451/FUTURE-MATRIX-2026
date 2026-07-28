"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-09-01T09:00:00+05:30").getTime();

function getParts(msLeft: number) {
  const clamped = Math.max(msLeft, 0);
  return {
    days: Math.floor(clamped / 86_400_000),
    hours: Math.floor((clamped / 3_600_000) % 24),
    mins: Math.floor((clamped / 60_000) % 60),
    secs: Math.floor((clamped / 1000) % 60),
  };
}

export default function Countdown() {
  const [parts, setParts] = useState<ReturnType<typeof getParts> | null>(null);

  useEffect(() => {
    const tick = () => setParts(getParts(TARGET - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units: [string, number][] = parts
    ? [["Days", parts.days], ["Hrs", parts.hours], ["Min", parts.mins], ["Sec", parts.secs]]
    : [["Days", 0], ["Hrs", 0], ["Min", 0], ["Sec", 0]];

  return (
    <div className="flex gap-4 font-mono" role="timer" aria-live="polite">
      {units.map(([label, value]) => (
        <div key={label} className="flex flex-col items-center rounded-lg border border-cyan/25 bg-panel/60 px-4 py-2 min-w-16">
          <span className="text-2xl font-semibold text-cyan glow-text tabular-nums">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-[10px] tracking-widest text-white/50 uppercase">{label}</span>
        </div>
      ))}
    </div>
  );
}
