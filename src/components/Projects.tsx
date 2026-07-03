import { projects } from '../data/profile';

export default function Projects() {
  return (
    <section className="section projects-section">
      <div className="container">
        <p className="section-label">Projects</p>
        <div className="accent-line" />
        <div className="projects-list">
          {projects.map((project, i) => (
            <div key={i} className="project card">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-actions">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub ↗
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <ul className="project-highlights">
                {project.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
