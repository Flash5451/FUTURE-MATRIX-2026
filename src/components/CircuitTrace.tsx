// Animated PCB-trace overlay for the hero backdrop: a faint circuit map with
// glowing pulses travelling along the traces, like signals moving through a
// board. Purely decorative (aria-hidden), CSS/SMIL only — no client state.
const PATHS = [
  { d: "M -40 120 H 260 L 320 60 H 620", color: "var(--cyan)", dur: "7s", delay: "0s" },
  { d: "M -40 260 H 160 L 220 320 H 540 L 600 260 H 900", color: "var(--amber)", dur: "9s", delay: "1.2s" },
  { d: "M 1480 140 H 1100 L 1040 200 H 780", color: "var(--green)", dur: "8s", delay: "0.6s" },
  { d: "M 1480 400 H 1220 L 1160 340 H 900 L 840 400 H 700", color: "var(--cyan)", dur: "10s", delay: "2s" },
  { d: "M 200 700 V 480 L 260 420 H 480", color: "var(--amber)", dur: "8.5s", delay: "1.8s" },
];

export default function CircuitTrace() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {PATHS.map((p, i) => (
        <g key={i}>
          <path
            id={`circuit-trace-${i}`}
            d={p.d}
            fill="none"
            stroke={p.color}
            strokeWidth={1.25}
            strokeOpacity={0.28}
            strokeLinecap="round"
          />
          {/* via / joint markers where the trace turns */}
          <circle cx={0} cy={0} r={0} fill="none" />
          <circle r={3} fill={p.color} opacity={0.9}>
            <animateMotion dur={p.dur} begin={p.delay} repeatCount="indefinite">
              <mpath href={`#circuit-trace-${i}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;0.9;0.9;0"
              keyTimes="0;0.1;0.85;1"
              dur={p.dur}
              begin={p.delay}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}
