"use client";

import { useEffect, useState } from "react";
import { Flame, Lock } from "lucide-react";

type Status = { teamsRegistered: number; teamCap: number; full: boolean };

export default function RegistrationCapBanner() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/registration-status");
        const json = await res.json();
        if (!cancelled && json.success) {
          setStatus({ teamsRegistered: json.teamsRegistered, teamCap: json.teamCap, full: json.full });
        }
      } catch {
        // Silently omit the banner if the status can't be loaded — non-critical.
      }
    })();
    return () => { cancelled = true; };
  }, []);

  if (!status) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs ${
        status.full
          ? "border-red-400/40 bg-red-400/5 text-red-300"
          : "border-cyan/30 bg-cyan/5 text-cyan"
      }`}
    >
      {status.full ? <Lock size={13} /> : <Flame size={13} />}
      {status.full
        ? `Registration Closed — ${status.teamCap}/${status.teamCap} teams`
        : `${status.teamsRegistered}/${status.teamCap} teams registered — first come, first served`}
    </span>
  );
}
