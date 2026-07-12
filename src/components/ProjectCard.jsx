import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <FiFolder className="project-card-icon" aria-hidden="true" />
        <div className="project-card-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
            >
              <FiGithub />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-description">{project.description}</p>

      <div className="project-card-tech">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </article>
  );
}
