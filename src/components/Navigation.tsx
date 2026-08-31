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
