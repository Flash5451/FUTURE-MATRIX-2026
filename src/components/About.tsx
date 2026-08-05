"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, ListChecks } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PILLARS = [
  { icon: Target, title: "Mission", body: "Give student innovators 24 hours to turn a real-world problem into a working hardware or software solution.", big: true },
  { icon: Eye, title: "Vision", body: "Build a platform where hardware and software talent can create impactful solutions and gain industry visibility." },
  { icon: ListChecks, title: "Objective", body: "Push teams past the simulation stage — every submission has to physically work on the table." },
];

const ORGANIZERS = [
  { src: "/logos/ieee-logo.png", alt: "IEEE" },
  { src: "/logos/ieee-ssit-logo.png", alt: "IEEE SSIT" },
  { src: "/logos/ieee-comsoc-logo.png", alt: "IEEE ComSoc" },
  { src: "/logos/veltech-logo.png", alt: "Vel Tech" },
  { src: "/logos/naac-category1-badge.png", alt: "NAAC A++ and UGC Category-1" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="About" title="What Future Matrix is" />

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="chip-card glass-panel scan-sheen lg:sticky lg:top-24 overflow-hidden rounded-2xl"
        >
          <div className="relative aspect-[4/3] w-full lg:aspect-[3/4]">
            <img
              src="/veltech-panorama.png"
              alt="Vel Tech campus"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-bg/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-cyan">Host Campus</p>
              <p className="mt-1 font-display text-sm font-medium text-white/85">Vel Tech, Avadi, Chennai</p>
            </div>
          </div>
        </motion.div>

        <div className="perspective-wrap grid gap-4 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`tilt-card glass-panel chip-card rounded-xl p-6 ${p.big ? "sm:col-span-2" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/5">
                  <p.icon className="text-cyan" size={18} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-white/40">Organized by</span>
        {ORGANIZERS.map((o) => (
          <Image
            key={o.alt}
            src={o.src}
            alt={o.alt}
            width={120}
            height={48}
            className="h-10 w-auto object-contain opacity-90"
          />
        ))}
      </motion.div>
    </section>
  );
}
