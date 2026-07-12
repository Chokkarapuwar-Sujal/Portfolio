import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">A little about me</h2>
        <p className="about-text">{personalInfo.aboutText}</p>
      </div>
    </section>
  );
}
