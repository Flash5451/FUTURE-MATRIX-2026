"use client";


import { RegisterFormData, Member, YEARS } from "../formTypes";
import { Field, SelectField } from "../FormFields";

export default function Step1Team({
  data, set,
}: { data: RegisterFormData; set: (patch: Partial<RegisterFormData>) => void }) {
  function updateMember(i: number, patch: Partial<Member>) {
    const members = data.members.map((m, idx) => (idx === i ? { ...m, ...patch } : m));
    set({ members });
  }


  return (
    <div className="space-y-8">
      <Field label="Team Name" required value={data.teamName}
        onChange={(e) => set({ teamName: e.target.value })} placeholder="Enter your team name" />

      <div>
        <h3 className="font-display text-sm font-semibold text-cyan">Team Leader Details</h3>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <Field label="Full Name" required value={data.leaderName}
            onChange={(e) => set({ leaderName: e.target.value })} />
          <Field label="Email Address" required type="email" value={data.leaderEmail}
            onChange={(e) => set({ leaderEmail: e.target.value })} />
          <Field label="Mobile Number" required type="tel" value={data.leaderMobile}
            onChange={(e) => set({ leaderMobile: e.target.value })} />
          <Field label="Department" required value={data.leaderDept}
            onChange={(e) => set({ leaderDept: e.target.value })} />
          <SelectField label="Year of Study" required options={YEARS} value={data.leaderYear}
            onChange={(e) => set({ leaderYear: e.target.value })} />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-display text-sm font-semibold text-cyan">Team Members</h3>
          <span className="text-xs text-white/40">Fixed team size: 3 members total (1 leader + 2 members)</span>
        </div>

        <div className="mt-3 space-y-4">
          {data.members.map((m, i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-panel/40 p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-white/40">Team Member {i + 2}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-cyan/60">Required</span>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <Field label="Full Name" value={m.name} onChange={(e) => updateMember(i, { name: e.target.value })} />
                <Field label="Email Address" type="email" value={m.email} onChange={(e) => updateMember(i, { email: e.target.value })} />
                <Field label="Mobile Number" type="tel" value={m.mobile} onChange={(e) => updateMember(i, { mobile: e.target.value })} />
                <Field label="Department" value={m.department} onChange={(e) => updateMember(i, { department: e.target.value })} />
                <SelectField label="Year of Study" options={YEARS} value={m.year} onChange={(e) => updateMember(i, { year: e.target.value })} />
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}
