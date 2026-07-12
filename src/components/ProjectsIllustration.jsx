export default function ProjectsIllustration() {
  return (
    <section className="illustration-section" aria-hidden="true">
      <div className="container">
        <svg
          className="illustration-svg"
          viewBox="0 0 800 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Browser windows / app cards */}

          {/* Window 1 - left */}
          <rect x="100" y="40" width="180" height="120" rx="6" stroke="var(--text-muted)" strokeWidth="1" fill="var(--bg-card)" opacity="0.6" />
          {/* Title bar dots */}
          <circle cx="115" cy="52" r="3" fill="#ff5f57" opacity="0.5" />
          <circle cx="125" cy="52" r="3" fill="#febc2e" opacity="0.5" />
          <circle cx="135" cy="52" r="3" fill="#28c840" opacity="0.5" />
          {/* Content */}
          <rect x="115" y="68" width="50" height="5" rx="2" fill="var(--accent)" opacity="0.4" />
          <rect x="115" y="80" width="150" height="4" rx="2" fill="var(--text-muted)" opacity="0.25" />
          <rect x="115" y="90" width="120" height="4" rx="2" fill="var(--text-muted)" opacity="0.2" />
          <rect x="115" y="100" width="140" height="4" rx="2" fill="var(--text-muted)" opacity="0.15" />
          {/* Button */}
          <rect x="115" y="118" width="50" height="14" rx="3" fill="var(--accent)" opacity="0.2" />
          <rect x="122" y="123" width="36" height="4" rx="2" fill="var(--accent)" opacity="0.5" />

          {/* Window 2 - center (slightly elevated) */}
          <rect x="310" y="25" width="180" height="130" rx="6" stroke="var(--accent)" strokeWidth="1" fill="var(--bg-card)" opacity="0.8" />
          <circle cx="325" cy="38" r="3" fill="#ff5f57" opacity="0.5" />
          <circle cx="335" cy="38" r="3" fill="#febc2e" opacity="0.5" />
          <circle cx="345" cy="38" r="3" fill="#28c840" opacity="0.5" />
          {/* Content — dashboard look */}
          <rect x="325" y="54" width="60" height="5" rx="2" fill="var(--accent)" opacity="0.5" />
          {/* Mini chart bars */}
          <rect x="325" y="100" width="12" height="36" rx="2" fill="var(--accent)" opacity="0.2" />
          <rect x="342" y="85" width="12" height="51" rx="2" fill="var(--accent)" opacity="0.3" />
          <rect x="359" y="95" width="12" height="41" rx="2" fill="var(--accent)" opacity="0.25" />
          <rect x="376" y="75" width="12" height="61" rx="2" fill="var(--accent)" opacity="0.35" />
          <rect x="393" y="90" width="12" height="46" rx="2" fill="var(--accent)" opacity="0.2" />
          <rect x="410" y="80" width="12" height="56" rx="2" fill="var(--accent)" opacity="0.3" />
          {/* Stat text */}
          <rect x="440" y="70" width="35" height="4" rx="2" fill="var(--text-muted)" opacity="0.3" />
          <rect x="440" y="80" width="25" height="4" rx="2" fill="var(--accent)" opacity="0.4" />

          {/* Window 3 - right */}
          <rect x="520" y="45" width="180" height="115" rx="6" stroke="var(--text-muted)" strokeWidth="1" fill="var(--bg-card)" opacity="0.5" />
          <circle cx="535" cy="57" r="3" fill="#ff5f57" opacity="0.5" />
          <circle cx="545" cy="57" r="3" fill="#febc2e" opacity="0.5" />
          <circle cx="555" cy="57" r="3" fill="#28c840" opacity="0.5" />
          {/* Terminal-style content */}
          <rect x="535" y="72" width="8" height="4" rx="1" fill="var(--accent)" opacity="0.5" />
          <rect x="548" y="72" width="50" height="4" rx="2" fill="var(--text-muted)" opacity="0.3" />
          <rect x="535" y="82" width="8" height="4" rx="1" fill="var(--accent)" opacity="0.5" />
          <rect x="548" y="82" width="70" height="4" rx="2" fill="var(--text-muted)" opacity="0.25" />
          <rect x="535" y="92" width="8" height="4" rx="1" fill="var(--accent)" opacity="0.5" />
          <rect x="548" y="92" width="40" height="4" rx="2" fill="var(--text-muted)" opacity="0.2" />
          <rect x="535" y="102" width="8" height="4" rx="1" fill="var(--accent)" opacity="0.5" />
          <rect x="548" y="102" width="90" height="4" rx="2" fill="var(--text-muted)" opacity="0.3" />
          <rect x="535" y="112" width="8" height="4" rx="1" fill="var(--accent)" opacity="0.5" />
          <rect x="548" y="112" width="55" height="4" rx="2" fill="var(--text-muted)" opacity="0.2" />
          {/* Blinking cursor */}
          <rect x="535" y="124" width="6" height="10" rx="1" fill="var(--accent)" opacity="0.4" />

          {/* Connection lines */}
          <line x1="280" y1="100" x2="310" y2="90" stroke="var(--text-muted)" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 3" />
          <line x1="490" y1="90" x2="520" y2="100" stroke="var(--text-muted)" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 3" />
        </svg>
      </div>
    </section>
  );
}
