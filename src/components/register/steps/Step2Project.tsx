"use client";

import { useEffect, useState } from "react";
import { Cpu, Code2, Lock } from "lucide-react";
import { RegisterFormData, DOMAINS } from "../formTypes";
import { Field, SelectField, CounterField, Label } from "../FormFields";
import { TRACK_CAP } from "@/lib/registration/capacity";

type TrackStatus = { registered: number; cap: number; full: boolean };
type Status = Record<"Hardware" | "Software", TrackStatus>;

const TRACK_OPTIONS = [
  { key: "Hardware" as const, icon: Cpu, blurb: "Physical prototype — embedded, IoT, robotics." },
  { key: "Software" as const, icon: Code2, blurb: "Software solution — apps, AI/ML, platforms." },
];

export default function Step2Project({
  data, set,
}: { data: RegisterFormData; set: (patch: Partial<RegisterFormData>) => void }) {
  const [tracks, setTracks] = useState<Status | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/registration-status");
        const json = await res.json();
        if (!cancelled && json.success) setTracks(json.tracks);
      } catch {
        // Non-fatal — the server re-checks capacity on submit regardless.
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="space-y-5">
      <Field label="Project Title" required value={data.projectTitle}
        onChange={(e) => set({ projectTitle: e.target.value })} placeholder="Enter your project title" />

      <div>
        <Label required>Track</Label>
        <span className="mb-1.5 block text-xs font-normal text-white/35">Max {TRACK_CAP} teams per track</span>
        <div className="grid gap-2 sm:grid-cols-2">
          {TRACK_OPTIONS.map(({ key, icon: Icon, blurb }) => {
            const status = tracks?.[key];
            const full = status?.full ?? false;
            const selected = data.track === key;
            return (
              <button
                key={key} type="button" disabled={full}
                onClick={() => set({ track: key })}
                className={`rounded-lg border p-4 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
                  selected ? "border-cyan bg-cyan/10" : "border-white/10 bg-panel/40 hover:border-white/25"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <Icon size={18} className={selected ? "text-cyan" : "text-white/60"} />
                  <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] ${
                    full ? "border-red-400/40 text-red-400" : "border-white/15 text-white/50"
                  }`}>
                    {full ? (<><Lock size={10} /> FULL</>) : status ? `${status.registered}/${status.cap}` : "…"}
                  </span>
                </div>
                <p className="mt-2 font-display text-sm font-medium">{key}</p>
                <p className="mt-0.5 text-xs text-white/40">{blurb}</p>
              </button>
            );
          })}
        </div>
      </div>

      <SelectField label="Domain" required options={DOMAINS} value={data.domain}
        onChange={(e) => set({ domain: e.target.value })} />

      <CounterField
        label="Project Abstract" required mode="words" max={500} rows={6}
        value={data.abstract} onChange={(e) => set({ abstract: e.target.value })}
        placeholder="Cover the problem, proposed solution, key innovation, technologies involved, and expected impact. (300–500 words)"
      />

      <CounterField
        label="Expected Deliverables" required mode="chars" max={750} rows={4}
        value={data.deliverables} onChange={(e) => set({ deliverables: e.target.value })}
        placeholder="What will your team develop and demonstrate by the end of the hackathon?"
      />
    </div>
  );
}
