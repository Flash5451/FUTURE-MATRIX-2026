"use client";

import { RegisterFormData } from "../formTypes";
import { CounterField } from "../FormFields";

export default function Step4Solution({
  data, set,
}: { data: RegisterFormData; set: (patch: Partial<RegisterFormData>) => void }) {
  return (
    <div className="space-y-4">
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

      <CounterField
        label="Explain how your project addresses the problem and the value it creates" required
        mode="chars" max={1500} rows={10}
        value={data.solution} onChange={(e) => set({ solution: e.target.value })}
        placeholder="Describe your approach, how it works, key features, what makes it innovative, and the impact you expect."
      />
      <ul className="grid gap-1.5 text-xs text-white/40 sm:grid-cols-2">
        <li>• Proposed approach & how it works</li>
        <li>• Key features</li>
        <li>• Innovation / uniqueness</li>
        <li>• Practical value & expected impact</li>
      </ul>
    </div>
  );
}
