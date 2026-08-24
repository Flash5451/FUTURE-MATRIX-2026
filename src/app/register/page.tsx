import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Registration Closed | Future Matrix 2026",
  description: "Registration for Future Matrix 2026 is closed.",
};

export default function RegisterPage() {
  return (
    <main className="pcb-grid min-h-screen flex items-center justify-center px-6 py-24">
      <div className="glass-panel w-full max-w-xl rounded-2xl border border-white/10 p-8 text-center sm:p-12">
        <Link href="/" className="mx-auto flex w-fit items-center gap-2 font-display text-sm font-semibold tracking-tight text-white/70 hover:text-cyan">
          <span className="hex-frame hex-badge flex h-8 w-8 items-center justify-center overflow-hidden bg-bg">
            <Image src="/logos/future-matrix-logo.png" alt="Future Matrix Hackathon logo" width={32} height={32} className="h-full w-full object-cover" />
          </span>
          FUTURE MATRIX
        </Link>
        <div className="mx-auto mt-10 flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-300">
          <Lock size={28} />
        </div>
        <p className="mt-7 font-mono text-xs uppercase tracking-[0.25em] text-amber-300">Registration Closed</p>
        <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Registrations are now closed.</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/55">Thank you for your interest in Future Matrix 2026. The registration window has ended and new team submissions are no longer being accepted.</p>
        <Link href="/" className="magnetic-btn mt-8 inline-flex rounded-full border border-cyan/40 bg-cyan/5 px-6 py-3 text-sm font-semibold text-cyan hover:bg-cyan hover:text-bg">
          Back to Website
        </Link>
      </div>
    </main>
  );
}
