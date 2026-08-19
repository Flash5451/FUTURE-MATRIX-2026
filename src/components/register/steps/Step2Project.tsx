"use client";

import { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import { RegisterFormData, DOMAINS } from "../formTypes";
import { Field, SelectField, CounterField } from "../FormFields";
import { PROBLEM_STATEMENTS, MAX_TEAMS_PER_PROBLEM, type ProblemStatement } from "@/lib/problemStatements";

type Availability = { id: string; filled: number; capacity: number; full: boolean };

export default function Step2Project({
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

  function selectProblem(p: ProblemStatement) {
    set({ problemStatementId: p.id, track: p.track });
  }

  return (
    <div className="space-y-5">
      <Field label="Project Title" required value={data.projectTitle}
        onChange={(e) => set({ projectTitle: e.target.value })} placeholder="Enter your project title" />

      <SelectField label="Domain" required options={DOMAINS} value={data.domain}
        onChange={(e) => set({ domain: e.target.value })} />

      <div>
        <span className="mb-1.5 block text-xs font-medium text-white/60">
          Select a Problem Statement <span className="text-cyan">*</span>
          <span className="ml-2 font-normal text-white/35">Max {MAX_TEAMS_PER_PROBLEM} teams per problem statement</span>
        </span>

        {loadError && <p className="mt-2 text-xs text-amber-400">{loadError}</p>}

        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {PROBLEM_STATEMENTS.map((p) => {
            const avail = availability[p.id];
            const filled = avail?.filled ?? 0;
            const full = avail?.full ?? false;
            const selected = data.problemStatementId === p.id;
            return (
              <button
                key={p.id} type="button" disabled={full || loading}
                onClick={() => selectProblem(p)}
                className={`relative rounded-lg border p-3 pb-6 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
                  selected ? "border-cyan bg-cyan/10" : "border-white/10 bg-panel/40 hover:border-white/25"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan/80">{p.sdg}</span>
                  <span className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] ${
                    full ? "border-red-400/40 text-red-400" : "border-white/15 text-white/50"
                  }`}>
                    {full ? (<><Lock size={10} /> FULL</>) : `${filled}/${MAX_TEAMS_PER_PROBLEM}`}
                  </span>
                </div>
                <p className="mt-1.5 font-display text-sm font-medium leading-tight">{p.title}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/45">{p.problem}</p>
                <span className="absolute bottom-2 right-2.5 font-mono text-[9px] uppercase tracking-wider text-white/35">
                  {p.track}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <CounterField
        label="Explain the specific real-world problem your project addresses" required
        mode="chars" max={1000} rows={6}
        value={data.problem} onChange={(e) => set({ problem: e.target.value })}
        placeholder="What is the problem? Who is affected? Why does it matter? What limitation exists in current approaches?"
      />

      <CounterField
        label="Expected Deliverables" required mode="chars" max={750} rows={4}
        value={data.deliverables} onChange={(e) => set({ deliverables: e.target.value })}
        placeholder="What will your team develop and demonstrate by the end of the hackathon?"
      />
    </div>
  );
}
