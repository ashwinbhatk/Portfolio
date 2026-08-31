import { config } from '../config';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-name">{config.name}</p>
          <div className="footer-links">
            <a
              href={config.github}
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={config.linkedin}
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={`mailto:${config.email}`} className="footer-link">
              Email
            </a>
          </div>
        </div>
        <div className="footer-mascot">
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="footer-cat"
          >
            <rect x="1" y="0" width="2" height="2" fill="var(--color-accent)" />
            <rect x="13" y="0" width="2" height="2" fill="var(--color-accent)" />
            <rect x="3" y="2" width="10" height="10" fill="var(--color-accent)" />
            <rect x="5" y="5" width="2" height="2" fill="var(--color-bg)" />
            <rect x="9" y="5" width="2" height="2" fill="var(--color-bg)" />
            <rect x="6" y="8" width="1" height="1" fill="var(--color-bg)" />
            <rect x="9" y="8" width="1" height="1" fill="var(--color-bg)" />
            <rect x="7" y="8" width="2" height="2" fill="var(--color-bg)" />
            <rect x="5" y="12" width="2" height="2" fill="var(--color-accent)" />
            <rect x="9" y="12" width="2" height="2" fill="var(--color-accent)" />
          </svg>
        </div>
      </div>
    </footer>
  );
};
