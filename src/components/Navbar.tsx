"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#tracks", label: "Tracks" },
  { href: "#problems", label: "Problems" },
  { href: "#timeline", label: "Timeline" },
  { href: "#rules", label: "Rules" },
  { href: "#schedule", label: "Schedule" },
  { href: "#prizes", label: "Prizes" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel !rounded-none !border-x-0 !border-t-0" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <span className="hex-frame hex-badge flex h-8 w-8 items-center justify-center overflow-hidden bg-bg">
            <Image src="/logos/future-matrix-logo.png" alt="Future Matrix Hackathon logo" width={32} height={32} className="h-full w-full object-cover" />
          </span>
          FUTURE&nbsp;MATRIX
        </a>

        <ul className="hidden lg:flex items-center gap-6 text-sm text-white/70 font-mono">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="group relative py-1 transition-colors hover:text-cyan">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cyan shadow-[0_0_8px_var(--cyan)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <Link
          href="/register"
          className="magnetic-btn glow-border hidden lg:inline-flex items-center rounded-full border border-cyan/40 bg-cyan/5 px-5 py-2 text-sm font-medium text-cyan transition-colors hover:bg-cyan hover:text-bg"
        >
          Register
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden text-white"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass-panel lg:hidden !border-x-0 !border-t-0 px-6 py-4 flex flex-col gap-4 font-mono text-sm">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-cyan">
              {l.label}
            </a>
          ))}
          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="text-cyan border border-cyan/40 rounded-full px-4 py-2 text-center"
          >
            Register
          </Link>
        </div>
      )}
    </header>
  );
}
