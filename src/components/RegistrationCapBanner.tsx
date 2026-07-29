"use client";

import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

type TrackStatus = { registered: number };
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

  return (
    <span className="glow-border inline-flex flex-wrap items-center gap-x-4 gap-y-1 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 font-mono text-xs text-cyan">
      <Flame size={13} />
      <span>Hardware: {tracks.Hardware.registered} teams registered</span>
      <span className="text-white/20">·</span>
      <span>Software: {tracks.Software.registered} teams registered</span>
      <span className="text-white/40">— open registration, no team limit</span>
    </span>
  );
}
