"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, FileDown, Zap } from "lucide-react";
import Countdown from "./Countdown";
import RegistrationCapBanner from "./RegistrationCapBanner";

const WORDS = ["Build.", "Prototype.", "Innovate."];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center bg-no-repeat pt-20"
      style={{ backgroundImage: 'url("/veltech-campus.png")' }}
    >
      {/* Premium overlay with gradient mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/20 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-transparent to-bg/80" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 py-24 lg:flex-row lg:items-center lg:justify-between">
        {/* Left content section */}
        <motion.div
          className="w-full lg:max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 backdrop-blur-sm"
          >
            <Zap size={14} className="text-cyan" />
            <span className="font-mono text-xs tracking-widest text-cyan uppercase">
              IEEE Student Branch × SSIT × ComSoc
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="mt-8 font-display text-6xl font-bold leading-[1.1] sm:text-7xl lg:text-8xl"
          >
            <span className="block">FUTURE</span>
            <span className="glow-text">MATRIX</span>
            <span className="block text-3xl sm:text-5xl text-cyan-400 mt-2">2026</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl font-display text-xl text-white-70 sm:text-2xl leading-relaxed"
          >
            An Intra-College 24-Hour Hardware & Software Hackathon
          </motion.p>

          {/* Action words */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3 font-display text-2xl sm:text-3xl font-semibold"
          >
            {WORDS.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                className={`${
                  i === 0 ? "text-white" : i === 1 ? "text-purple" : "text-green"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Countdown */}
          <motion.div variants={itemVariants} className="mt-10">
            <Countdown />
          </motion.div>

          {/* Registration Banner */}
          <motion.div variants={itemVariants} className="mt-6">
            <RegistrationCapBanner />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/register"
              className="btn-primary rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Register Now
            </Link>
            <a
              href="/future-matrix-rulebook.pdf"
              className="btn-secondary inline-flex items-center gap-2 rounded-full px-8 py-4 text-base transition-all duration-300"
            >
              <FileDown size={18} />
              <span>Rulebook</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right 3D element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="perspective-wrap relative hidden h-72 w-72 shrink-0 items-center justify-center sm:flex lg:h-96 lg:w-96"
          aria-hidden="true"
        >
          <div className="float-anim relative h-full w-full [transform-style:preserve-3d]">
            {/* Outer rotating ring */}
            <div className="holo-ring absolute inset-0 rounded-full opacity-75" />

            {/* Secondary rings */}
            <div
              className="absolute inset-8 rounded-full border border-white/15"
              style={{
                animation: "spin-slow-reverse 16s linear infinite",
              }}
            />
            <div className="absolute inset-16 rounded-full border border-dashed border-cyan/30" />

            {/* Hexagon badge center */}
            <div className="hex-frame hex-badge scan-sheen glass-panel-thick absolute inset-[24%] flex items-center justify-center overflow-hidden">
              <Image
                src="/logos/future-matrix-logo.png"
                alt="Future Matrix core emblem"
                width={180}
                height={180}
                className="h-[65%] w-[65%] object-contain drop-shadow-[0_0_40px_rgba(0,217,255,0.4)]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-cyan transition-colors"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} />
        </div>
      </motion.a>
    </section>
  );
}
