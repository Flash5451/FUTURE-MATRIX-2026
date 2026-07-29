"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center" : ""}
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-amber">
        <span aria-hidden="true">//</span>
        <span className="text-cyan">{eyebrow.toUpperCase()}</span>
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      <div
        className={`mt-4 h-px w-16 bg-gradient-to-r from-cyan via-amber to-transparent ${
          align === "center" ? "mx-auto from-cyan via-amber to-transparent" : ""
        }`}
      />
    </motion.div>
  );
}
