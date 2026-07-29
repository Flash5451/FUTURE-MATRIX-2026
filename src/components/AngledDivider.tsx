export default function AngledDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`angled-divider ${flip ? "-scale-y-100" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
        <path d="M0 0L1440 60L1440 80L0 80Z" fill="var(--bg-panel)" fillOpacity="0.35" />
        <path d="M0 0L1440 60" stroke="url(#angled-divider-gradient)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="angled-divider-gradient" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--cyan)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
