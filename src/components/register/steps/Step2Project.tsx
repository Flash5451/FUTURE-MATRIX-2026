"use client";

import { Cpu, Code2 } from "lucide-react";
import { RegisterFormData, DOMAINS } from "../formTypes";
import { Field, SelectField, Label } from "../FormFields";

const TRACK_OPTIONS = [
  { key: "Hardware" as const, icon: Cpu, blurb: "Physical prototype — embedded, IoT, robotics." },
  { key: "Software" as const, icon: Code2, blurb: "Software solution — apps, AI/ML, platforms." },
];

export default function Step2Project({
  data, set,
}: { data: RegisterFormData; set: (patch: Partial<RegisterFormData>) => void }) {
  return (
    <div className="space-y-5">
      <Field label="Project Title" required value={data.projectTitle}
        onChange={(e) => set({ projectTitle: e.target.value })} placeholder="Enter your project title" />

      <div>
        <Label required>Track</Label>
        <span className="mb-1.5 block text-xs font-normal text-white/35">Choose the track your project belongs to — this decides the problem statements shown next.</span>
        <div className="grid gap-2 sm:grid-cols-2">
          {TRACK_OPTIONS.map(({ key, icon: Icon, blurb }) => {
            const selected = data.track === key;
            return (
              <button
                key={key} type="button"
                onClick={() => set({ track: key, problemStatementId: "" })}
                className={`tilt-card rounded-lg border p-4 text-left transition-colors ${
                  selected ? "glow-border border-cyan bg-cyan/10" : "glass-panel hover:border-white/25"
                }`}
              >
                <Icon size={18} className={selected ? "text-cyan" : "text-white/60"} />
                <p className="mt-2 font-display text-sm font-medium">{key}</p>
                <p className="mt-0.5 text-xs text-white/40">{blurb}</p>
              </button>
            );
          })}
        </div>
      </div>

      <SelectField label="Domain" required options={DOMAINS} value={data.domain}
        onChange={(e) => set({ domain: e.target.value })} />
    </div>
  );
}
