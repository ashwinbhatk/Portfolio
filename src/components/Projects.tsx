import { config } from '../config';
import './Section.css';
import './Projects.css';

interface Project {
  name: string;
  description: string;
  technology?: string;
  status: string;
  contribution?: string;
  github?: string;
  isPublic?: boolean;
}

export const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {config.projects.map((project: Project) => (
            <article
              key={project.name}
              className={`project-card ${
                project.status === 'Completed' ? 'project-card-featured' : ''
              }`}
            >
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-status">{project.status}</span>
              </div>

              <p className="project-description">{project.description}</p>

              {project.technology && (
                <div className="project-meta">
                  <span className="project-tech">{project.technology}</span>
                </div>
              )}

              {project.contribution && (
                <p className="project-contribution">{project.contribution}</p>
              )}

              <div className="project-footer">
                {project.isPublic && project.github ? (
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub →
                  </a>
                ) : project.isPublic === false ? (
                  <span className="project-private">Private repository</span>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
