"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FAQS = [
  ["Who can participate?", "Any student currently enrolled in a recognized college or university, in a team of exactly 3 members (1 Team Leader + 2 Team Members)."],
  ["Will meals be provided?", "Yes — lunch, dinner, and refreshments are covered for all 24 hours."],
  ["Can we bring our own components?", "Hardware-track teams must bring all required project components and tools. Software-track teams should bring laptops and required development resources. Organizers provide network/internet connectivity."],
  ["Are certificates provided?", "All participants receive certificates; winning teams receive certificates plus cash prizes."],
  ["Is IEEE membership mandatory?", "No, IEEE membership is not mandatory to participate."],
  ["Is there a fee to participate?", "Registration itself is free. If your team is shortlisted, each member pays ₹200 (₹600 total per team of 3) to confirm your slot."],
  ["What should we bring?", "All teams should bring laptops, chargers, and a valid college ID. Hardware-track teams must also bring all required components and project-specific tools."],
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="FAQ" title="Questions people actually ask" />

      <div className="glass-panel mt-10 divide-y divide-white/10 rounded-xl">
        {FAQS.map(([q, a], i) => (
          <motion.div
            key={q}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-display text-sm font-medium sm:text-base">{q}</span>
              <ChevronDown
                className={`shrink-0 text-cyan transition-transform ${open === i ? "rotate-180" : ""}`}
                size={18}
              />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-sm text-white/60">{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
