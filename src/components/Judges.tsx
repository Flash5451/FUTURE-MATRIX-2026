"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Person = { name: string; role: string; photo?: string } | null;

const PEOPLE: Person[] = [
  { name: "Ralph Stephenson S", role: "Industry Expert, Ralph Technologies", photo: "/guests/guest-1.png" },
  null,
  null,
  null,
];

export default function Judges() {
  return (
    <section id="judges" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Judges & Mentors" title="Announcing soon" />

      <div className="perspective-wrap mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {PEOPLE.map((person, i) => (
          <motion.div
            key={person?.name ?? i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`tilt-card chip-card rounded-xl p-6 text-center ${
              person ? "border border-white/10 bg-panel/50" : "border border-dashed border-white/15 bg-panel/30"
            }`}
          >
            {person ? (
              <>
                <div className="mx-auto h-16 w-16 overflow-hidden rounded-full border border-cyan/30">
                  <Image src={person.photo!} alt={person.name} width={64} height={64} className="h-full w-full object-cover" />
                </div>
                <p className="mt-3 font-display text-sm font-medium text-white">{person.name}</p>
                <p className="mt-0.5 text-xs text-white/50">{person.role}</p>
              </>
            ) : (
              <>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-panel/60">
                  <UserRound className="text-white/30" size={24} strokeWidth={1.25} />
                </div>
                <p className="mt-3 font-display text-sm font-medium text-white/50">To Be Announced</p>
              </>
            )}
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-white/40">
        Industry judges and mentor line-up will be posted here as they&apos;re confirmed.
      </p>
    </section>
  );
}
