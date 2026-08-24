"use client";

import { useEffect, useState } from "react";
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
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "glass-panel !rounded-none !border-x-0 !border-t-0"
          : "border-transparent bg-gradient-to-b from-bg/80 via-bg/45 to-transparent backdrop-blur-sm"
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
          {LINKS.map((l) => {
            const isActive = activeId === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`group relative py-1 transition-colors ${isActive ? "text-cyan" : "hover:text-cyan"}`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-cyan shadow-[0_0_8px_var(--cyan)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <span className="hidden lg:inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/5 px-5 py-2 text-sm font-medium text-amber-300">
          Registration Closed
        </span>

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
          <span className="text-amber-300 border border-amber-400/40 rounded-full px-4 py-2 text-center">
            Registration Closed
          </span>
        </div>
      )}
    </header>
  );
}
