import { config } from '../config';
import { PixelCat } from './PixelCat';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-photo-placeholder">
          <div className="hero-photo-frame">
            <span className="hero-photo-text">Photo</span>
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-name">{config.name}</h1>
          <p className="hero-title">{config.title}</p>
          <p className="hero-tagline">{config.tagline}</p>
          <p className="hero-location">{config.location}</p>

          <div className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">
              View Projects
            </a>
            <a
              href={config.github}
              className="hero-button hero-button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={config.linkedin}
              className="hero-button hero-button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${config.email}`}
              className="hero-button hero-button-secondary"
            >
              Email
            </a>
            {config.resumeUrl ? (
              <a
                href={config.resumeUrl}
                className="hero-button hero-button-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            ) : (
              <button
                className="hero-button hero-button-secondary hero-button-disabled"
                disabled
                title="Resume not available yet"
              >
                Download Resume
              </button>
            )}
          </div>
        </div>

        <div className="hero-mascot">
          <PixelCat />
        </div>
      </div>
    </section>
  );
};
