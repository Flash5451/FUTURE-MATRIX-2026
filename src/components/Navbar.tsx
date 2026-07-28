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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-cyan/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <Image src="/logos/future-matrix-logo.png" alt="Future Matrix Hackathon logo" width={32} height={32} className="h-8 w-8 object-contain" />
          FUTURE&nbsp;MATRIX
        </a>

        <ul className="hidden lg:flex items-center gap-6 text-sm text-white/70 font-mono">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-cyan transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Link
          href="/register"
          className="hidden lg:inline-flex items-center rounded-full border border-cyan/40 px-5 py-2 text-sm font-medium text-cyan hover:bg-cyan hover:text-bg transition-colors"
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
        <div className="lg:hidden bg-bg border-t border-cyan/10 px-6 py-4 flex flex-col gap-4 font-mono text-sm">
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
