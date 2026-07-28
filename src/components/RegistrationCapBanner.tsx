"use client";

import { useEffect, useState } from "react";
import { Flame, Lock } from "lucide-react";

type TrackStatus = { registered: number; cap: number; full: boolean };
type Status = Record<"Hardware" | "Software", TrackStatus>;

export default function RegistrationCapBanner() {
  const [tracks, setTracks] = useState<Status | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/registration-status");
        const json = await res.json();
        if (!cancelled && json.success) setTracks(json.tracks);
      } catch {
        // Silently omit the banner if the status can't be loaded — non-critical.
      }
    })();
    return () => { cancelled = true; };
  }, []);

  if (!tracks) return null;

  const allFull = tracks.Hardware.full && tracks.Software.full;

  return (
    <span
      className={`inline-flex flex-wrap items-center gap-x-4 gap-y-1 rounded-full border px-4 py-1.5 font-mono text-xs ${
        allFull ? "border-red-400/40 bg-red-400/5 text-red-300" : "border-cyan/30 bg-cyan/5 text-cyan"
      }`}
    >
      {allFull ? <Lock size={13} /> : <Flame size={13} />}
      <span>Hardware: {tracks.Hardware.full ? "FULL" : `${tracks.Hardware.registered}/${tracks.Hardware.cap}`}</span>
      <span className="text-white/20">·</span>
      <span>Software: {tracks.Software.full ? "FULL" : `${tracks.Software.registered}/${tracks.Software.cap}`}</span>
      {!allFull && <span className="text-white/40">— first come, first served</span>}
    </span>
  );
}
