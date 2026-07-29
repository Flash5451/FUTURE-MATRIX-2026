"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ArrowDown, FileDown, Zap, Play } from "lucide-react";
import Countdown from "./Countdown";
import RegistrationCapBanner from "./RegistrationCapBanner";

const WORDS = ["Build.", "Prototype.", "Innovate."];
const COLORS = ["text-white", "text-purple", "text-green"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Animated Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/veltech-campus.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/60 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-transparent to-bg/90" />
      </motion.div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 pcb-grid" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 py-24 lg:flex-row lg:items-center lg:justify-between w-full"
        style={{ opacity, scale }}
      >
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
            className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 backdrop-blur-sm group hover:border-cyan/50 transition-colors duration-300"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap size={14} className="text-cyan" />
            </motion.div>
            <span className="font-mono text-xs tracking-widest text-cyan uppercase">
              IEEE Student Branch × SSIT × ComSoc
            </span>
          </motion.div>

          {/* Main heading with letter animation */}
          <motion.div variants={itemVariants} className="mt-8">
            <h1 className="font-display text-6xl font-bold leading-[1.05] sm:text-7xl lg:text-8xl">
              <span className="block overflow-hidden">
                {"FUTURE".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden">
                {"MATRIX".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i + 6}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block glow-text text-gradient"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <motion.span 
                className="block text-3xl sm:text-5xl text-cyan mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                2026
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl font-display text-xl text-white/70 sm:text-2xl leading-relaxed"
          >
            An Intra-College 24-Hour Hardware & Software Hackathon
          </motion.p>

          {/* Action words with enhanced animation */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4 font-display text-2xl sm:text-3xl font-semibold"
          >
            {WORDS.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + i * 0.15,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`${COLORS[i]} cursor-default`}
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
              className="group relative btn-primary rounded-full px-8 py-4 text-base font-semibold overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Register Now
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple to-cyan"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <motion.a
              href="/future-matrix-rulebook.pdf"
              className="group btn-secondary inline-flex items-center gap-2 rounded-full px-8 py-4 text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileDown size={18} className="group-hover:animate-bounce" />
              <span>Rulebook</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right 3D element with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 60 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="perspective-wrap relative hidden h-80 w-80 shrink-0 items-center justify-center sm:flex lg:h-[28rem] lg:w-[28rem]"
          aria-hidden="true"
        >
          <motion.div 
            className="float-anim relative h-full w-full [transform-style:preserve-3d]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Outer rotating ring */}
            <div className="holo-ring absolute inset-0 rounded-full opacity-80" />

            {/* Secondary rings */}
            <motion.div
              className="absolute inset-8 rounded-full border border-white/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-16 rounded-full border border-dashed border-cyan/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner glow ring */}
            <div className="absolute inset-20 rounded-full border border-purple/30 animate-pulse" />

            {/* Hexagon badge center */}
            <motion.div 
              className="hex-frame hex-badge scan-sheen glass-panel-thick absolute inset-[22%] flex items-center justify-center overflow-hidden"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/logos/future-matrix-logo.png"
                alt="Future Matrix core emblem"
                width={200}
                height={200}
                className="h-[70%] w-[70%] object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.5)]"
              />
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 border border-cyan/30 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-16 h-16 border border-purple/30 rounded-full"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-cyan transition-colors z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  );
}