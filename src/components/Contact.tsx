import { config } from '../config';
import './Section.css';
import './Contact.css';

export const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-text">
            Have an interesting idea? Let's build something.
          </p>
          <div className="contact-links">
            <a href={`mailto:${config.email}`} className="contact-link">
              {config.email}
            </a>
            <a
              href={config.github}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={config.linkedin}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
