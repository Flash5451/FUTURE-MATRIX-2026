"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Why Hardware", href: "#why-hardware" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prize Pool", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#top" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logos/future-matrix-logo.png"
                alt="Future Matrix"
                width={40}
                height={40}
                className="object-contain drop-shadow-[0_0_8px_rgba(0,217,255,0.3)]"
              />
            </div>
            <span className="font-display text-lg font-bold tracking-tight hidden sm:inline">
              FUTURE<span className="text-cyan">MATRIX</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-sm tracking-wide text-white/70 transition-all duration-300 hover:text-cyan relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan to-purple transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/register"
            className="hidden sm:block btn-primary rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 hover:shadow-lg"
          >
            Register
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-cyan transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden lg:hidden"
        >
          <div className="border-t border-white/10 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-mono text-sm tracking-wide text-white/70 transition-colors duration-300 hover:text-cyan py-2"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/register"
              className="block btn-primary rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-300 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
