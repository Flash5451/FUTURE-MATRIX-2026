"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
        <div className="aurora-bg" />
        <span className="data-stream" style={{ left: "12%", animationDelay: "0s" }} />
        <span className="data-stream" style={{ left: "27%", animationDelay: "1.1s" }} />
        <span className="data-stream" style={{ right: "18%", animationDelay: "0.6s" }} />
        <span className="data-stream" style={{ right: "32%", animationDelay: "1.8s" }} />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-6 py-24 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:max-w-2xl">
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
          FUTURE MATRIX{" "}
          <span className="glitch-text text-cyan glow-text" data-text="2026">
            2026
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 max-w-xl font-display text-xl text-white/80 sm:text-2xl"
        >
          An Intra-College 24-Hour IEEE Hardware & Software Hackathon
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
            className="magnetic-btn glow-border rounded-full bg-cyan px-7 py-3 text-sm font-semibold text-bg"
          >
            Register Now
          </Link>
          <a
            href="/future-matrix-rulebook.pdf"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white/80 transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <FileDown size={16} /> Download Rulebook
          </a>
        </motion.div>
        </div>

        {/* signature 3D element: a rotating holographic core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="perspective-wrap relative hidden h-64 w-64 shrink-0 items-center justify-center sm:flex lg:h-80 lg:w-80"
          aria-hidden="true"
        >
          <div className="float-anim relative h-full w-full [transform-style:preserve-3d]">
            <div className="holo-ring absolute inset-0 rounded-full opacity-70" />
            <div
              className="absolute inset-8 rounded-full border border-white/10"
              style={{ animation: "spin-slow-reverse 14s linear infinite" }}
            />
            <div className="absolute inset-16 rounded-full border border-dashed border-cyan/25" />
            <div className="hex-frame hex-badge scan-sheen glass-panel absolute inset-[24%] flex items-center justify-center overflow-hidden">
              <Image
                src="/logos/future-matrix-logo.png"
                alt="Future Matrix core emblem"
                width={160}
                height={160}
                className="h-[62%] w-[62%] object-contain drop-shadow-[0_0_30px_rgba(0,229,255,0.35)]"
              />
            </div>
          </div>
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
