"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  highlight,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <div className="inline-block mb-6">
        <div className="h-1 w-8 bg-gradient-to-r from-cyan to-purple rounded-full mx-auto mb-4" />
      </div>
      
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-cyan glow-text">{highlight}</span>
          </>
        )}
      </h2>

      {subtitle && (
        <p className="max-w-2xl mx-auto text-lg text-white-70 leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="h-1 w-8 bg-gradient-to-r from-purple to-green rounded-full mx-auto mt-6" />
    </motion.div>
  );
}
