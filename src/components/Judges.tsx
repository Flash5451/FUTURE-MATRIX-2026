"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const GUEST = { name: "Ralph Stephenson S", role: "Industry Expert, Ralph Technologies", photo: "/guests/guest-1.png" };

export default function Judges() {
  return (
    <section id="judges" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Judges & Mentors" title="Meet Our Guest" align="center" />

      <div className="mx-auto mt-10 flex max-w-sm justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glow-border chip-card w-full rounded-2xl border border-cyan/30 bg-panel/60 p-8 text-center"
        >
          <div className="holo-ring mx-auto flex h-28 w-28 items-center justify-center rounded-full p-1">
            <div className="h-full w-full overflow-hidden rounded-full border-2 border-bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={GUEST.photo} alt={GUEST.name} width={112} height={112} className="h-full w-full object-cover" />
            </div>
          </div>
          <p className="mt-5 font-display text-xl font-semibold text-white">{GUEST.name}</p>
          <p className="mt-1 text-sm text-cyan">{GUEST.role}</p>
        </motion.div>
      </div>
    </section>
  );
}
