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
        <div className="nav-doodles">
          {/* Cat doodle 1 - sitting cat with tail up */}
          <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="var(--color-text)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {/* Body */}
              <path d="M 18 28 Q 16 27.5 14.5 26 Q 13 24 13 21 L 13 16 Q 13 14 14 13 Q 15 12 16.5 12 L 19.5 12 Q 21 12 22 13 Q 23 14 23 16 L 23 21 Q 23 24 21.5 26 Q 20 27.5 18 28 Z" />
              {/* Head */}
              <circle cx="18" cy="12" r="5.5" />
              {/* Left ear */}
              <path d="M 14 8.5 L 12.5 5.5 L 15 7" />
              {/* Right ear */}
              <path d="M 22 8.5 L 23.5 5.5 L 21 7" />
              {/* Left eye */}
              <circle cx="16" cy="11.5" r="0.8" fill="var(--color-text)" />
              {/* Right eye */}
              <circle cx="20" cy="11.5" r="0.8" fill="var(--color-text)" />
              {/* Nose */}
              <path d="M 18 13.5 L 17.5 14.5 L 18.5 14.5 Z" fill="var(--color-text)" />
              {/* Mouth */}
              <path d="M 18 14.5 Q 16.5 15.5 16 15" strokeWidth="1.2" />
              <path d="M 18 14.5 Q 19.5 15.5 20 15" strokeWidth="1.2" />
              {/* Whiskers */}
              <line x1="13" y1="12" x2="10" y2="11.5" strokeWidth="1" />
              <line x1="13.5" y1="13.5" x2="11" y2="13.5" strokeWidth="1" />
              <line x1="23" y1="12" x2="26" y2="11.5" strokeWidth="1" />
              <line x1="22.5" y1="13.5" x2="25" y2="13.5" strokeWidth="1" />
              {/* Tail */}
              <path d="M 22 24 Q 25 22 26 19 Q 27 16 26.5 13" strokeWidth="1.5" />
            </g>
          </svg>

          {/* Cat doodle 2 - lying down cat */}
          <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="var(--color-text)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {/* Body elongated */}
              <ellipse cx="20" cy="20" rx="7" ry="4.5" />
              {/* Head */}
              <circle cx="12" cy="18" r="5" />
              {/* Left ear */}
              <path d="M 9 14 L 7 11 L 10 13.5" />
              {/* Right ear */}
              <path d="M 15 14 L 17 11 L 14 13.5" />
              {/* Closed happy eyes */}
              <path d="M 10 17 Q 11 16 12 17" strokeWidth="1.5" />
              <path d="M 12.5 17 Q 13.5 16 14.5 17" strokeWidth="1.5" />
              {/* Nose tiny */}
              <circle cx="12" cy="19" r="0.6" fill="var(--color-text)" />
              {/* Content smile */}
              <path d="M 10.5 20.5 Q 12 21.5 13.5 20.5" strokeWidth="1.2" />
              {/* Whiskers */}
              <line x1="8" y1="18" x2="5" y2="17.5" strokeWidth="1" />
              <line x1="8.5" y1="19.5" x2="6" y2="19.5" strokeWidth="1" />
              <line x1="16" y1="18" x2="19" y2="17.5" strokeWidth="1" />
              <line x1="15.5" y1="19.5" x2="18" y2="19.5" strokeWidth="1" />
              {/* Paws */}
              <path d="M 15 22 L 14.5 24" strokeWidth="1.5" />
              <path d="M 17 22.5 L 16.5 24.5" strokeWidth="1.5" />
              {/* Tail curved */}
              <path d="M 26 18 Q 28 16 29 13" strokeWidth="1.5" />
            </g>
          </svg>

          {/* Cat doodle 3 - standing alert cat */}
          <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="var(--color-text)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {/* Body */}
              <path d="M 18 27 Q 16.5 26.5 15.5 25 Q 14.5 23 14.5 20 L 14.5 15 Q 14.5 13.5 15.5 13 Q 16.5 12.5 18 12.5 L 18 12.5 Q 19.5 12.5 20.5 13 Q 21.5 13.5 21.5 15 L 21.5 20 Q 21.5 23 20.5 25 Q 19.5 26.5 18 27 Z" />
              {/* Head */}
              <ellipse cx="18" cy="11" rx="4.5" ry="5" />
              {/* Left ear pointed */}
              <path d="M 15 7 L 13 4 L 15.5 6.5" />
              {/* Right ear pointed */}
              <path d="M 21 7 L 23 4 L 20.5 6.5" />
              {/* Wide surprised eyes */}
              <circle cx="16.5" cy="10.5" r="1.2" fill="var(--color-text)" />
              <circle cx="19.5" cy="10.5" r="1.2" fill="var(--color-text)" />
              {/* Small nose */}
              <circle cx="18" cy="13" r="0.5" fill="var(--color-text)" />
              {/* Small mouth */}
              <path d="M 18 13.5 Q 17 14 16.5 13.8" strokeWidth="1" />
              <path d="M 18 13.5 Q 19 14 19.5 13.8" strokeWidth="1" />
              {/* Whiskers */}
              <line x1="14" y1="11" x2="11" y2="10.5" strokeWidth="1" />
              <line x1="14.5" y1="12.5" x2="12" y2="12.5" strokeWidth="1" />
              <line x1="22" y1="11" x2="25" y2="10.5" strokeWidth="1" />
              <line x1="21.5" y1="12.5" x2="24" y2="12.5" strokeWidth="1" />
              {/* Tail up alert */}
              <path d="M 20.5 22 Q 22.5 20 23.5 17 Q 24 14 24 11" strokeWidth="1.5" />
            </g>
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
