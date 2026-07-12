import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I&apos;ve built</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
