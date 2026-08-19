"use client";

import { useEffect, useState } from "react";
import { Lock, Cpu, Code2 } from "lucide-react";
import { RegisterFormData } from "../formTypes";
import { CounterField } from "../FormFields";
import { PROBLEM_STATEMENTS, MAX_TEAMS_PER_PROBLEM } from "@/lib/problemStatements";

type Availability = { id: string; filled: number; capacity: number; full: boolean };

export default function Step3Problem({
  data, set,
}: { data: RegisterFormData; set: (patch: Partial<RegisterFormData>) => void }) {
  const [availability, setAvailability] = useState<Record<string, Availability>>({});
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/problem-statements");
        const json = await res.json();
        if (cancelled) return;
        if (json.success) {
          const map: Record<string, Availability> = {};
          for (const p of json.problemStatements as Availability[]) map[p.id] = p;
          setAvailability(map);
        } else {
          setLoadError("Could not load live availability. Selection is re-checked on submit.");
        }
      } catch {
        if (!cancelled) setLoadError("Could not load live availability. Selection is re-checked on submit.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
          <span className="block text-xs font-medium text-white/60">
            Select a Problem Statement <span className="text-cyan">*</span>
            <span className="ml-2 font-normal text-white/35">
              Max {MAX_TEAMS_PER_PROBLEM} teams per problem statement
            </span>
          </span>
          <a
            href="/#problems"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-medium text-cyan underline decoration-dotted hover:text-cyan/80"
          >
            Browse all problem statements ↗
          </a>
        </div>

        {loadError && <p className="mb-3 text-xs text-amber-400">{loadError}</p>}

        <div className="grid gap-2 sm:grid-cols-2">
          {PROBLEM_STATEMENTS.map((p) => {
            const avail = availability[p.id];
            const filled = avail?.filled ?? 0;
            const full = avail?.full ?? false;
            const selected = data.problemStatementId === p.id;
            const TrackIcon = p.track === "Hardware" ? Cpu : Code2;
            return (
              <button
                key={p.id} type="button" disabled={full || loading}
                onClick={() => set({ problemStatementId: p.id, track: p.track })}
                className={`rounded-lg border p-3 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
                  selected ? "border-cyan bg-cyan/10" : "border-white/10 bg-panel/40 hover:border-white/25"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-white/45">
                    <TrackIcon size={11} /> {p.track}
                  </span>
                  <span className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] ${
                    full ? "border-red-400/40 text-red-400" : "border-white/15 text-white/50"
                  }`}>
                    {full ? (<><Lock size={10} /> FULL</>) : `${filled}/${MAX_TEAMS_PER_PROBLEM}`}
                  </span>
                </div>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-cyan/80">{p.sdg}</p>
                <p className="mt-1 font-display text-sm font-medium leading-tight">{p.title}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/45">{p.problem}</p>
              </button>
            );
          })}
        </div>
      </div>

      <CounterField
        label="Explain the specific real-world problem your project addresses" required
        mode="chars" max={1000} rows={8}
        value={data.problem} onChange={(e) => set({ problem: e.target.value })}
        placeholder="What is the problem? Who is affected? Why does it matter? What limitation exists in current approaches?"
      />
      <ul className="grid gap-1.5 text-xs text-white/40 sm:grid-cols-2">
        <li>• What is the problem?</li>
        <li>• Who is affected?</li>
        <li>• Why does it matter?</li>
        <li>• What limitation exists today?</li>
      </ul>
    </div>
  );
}
