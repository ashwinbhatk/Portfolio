import { useState } from 'react';
import { config } from '../config';
import './Navigation.css';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Interests', href: '#interests' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation" role="navigation">
      <div className="nav-container">
        <div className="nav-doodle">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            {/* Simple cat face doodle */}
            <circle cx="20" cy="20" r="12" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.6" />
            <circle cx="16" cy="18" r="1.5" fill="var(--color-accent)" opacity="0.7" />
            <circle cx="24" cy="18" r="1.5" fill="var(--color-accent)" opacity="0.7" />
            <path d="M 17 24 Q 20 26 23 24" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
            <line x1="8" y1="16" x2="14" y2="17" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <line x1="8" y1="20" x2="14" y2="20" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <line x1="32" y1="16" x2="26" y2="17" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <line x1="32" y1="20" x2="26" y2="20" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          </svg>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <span className="nav-toggle-icon"></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          {config.resumeUrl ? (
            <a
              href={config.resumeUrl}
              className="nav-link nav-link-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          ) : (
            <button
              className="nav-link nav-link-resume nav-link-disabled"
              disabled
              title="Resume not available yet"
            >
              Resume
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
