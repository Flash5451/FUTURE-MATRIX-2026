export default function TraceDivider() {
  return (
    <div className="relative h-16 w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0 32 H280 L320 8 H620 L660 32 H780 L820 56 H1120 L1160 32 H1440"
          fill="none"
          stroke="url(#trace-gradient)"
          strokeWidth="1.5"
        />
        {/* via points, where the trace changes direction — like solder joints on a board */}
        {[
          [280, 32], [320, 8], [620, 8], [660, 32], [780, 32], [820, 56], [1120, 56], [1160, 32],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={3} fill="var(--amber)" opacity={0.8} />
        ))}
        <defs>
          <linearGradient id="trace-gradient" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0" />
            <stop offset="15%" stopColor="var(--cyan)" stopOpacity="0.55" />
            <stop offset="50%" stopColor="var(--amber)" stopOpacity="0.55" />
            <stop offset="85%" stopColor="var(--green)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
