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
    <footer className="border-t border-white/10 px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 pb-6"
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
      <div className="mx-auto max-w-6xl px-6 pb-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/30">
          Code Today <span className="text-amber/60">·</span> Build Tomorrow <span className="text-amber/60">·</span> Impact Forever
        </p>
      </div>

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
