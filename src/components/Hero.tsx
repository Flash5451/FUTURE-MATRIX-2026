"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, FileDown } from "lucide-react";
import Countdown from "./Countdown";
import RegistrationCapBanner from "./RegistrationCapBanner";

const WORDS = ["Build.", "Prototype.", "Innovate."];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center bg-no-repeat pt-16"
      style={{ backgroundImage: 'url("/veltech-campus.png")' }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/35 to-bg" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm tracking-widest text-cyan"
        >
          IEEE STUDENT BRANCH &times; IEEE SSIT & IEEE ComSoc
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-5xl font-semibold leading-[1.05] sm:text-7xl"
        >
          FUTURE MATRIX <span className="text-cyan glow-text">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 max-w-xl font-display text-xl text-white/80 sm:text-2xl"
        >
          A National-Level 24-Hour IEEE Hardware & Software Hackathon
        </motion.p>

        <div className="mt-6 flex gap-3 font-display text-2xl font-medium sm:text-3xl">
          {WORDS.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
              className={i === 1 ? "text-purple" : i === 2 ? "text-green" : "text-white"}
            >
              {w}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10"
        >
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78 }}
          className="mt-6"
        >
          <RegistrationCapBanner />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/register"
            className="glow-border rounded-full bg-cyan px-7 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            Register Now
          </Link>
          <a
            href="/future-matrix-rulebook.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white/80 transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <FileDown size={16} /> Download Rulebook
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-cyan"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
