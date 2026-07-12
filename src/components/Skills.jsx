import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technologies I work with</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-group" key={category}>
              <h3>{category}</h3>
              <div className="skill-tags">
                {items.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
