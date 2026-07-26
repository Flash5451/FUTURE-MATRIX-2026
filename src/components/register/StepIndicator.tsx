"use client";

import { Check } from "lucide-react";
import { STEP_LABELS } from "./formTypes";

export default function StepIndicator({ step }: { step: number }) {
  return (
    <div>
      {/* mobile */}
      <div className="flex items-center justify-between sm:hidden">
        <span className="font-mono text-xs text-cyan">Step {step} / 7</span>
        <span className="font-display text-sm font-medium">{STEP_LABELS[step - 1]}</span>
      </div>
      <div className="mt-2 h-1 w-full rounded-full bg-white/10 sm:hidden">
        <div className="h-1 rounded-full bg-cyan transition-all" style={{ width: `${(step / 7) * 100}%` }} />
      </div>

      {/* desktop */}
      <div className="hidden items-start sm:flex">
        {STEP_LABELS.map((label, i) => {
          const n = i + 1;
          const state = n < step ? "done" : n === step ? "current" : "upcoming";
          return (
            <div key={label} className="flex flex-1 flex-col items-center last:flex-none">
              <div className="flex w-full items-center">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs ${
                    state === "done" ? "border-cyan bg-cyan text-bg" :
                    state === "current" ? "border-cyan text-cyan glow-border" :
                    "border-white/15 text-white/30"
                  }`}
                >
                  {state === "done" ? <Check size={14} /> : n}
                </div>
                {n < 7 && (
                  <div className={`mx-1 h-px flex-1 ${n < step ? "bg-cyan/50" : "bg-white/10"}`} />
                )}
              </div>
              <span className={`mt-2 text-center font-mono text-[10px] uppercase tracking-wide ${
                state === "upcoming" ? "text-white/30" : "text-white/70"
              }`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
