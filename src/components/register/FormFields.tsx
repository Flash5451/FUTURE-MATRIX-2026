"use client";

import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const base =
  "w-full rounded-lg border border-white/15 bg-bg/60 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan/60 transition-colors";

export function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <span className="mb-1.5 block text-xs font-medium text-white/60">
      {children} {required && <span className="text-cyan">*</span>}
    </span>
  );
}

export function Field({
  label, required, ...props
}: { label: string; required?: boolean } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <Label required={required}>{label}</Label>
      <input {...props} required={required} className={base} />
    </label>
  );
}

export function SelectField({
  label, required, options, ...props
}: { label: string; required?: boolean; options: string[] } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <Label required={required}>{label}</Label>
      <select {...props} required={required} className={base}>
        <option value="" disabled>Select {label}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

export function CounterField({
  label, required, value, max, mode = "chars", ...props
}: {
  label: string; required?: boolean; value: string; max: number; mode?: "chars" | "words";
} & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const count = mode === "words" ? (value.trim() ? value.trim().split(/\s+/).length : 0) : value.length;
  const over = count > max;
  return (
    <label className="block">
      <Label required={required}>{label}</Label>
      <textarea
        {...props}
        value={value}
        required={required}
        maxLength={mode === "chars" ? max : undefined}
        className={`${base} resize-y`}
      />
      <span className={`mt-1 block text-right font-mono text-[11px] ${over ? "text-red-400" : "text-white/35"}`}>
        {count} / {max} {mode}
      </span>
    </label>
  );
}
