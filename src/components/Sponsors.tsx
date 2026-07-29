"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const LOGOS = [
  { src: "/logos/ieee-logo.png", alt: "IEEE" },
  { src: "/logos/ieee-ssit-logo.png", alt: "IEEE SSIT" },
  { src: "/logos/ieee-comsoc-logo.png", alt: "IEEE ComSoc" },
  { src: "/logos/veltech-logo.png", alt: "Vel Tech" },
  { src: "/logos/naac-category1-badge.png", alt: "NAAC A++ and UGC Category-1" },
];
const LOOP = [...LOGOS, ...LOGOS];

export default function Sponsors() {
  return (
    <section id="sponsors" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Sponsors & Partners" title="Backed by IEEE, open to industry" align="center" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max animate-[scroll_22s_linear_infinite] items-center gap-14 group-hover:[animation-play-state:paused]">
          {LOOP.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={56}
              className="h-12 w-auto shrink-0 object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
