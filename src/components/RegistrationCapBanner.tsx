import { Lock } from "lucide-react";

export default function RegistrationCapBanner() {
  return (
    <span className="glow-border inline-flex flex-wrap items-center gap-2 rounded-md border border-amber-400/30 bg-amber-400/5 px-4 py-1.5 font-mono text-xs text-amber-200">
      <Lock size={13} />
      <span>Registration Closed</span>
      <span className="text-white/30">— entries are no longer being accepted</span>
    </span>
  );
}
