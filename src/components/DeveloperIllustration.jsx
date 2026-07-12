export default function DeveloperIllustration() {
  return (
    <section className="illustration-section" aria-hidden="true">
      <div className="container">
        <svg
          className="illustration-svg"
          viewBox="0 0 800 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Desk */}
          <rect x="160" y="200" width="480" height="6" rx="3" fill="var(--accent)" opacity="0.15" />

          {/* Monitor */}
          <rect x="290" y="60" width="220" height="130" rx="8" stroke="var(--text-muted)" strokeWidth="1.5" fill="var(--bg-card)" />
          <rect x="300" y="70" width="200" height="105" rx="4" fill="var(--bg-secondary)" />

          {/* Code lines on screen */}
          <rect x="315" y="88" width="60" height="4" rx="2" fill="var(--accent)" opacity="0.7" />
          <rect x="383" y="88" width="40" height="4" rx="2" fill="var(--text-muted)" opacity="0.5" />
          <rect x="315" y="100" width="30" height="4" rx="2" fill="var(--text-muted)" opacity="0.4" />
          <rect x="353" y="100" width="80" height="4" rx="2" fill="var(--accent)" opacity="0.4" />
          <rect x="315" y="112" width="50" height="4" rx="2" fill="var(--text-muted)" opacity="0.5" />
          <rect x="373" y="112" width="45" height="4" rx="2" fill="var(--accent)" opacity="0.5" />
          <rect x="315" y="124" width="70" height="4" rx="2" fill="var(--text-muted)" opacity="0.3" />
          <rect x="315" y="136" width="40" height="4" rx="2" fill="var(--accent)" opacity="0.6" />
          <rect x="363" y="136" width="55" height="4" rx="2" fill="var(--text-muted)" opacity="0.4" />
          <rect x="315" y="148" width="90" height="4" rx="2" fill="var(--text-muted)" opacity="0.3" />
          <rect x="315" y="160" width="35" height="4" rx="2" fill="var(--accent)" opacity="0.5" />

          {/* Monitor stand */}
          <rect x="385" y="190" width="30" height="12" rx="2" fill="var(--text-muted)" opacity="0.3" />
          <rect x="370" y="199" width="60" height="4" rx="2" fill="var(--text-muted)" opacity="0.3" />

          {/* Keyboard */}
          <rect x="340" y="210" width="120" height="18" rx="4" stroke="var(--text-muted)" strokeWidth="1" fill="var(--bg-card)" opacity="0.6" />
          {/* Keyboard keys */}
          <rect x="348" y="214" width="8" height="4" rx="1" fill="var(--text-muted)" opacity="0.3" />
          <rect x="360" y="214" width="8" height="4" rx="1" fill="var(--text-muted)" opacity="0.3" />
          <rect x="372" y="214" width="8" height="4" rx="1" fill="var(--accent)" opacity="0.3" />
          <rect x="384" y="214" width="8" height="4" rx="1" fill="var(--text-muted)" opacity="0.3" />
          <rect x="396" y="214" width="8" height="4" rx="1" fill="var(--text-muted)" opacity="0.3" />
          <rect x="408" y="214" width="8" height="4" rx="1" fill="var(--text-muted)" opacity="0.3" />
          <rect x="420" y="214" width="8" height="4" rx="1" fill="var(--accent)" opacity="0.3" />
          <rect x="432" y="214" width="8" height="4" rx="1" fill="var(--text-muted)" opacity="0.3" />
          <rect x="444" y="214" width="8" height="4" rx="1" fill="var(--text-muted)" opacity="0.3" />
          <rect x="348" y="221" width="8" height="4" rx="1" fill="var(--text-muted)" opacity="0.2" />
          <rect x="360" y="221" width="8" height="4" rx="1" fill="var(--text-muted)" opacity="0.2" />
          <rect x="372" y="221" width="8" height="4" rx="1" fill="var(--text-muted)" opacity="0.2" />
          <rect x="384" y="221" width="32" height="4" rx="1" fill="var(--text-muted)" opacity="0.2" />
          <rect x="420" y="221" width="8" height="4" rx="1" fill="var(--text-muted)" opacity="0.2" />
          <rect x="432" y="221" width="8" height="4" rx="1" fill="var(--text-muted)" opacity="0.2" />
          <rect x="444" y="221" width="8" height="4" rx="1" fill="var(--text-muted)" opacity="0.2" />

          {/* Coffee cup */}
          <rect x="530" y="180" width="22" height="22" rx="3" stroke="var(--text-muted)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M552 186 C558 186, 558 196, 552 196" stroke="var(--text-muted)" strokeWidth="1" fill="none" opacity="0.3" />
          {/* Steam */}
          <path d="M537 176 Q539 170 541 176" stroke="var(--accent)" strokeWidth="0.8" fill="none" opacity="0.3" />
          <path d="M543 174 Q545 168 547 174" stroke="var(--accent)" strokeWidth="0.8" fill="none" opacity="0.25" />

          {/* Plant */}
          <rect x="218" y="178" width="18" height="24" rx="3" stroke="var(--text-muted)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M227 178 Q227 165 220 158" stroke="var(--accent)" strokeWidth="1.2" fill="none" opacity="0.5" />
          <path d="M227 175 Q230 162 237 160" stroke="var(--accent)" strokeWidth="1.2" fill="none" opacity="0.4" />
          <circle cx="218" cy="156" r="3" fill="var(--accent)" opacity="0.2" />
          <circle cx="239" cy="158" r="3" fill="var(--accent)" opacity="0.15" />

          {/* Floating elements — brackets */}
          <text x="180" y="110" fontFamily="var(--font-mono)" fontSize="18" fill="var(--accent)" opacity="0.15">&lt;/&gt;</text>
          <text x="590" y="130" fontFamily="var(--font-mono)" fontSize="14" fill="var(--accent)" opacity="0.12">{`{ }`}</text>
          <text x="620" y="90" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text-muted)" opacity="0.1">01</text>
          <text x="170" y="170" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text-muted)" opacity="0.1">10</text>
        </svg>
      </div>
    </section>
  );
}
