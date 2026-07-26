"use client";

import SectionHeading from "./SectionHeading";

const NAMES = ["IEEE", "IEEE SSIT & IEEE ComSoc", "IEEE Computer Society", "Vel Tech", "Your Logo Here"];
const LOOP = [...NAMES, ...NAMES];

export default function Sponsors() {
  return (
    <section id="sponsors" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Sponsors & Partners" title="Backed by IEEE, open to industry" align="center" />

      <div className="group mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[scroll_22s_linear_infinite] gap-14 group-hover:[animation-play-state:paused]">
          {LOOP.map((name, i) => (
            <span key={i} className="whitespace-nowrap font-display text-lg text-white/40">
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
