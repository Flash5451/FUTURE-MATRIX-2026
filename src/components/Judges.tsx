"use client";

import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Judges() {
  return (
    <section id="judges" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Judges & Mentors" title="Announcing soon" />

      <div className="perspective-wrap mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="tilt-card rounded-xl border border-dashed border-white/15 bg-panel/30 p-6 text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-panel/60">
              <UserRound className="text-white/30" size={24} strokeWidth={1.25} />
            </div>
            <p className="mt-3 font-display text-sm font-medium text-white/50">To Be Announced</p>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-white/40">
        Industry judges and mentor line-up will be posted here as they&apos;re confirmed.
      </p>
    </section>
  );
}
