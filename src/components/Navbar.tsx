"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Info, Cpu, Radar, History, ShieldCheck, CalendarClock,
  Trophy, HelpCircle, Mail, ArrowUpRight,
} from "lucide-react";

const LINKS = [
  { href: "#about", label: "About", icon: Info },
  { href: "#tracks", label: "Tracks", icon: Cpu },
  { href: "#problems", label: "Problems", icon: Radar },
  { href: "#timeline", label: "Timeline", icon: History },
  { href: "#rules", label: "Rules", icon: ShieldCheck },
  { href: "#schedule", label: "Schedule", icon: CalendarClock },
  { href: "#prizes", label: "Prizes", icon: Trophy },
  { href: "#faq", label: "FAQ", icon: HelpCircle },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  // scroll-spy: highlight the rail entry for whichever section is centered
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeLabel = LINKS.find((l) => l.href === `#${activeId}`)?.label ?? "Home";

  return (
    <>
      {/* ---------- desktop: fixed vertical command rail ---------- */}
      <aside className="glass-panel !rounded-none !border-y-0 !border-l-0 fixed inset-y-0 left-0 z-50 hidden w-20 flex-col items-center py-6 lg:flex">
        <Link href="#top" aria-label="Future Matrix — top" className="hex-frame hex-badge flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden bg-bg">
          <Image src="/logos/future-matrix-logo.png" alt="Future Matrix Hackathon logo" width={44} height={44} className="h-full w-full object-cover" />
        </Link>

        <span aria-hidden="true" className="mt-6 h-px w-8 bg-white/10" />

        <nav className="mt-6 flex flex-1 flex-col items-center gap-1.5">
          {LINKS.map((l) => {
            const isActive = activeId === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`group relative flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${
                  isActive
                    ? "glow-border border-cyan/50 bg-cyan/10 text-cyan"
                    : "border-transparent text-white/45 hover:border-white/15 hover:text-white/80"
                }`}
              >
                <l.icon size={17} strokeWidth={1.75} />
                <span
                  aria-hidden="true"
                  className={`absolute left-0 h-5 w-[3px] -translate-x-[calc(100%+8px)] rounded-full bg-cyan transition-opacity duration-300 ${
                    isActive ? "opacity-100 shadow-[0_0_10px_var(--cyan)]" : "opacity-0"
                  }`}
                />
                <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md border border-white/10 bg-bg/95 px-2.5 py-1.5 font-mono text-[11px] tracking-wide text-white/80 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
                  {l.label}
                </span>
              </a>
            );
          })}
        </nav>

        <span aria-hidden="true" className="mb-6 h-px w-8 bg-white/10" />

        <Link
          href="/register"
          aria-label="Register"
          className="magnetic-btn glow-border flex h-11 w-11 items-center justify-center rounded-xl bg-cyan text-bg"
        >
          <ArrowUpRight size={18} strokeWidth={2} />
        </Link>
      </aside>

      {/* ---------- top status strip ---------- */}
      <header className="glass-panel !rounded-none !border-x-0 !border-t-0 fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between px-4 sm:px-6 lg:left-20 lg:h-12">
        <a href="#top" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight lg:hidden">
          <span className="hex-frame hex-badge flex h-8 w-8 items-center justify-center overflow-hidden bg-bg">
            <Image src="/logos/future-matrix-logo.png" alt="Future Matrix Hackathon logo" width={32} height={32} className="h-full w-full object-cover" />
          </span>
          FUTURE&nbsp;MATRIX
        </a>

        <div className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 lg:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_8px_var(--green)]" aria-hidden="true" />
          <span>Section // {activeLabel}</span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/register"
            className="magnetic-btn glow-border hidden items-center rounded-full border border-cyan/40 bg-cyan/5 px-5 py-1.5 text-xs font-medium text-cyan transition-colors hover:bg-cyan hover:text-bg sm:inline-flex lg:hidden"
          >
            Register
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-white lg:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ---------- mobile: slide-in nav drawer ---------- */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-bg/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel !rounded-none !border-y-0 !border-r-0 absolute inset-y-0 right-0 flex w-72 flex-col gap-1 overflow-y-auto px-4 py-6"
            >
              <span className="mb-2 px-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">Navigate</span>
              {LINKS.map((l) => {
                const isActive = activeId === l.href.slice(1);
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`chip-card flex items-center gap-3 rounded-lg border px-3 py-2.5 font-mono text-sm transition-colors ${
                      isActive ? "border-cyan/40 bg-cyan/10 text-cyan" : "border-white/10 text-white/70 hover:border-white/25"
                    }`}
                  >
                    <l.icon size={16} strokeWidth={1.75} />
                    {l.label}
                  </a>
                );
              })}
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="glow-border mt-4 flex items-center justify-center gap-2 rounded-full bg-cyan px-4 py-2.5 text-center text-sm font-semibold text-bg"
              >
                Register <ArrowUpRight size={15} />
              </Link>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
