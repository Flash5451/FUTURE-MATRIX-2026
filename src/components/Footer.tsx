import { Camera, Briefcase, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display text-sm text-white/50">
          Future Matrix 2026 — IEEE Student Branch &amp; IEEE SSIT & IEEE ComSoc
        </p>
        <div className="flex gap-4 text-white/50">
          <a href="#" aria-label="Instagram" className="hover:text-cyan"><Camera size={18} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-cyan"><Briefcase size={18} /></a>
          <a href="mailto:futurematrix2026@ieee.org" aria-label="Email" className="hover:text-cyan"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
