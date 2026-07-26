"use client";

import { RegisterFormData } from "../formTypes";
import { CounterField } from "../FormFields";

export default function Step4Solution({
  data, set,
}: { data: RegisterFormData; set: (patch: Partial<RegisterFormData>) => void }) {
  return (
    <div className="space-y-4">
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
