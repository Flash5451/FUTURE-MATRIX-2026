"use client";

import { FileText, Presentation, ExternalLink } from "lucide-react";
import { RegisterFormData, isLikelyUrl } from "../formTypes";

function LinkField({
  label, hint, icon: Icon, value, onChange,
}: {
  label: string; hint: string; icon: typeof FileText;
  value: string; onChange: (v: string) => void;
}) {
  const touched = value.length > 0;
  const valid = isLikelyUrl(value);
  return (
    <div>
      <span className="mb-1.5 flex items-center gap-2 text-xs font-medium text-white/60">
        <Icon size={14} className="text-cyan" /> {label} <span className="text-cyan">*</span>
      </span>
      <input
        type="url" value={value} onChange={(e) => onChange(e.target.value)}
        placeholder="https://drive.google.com/file/d/..."
        className={`w-full rounded-lg border bg-panel/40 px-4 py-3 text-sm text-white/90 outline-none placeholder:text-white/25 focus:border-cyan/50 ${
          touched && !valid ? "border-red-400/40" : "border-white/10"
        }`}
      />
      {touched && !valid && (
        <p className="mt-1.5 text-xs text-red-400">That doesn&apos;t look like a valid link.</p>
      )}
      {touched && valid && (
        <a href={value} target="_blank" rel="noopener noreferrer" className="mt-1.5 inline-flex items-center gap-1 text-xs text-cyan/70 hover:text-cyan">
          <ExternalLink size={11} /> Open link to double-check it works
        </a>
      )}
      <p className="mt-1.5 text-xs text-white/35">{hint}</p>
    </div>
  );
}

export default function Step6Documents({
  data, set,
}: { data: RegisterFormData; set: (patch: Partial<RegisterFormData>) => void }) {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-cyan/20 bg-cyan/5 p-4 text-xs leading-6 text-white/60">
        Upload your Abstract PDF and Presentation to Google Drive yourself, set sharing to
        <span className="text-white/85"> &ldquo;Anyone with the link can view&rdquo;</span>, then paste each
        share link below. Double-check the link opens in a private/incognito window before submitting —
        that&apos;s what reviewers will see.
      </div>

      <LinkField
        label="Project Abstract — Drive Link" hint="PDF · 300–500 words" icon={FileText}
        value={data.abstractFileUrl} onChange={(v) => set({ abstractFileUrl: v })}
      />
      <LinkField
        label="Project Presentation (PPT) — Drive Link" hint="PPT / PPTX / PDF · max 6 slides" icon={Presentation}
        value={data.pptFileUrl} onChange={(v) => set({ pptFileUrl: v })}
      />

      <div className="rounded-lg border border-white/10 bg-panel/40 p-4 text-xs text-white/45">
        Your PPT should cover: project title &amp; team, problem statement, proposed solution, technical
        approach/architecture, innovation, technical implementation, and expected deliverables, impact, feasibility &amp; future scope.
      </div>
    </div>
  );
}
