import { skills } from "../data/portfolioData";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiVite,
} from "react-icons/si";

const iconMap = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  React: FaReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Node.js": FaNodeJs,
  Python: FaPython,
  Docker: FaDocker,
  Git: FaGitAlt,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  FastAPI: SiFastapi,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  Vite: SiVite,
  AWS: FaAws,
  MySQL: FaDatabase,
  SQL: FaDatabase,
};

// Flatten all skills for the icon grid
function getTopSkills() {
  const all = Object.values(skills).flat();
  // Only show skills that have icons
  return all.filter((s) => iconMap[s]);
}

export default function WhatIDo() {
  const topSkills = getTopSkills();

  return (
    <section className="whatido section" id="whatido">
      <div className="container">
        <div className="whatido-layout">
          {/* Left — Illustration */}
          <div className="whatido-illustration" aria-hidden="true">
            <svg
              viewBox="0 0 400 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="whatido-svg"
            >
              {/* Desk */}
              <rect x="60" y="300" width="280" height="5" rx="2.5" fill="var(--accent)" opacity="0.15" />

              {/* Chair back */}
              <rect x="140" y="180" width="70" height="90" rx="8" fill="var(--bg-card)" stroke="var(--text-muted)" strokeWidth="1" />
              {/* Chair seat */}
              <rect x="130" y="270" width="90" height="12" rx="4" fill="var(--bg-card)" stroke="var(--text-muted)" strokeWidth="1" />
              {/* Chair legs */}
              <line x1="155" y1="282" x2="145" y2="305" stroke="var(--text-muted)" strokeWidth="1.5" />
              <line x1="195" y1="282" x2="205" y2="305" stroke="var(--text-muted)" strokeWidth="1.5" />
              <line x1="175" y1="282" x2="175" y2="308" stroke="var(--text-muted)" strokeWidth="1.5" />
              {/* Chair wheel circles */}
              <circle cx="145" cy="307" r="3" fill="var(--text-muted)" opacity="0.4" />
              <circle cx="175" cy="310" r="3" fill="var(--text-muted)" opacity="0.4" />
              <circle cx="205" cy="307" r="3" fill="var(--text-muted)" opacity="0.4" />

              {/* Person torso */}
              <ellipse cx="175" cy="230" rx="28" ry="35" fill="var(--accent)" opacity="0.25" />
              {/* Person head */}
              <circle cx="175" cy="188" r="18" fill="var(--text-secondary)" opacity="0.6" />
              {/* Hair */}
              <path d="M158 185 Q165 168 175 170 Q185 168 192 185" fill="var(--text-primary)" opacity="0.3" />

              {/* Arms reaching to laptop */}
              <path d="M150 235 Q130 250 115 270" stroke="var(--accent)" strokeWidth="2.5" fill="none" opacity="0.3" strokeLinecap="round" />
              <path d="M200 235 Q210 255 215 270" stroke="var(--accent)" strokeWidth="2.5" fill="none" opacity="0.3" strokeLinecap="round" />

              {/* Laptop base on desk */}
              <rect x="70" y="275" width="100" height="6" rx="2" fill="var(--text-muted)" opacity="0.5" />
              {/* Laptop screen */}
              <rect x="72" y="220" width="96" height="56" rx="4" fill="var(--bg-card)" stroke="var(--text-muted)" strokeWidth="1" />
              {/* Screen content — code brackets */}
              <text x="100" y="250" fontFamily="var(--font-mono)" fontSize="20" fill="var(--accent)" opacity="0.6" textAnchor="middle">&lt;/&gt;</text>

              {/* Cat sleeping under desk */}
              <ellipse cx="260" cy="298" rx="22" ry="8" fill="var(--text-muted)" opacity="0.25" />
              <ellipse cx="252" cy="295" rx="6" ry="5" fill="var(--text-muted)" opacity="0.3" />
              {/* Cat ears */}
              <polygon points="248,290 250,285 253,290" fill="var(--text-muted)" opacity="0.3" />
              <polygon points="253,290 256,285 258,290" fill="var(--text-muted)" opacity="0.3" />
              {/* Cat tail */}
              <path d="M280 296 Q290 290 285 282" stroke="var(--text-muted)" strokeWidth="1.5" fill="none" opacity="0.25" strokeLinecap="round" />

              {/* Coffee on desk */}
              <rect x="260" y="268" width="16" height="16" rx="3" stroke="var(--text-muted)" strokeWidth="1" fill="none" opacity="0.3" />
              <path d="M276 272 C280 272 280 280 276 280" stroke="var(--text-muted)" strokeWidth="0.8" fill="none" opacity="0.2" />
              {/* Steam */}
              <path d="M265 264 Q266 258 268 264" stroke="var(--accent)" strokeWidth="0.7" fill="none" opacity="0.25" />
              <path d="M270 262 Q271 256 273 262" stroke="var(--accent)" strokeWidth="0.7" fill="none" opacity="0.2" />
            </svg>
          </div>

          {/* Right — Content */}
          <div className="whatido-content">
            <p className="section-label">What I Do</p>
            <h2 className="section-title">Full Stack Development &amp; AI</h2>

            <div className="whatido-icons">
              {topSkills.map((skill) => {
                const Icon = iconMap[skill];
                return (
                  <div className="whatido-icon-item" key={skill}>
                    <Icon />
                    <span>{skill}</span>
                  </div>
                );
              })}
            </div>

            <ul className="whatido-bullets">
              <li>
                <span className="whatido-bullet-icon">⚡</span>
                Develop responsive web applications and intuitive user interfaces using React
              </li>
              <li>
                <span className="whatido-bullet-icon">⚡</span>
                Build RESTful APIs and backend services with Node.js, FastAPI, and Express
              </li>
              <li>
                <span className="whatido-bullet-icon">⚡</span>
                Build AI-powered applications using machine learning, deep learning, and semantic search
              </li>
              <li>
                <span className="whatido-bullet-icon">⚡</span>
                Optimize databases, containerize applications with Docker, and implement CI/CD workflows
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
