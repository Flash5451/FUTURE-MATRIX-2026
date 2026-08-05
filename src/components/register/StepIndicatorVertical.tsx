"use client";

import { Check } from "lucide-react";
import { STEP_LABELS } from "./formTypes";

export default function StepIndicatorVertical({ step }: { step: number }) {
  return (
    <ol className="flex flex-col gap-0">
      {STEP_LABELS.map((label, i) => {
        const n = i + 1;
        const state = n < step ? "done" : n === step ? "current" : "upcoming";
        return (
          <li key={label} className="relative flex gap-3 pb-6 last:pb-0">
            {i < STEP_LABELS.length - 1 && (
              <span
                aria-hidden="true"
                className={`absolute left-[15px] top-8 h-full w-px transition-colors duration-500 ${
                  n < step ? "bg-cyan/50" : "bg-white/10"
                }`}
              />
            )}
            <span
              className={`z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs transition-colors duration-300 ${
                state === "done" ? "border-cyan bg-cyan text-bg" :
                state === "current" ? "glow-border border-cyan text-cyan" :
                "border-white/15 text-white/30"
              }`}
            >
              {state === "done" ? <Check size={14} /> : n}
            </span>
            <span className={`pt-1.5 font-mono text-xs uppercase tracking-wide ${state === "upcoming" ? "text-white/30" : "text-white/75"}`}>
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
