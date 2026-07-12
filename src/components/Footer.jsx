import { FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <span className="footer-text">
            © {year} {personalInfo.name}. All rights reserved.
          </span>
          <span className="footer-subtext">
            Designed & Developed by {personalInfo.name}
          </span>
        </div>
        <div className="footer-links">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
