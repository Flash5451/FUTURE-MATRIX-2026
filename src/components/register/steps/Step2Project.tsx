"use client";

import { RegisterFormData, DOMAINS } from "../formTypes";
import { Field, SelectField, CounterField } from "../FormFields";

export default function Step2Project({
  data, set,
}: { data: RegisterFormData; set: (patch: Partial<RegisterFormData>) => void }) {
  return (
    <div className="space-y-5">
      <Field label="Project Title" required value={data.projectTitle}
        onChange={(e) => set({ projectTitle: e.target.value })} placeholder="Enter your project title" />

      <SelectField label="Track" required options={["Hardware", "Software"]} value={data.track}
        onChange={(e) => set({ track: e.target.value })} />

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
