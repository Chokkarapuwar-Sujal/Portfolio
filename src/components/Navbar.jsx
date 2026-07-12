import { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY < 50) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        setShowHeader(false);
        setMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`navbar${scrolled ? " scrolled" : ""}${showHeader ? "" : " nav-hidden"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-container">
          <a href="#" className="nav-logo" aria-label="Home">

            <span className="sig-name">{personalInfo.name}</span>

          </a>

          {/* Hamburger — mobile only */}
          <button
            className={`nav-toggle${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links${menuOpen ? " open" : ""}`}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                onClick={handleLinkClick}
              >
                {l.label}
              </a>
            ))}

            {/* Resume + Theme toggle grouped together */}
            <div className="nav-actions">
              <a
                href={personalInfo.resumeUrl}
                className="nav-resume"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                Resume
              </a>
              <button
                className="theme-icon-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <FiSun size={20} className="theme-icon" />
                ) : (
                  <FiMoon size={20} className="theme-icon" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-overlay${menuOpen ? " visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
