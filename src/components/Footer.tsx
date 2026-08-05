"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Briefcase, Mail } from "lucide-react";

const FOOTER_LOGOS = [
  { src: "/logos/future-matrix-logo.png", alt: "Future Matrix Hackathon" },
  { src: "/logos/ieee-logo.png", alt: "IEEE" },
  { src: "/logos/ieee-ssit-logo.png", alt: "IEEE SSIT" },
  { src: "/logos/ieee-comsoc-logo.png", alt: "IEEE ComSoc" },
  { src: "/logos/veltech-logo.png", alt: "Vel Tech" },
  { src: "/logos/naac-category1-badge.png", alt: "NAAC A++ and UGC Category-1" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-sm font-semibold">Future Matrix 2026</p>
          <p className="mt-2 max-w-xs text-xs leading-relaxed text-white/45">
            IEEE Student Branch &amp; IEEE SSIT &amp; IEEE ComSoc — an intra-college 24-hour hardware &amp; software hackathon.
          </p>
        </div>

        <div className="flex flex-col gap-1.5 font-mono text-xs text-white/45">
          <span className="mb-1 flex items-center gap-2 text-white/30">
            <span className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_8px_var(--green)]" aria-hidden="true" /> System Status
          </span>
          <span>Registration <span className="text-green">— OPEN</span></span>
          <span>Hardware Track <span className="text-cyan">— ACTIVE</span></span>
          <span>Software Track <span className="text-cyan">— ACTIVE</span></span>
        </div>

        <div>
          <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/30">Connect</span>
          <div className="flex gap-3 text-white/50">
            <a href="#" aria-label="Instagram" className="chip-card glass-panel flex h-9 w-9 items-center justify-center rounded-lg hover:text-cyan"><Camera size={16} /></a>
            <a href="#" aria-label="LinkedIn" className="chip-card glass-panel flex h-9 w-9 items-center justify-center rounded-lg hover:text-cyan"><Briefcase size={16} /></a>
            <a href="mailto:futurematrix2026@ieee.org" aria-label="Email" className="chip-card glass-panel flex h-9 w-9 items-center justify-center rounded-lg hover:text-cyan"><Mail size={16} /></a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 border-t border-white/10 px-6 py-6"
      >
        {FOOTER_LOGOS.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={40}
            className="h-8 w-auto object-contain opacity-80"
          />
        ))}
      </motion.div>

      <div className="border-t border-white/10 px-6 py-5 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/30">
          Code Today <span className="text-amber/60">·</span> Build Tomorrow <span className="text-amber/60">·</span> Impact Forever
        </p>
      </div>
    </footer>
  );
}
