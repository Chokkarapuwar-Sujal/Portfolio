import { FiMail } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedinIn,
  FaGitlab,
  FaFacebookF,
  FaMediumM,
  FaStackOverflow
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <h1 className="hero-name">
              {personalInfo.heroTagline}{" "}
              <span className="wave-hand" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>

            <h2 className="hero-role">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </h2>

            <p className="hero-description">{personalInfo.heroDescription}</p>

            <div className="hero-socials">
              <a
                href={personalInfo.github}
                className="social-icon github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.linkedin}
                className="social-icon linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon email"
                aria-label="Email"
              >
                <FiMail />
              </a>
              {/*


              <a
                href={personalInfo.gitlab}
                className="social-icon gitlab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitLab"
              >
                <FaGitlab />
              </a>
              <a
                href={personalInfo.facebook}
                className="social-icon facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={personalInfo.medium}
                className="social-icon medium"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <FaMediumM />
              </a>
              <a
                href={personalInfo.stackoverflow}
                className="social-icon stackoverflow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="StackOverflow"
              >
                <FaStackOverflow />
              </a>
              */}




            </div>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a
                href={personalInfo.resumeUrl}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download My Resume
              </a>
            </div>
          </div>

          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
