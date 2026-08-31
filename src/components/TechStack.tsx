import { config } from '../config';
import './Section.css';
import './TechStack.css';

export const TechStack = () => {
  return (
    <section className="section" id="stack">
      <div className="section-container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="tech-stack-grid">
          <div className="tech-category">
            <h3 className="tech-category-title">Languages</h3>
            <div className="tech-tags">
              {config.techStack.languages.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <h3 className="tech-category-title">Frontend</h3>
            <div className="tech-tags">
              {config.techStack.frontend.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <h3 className="tech-category-title">Backend</h3>
            <div className="tech-tags">
              {config.techStack.backend.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
