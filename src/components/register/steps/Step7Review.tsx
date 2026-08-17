"use client";

import { Pencil } from "lucide-react";
import { RegisterFormData } from "../formTypes";
import { findProblemStatement } from "@/lib/problemStatements";

function ReviewGroup({
  title, step, onEdit, rows,
}: { title: string; step: number; onEdit: (s: number) => void; rows: [string, string][] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-panel/40 p-4">
      <div className="flex items-center justify-between">
        <h4 className="font-mono text-[11px] uppercase tracking-widest text-cyan">{title}</h4>
        <button type="button" onClick={() => onEdit(step)} className="flex items-center gap-1 text-xs text-white/40 hover:text-cyan">
          <Pencil size={12} /> Edit
        </button>
      </div>
      <dl className="mt-3 space-y-1.5">
        {rows.map(([k, v]) => (
          <div key={k} className="flex gap-2 text-sm">
            <dt className="text-white/40">{k}:</dt>
            <dd className="truncate text-white/75">{v || "—"}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Step7Review({
  data, set, goToStep, onSaveDraft, draftSaved,
}: {
  data: RegisterFormData; set: (patch: Partial<RegisterFormData>) => void;
  goToStep: (s: number) => void; onSaveDraft: () => void; draftSaved: boolean;
}) {
  const selectedProblem = findProblemStatement(data.problemStatementId);

  return (
    <div className="space-y-4">
      <ReviewGroup title="Team Details" step={1} onEdit={goToStep} rows={[
        ["Team Name", data.teamName],
        ["Team Leader", `${data.leaderName} (${data.leaderEmail})`],
        ["Team Members", `${data.members.length + 1} total (1 leader + ${data.members.length})`],
      ]} />
      <ReviewGroup title="Project & Problem" step={2} onEdit={goToStep} rows={[
        ["Project Title", data.projectTitle],
        ["Domain", data.domain],
        ["Track", data.track],
        ["Problem Statement", selectedProblem ? `${selectedProblem.title} (${selectedProblem.id})` : "Not selected"],
        ["Problem Explanation", data.problem.slice(0, 60) + (data.problem.length > 60 ? "…" : "")],
      ]} />
      <ReviewGroup title="Abstract & Solution" step={3} onEdit={goToStep} rows={[
        ["Abstract", data.abstract.slice(0, 60) + (data.abstract.length > 60 ? "…" : "")],
        ["Expected Deliverables", data.deliverables.slice(0, 60) + (data.deliverables.length > 60 ? "…" : "")],
        ["Proposed Solution", data.solution.slice(0, 60) + (data.solution.length > 60 ? "…" : "")],
      ]} />
      <ReviewGroup title="Technical" step={4} onEdit={goToStep} rows={[
        ["Technologies", data.tech.slice(0, 60) + (data.tech.length > 60 ? "…" : "")],
        [data.track === "Hardware" ? "Hardware Components" : "Implementation", data.track === "Hardware" ? `${data.components.filter((c) => c.name.trim()).length} added` : "Software architecture / stack provided"],
      ]} />
      <ReviewGroup title="Documents" step={5} onEdit={goToStep} rows={[
        ["Abstract Link", data.abstractFileUrl ? "✓ Link added" : "Not added"],
        ["PPT Link", data.pptFileUrl ? "✓ Link added" : "Not added"],
      ]} />

      <button
        type="button"
        onClick={onSaveDraft}
        className="text-xs font-medium text-white/50 underline decoration-dotted hover:text-cyan"
      >
        {draftSaved ? "✓ Draft saved" : "Save Draft"}
      </button>

      <div className="rounded-lg border border-amber-400/25 bg-amber-400/5 p-4 text-xs leading-6 text-amber-200/90">
        <span className="font-semibold text-amber-300">Note:</span> Registration is free. If your
        team is shortlisted, each member pays ₹236 (₹708 total per team of 3), inclusive of 18% GST, to confirm your slot.
      </div>

      <label className="flex items-start gap-3 rounded-lg border border-white/10 bg-panel/40 p-4 text-sm text-white/70">
        <input
          type="checkbox" checked={data.declaration}
          onChange={(e) => set({ declaration: e.target.checked })}
          className="mt-0.5 h-4 w-4 shrink-0 accent-cyan"
        />
        I confirm that I have entered all the necessary information, reviewed all responses and
        uploaded documents, and certify that the information provided is complete and accurate.
      </label>
    </div>
  );
}
