"use client";

import { Plus, Trash2 } from "lucide-react";
import { RegisterFormData, emptyComponent } from "../formTypes";
import { CounterField } from "../FormFields";

export default function Step5Technical({
  data, set,
}: { data: RegisterFormData; set: (patch: Partial<RegisterFormData>) => void }) {
  function updateRow(i: number, patch: Partial<{ name: string; spec: string; qty: string }>) {
    set({ components: data.components.map((c, idx) => (idx === i ? { ...c, ...patch } : c)) });
  }
  function removeRow(i: number) {
    set({ components: data.components.filter((_, idx) => idx !== i) });
  }

  return (
    <div className="space-y-6">
      <CounterField
        label="Technologies / Frameworks Used" required mode="chars" max={750} rows={4}
        value={data.tech} onChange={(e) => set({ tech: e.target.value })}
        placeholder="Technologies, programming languages, frameworks, platforms, protocols, development tools, AI/ML, cloud, embedded systems, IoT, etc."
      />

      {data.track === "Hardware" ? (
      <div>
        <span className="mb-1.5 block text-xs font-medium text-white/60">
          Hardware Components <span className="text-cyan">*</span>
          <span className="ml-2 font-normal text-white/35">Required for Hardware Track</span>
        </span>

        <div className="space-y-2">
          {data.components.map((c, i) => (
            <div key={i} className="grid grid-cols-[1fr_1fr_70px_28px] gap-2">
              <input
                value={c.name} onChange={(e) => updateRow(i, { name: e.target.value })}
                placeholder="Component Name"
                className="rounded-lg border border-white/15 bg-bg/60 px-3 py-2 text-sm outline-none focus:border-cyan/60"
              />
              <input
                value={c.spec} onChange={(e) => updateRow(i, { spec: e.target.value })}
                placeholder="Model / Spec"
                className="rounded-lg border border-white/15 bg-bg/60 px-3 py-2 text-sm outline-none focus:border-cyan/60"
              />
              <input
                value={c.qty} onChange={(e) => updateRow(i, { qty: e.target.value })}
                placeholder="Qty"
                className="rounded-lg border border-white/15 bg-bg/60 px-3 py-2 text-sm outline-none focus:border-cyan/60"
              />
              <button type="button" onClick={() => removeRow(i)} className="flex items-center justify-center text-white/40 hover:text-red-400">
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => set({ components: [...data.components, emptyComponent()] })}
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan/40 px-4 py-2 text-xs font-medium text-cyan hover:bg-cyan/10"
        >
          <Plus size={14} /> Add Component
        </button>

        <p className="mt-2 text-xs text-white/35">
          e.g. microcontrollers, sensors, actuators, communication modules, dev boards, cameras, motors/drivers, power systems
        </p>
      </div>
      ) : (
        <div className="rounded-xl border border-cyan/20 bg-cyan/5 p-5">
          <p className="font-display text-sm font-semibold text-cyan">Software Track</p>
          <p className="mt-2 text-sm leading-6 text-white/55">Hardware components are not required. Clearly describe your software architecture, frameworks, platforms, APIs, datasets, cloud services, models, and development tools in the Technologies / Frameworks field above.</p>
        </div>
      )}
    </div>
  );
}
