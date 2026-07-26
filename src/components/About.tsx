"use client";

import { motion } from "framer-motion";
import { Target, Eye, ListChecks } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PILLARS = [
  { icon: Target, title: "Mission", body: "Give student innovators 24 hours to turn a real-world problem into a working hardware or software solution." },
  { icon: Eye, title: "Vision", body: "Build a platform where hardware and software talent can create impactful solutions and gain industry visibility." },
  { icon: ListChecks, title: "Objective", body: "Push teams past the simulation stage — every submission has to physically work on the table." },
];

const ORGANIZERS = ["IEEE Student Branch", "IEEE SSIT & IEEE ComSoc", "Vel Tech"];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="About" title="What Future Matrix is" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-panel/60 shadow-2xl"
      >
        <div className="relative aspect-[3/1] min-h-[190px] w-full">
          <img
            src="/veltech-panorama.png"
            alt="Vel Tech campus"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1026]/55 via-transparent to-transparent" />
        </div>
      </motion.div>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl border border-white/10 bg-panel/50 p-6"
          >
            <p.icon className="text-cyan" size={22} strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{p.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-white/40">Organized by</span>
        {ORGANIZERS.map((o) => (
          <span key={o} className="font-display text-sm text-white/70">{o}</span>
        ))}
      </motion.div>
    </section>
  );
}
